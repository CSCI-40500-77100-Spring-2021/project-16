'use strict';

const get_event = require('../get_event');
const get_events = require('../get_events');
const create_event = require('../create_event')
const dynamoDBcalls = require('../dynamoDBcalls');

const event =
    {
        "body": null
    }

describe('responses', () => {
//test responses of lambda functions
    test('response of get_event is an object', () => {
        expect(typeof get_event).toBe('object');
    });

    test('response of get_events is an object', () => {
        expect(typeof get_events).toBe('object');
    });

    test('response of create_event is an object', () => {
        expect(typeof create_event).toBe('object');
    });

    test('response of get_events with invalid input', () => {
        const res = get_events.handler(event);
        expect(typeof res.body).toBe('undefined');
    });

    test('response of get_events with invalid input', () => {
        const res = get_event.handler({"queryStringParameters":{"id": null}});
        expect(typeof res.body).toBe('undefined');
    });

});

describe('test dynamo db interactions', () => {

const id = 'ytrfjl';
const data = {
    "game":"Smash",
    "hostName":"Game Store",
    "eventDate":"06-04-2021",
    "price":"$10",
    "time": "10 PM",
    "address":"695 Park Ave, New York, NY 10065",
    "registration":"follow registration steps on our website",
    "description":"Super Smash Bros. Ultimate is a crossover fighting video game for the Nintendo Switch",
    "stream":"https://www.twitch.tv/",
    "type":"Online",
    "likes": "0",
    "prize": "$100"
};

    test('create event / dynamoDB write with valid input', async () => {
        try {
            const res = await dynamoDBcalls.putItem(data, id);
            expect(typeof res).toBe('object');
            expect(res.body).toBe('{"id":"ytrfjl"}');
            expect(res.statusCode).toBe(200);
        } catch (error) {
            console.log('error in create event / dynamoDB write with valid input', error);
        }
    });

    test('create event / dynamoDB write with invalid input', async () => {
        try {
            const res = await dynamoDBcalls.putItem(data, "");
            expect(typeof res).toBe('object');
            expect(res.statusCode).toBe(500);
        } catch (error) {
            console.log('error in create event / dynamoDB write with invalid input', error);
        }
    });

    test('get event by id / dynamoDB read with valid input', async () => {
        try {
            const res = await dynamoDBcalls.getItem(id);
            expect(typeof res).toBe('object');
            expect(res.statusCode).toBe(200);
        } catch (error) {
            console.log('error in get event by id / dynamoDB read with valid input', error);
        }
    });

    test('get event by id / dynamoDB read with invalid input', async () => {
        try {
            const res = await dynamoDBcalls.getItem("");
            expect(typeof res).toBe('object');
            expect(res.statusCode).toBe(500);
        } catch (error) {
            console.log('error in get event by id / dynamoDB read with invalid input', error);
        }
    });

    test('get all events / dynamoDB read with valid input', async () => {
        try {
            const res = await dynamoDBcalls.getItems();
            expect(typeof res).toBe('object');
            expect(res.statusCode).toBe(200);
        } catch (error) {
            console.log('error in get all events / dynamoDB read with valid input', error);
        }
    });

});

