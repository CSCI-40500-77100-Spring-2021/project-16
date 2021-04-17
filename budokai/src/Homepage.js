import {Container,Row,Col, Nav} from 'react-bootstrap'
import Tournamentbox from './Tournamentbox';

function Homepage()
{
    return(
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
    );
}
export default Homepage;