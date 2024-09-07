
interface CirculoProps {
    texto: string,
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    return (
        <>
            <div className={`flex 
            justify-center 
            items-center 
            h-64 w-64 
            text-[20px]
          bg-slate-500
           ${props.quasePerfeito ? '  rounded-md' : ' rounded-full'}`}>

                <h2>Circulo de : </h2> 
                {props.texto}
            </div>
        </>
    )
}