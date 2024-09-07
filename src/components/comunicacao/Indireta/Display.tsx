
interface DisParops{
valor: number;
}


export default function Display(props: DisParops){
    return(
        <>
        <div className="bg-zinc-600 text-white">

            {props.valor}
        </div>
        </>
    )
}