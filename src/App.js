import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){

    super()

    this.state = {pokemon:{}}
  }


  async componentDidMount(){

    const response = await fetch (`https://pokeapi.co/api/v2/pokemon?Limit=150`)
    const json = await response.json()
    console.log(json)
    console.log(json.name)
    

  }

  async componentDidMount(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const json = await response.json()
    console.log(json)
    console.log(json.name)
    this.setState({pokemon:json})

}

  render(){
    console.log(this.state.pokemon)
    return(<div>
      {this.state.pokemon.name}
      </div>)
  }
}
export default App;
