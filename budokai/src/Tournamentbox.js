import {Container,Row,Col} from 'react-bootstrap'
import SpringK from './img/SpringK.png'
import RocketL from './img/2.png'
import chess from './img/chess.jpg'
import DTN from './img/DTN.jpeg'
import Minecraft from './img/Minecraft.png'
import LMBM from './img/LMBM.jpg'
import Smash from './img/smash.jpg'
import './css/Tournamentbox.css'
import React, { useState,useEffect  } from 'react';

let images = new Map()
images.set("Spring Kick 2021",SpringK)
images.set("Rocket League",RocketL)
images.set("Chess",chess)
images.set("Defend the North",DTN)
images.set("Minecraft Creative",Minecraft)
images.set("Let's Make Big Moves",LMBM)
images.set("Smash",Smash)
function Tournamentbox(props)
{
    const [like,setLike] = useState(props.likes)
    return(
        <Col md = {4} >
            <a href="/Tournament">
            <img src={images.get(props.game)} alt="Spring Kick" style={{width : '100%'}}/> 
            </a>
            <div className ="caption">
            <a href="/Tournament">
            <h6 className="name" >{props.name}</h6>
            </a>
            <Container>
                <Row>
                <Col sm ={5}><p>{props.date}</p> </Col>
                <Col sm ={4}><p>{props.time}</p> </Col>
                <Col sm ={3}><button className ="but">{like}</button></Col>
                </Row>
            </Container>
            </div>
        </Col>
    );
}
export default Tournamentbox;
