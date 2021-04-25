import {Container,Row} from 'react-bootstrap'
import Tournamentbox from './Tournamentbox';
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
            <Tournamentbox game = {doc[i].game} name= {doc[i].name} date= {doc[i].date} time={doc[i].time} likes= {doc[i].likes}/>
            <Tournamentbox game = {doc[i+1].game} name= {doc[i+1].name} date= {doc[i+1].date} time={doc[i+1].time} likes= {doc[i+1].likes}/>
            <Tournamentbox game = {doc[i+2].game} name= {doc[i+2].name} date= {doc[i+2].date} time={doc[i+2].time} likes= {doc[i+2].likes}/>
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
            <Tournamentbox game = {doc[i].game} name= {doc[i].name} date= {doc[i].date} time={doc[i].time} likes= {doc[i].likes}/>
            <Tournamentbox game = {doc[i+1].game} name= {doc[i+1].name} date= {doc[i+1].date} time={doc[i+1].time} likes= {doc[i+1].likes}/>
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
            <Tournamentbox game = {doc[i].game} name= {doc[i].name} date= {doc[i].date} time={doc[i].time} likes= {doc[i].likes}/>
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
    
    
    const doc = [
            {
                game: "SpringK",
                name: "SpringK 2021",
                date:"Fri, Apr 2nd",
                time: "9PM CET" ,
                likes: "24"
            },
            {
                game :"RocketL", name: "Rocket League Local", date: "Tue, Apr 6th",time: "6PM EST", likes: "33"
            }
            ,
            {
                game :"Chess", name: "Minecraft Creative Build Tournament" ,date: "Sat, Apr 11th",time: "9PM EST", likes: "16"
            },
            {
                game :"DTN" ,name: "Defend the North", date: "Sun, Apr 4th",time: "9PM EST" ,likes: "122"
            }
        ]
    

    return(
        <Container>
            {createlist(doc)}
        </Container>
    );
}
export default Homepage;
