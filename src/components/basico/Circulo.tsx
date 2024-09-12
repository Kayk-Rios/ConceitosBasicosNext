
interface CirculosProps{
    texto:string;
    quasePerfeito?:boolean;
}

export default function Circulo(props: CirculosProps) {
    return (
        <>
        <div className={`h-[300px] 
            w-[300px]
             bg-slate-500 
             p-[60px] text-center border
              rounded-full
           ${props.quasePerfeito ? 'rounded-md': 'rounded-full'}`}>
                <h2>Esse e um circulo de prps</h2>
                {props.texto}
        </div>
        </>
    )
}

