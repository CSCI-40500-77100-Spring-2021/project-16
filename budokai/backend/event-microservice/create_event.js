'use strict';

const databaseCalls = require('../event-microservice/dynamoDBcalls')
const AWS= require('aws-sdk');

exports.handler = async (event, context) => {
    //instantiate document client instance
    // const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
    //response status code
    let statusCode = 0;
    //parse body
    let payload = JSON.parse(event.body);

    // generate unique id
    var uniqid = require('uniqid');
    var id = uniqid();

    return await databaseCalls.putItem(payload, id);
};
