import {Container,Row,Col} from 'react-bootstrap'
import SpringK from './img/SpringK.png'
import RocketL from './img/2.png'
import chess from './img/chess.jpg'
import DTN from './img/DTN.jpeg'
import Minecraft from './img/Minecraft.png'
import LMBM from './img/LMBM.jpg'
import Smash from './img/smash.jpg'
import './css/Tournamentpage.css'
import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'

import axios from 'axios';

let images = new Map()
images.set("Spring Kick 2021",SpringK)
images.set("Rocket League",RocketL)
images.set("Chess",chess)
images.set("Defend the North",DTN)
images.set("Minecraft Creative",Minecraft)
images.set("Let's Make Big Moves",LMBM)
images.set("Smash",Smash)
function Tournamentpage()
{
    const [json_array, setJSON] = useState({})
    let {id} = useParams();
    useEffect(()=>
    {
        axios.get(`https://budokai.karmazin.me/events/get_event`,{
            params: {
                id: id
              }
        })
            .then(res =>{
                var x = JSON.parse(res.data)
                console.log(x)
                setJSON(x.Item)
            })
    },[])

    return(
    <div className = "body-wrapper">
        <img src={images.get(json_array.game)} alt="Spring Kick" className ="hero-img"/>
        <div class="eventSection" id="upcoming">
        <h4>{json_array.game}</h4>
        </div>
        <Container> 
            <Row>
                <Col lg ={4} md ={4} sm={4}xs={12}>
                    <h5>How to register</h5>
                    <p>{json_array.registration}</p>
                </Col>
                <Col lg={2} md ={2} sm={2} xs={12}>
                    <h5>Date</h5>
                    <p>{json_array.eventDate}</p>
                    <h5>Time</h5>
                    <p>{json_array.time}</p>
                    <h5>Entry Price</h5>
                    <p>{json_array.price}</p>
                    <h5>Prize</h5>
                    <p>{json_array.prize}</p>
                    <h5>Address</h5>
                    <p>{json_array.address}</p>
                    <h5>Type</h5>
                    <p>{json_array.type}</p>
                    <h5>Stream</h5>
                    <a href={json_array.stream}>Click me!</a>
                </Col>
                <Col lg ={6} md ={6} sm={6} xs={12}>
                    <h5>Description</h5>
                    <p>{json_array.description}</p>
                    <h5>Registration process</h5>
                    <p>{json_array.registration}</p>
                </Col>
            
            </Row>
        </Container>
    </div>
    );
}
export default Tournamentpage;
