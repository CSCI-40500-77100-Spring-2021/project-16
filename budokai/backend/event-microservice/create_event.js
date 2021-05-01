'use strict';

const AWS= require('aws-sdk');

exports.handler = async (event, context) => {
    //instantiate document client instance
    const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
    //response status code
    let statusCode = 0;
    //parse body
    let payload = JSON.parse(event.body);

    // generate unique id
    var uniqid = require('uniqid');
    var id = uniqid();

    //parameters for insertion into Diaries table
    const params = {
       TableName: "events",
       Item:{
        "eventId":id.toString(),
        "game":payload.game.toString(),
        "hostName":payload.hostName.toString(),
        "eventDate":payload.eventDate.toString(),
        "price":payload.price.toString(),
        "address":payload.address.toString(),
        "registration":payload.registration.toString(),
        "description":payload.description.toString(),
        "stream":payload.stream.toString()
       }
    };

    try {
        let data = await docClient.put(params).promise();
        statusCode = 200;
    } catch(err) {
        statusCode = 403;
    }

    var responseBody = {
        "id": id
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

