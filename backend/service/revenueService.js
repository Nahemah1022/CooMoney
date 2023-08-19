const Project = require('../database/model/projectModel');
const User = require('../database/model/userModel');
const Club = require('../database/model/clubModel');
const Revenue = require('../database/model/revenueModel');
const constants = require('../constants');
const dbHelper = require('../helper/dbHelper');
const getUserID = require('../helper/getUserID');
const formidable = require('formidable');

module.exports = {
    createRevenue: async (req) => {
        try{
            let projectID = req.query.projectID;
            let project = await Project.findById(projectID);
            let userID = await getUserID(req);
            if(!project){
                throw new Error(constants.projectResponse.PROJECTID_NOTFOUND);
            }

            let form = new formidable.IncomingForm();
            let parseRes = await new Promise ((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if(err) { throw new Error(err) }
                    resolve ({ fields, files })
                });
            })
            
            let newRevenue = new Revenue({});
            newRevenue.revenueTitle = parseRes.fields.revenueTitle;
            newRevenue.revenueTag  = parseRes.fields.revenueTag;
            let date = parseRes.fields.revenueDate.split('-');
            newRevenue.revenueYear = date[0];
            newRevenue.revenueMonth = date[1];
            newRevenue.revenueDay = date[2];
            newRevenue.revenueCost = parseRes.fields.revenueCost;
            newRevenue.revenuePrincipal = userID;
            newRevenue.revenuePassbook = parseRes.fields.revenuePassbook;
            newRevenue.revenueDescription = parseRes.fields.revenueDescription;
            newRevenue.revenueStatus = 'PENDING';
            if(parseRes.files.revenueEvidence){
                newRevenue.revenueEvidence =  `https://${process.env.REVENUE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${parseRes.files.revenueEvidence.name}`
            }
        
            console.log(newRevenue);
            let response = await newRevenue.save();
            project.projectRevenue.push(response._id);
            await project.save();
            return response;
        } catch (err) {
            console.log('something went wrong => revenueService => createRevenue', err);
            throw new Error(err);
        }
    },
    updateRevenue: async (req) => {
        try {
            const userID = await getUserID(req);
            const projectID = req.query.projectID;
            const clubID = req.query.clubID;
            const project = await Project.findById(projectID);
            const club = await Club.findById(clubID);
            if(!project.projectChecker.includes(userID)){
                throw new Error(constants.projectResponse.AUTHORIZATION_ERR);
            }

            const revenueID = req.body.revenueID;
            console.log(req.body)
            console.log(req.query)
            let revenue = await Revenue.findById(revenueID);
            console.log(revenue)
            revenue.revenueStatus = req.body.revenueStatus;
            revenue.revenueComment = req.body.revenueComment;
            let response = await revenue.save();
            if(req.body.revenueStatus == "APPROVED"){
                if(response.revenueCost>0){
                    project.projectBudget = project.projectBudget-response.revenueCost;
                }
                if(revenue.revenueCost > 0){
                    project.projectTotalExpanse = project.projectTotalExpanse + revenue.revenueCost;
                } else {
                    project.projectTotalIncome = project.projectTotalIncome + revenue.revenueCost;
                }
                for(i=0; i<club.clubPassbook.length; i++){
                    if(club.clubPassbook[i].passbookName == revenue.revenuePassbook){
                        club.clubPassbook[i].passbookBalance = club.clubPassbook[i].passbookBalance-response.revenueCost;
                        // let updated = club.clubPassbook.splice(i, 1);
                        // club.clubPassbook.push(updated);
                    }
                }
            }
            await club.save();
            await project.save();
            return response;
        } catch (err) {
            console.log('something went wrong => revenueService => updateRevenue', err);
            throw new Error(err);
        }
    },
    getAllRevenue: async ({ projectID }) => {
        const project = await Project.findById(projectID);
        const revenues = await Promise.all(project.projectRevenue.map(async (pr) => {
            return await Revenue.findById(pr);
        }));
        // let revenues = [];
        // for(i=0; i<project.projectRevenue.length; i++){
        //     let revenue = await Revenue.findById(project.projectRevenue[i]);
        //     revenues.push(revenue);
        //     console.log(i);
        // }

        // let result = await dbHelper.formatDBData(revenues);
        console.log(revenues);
        return revenues;
    },
    getTenRevenue: async ({ projectID }) => {
        const project = await Project.findById(projectID);
        let revenues = [];
        for(let i=0; i<10; i++){
            let revenue = await Revenue.findById(project.projectRevenue[i]);
            revenues.push(revenue);
        }
        // let result = await dbHelper.formatDBData(revenues);
        return revenues;
    }
}