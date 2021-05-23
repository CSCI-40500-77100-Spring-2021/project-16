'use strict';

const databaseCalls = require('../event-microservice/dynamoDBcalls')
const AWS= require('aws-sdk');
var data;

exports.handler = async (event, context) => {
    //response status code
    let statusCode = 0;
    //parse body
    let payload = JSON.stringify(event, null, 2);
    payload = JSON.parse(payload);
    //parameters for table
    // console.log(payload);
    // console.log(payload.queryStringParameters.id);

    return await databaseCalls.getItem(payload.queryStringParameters.id);
};
