
interface FilhoPros{
    nome: string;
    sobrenome: string;
}

export default function Filho(props: FilhoPros){
    return(
        <>
        <div className="flex  bg-green-500 rounded-md p-5">
            Nome do Neto: {props.nome} <br />
            SobreNome: {props.sobrenome} 
        </div>
        
        </>
    )
}