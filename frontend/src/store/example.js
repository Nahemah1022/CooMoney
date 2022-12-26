/**************************************************************
* ctrl+F to find the dispatch function you want
* dismiss the comment to get the dispatch function
* pay attention to the sample data that dispatch function need
* make sure the data format is right
* any array type should use JSON.stringify to be tranformed to string type
* cuz dispatch function is async function so the caller function should be async
**************************************************************/


// let clubID = '5ef85483969ce6000496f1ca';
// let announceID = '5efa8c9c0fed011844a458ba'
// let applicationID = '5efa952467c30c63c8e04e78'
// let username = 'testuser4';
// let passbookName = 'passbook1';
// let passbookBalance = 5000;
// let clubIntro = "Often times the simplest solution is also the best solution. If it is possible to solve your problem by passing down data from a parent component to a child component via props, you absolutely should go for it."
// let info = "Passing down";
// let date = "2020-10-20";
// let reason = "Worked for me";
// let result = "APPROVED";
// let projectName = "project1";
// let projectTheme = "dark";
// let projectBudget = 50000;
// let projectClub = '5ef85483969ce6000496f1ca';
// let projectChecker = [] // 可以為空，會自動把創立者加入
// let projectID = '5efa9b32fb41b15b8c2abcaf'
// let projectChecker = ['testuser2'];
// projectChecker = JSON.stringify(projectChecker);
// let projectName = 'project1_modified';
// let projectTheme = 'bright';
// let projectTags = [{
//   tagName: "podcast",
//   tagCode: "<i class='fa fa-podcast' aria-hidden='true'></i>" //必須將其中的雙引號改為單引號
// }]
// projectTags = JSON.stringify(projectTags); //所有arraytype都必須轉為字串
// let userID = ['5ef852bc969ce6000496f1c9', '5ef862a4422fba0004ba488d', '5ef862c1422fba0004ba488e']
// userID = JSON.stringify(userID);

// USER MODULE
// let response = await this.$store.dispatch('getUserByID', { userID });
// let response = await this.$store.dispatch('getUserByUsername', { username, clubID });
// let response = await this.$store.dispatch('getAllUserByUsername', username);

// CLUB MODULE
// let response = await this.$store.dispatch("createClub", bodyFormData);
// let response = await this.$store.dispatch('updateClubImage', bodyFormData, { clubID });
// let response = await this.$store.dispatch('getClub');
// let response = await this.$store.dispatch('getClubProject', clubID);
// let response = await this.$store.dispatch('getClubMembers', { clubID });
// let response = await this.$store.dispatch('addClubMembers', { data:{ username }, params:{ clubID }});
// let response = await this.$store.dispatch('addPassbook', { data:{ passbookName, passbookBalance }, params:{ clubID }});
// let response = await this.$store.dispatch('getPassbook', { clubID });
// let response = await this.$store.dispatch('updatePassbookOrder', { data:{ passbookID1, passbookID2 }, params:{ clubID }});
// let response = await this.$store.dispatch('updatePassbookInform', { data:{ passbookName, passbookBalance }, params: { clubID }});
// let response = await this.$store.dispatch('updateIntro', { data:{ clubIntro }, params:{ clubID }});
// let response = await this.$store.dispatch('addAnnounce', { data:{ info, date }, params:{ clubID }});
// let response = await this.$store.dispatch('deleteAnnounce', { clubID, announceID });
// let response = await this.$store.dispatch('getAnnounce', { clubID }); //預設順序為由晚到早
// let response = await this.$store.dispatch('updateAnnounce', { data:{ info, date }, params:{ clubID, announceID }});
// let response = await this.$store.dispatch('joinApplication', { data:{ date, reason }, params:{ clubID }});
// let response = await this.$store.dispatch('getApplication', { clubID });
// let response = await this.$store.dispatch('updateApplication', { data:{ result }, params:{ clubID, applicationID }})

// PROJECT MODULE
// let response = await this.$store.dispatch('createProject', { data:{ projectName, projectTheme, projectBudget, projectClub, projectChecker }, params:{ clubID }});
// let response = await this.$store.dispatch('endProject', { projectID });
// let response = await this.$store.dispatch('addChecker', { data:{ projectChecker }, params: { projectID }});
// let response = await this.$store.dispatch('getProject', { projectID });
// let response = await this.$store.dispatch('updateProjectNameAndTheme', { data:{ projectName, projectTheme }, params: { projectID }})
// let response = await this.$store.dispatch('addNewTags', { data:{ projectTags }, params: { projectID }});
// let response = await this.$store.dispatch('getProjectTags', { projectID });
// let response = await this.$store.dispatch('endProject', { projectID });

// REVENUE MODULE
// let response = await this.$store.dispatch('createRevenue', { data: bodyFormData, params:{ projectID }});
// let response = await this.$store.dispatch('revenueImage', bodyFormData);
// let response = await this.$store.dispatch('updateRevenue', { data:{ revenueStatus }, params:{ clubID, projectID }});
// let response = await this.$store.dispatch('getAllRevenue', { projectID });
// let response = await this.$store.dispatch('getTenRevenue', { projectID });