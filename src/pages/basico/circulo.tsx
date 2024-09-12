
import Circulos from "@/components/basico/Circulo"



export default function Circulo(){
    return(
        <>
        <h1  >Esse ea parte pai de um circulo</h1>
        <div className="flex justify-around">
             <Circulos texto="ola mundo" />
             <Circulos texto="Feito por props" quasePerfeito={true}/>
            </div>
        </>
    )
}