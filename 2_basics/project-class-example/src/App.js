import './App.css';
import {Component} from 'react';

//react class component
class App extends Component{
  constructor(props){
    //super is to call the constructor of "Component" class
    super(props);

    //Manually setting bind to allow handleClick function to use this from state
    this.handleClick = this.handleClick.bind(this);

    //Also, is possible to not use constructor just putting this code alone
    this.state = {
      name: "Eduardo",
      counter: 0
    }
  }

  //This common function must have bind as seen in line 11
  handleClick(){
    this.setState({name: "Vinícius"})
  }

  //This function with arrow doesn't need bind as seen in line 11
  handleClickTwo = () =>{
    const {counter} = this.state;
    this.setState({ counter: counter + 1})
  }

  //inside this class, there's always a method called render
  render (){

    //Destructuring var from state
    const {name, counter} = this.state

    return(
      <>
        <p>Name: {name}</p>
        <button onClick={this.handleClick}>Change my name</button>
        <button onClick={this.handleClickTwo}>Counter: {counter}</button>
      </>
    )
  }
}

export default App;
