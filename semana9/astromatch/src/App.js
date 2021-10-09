import React, { useState } from "react";
import  MatchesPage  from "./pages/MatchesPage/MatchesPage";
import HomePage from "./pages/HomePage/HomePage"

const App = () => {
  const  [home, setHome] = useState ("perfil")

  const renderPage =() =>{
    switch(home){
      case "perfil":
        return <HomePage goMatch={goMatch}/>
        case "matches":
          return <MatchesPage goPerfil={irPerfil}/>
          
    }
  }
  

  const goMatch = () => {
    setHome ("matches")
  }
  const irPerfil = () =>{
    setHome("perfil")
  }
  
  return (
    <div>
    {renderPage()}
    </div>
  )
}
export default App