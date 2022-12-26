module.exports = {
    formatResponse: {
        status: 400,
        message: "request failed",
        data: {}
    },
    userResponse: {
        DUPLICATE_USERNAME: "Username has existed",
        USER_CREATE: "Create user successfully",
        EMAIL_NOT_FOUND: "Email does not registered",
        LOGIN_SUCCESS: "login successfully",
        INVALID_PASSWORD: "invalid password",
        DUPLICATE_MEMBER: "member is already in the project",
        USER_GET_SUCCESS: "Get user successfully"
    },
    projectResponse: {
        PROJECT_GET: "User project get successfully",
        PROJECT_CREATE: "User project create successfully",
        DUPLICATE_PROJECTNAME: "Project name has existed",
        CHECKER_PUT: "member add successfully",
        PROJECT_SEARCH: "project search successfully",
        PROJECTID_NOTFOUND: "project not found by this ID",
        AUTHORIZATION_ERR: "you don't have the authorization to modify the project",
        GET_TAG_SUCCESS: "get project tag successfully",
        ADD_TAG_SUCCESS: "add tag to project successfully"
    },
    revenueResponse: {
        REVENUE_CREATE: "Revenue create successfully",
        REVENUE_GET: "Revenue get successfully",
        REVENUE_UPDATE: "Revenue update successfully"
    },
    clubResponse: {
        CLUB_CREATE: "User club create successfully",
        CLUB_GET: "Get user club successfully",
        CLUB_UPDATED: "user club updated successfully",
        DUPLICATE_CLUBNAME: "club name has existed",
        MEMBER_EXIST_ERROR: "user is already in the club",
        GET_CLUBPROJECT_SUCCESS: "club project get successfully",
        ADD_PASSBOOK_SUCCESS: "club passbook add successfully",
        GET_PASSBOOK_SUCCESS: "club passbook get successfully",
        UPDATE_PASSBOOK_SUCCESS: "club passbook update successfully",
        PUT_INTRO_SUCCESS: "club intro update successfully",
        ADD_ANNOUNCE_SUCCESS: "club announce add successfully",
        DELETE_ANNOUNCE_SUCCESS: "club announce delete successfully",
        GET_ANNOUNCE_SUCCESS: "club announce get successfully",
        PUT_ANNOUNCE_SUCCESS: "club announce update successfully",
        GET_MEMBERS_SUCCESS: "club members get successfully",
        ADD_MEMBERS_SUCCESS: "club members add successfully",
        APPLICATION_STATUS: "join application has ongoing",
        ANNOUNCE_NOT_FOUND: "club announce not found"
    },
    uploadImageResponse: {
        POST_IMAGE_SUCCESS: "club image upload successed"
    },
    validationResponse: {
        TOKEN_MISSING: "There's no token in the request header"
    },
    apiValidationResponse: {
        BAD_REQUEST: "The request is illegal, miss something"
    }
}