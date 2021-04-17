import React,{ Component } from 'react'
import './css/Form.css'
class Form extends Component{
  constructor(props){
    super(props)
    this.state = {Games:'',Date:'',Time:'',Entry_Prize:'',Prize:'',Address:'',Register:'',Description:'',Name:'',Stream:''};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(event){
   const {Games,Date,Time,Entry_Prize,Prize,Address,Register,Description,Name,Stream} = this.state
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
                <option value="chess">Chess</option>
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
        </div>
        <div>
            <label htmlFor='Strean'>Stream</label><br/>
            <input
                name ='Stream'
                placeholder ='Stream'
                type="text"
                value = {this.state.Stream}
                onChange = {this.handleChange}
            />
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
        </form>
    );
  }
}
  
export default Form