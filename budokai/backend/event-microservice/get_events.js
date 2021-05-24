'use strict';

const databaseCalls = require('../event-microservice/dynamoDBcalls')
const AWS= require('aws-sdk');

exports.handler = async (event, context) => {

    //response status code
    let statusCode = 0;
    //parse body
    let payload = JSON.parse(event.body);

    return await databaseCalls.getItems();
};

