import { use, useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";



export default function Contador(){

    const [num, setNum] = useState(0)

    function inc(){
        setNum(num + 1)
    }
    function dec(){
        setNum(num - 1)
    }
 
    return(
        <>  
        <div className="flex flex-col">
            <div className="flex flex-col border border-zinc-800">
                 <h1>Contador</h1>
                <Display valor={num}/>
            
            
            </div>
             <Botoes inc={inc} dec={dec}/>
        </div>
        </>
    )
}