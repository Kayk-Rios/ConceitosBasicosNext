import Filho from "./Filho";

interface PaiPros{
    nome: string;
    sobrenome: string;
}


export default function Pai(props:PaiPros) {
    return (
        <>
            <div className="flex gap-5 bg-blue-500 p-14 rounded-md text-white border border-white">
            <div className="flex flex-col">
                Nome do Pai: {props.nome} <br />
                Sobrenome do Pai: {props.sobrenome}
            </div>
                <Filho nome="Carla" sobrenome={props.sobrenome}/>
                
            </div>


        </>
    )
}