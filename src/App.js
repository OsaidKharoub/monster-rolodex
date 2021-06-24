import {Component} from 'react';
import './App.css';
import axios from 'axios';
import Card from './component/card/card';
import SearchBox from './component/search/searchbox'

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchFiled : ''
       
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users/")
    .then(users => this.setState({monsters:users.data}));
  
  }
  
filter = (e) => {
  const value =  e.target.value;
  this.setState({searchFiled : value}) 
  }

  render(){

    const {monsters , searchFiled} = this.state ;
    const MonsterFilter = this.state.monsters.filter(monst => monst.name.toLowerCase().includes( searchFiled.toLowerCase() ));

  return (
    <div className="App">
    <h1  className ="title">monsters rolodex</h1>
    <SearchBox  monsters = {this.state.monsters} filter ={this.filter}/>
    <Card monsters = {MonsterFilter}/>
    </div>
  );
}}

export default App;
