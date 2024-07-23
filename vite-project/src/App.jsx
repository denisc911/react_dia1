import React from "react"
import Person from "./components/Person"
import PersonClass from "./components/PersonClass"
import Home from "./components/Home"
import TheHeader from "./components/Header"

import "./App.css"

function App() {
  return (
<div className="App">
<TheHeader title="PERSONAL PAGE" />
<Home title="HOME" name="Denis" surname="Cabrera" age="33" passion="Tecnologia" currentLearning="FullStack web development" matter="React" interestedIn="Developement" hobby="Escuchar Musica" />


  <h1 className="header h1">Person</h1>
  <Person name="Peter" surname="Parker" age="33"/>
  <Person name="Jonh" surname="travolta" age="26"/>
  <Person name="Michael" surname="Jackson" age="40"/>
  <Person name="John" surname="Salchichon" age="40"/>
  <h1 className="header h1">Person Class</h1>
  <PersonClass name="Martin" surname="Gonzales" age="18"/>
  <PersonClass name="Janina" surname="Martinez" age="20"/>
  <PersonClass name="Joe" surname="Smith" age="53"/>

</div>
  )
}

export default App