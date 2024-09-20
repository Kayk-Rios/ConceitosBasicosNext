//Vai apenas exibir o numero

interface ValorPrps{
    valor:number
}


export default function Display(props: ValorPrps ){
    return(
        <>
        <div className="bg-zinc-600 text-white">

          {props.valor} 
        </div>
        </>
    )
}