import React, { useState } from 'react';
import './App.css';
import Person from './Person';

const App = props => {
const [personState , setpersonState] = useState({
  person: [
    {name:"raheel siddiqui" , Age:25},
    {name:"tabish khan" , Age:24},
    {name:"saad khan" , Age:23}
  ]
});

const changeHandler = () =>{

  setpersonState({
    person: [
      {name:"Umer Siddiqui" , Age:25},
      {name:"Talha khan" , Age:24},
      {name:"Ali khan" , Age:23}
    ]
  });

};

return(

  <div className="App">

    <button onClick={changeHandler}>Switch Name</button>

{personState.person.map((person, index) => <Person key={`${index}`} name={person.name}  age ={person.age}/>) }

  </div>

)
}
export default App;

