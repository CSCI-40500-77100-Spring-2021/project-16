module.exports = {
    tables: [
        {
            TableName: 'events',
            KeySchema: [
                {
                    AttributeName: 'id',
                    KeyType: 'HASH',
                },
            ],
            AttributeDefinitions: [
                {
                    AttributeName: 'eventId',
                    AttributeType: 'S',
                },
            ],
            BillingMode: 'PAY_PER_REQUEST',
        },
    ],
}
