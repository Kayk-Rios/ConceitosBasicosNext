import { useState } from "react"

interface PerguntaProps{
    texto: string,
    resposta:string
}


export default function Pergunta(props: PerguntaProps){
    const [aberta, setAberta] = useState(false)


    return (
        <>
            <div className="border border-blue-500 rounded-md p-5 flex flex-col">

                <h2
                className="bg-zinc-300 
                cursor-pointer 
                border rounded-md 
                flex justify-center 
                items-center select-none"
                onClick={()=> setAberta(!aberta)}
                >
                {props.texto}

                </h2>
               
                {aberta ?(
                    <div>
                        <h2>{props.resposta}</h2>
                    </div>
                ): ''}
            
               
            </div>
        </>
    )
}