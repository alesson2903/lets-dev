import React from "react";


const Promisses: React.FC = () => {

    
    const motoristaAceitou = true;

    const promessa = new Promise((resolve, reject) => {
        if (motoristaAceitou) {
            resolve("Deu certo! Seu motorista está vindo.");
        } else {
            reject("Deu errado! Procure outro motorista!");
        }
    });

    promessa
    .then((sucesso) => console.log(sucesso))
    .catch((erro) => console.log(erro))
    .finally(() => console.log("Acabou!"));

    return (
        <div>
            <h1>
                Promisses
            </h1>
        </div>
    );
};

export default Promisses;
