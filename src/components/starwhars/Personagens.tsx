import { useEffect, useState } from "react";
import useProcessando from "../data/hooks/useProcessando";

export default function Personagens() {
  const { processando, iniciarProcessamento, finaliarProcessamento } =useProcessando();
  // const [personagem, setPersonagem] = useState<any>([]);


  useEffect(()=>{
    obterPersonagem()
  },[])

  //logica para atrasar algo
  async function simularChamadaAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
  }

  async function obterPersonagem() {
    try {
    //   setProcessando(true);
    iniciarProcessamento()
      await simularChamadaAPI();
    } finally {
    //   setProcessando(false);
    finaliarProcessamento()
    }
  }



  // async function simularChamadaAPI() {
  //   const resp = await fetch("https://swapi.dev/api/people/");
  //   const dados = await resp.json();
  //   setPersonagem(dados.results);
  // }

  // async function obterPersonagem() {
  //   try {
  //     //   setProcessando(true);
  //     iniciarProcessamento();
  //     await simularChamadaAPI();
  //   } finally {
  //     //   setProcessando(false);
  //     finaliarProcessamento();
  //   }
  // }
  // function renderizarPersonagem(){
  // return(
  //   <ul>
  //           {personagem.map((i: any) => {
  //             return <li key={i.id}>{i.name}</li>;
  //           })}
  //     </ul>
  // )
  // }



  return (
    <>
      <div className="">
        <h1 className="m-10">Personagens Conteudo | Simulando Loading</h1>


        {processando ? (
          <div>Carregando...</div>
        ):(
          <h1>Termino</h1>
        ) }

      {/* sobre api */}

        {/* {processando ? (
          <div>Carregando...</div>
        ) : personagem.length > 0 ? (
           renderizarPersonagem()
        ) : (
          <h1>Conteudo com personagem</h1>
        )} */}

        <div>
          {/* <button
            onClick={obterPersonagem}
            className="bg-blue-600 p-2 rounded-sm"
          >
            Clique
          </button> */}
        </div>
      </div>
    </>
  );
}
