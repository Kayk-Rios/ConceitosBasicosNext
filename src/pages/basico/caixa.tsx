import Caixas from "@/components/basico/Caixa";


export default function Caixa(){
    return(
        <>
        Ola esse eo primeiro componente do next Cod3r
        <div className=" flex gap-2 p-7">
            <Caixas/>
            <Caixas/>
            <Caixas >ola essa e uma children</Caixas>
        </div>
        </>
    )
}