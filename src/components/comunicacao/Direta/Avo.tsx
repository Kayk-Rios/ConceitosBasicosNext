import Pai from "./Pai";

interface AvoProps{
    nome?: string;
    sobrenome: string;
}

export default function Avo(props: AvoProps){
    return(
        <>
        <div className="flex flex-col gap-5  justify-center items-center bg-purple-500 p-5 border border-white rounded-md">
            <div className="flex flex-col">
                <h2>Nome do Avo: {props.nome}</h2>
                Sobrenome:{props.sobrenome}
           
            </div>
            <Pai nome="Josef" sobrenome={props.sobrenome}/>
           
        </div>
        
        </>
    )
}