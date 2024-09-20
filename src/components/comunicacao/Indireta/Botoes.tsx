//vai receber  duas funcloes por prosps
interface BotoesProps{
    inc:any;
    dec: any ;
    }

export default function Botoes(props: BotoesProps ){
    return(
        <>
        <div className="mt-[40px] flex gap-4 border border-zinc-900 rounded-md">
            
           <button onClick={()=> props.dec()}>
                Dec
            </button>
            <button onClick={()=> props.inc()}  >
                Inc
            </button>

        </div>
        
        </>
    )
}