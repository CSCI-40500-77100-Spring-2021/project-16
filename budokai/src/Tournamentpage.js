import {Container,Row,Col} from 'react-bootstrap'
import SpringK from './img/SpringK.png'
import RocketL from './img/2.png'
import chess from './img/chess.jpg'
import DTN from './img/DTN.jpeg'
import Minecraft from './img/Minecraft.png'
import LMBM from './img/LMBM.jpg'
import Smash from './img/smash.jpg'
import './css/Tournamentpage.css'
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
    return(
    <div className = "body-wrapper">
        <img src={SpringK} alt="Spring Kick" className ="hero-img"/>
        <div class="eventSection" id="upcoming">
        <h4>Spring Kick 2021</h4>
        </div>
        <Container> 
            <Row>
                <Col lg ={4} md ={4} sm={4}xs={12}>
                    <h5>How to register</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id porta lectus. In pretium nulla id eros imperdiet molestie. Quisque tempus consequat arcu, a iaculis ex ornare ac. Nullam ac enim egestas nulla auctor fermentum a non arcu. Nunc in imperdiet sapien. Etiam arcu magna, consequat eget magna fermentum, porttitor varius velit. Sed elementum aliquet ex ultrices hendrerit. Nullam vitae sem sapien. </p>
                </Col>
                <Col lg={2} md ={2} sm={2} xs={12}>
                    <h5>Date</h5>
                    <p>Fri, Apr 2nd</p>
                    <h5>Time</h5>
                    <p>6PM EST</p>
                    <h5>Entry Price</h5>
                    <p>Free</p>
                    <h5>Prize</h5>
                    <p>$5000</p>
                    <h5>Region</h5>
                    <p>US</p>
                    <h5>Type</h5>
                    <p>Online</p>
                    <h5>Stream</h5>
                    <a href="#">Click me!</a>
                </Col>
                <Col lg ={6} md ={6} sm={6} xs={12}>
                    <h5>Description</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id porta lectus. In pretium nulla id eros imperdiet molestie. Quisque tempus consequat arcu, a iaculis ex ornare ac. Nullam ac enim egestas nulla auctor fermentum a non arcu. Nunc in imperdiet sapien. Etiam arcu magna, consequat eget magna fermentum, porttitor varius velit. Sed elementum aliquet ex ultrices hendrerit. Nullam vitae sem sapien. Sed vel dictum dui. Duis suscipit porttitor molestie. Duis tortor nisl, bibendum eget elit id, mollis mollis nulla. Nullam dapibus, nisl sed lacinia lobortis, leo nunc tincidunt neque, a commodo lectus tortor vel erat. Maecenas porta dui ut felis molestie, in commodo sem convallis.</p>
                    <h5>Registration process</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id porta lectus. In pretium nulla id eros imperdiet molestie. Quisque tempus consequat arcu, a iaculis ex ornare ac. Nullam ac enim egestas nulla auctor fermentum a non arcu. Nunc in imperdiet sapien. Etiam arcu magna, consequat eget magna fermentum, porttitor varius velit. Sed elementum aliquet ex ultrices hendrerit. Nullam vitae sem sapien. Sed vel dictum dui. Duis suscipit porttitor molestie. Duis tortor nisl, bibendum eget elit id, mollis mollis nulla. Nullam dapibus, nisl sed lacinia lobortis, leo nunc tincidunt neque, a commodo lectus tortor vel erat. Maecenas porta dui ut felis molestie, in commodo sem convallis.</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
}
export default Tournamentpage;
