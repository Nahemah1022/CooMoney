const mongoose = require('mongoose');


module.exports = {
    // generate dbfinding result format
    formatDBData : 
     async (data) => {
        let newArray = [];
        if(Array.isArray(data)){
            for(value of data){
                newArray.push(await value.toObject());
            }
        } else {
            newArray.push(await data.toObject());
        }
        return newArray;
    }
}