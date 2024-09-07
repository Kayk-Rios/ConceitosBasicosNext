import Eventos from "@/components/basico/Eventos";


export default function Evento(){
    return(
        <>
        Parrte de eventos
        <div className="flex justify-center flex-wrap gap-4">
            <Eventos/>
            <Eventos/>
            <Eventos/>
          
        </div>
        </>
        
    )
}