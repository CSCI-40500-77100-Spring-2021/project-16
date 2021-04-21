# Budokai

**Budokai is the new tournament organizer to get you and your players engaged.**\
Budokai will help nurture newcomers by pointing them in the direction of resources to keep them engaged with the games in question. 
This can range from community Discord servers, Twitch/Youtube streams, and official avenues to get involved with the games in question.
Prototype is available [here](https://csci-40500-77100-spring-2021.github.io/project-16/)

## Docker 

Step 1. Get the image from Docker Hub: <br>
`docker pull alyonak/budokai:0.0.1`<br>
Step 2. Now run the container: <br>
`docker run -p 8080:80 alyonak/budokai:0.0.1` <br>
open in browser http://localhost:8080/
<br>

## Important Qualities: 

    - Compatibility: This product would most likely interact with software like Twitch integration.
      Architecture would have to be compatible with that i.e twitch embedds/chat. 
    
    - Product Lifetime: Can continuously add new features as time goes on, so we would need to make
     the architecutre evolvable.
   
## Layers:

    - UI: Browser, Budokai Site
    - UI Management: Login, forms management
    - Config services: UI Config
    - App services: Tournament signup, resources, bracket viewing
    - Integrated services: Youtube/Twitch integration, authentication and authorization
    - Shared Infrastructure services: Search tournaments, authentication, player data, 
      transaction management for prize pools
       
    
Architecture: <br/>
    Database:NoSql databases such as Dynamodb. <br/>
    Platform:We would like to design our system on a public cloud and we will use AWS for our hosting solution. <br/>
    Developemnt tools: We are using VScode. <br/>
   ![image](https://user-images.githubusercontent.com/37669955/112689339-86801180-8e50-11eb-8c8c-bc8f17099721.png)

    
    
