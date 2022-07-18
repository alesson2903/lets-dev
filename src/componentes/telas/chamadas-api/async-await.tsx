import React, {useState} from "react";
import axios from "axios";


const AsyncAwait: React.FC = () => {
    const [minhaFotoDePerfil, semMinhaFotoDePerfil] = useState();


    axios
    .get("https://api.github.com/users/alesson2903")
    .then((resposta)=> {
        semMinhaFotoDePerfil(resposta.data.avatar_url);
    })
    .catch((erro) => console.log("catch", erro))
    .finally(() => console.log("Foi!"));

    
    
    
    
    
    return (
        <div>
           <img src={minhaFotoDePerfil} alt="Imagem lets dev" />
        </div>
    );
};

export default AsyncAwait;


//const buscarDadosDoGitHub = () => {
  //  return new Promise((resolve, reject) => {}); 
//};