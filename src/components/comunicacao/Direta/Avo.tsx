import Pai from "./Pai";

interface AvoPros{
    nome: string;
    sobrenome: string;
}


export default function Avo(props: AvoPros){
    return(
        <>
        <div className="flex flex-col gap-5  justify-center items-center bg-purple-500 p-5 border border-white rounded-md">
            <div className="flex flex-col">
                Nome do Avo: {props.nome} <br />
                Sobrenome do Avo: {props.sobrenome}
            </div>
            <Pai nome="Marcia" sobrenome={props.sobrenome}/>
            <Pai nome="Tilia" sobrenome={props.sobrenome}/>
        </div>
        
        </>
    )
}