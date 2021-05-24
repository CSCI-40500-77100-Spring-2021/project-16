'use strict';
const AWS= require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
})

module.exports.putItem = async (payload , id)=> {
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
    let statusCode = 0;

    try {
        let data = await docClient.put(params).promise();
        statusCode = 200;
    } catch(err) {
        statusCode = 500;
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
}


module.exports.getItem = async id => {
    let statusCode = 0;
    let data;
    const params = {
        TableName: "events",
        Key: {
            "eventId": id
        }
    };

    try {
        data = await docClient.get(params).promise();
        statusCode = 200;
    } catch(err) {
        statusCode = 500;
    }

    var responseBody = JSON.stringify(data);

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
}

module.exports.getItems = async () => {
    let statusCode = 0;
    let data;
    //parameters for table
    const params = {
        TableName: "events",
        Select: "ALL_ATTRIBUTES"
    };

    try {
        data = await docClient.scan(params).promise();
        statusCode = 200;
    } catch(err) {
        statusCode = 500;
    }

    var responseBody = JSON.stringify(data);

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
}
