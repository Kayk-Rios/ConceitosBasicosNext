import Avo from "@/components/comunicacao/Direta/Avo";
import { useState } from "react";




export default function PaginaDireta(){
const [nome1, setNome1]= useState(" ")
const [nome, setNome]= useState(" ")



    return(
        <>
                <div className=" flex justify-center items-center flex-col mt-[150px]">
                    <h1 className="text-[25px]">Comunicacao direta</h1>
                    <input type="text" value={nome1} className="bg-zinc-500 rounded-md"
                    onChange={(evt)=>{setNome1(evt.target.value)}}
                    />
                    <br />

                    <input type="text" value={nome} className="bg-zinc-500 rounded-md" 
                    onChange={
                        (evt)=>{setNome(evt.target.value)}
                    }
                 />

                    <button
                    onClick={()=>{setNome(nome)}}
                    className="
                    bg-slate-700 
                    m-5 rounded-md"
                    >SobreNome</button>
                    <br />
                    <Avo nome={nome1} 
                    sobrenome={nome}/>
                </div>
        
        </>
    )
}