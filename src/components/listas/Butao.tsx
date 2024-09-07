import { useState } from "react"


interface CliclProps{
    ver: any
    produtos2: boolean
}


export default function ComponentName(props : CliclProps ){
 
    const mostrarClik =()=>{
            props.ver(!props.produtos2)
    }
    

    return(
        <>
          <button onClick={mostrarClik} className="text-zinc-500 p-2 m-2 rounded">{props.produtos2 ? "Esconder Descrição" : "Mostrar Descrição"}</button>
        </>
    )
}