
import Circulos from "@/components/basico/Circulo"



export default function Circulo(){
    return(
        <>
        <h1  >Esse ea parte pai de um circulo</h1>
        <div className="flex justify-around">
            <Circulos texto={"kayk "}/>
            <Circulos texto="Maria " quasePerfeito/>
            <Circulos texto="Julia "/> 
            </div>
        </>
    )
}