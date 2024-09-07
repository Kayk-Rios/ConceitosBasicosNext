
interface BotoesProps{
    inc: (valor:number)=>void;
    dec: (valor:number)=>void;
    }

export default function Botoes(props: BotoesProps ){
    return(
        <>
        <div className="mt-[40px] flex gap-4 border border-zinc-900 rounded-md">
            <button onClick={()=> props.inc(10)}>
                Inc
            </button>
            <button onClick={()=> props.dec(10)}>
                Dec
            </button>
        </div>
        
        </>
    )
}