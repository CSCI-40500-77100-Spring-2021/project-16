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
            "time": payload.time.toString(),
            "price":payload.price.toString(),
            "prize":payload.prize.toString(),
            "address":payload.address.toString(),
            "registration":payload.registration.toString(),
            "description":payload.description.toString(),
            "stream":payload.stream.toString(),
            "type": payload.type.toString()
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
            "content-type": "application/json",
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true
        },
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false,
    };

    return response;
};
