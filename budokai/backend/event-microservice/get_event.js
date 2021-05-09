'use strict';

const AWS= require('aws-sdk');
var data;

exports.handler = async (event, context) => {
    //instantiate document client instance
    const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
    //response status code
    let statusCode = 0;
    //parse body
    let payload = JSON.stringify(event, null, 2);
    payload = JSON.parse(payload);
    //parameters for table
    console.log(payload);
    console.log(payload.queryStringParameters.id);
    const params = {
        TableName: "events",
        Key: {
            "eventId": payload.queryStringParameters.id
        }
    };

    try {
        data = await docClient.get(params).promise();
        statusCode = 200;
    } catch(err) {
        statusCode = 403;
    }

    var responseBody = JSON.stringify(data);
    console.log(responseBody)
    let response = {
        "statusCode": statusCode,
        "headers": {
            "content-type": "application/json",
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true
        },
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false,
    };

    return response;
};
