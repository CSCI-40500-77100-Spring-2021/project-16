# Event microservice (API + Lambdas)

##Create event <br>
method: POST <br>
request endpoint: `budokai.karmazin.me/events/create_event` <br>
payload structure:
``` js
{
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
}
```

##Get 1 event by ID<br>
method: GET <br>
request endpoint + parameter: `budokai.karmazin.me/events/get_event?id=EVENT_ID`

##Get events <br>
method: GET <br>
request endpoint: `budokai.karmazin.me/events/get_events`
*parameters are not required
