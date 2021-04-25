import React,{ Component } from 'react'
import './css/Form.css'
class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
    Games:'Chess',
    Date:'',
    Time:'',
    Entry_Prize:'',
    Prize:'',
    Address:'',
    Register:'',
    Description:'',
    Name:'',
    Stream:'',
    Type:'Online',


    validName:'',
    validEntry:'',
    validPrize:'',
    validRegis:'',
    validDesc:'',
    validAdd:'',
    validStream:''};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  validate =()=>{
    const stream = /https:\/\/www\.twitch\.tv\/(?!.+\/profile).*/
    const money = /^-?(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.\d+)?$/
    const address =/\d+(\s+\w+){1,}\s+(?:st(?:\.|reet)?|dr(?:\.|ive)?|pl(?:\.|ace)?|ave(?:\.|nue)?|rd|road|lane|drive|way|court|plaza|square|run|parkway|point|pike|square|driveway|trace|park|terrace|blvd)/

    this.setState({validName : ""})
    this.setState({validEntry: ""})
    this.setState({validPrize : ""})
    this.setState({validRegis : ""})
    this.setState({validDesc : ""})
    this.setState({validAdd : ""})
    this.setState({validStream : ""})

    console.log(this.state.validName + " asdasd")
    let valid = true 
    if(!this.state.Name)
    {
        this.setState({validName : "Please fill out the Name field"});
        console.log("this")
        valid = false
    }
    if(!money.test(this.state.Entry_Prize))
    {
        this.setState({validEntry: "Please fill out Entry Prize/If Free = 0"});
        valid = false
    }
    if(!money.test(this.state.Prize))
    {
        this.setState({validPrize : "Please fillout Prizepool"});
        valid = false
    }
    if(!this.state.Register)
    {
        this.setState({validRegis : "Please fillout How to Register"})
        valid = false
    }
    if(!this.state.Description)
    {
        this.setState({validDesc : "Please provide description of tournament"});
        valid = false
    }
    if(!address.test(this.state.Address))
    {
        this.setState({validAdd : "Please fill correct address"});
        valid = false
    }
    if(!stream.test(this.state.Stream))
    {
        this.setState({validStream :'Please Enter Twitch Stream'});
        valid = false
    }
    return valid 
  };

  handleSubmit(event){
    event.preventDefault();
    const answer = this.validate()
    console.log(answer)
  }
  
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  

  render(){
    return(
    <form className ="box" onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor='Games'>Choose Game</label><br/>
            <select
                name ='Games'
                value = {this.state.Games}
                onChange = {this.handleChange}
            >
                <option value="Chess">Chess</option>
                <option value="Smash">Smash</option>
                <option value="Spring Kick 2021">Spring Kick 2021</option>
                <option value="Rocket League">Rocket League</option>
                <option value = "Minecraft Creative">Minecraft Creative</option>
                <option value= "Defend the North">Defend the North</option>
                <option value= "Let's Make Big Moves">Let's Make Big Moves</option>  
            </select>

        </div>
        <div>
            <label htmlFor='Name'>Name</label><br/>
            <input
                name ='Name'
                placeholder ='Enter Name'
                type="text"
                value = {this.state.Name}
                onChange = {this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.validName}
          </div>
        </div>
        <div>
            <label htmlFor='Date'>Date</label><br/>
            <input
                name ='Date'
                placeholder ='Enter Date XX/XX/XX'
                type="date"
                value = {this.state.Date}
                onChange = {this.handleChange}
            />
        </div>
        <div>
            <label htmlFor='Time'>Time</label><br/>
            <input
                name ='Time'
                placeholder ='Enter Time'
                type="time"
                value = {this.state.Time}
                onChange = {this.handleChange}
            />
        </div>
        <div>
            <label htmlFor='Entry_Prize'>Entry Prize</label><br/>
            <input
                name ='Entry_Prize'
                placeholder ='Enter Prize'
                type="text"
                value = {this.state.Entry_Prize}
                onChange = {this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.validEntry}
          </div>
        </div>
        <div>
            <label htmlFor='Prize'>Prize Pool</label><br/>
            <input
                name ='Prize'
                placeholder ='Enter Prize Pool'
                type="text"
                value = {this.state.Prize}
                onChange = {this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.validPrize}
          </div>
        </div>
        <div>
            <label htmlFor='Address'>Address</label><br/>
            <input
                name ='Address'
                placeholder ='Enter Address'
                type="text"
                value = {this.state.Address}
                onChange = {this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.validAdd}
          </div>
        </div>
        <div>
            <label htmlFor='Register'>How to Register</label><br/>
            <input
                name ='Register'
                placeholder ='Enter how to Register'
                type="text"
                value = {this.state.Register}
                onChange = {this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.validRegis}
            </div>
        </div>
        <div>
            <label htmlFor='Description'>Description</label><br/>
            <input
                name ='Description'
                placeholder ='Brief Description'
                type="text"
                value = {this.state.Description}
                onChange = {this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.validDesc}
            </div>
        </div>
        <div>
            <label htmlFor='Strean'>Stream</label><br/>
            <input
                name ='Stream'
                placeholder ='Stream'
                type="url"
                value = {this.state.Stream}
                onChange = {this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.validStream}
            </div>
        </div>
        <div>
            <label htmlFor='Type'>Type</label><br/>
            <select
                name ='Type'
                value = {this.state.Type}
                onChange = {this.handleChange}
            >
                <option value="Online">Online</option>
                <option value="LAN">LAN</option>
            </select>
        </div>
        <div>
            <input type="submit" value="submit" />
        </div>
    </form>
    );
  }
}
  
export default Form
