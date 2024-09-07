import { useContext, useState } from "react"
import ContadorContext from "../data/context/ContadorContext"




export default function Contador(){
   const {numero, decrementar,incremetar} =  useContext(ContadorContext)

    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen">
            <span>{numero}</span>
            <span className="font-bold">{}</span>
            <div className="flex  gap-5 p-5">
                <button className="p-2 bg-violet-500 rounded-sm" onClick={()=>decrementar()}>Decrementar</button>
                <button  className="p-2 bg-violet-500 rounded-sm" onClick={()=>incremetar()}>Incrementar</button>
            </div>
        </div>
        
        </>
    )
}