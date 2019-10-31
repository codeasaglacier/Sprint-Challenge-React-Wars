import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Styled from 'styled-components';


const Card = Styled.div`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  border: 1px dotted #443e3e;
  border-radius: 20px;
  margin: 10px 150px;
`

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

const SWCard = props => {
  return (
    // <div className="characterCards">
    <Card>
    <h2>Character: {props.name}</h2>
    <p>Height: {props.height}</p>
    <p>Mass: {props.mass}</p>
    <p>Gender: {props.gender}</p>
    <p>Hair Color: {props.head_fuzz}</p>
    <p>Eye Color: {props.eye_color}</p>
    <p>{props.banana}</p>
    </Card>
  )
}

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map((person, banana) => {
        return(
          <div>
            <SWCard
              banana = {banana}
              name = {person.name}
              height = {person.height}
              mass = {person.mass}
              gender = {person.gender}
              head_fuzz = {person.hair_color}
              eye_color = {person.eye_color}
              />
          </div>
        )
      })}
    </div>
  );
}

export default App
