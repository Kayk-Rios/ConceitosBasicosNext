import Avo from "@/components/comunicacao/Direta/Avo";
import { useState } from "react";




export default function PaginaDireta(){
const [nome1, setNome1]= useState(" ")
const [nome, setNome]= useState(" ")



    return(
        <>
                <div className=" flex justify-center items-center flex-col mt-[150px]">
                    <h1 className="text-[25px]">Comunicacao direta</h1>
                   <input type="text" value={nome} 
                   className="bg-slate-400 border rounded-lg  text-center"
                   onChange={
                    (evt)=>setNome(evt.target.value)} />
                    <br />

                    <input type="text" value={nome1} 
                    className="bg-slate-500 text-center border rounded-lg "
                    onChange={
                        (evt)=>setNome1(evt.target.value)} 
                        />

                  

                    <br />

                
                    <Avo nome={nome} 
                    sobrenome={nome1}/>
                </div>
        
        </>
    )
}