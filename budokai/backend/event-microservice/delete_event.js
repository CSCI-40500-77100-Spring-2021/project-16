'use strict';

const AWS= require('aws-sdk');

exports.handler = async (event, context) => {
    //instantiate document client instance
    const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
    //response status code
    let statusCode = 0;
    //parse body
    let payload = JSON.parse(event.body);

    //enter code here

    try {
        let data = await docClient.put(params).promise();
        statusCode = 200;
    } catch(err) {
        statusCode = 403;
    }

    var responseBody = {
        //enter response body
    };

    let response = {
        "statusCode": statusCode,
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false,
    };

    return response;
};
