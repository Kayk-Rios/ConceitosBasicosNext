import TabelaSrieA from "@/components/listas/TabelaSrieA";
import times from "@/components/listas/Times";

const times2 = times 


export default  function PaginaListaBasico() {
    
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">


                <h1 className="text-2xl flex pt-20">Tabela serie A</h1>
                <div className="felx flex-col">
                    <TabelaSrieA times={times2}/>
                </div>
            </div>
        </>
    );
}
