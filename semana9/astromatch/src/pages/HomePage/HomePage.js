import React, { useEffect, useState } from "react";
import axios from "axios";


function HomePage  (props) {
   const [perfil, setPefil] = useState (1)

    const getPerfil = () => {
        axios
        .get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sthefane-oliveira-Maryam/person")
        .then((response) =>{
            setPefil(response.data.profile)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    const getMatches = (profile) =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sthefane-oliveira-Maryam/choose-person"
        const headers = {
            headers: {
                "Content-Type":"application/json"
            }
    }
        const body ={
            id: profile.id,
            choice: true,
        }
        axios
        .post(url, body, headers)
        .then((reponse) => {
            getPerfil()
            console.log("match")

        })
        .catch ((error) =>{
            console.log("error")
        })
    }

    

    useEffect (() =>{
        getPerfil()
    }, [])

    return(
        <div>
            <div>
                <h2>Astromatch</h2>
                <button onClick={()=> props.goMatch()}>Matchs</button>
            </div>
            <div>
                <img src={perfil.photo}/>
                <p><strong>{perfil.name}</strong>, {perfil.age}</p>
                <p>{perfil.bio}</p>
            </div>
            <div>
                <button onClick={()=> getMatches(perfil)}>Sim</button>
                <button>Nao</button>
            </div>
        </div>
    )
}
export default HomePage