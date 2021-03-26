# Budokai

**Budokai is the new tournament organizer to get you and your players engaged.**\
Budokai will help nurture newcomers by pointing them in the direction of resources to keep them engaged with the games in question. 
This can range from community Discord servers, Twitch/Youtube streams, and official avenues to get involved with the games in question.
Prototype is available [here](https://csci-40500-77100-spring-2021.github.io/project-16/)\

To run project on your computer:
1. clone repo
2. open index.html file in a web browser


Important Qualities: 

    - Compatibility: This product would most likely interact with software like Twitch integration.
      Architecture would have to be compatible with that i.e twitch embedds/chat. 
    
    - Product Lifetime: Can continuously add new features as time goes on, so we would need to make
     the architecutre evolvable.
   
Layers:
    - UI: Browser, Budokai Site
    
    - UI Management: Login, forms management
    - Config services: UI Config
    
    - App services: Tournament signup, resources, bracket viewing
    
    - Integrated services: Youtube/Twitch integration, authentication and authorization
    
    - Shared Infrastructure services: Search tournaments, authentication, player data, transaction management for 
       prize pools
       
    
Architecture:
    NoSql databases such as .<br/>
    We would like to design our system on a public cloud. <br/>
    We would like to use Node.js and ... . 
    
