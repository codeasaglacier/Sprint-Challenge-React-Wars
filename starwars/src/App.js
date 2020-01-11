import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Styled from 'styled-components';


const Card = Styled.div`
  color: #443e3e;
  background: rgba(255, 255, 255, 0.6);
  text-shadow: 1px 1px 5px #fff;
  border: 1px dotted #443e3e;
  border-radius: 20px;
  margin: 10px;
  width: 250px;
`

const Cards = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const SWCard = props => {
  return (
    <div>
      <h2>{props.person.name}</h2>
      <p>Height: {props.person.height}</p>
      <p>Mass: {props.person.mass}</p>
      <p>Gender: {props.person.gender}</p>
      <p>Hair Color: {props.person.hair_color}</p>
      <p>Eye Color: {props.person.eye_color}</p>
    </div>
  )
}

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([])
  console.log(people)

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/') 
      .then(response => {
        console.log(`Response: ${response.data.results}`)
        setPeople(response.data.results)
      })
      .catch(error => {
        console.log(error)
      }
      )
    }, [])

    
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <Cards>
          {people.map(person => (
            <Card>
              <SWCard person = {person}/>
            </Card>
          ))}
        </Cards>
    </div>
  );
}

export default App
