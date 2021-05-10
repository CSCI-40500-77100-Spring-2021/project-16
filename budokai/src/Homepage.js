import {Container,Row} from 'react-bootstrap'
import Tournamentbox from './Tournamentbox';
import axios from 'axios';
import React, { useState,useEffect } from 'react';

function createlist(doc){
    var items = []
    for(let i= 0; i<doc.length;i+=3)
    {
        if(i+2 < doc.length)
        {
            items.push(
            <div>
            <br/>
            <Row>
            <Tournamentbox game = {doc[i].game} name= {doc[i].name} date= {doc[i].date} time={doc[i].time} likes= {doc[i].likes} id = {doc[i].id}/>
            <Tournamentbox game = {doc[i+1].game} name= {doc[i+1].name} date= {doc[i+1].date} time={doc[i+1].time} likes= {doc[i+1].likes} id = {doc[i+1].id}/>
            <Tournamentbox game = {doc[i+2].game} name= {doc[i+2].name} date= {doc[i+2].date} time={doc[i+2].time} likes= {doc[i+2].likes}id = {doc[i+2].id}/>
            </Row>
            </div>
            );
        }
        else if(i+1 < doc.length)
        {
            items.push(
            <div>
            <br/>
            <Row>
            <Tournamentbox game = {doc[i].game} name= {doc[i].name} date= {doc[i].date} time={doc[i].time} likes= {doc[i].likes} id = {doc[i].id}/>
            <Tournamentbox game = {doc[i+1].game} name= {doc[i+1].name} date= {doc[i+1].date} time={doc[i+1].time} likes= {doc[i+1].likes} id = {doc[i+1].id}/>
            </Row>
            </div> 
            );
        }
        else if(i < doc.length)
        {
            items.push(
            <div>
            <br/>
            <Row>
            <Tournamentbox game = {doc[i].game} name= {doc[i].name} date= {doc[i].date} time={doc[i].time} likes= {doc[i].likes} id = {doc[i].id}/>
            </Row>
            </div> 
            );
        }
    }
    console.log(items)
    return items
}

function Homepage()
{
    const [json_array, setJSON] = useState([])
    useEffect(()=>
    {
        axios.get(`https://budokai.karmazin.me/events/get_events`)
            .then(res =>{
                var x = JSON.parse(res.data)
                var events = []
                for( let i = 0; i < x.Items.length;i++)
                {
                    var a = {
                        id : x.Items[i].eventId,
                        name: x.Items[i].hostName,
                        game: x.Items[i].game,
                        date: x.Items[i].eventDate,
                        time: x.Items[i].time,
                        likes: x.Items[i].likes
                    }
                    events.push(a)
                }
                setJSON(events)
            })
            console.log(json_array)
            //console.log("Hello") 
    },[])
    const doc = [
            {
                game: "Spring Kick 2021",
                name: "SpringK 2021",
                date:"Fri, Apr 2nd",
                time: "9PM CET" ,
                likes: "24",
                id:1
            },
            {
                game :"Rocket League", name: "Rocket League Local", date: "Tue, Apr 6th",time: "6PM EST", likes: "33",id:2
            }
            ,
            {
                game :"Chess", name: "Minecraft Creative Build Tournament" ,date: "Sat, Apr 11th",time: "9PM EST", likes: "16",id:3
            },
            {
                game :"Defend the North" ,name: "Defend the North", date: "Sun, Apr 4th",time: "9PM EST" ,likes: "122",id:4
            }
        ]
    

    return(
        <Container>
            {createlist(json_array)}
        </Container>
    );
}
export default Homepage;



/*
<Container>
            <br/>
            <Row>
                <Tournamentbox game ="SpringK" name= "SpringK 2021" date= "Fri, Apr 2nd"time= "9PM CET" likes= "24"/>
                <Tournamentbox game ="RocketL" name= "Rocket League Local" date= "Tue, Apr 6th"time= "6PM EST" likes= "33"/>
                <Tournamentbox game ="Chess" name= "Minecraft Creative Build Tournament" date= "Sat, Apr 11th"time= "9PM EST" likes= "16"/>
            </Row>
            <br/>
            <Row>
                <Tournamentbox game ="DTN" name= "Defend the North" date= "Sun, Apr 4th"time= "9PM EST" likes= "122"/>
                <Tournamentbox game ="Minecraft" name= "Chess tournament" date= "Mon, Apr 5th"time= "5PM EST" likes= "10"/>
                <Tournamentbox game ="LMBM" name= "Let's Make Big Moves" date= "Sun, Apr 4th"time= "5PM EST" likes= "45"/>
            </Row>
        </Container>
        <Tournamentbox game = {doc.games[i].game} name= {doc.games[i].name} date= {doc.games[i].date} time={doc.games[i].time} likes= {doc.games[i].likes}/>
                <Tournamentbox game = {doc.games[i+1].game} name= {doc.games[i+1].name} date= {doc.games[i+1].date} time={doc.games[i+1].time} likes= {doc.games[i+1].likes}/>
                <Tournamentbox game = {doc.games[i+2].game} name= {doc.games[i+2].name} date= {doc.games[i+2].date} time={doc.games[i+2].time} likes= {doc.games[i+2].likes}/>
*/
