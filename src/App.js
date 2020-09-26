import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

const API = 'https://api.hgbrasil.com/weather?woeid=455839&format=json-cors';

export default class App extends React.Component {
  state = {
    city: ""
  }

componentDidMount(){
  //chamada da api
  fetch(API)
   .then(response => response.json())
   .then(json => {
     console.log(json)
     this.setState({
       
     })
   }
   )}

render() {
  return (
    <div>
      <h1>{this.state.city}</h1>
    </div>
  )
  }
}


