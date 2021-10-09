import React, {useState} from "react";

function MatchesPage  (props) {
    const [matches, setMatchs] = useState (["matches"])
    return(
        <div>
            <div>
                <h2>Tela de Match</h2>
                <button onClick={()=> props.goPerfil()}>Perfil</button>
            </div>
        </div>
    )
}
export default MatchesPage