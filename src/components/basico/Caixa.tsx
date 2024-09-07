

export default function Caixas(props: any){
    return(
        <>
        
        <div className="bg-emerald-300 border rounded-lg p-2 w-64 h-64 text-[30px] justify-center items-center">
            <h1>Primeiro componente caixa</h1>

        {props.children}
        </div>
        
        
        </>
    )
}