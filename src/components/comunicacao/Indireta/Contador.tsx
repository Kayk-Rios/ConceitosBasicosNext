import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";



export default function Contador(){


    const [num, setNum]= useState<number>(0)

    function incrementar( valor:number){
        setNum(num + valor)
    }
    function decrementar(valor:number){
        setNum(num - valor)

    }
    

    return(
        <>  
        <div className="flex flex-col">
            <div className="flex flex-col border border-zinc-800">
                 <h1>Contador</h1>
                <Display valor={num}/>
            
            
            </div>
             <Botoes inc={incrementar} dec={decrementar}/>
        </div>
        </>
    )
}