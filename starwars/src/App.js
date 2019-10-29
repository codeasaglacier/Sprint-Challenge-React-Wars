import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

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
    <div className="characterCards">
      <h2>Character: {props.name}</h2>
      <p>Hair Color: {props.head_fuzz}</p>
      <p>{props.banana}</p>
    </div>
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
              head_fuzz = {person.hair_color}
              />
          </div>
        )
      })}
    </div>
  );
}

export default App
