const Project = require('../database/model/projectModel');
const User = require('../database/model/userModel');
const Club = require('../database/model/clubModel');
const constants = require('../constants');
const dbHelper = require('../helper/dbHelper');
const getUserID = require('../helper/getUserID');

module.exports = {
    createProject: async (req) => {
        try{
            let data = req.body;
            let clubID = req.query.clubID;
            let userID = await getUserID(req);
            let club = await Club.findById(clubID);
            for(i=0; i<club.clubProjects.length; i++){
                if(club.clubProjects.includes(data.projectName)){
                    throw new Error(constants.projectResponse.DUPLICATE_PROJECTNAME);
                }
            }

            let newProject = new Project({ ...data });
            newProject.projectClub = club._id;
            if(data.projectChecker.length != 0){
                let projectChecker = JSON.parse(data.projectChecker);
                for(i=0; i<projectChecker.length; i++){
                    let user = await User.findOne({"username": projectChecker[i]});
                    newProject.projectChecker.push(user);
                }
            }
            console.log(newProject);
            newProject.projectChecker.push(userID);
            newProject.projectStatus = "ONGOING";
            newProject.projectTotalIncome = 0;
            newProject.projectTotalExpanse = 0;
            newProject.userAuthorization = true;
            let saveResult = await newProject.save();
            club.clubProjects.push(saveResult._id);
            await club.save();
            return await saveResult.toObject();
        } catch (err) {
            console.log('something went wrong => projectService => createProject', err);
            throw new Error(err);
        }
    },
    addChecker: async (req) => {
        try{
            const userID = await getUserID(req);
            const projectID = req.query.projectID;
            // const clubID = req.params.clubID;  //因為會在搜尋時就限制住了所以沒事
            const data = req.body;
            let project = await Project.findById(projectID);
            console.log(project);
            if(!project.projectChecker.includes(userID)){
                throw new Error(constants.projectResponse.AUTHORIZATION_ERR);
            }
            let checkers = JSON.parse(data.projectChecker);
            for(let i=0; i<checkers.length; i++){
                let user = await User.findOne({ 'username': checkers[i] });
                if(!project.projectChecker.includes(user._id)){
                    project.projectChecker.push(user._id);
                }
            }
            let updateProject = await project.save();
            return await updateProject.toObject();
        } catch (err) {
            console.log('something went wrong => projectService => addMember', err);
            throw new Error(err);
        }
    },
    endProject: async (req) => {
        try{
            const userID = await getUserID(req);
            console.log(req.query);
            // const clubID = req.params.clubID;  //因為會在搜尋時就限制住了所以沒事
            let project = await Project.findById(req.query.projectID);
            if(!project.projectChecker.includes(userID)){
                throw new Error(constants.projectResponse.AUTHORIZATION_ERR);
            }

            project.projectStatus = "DONE";
            let end = await project.save();
            return await end.toObject();
        } catch (err) {
            console.log('something went wrong => projectService => endProject', err);
            throw new Error(err);
        }
    },
    getProject: async ({ projectID }) => {
        try{
            let project = await Project.findById(projectID);
            return project;
        } catch (err) {
            console.log('something went wrong => projectService => getProject', err);
            throw new Error(err);
        }
    }, 
    updateProjectNameAndTheme: async (req) => {
        try {
            const userID = await getUserID(req);
            const projectID = req.query.projectID;
            const data = req.body;
            let project = await Project.findById(projectID);
            if(!project.projectChecker.includes(userID)){
                throw new Error(constants.projectResponse.AUTHORIZATION_ERR);
            }

            if(data.projectName){
                let isProject = await Project.findOne({ "projectName": data.projectName });
                if(isProject){
                    throw new Error(constants.projectResponse.DUPLICATE_PROJECTNAME);
                }
                project.projectName = data.projectName;
            }
            if(data.projectTheme){
                project.projectTheme = data.projectTheme;
            }
            console.log(project);
            let result = await project.save();
            return await result.toObject();
        } catch (err) {
            console.log('something went wrong => projectService => updateProjectNameAndTheme', err);
            throw new Error(err);
        }
    },
    getProjectTags: async ({ projectID }) => {
        try {
            const project = await Project.findById(projectID);
            let tags = project.projectTags;
            return tags;
        } catch (err) {
            console.log('something went wrong => projectService => getProjectTags', err);
            throw new Error(err);
        }
    },
    addNewTags: async (req) => {
        try {
            let data = req.body;
            let projectID = req.query.projectID;
            let project = await Project.findById(projectID);
            let userID = await getUserID(req);
            if(!project.projectChecker.includes(userID)){
                throw new Error(constants.projectResponse.AUTHORIZATION_ERR);
            }
            let tags = JSON.parse(data.projectTags);
            for(i=0; i<tags.length; i++){
                project.projectTags.push(tags[i]);
            }
            let result = await project.save();
            return result;
        } catch (error) {
            console.log('something went wrong => projectService => addNewTags', err);
            throw new Error(err);
        }
    }
}
