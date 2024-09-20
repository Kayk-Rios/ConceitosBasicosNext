import { createContext, useState } from "react"


const ContadorContext = createContext({}as any)
export default ContadorContext

export  function ContadorProvider(props: any){
    
    const [numero, setNumero ] = useState(400)

    function decrementar(){
        setNumero(numero - 1)
    
    }
    function incremetar(){
        setNumero(numero + 1)
    }

    return(
        <>
        <ContadorContext.Provider value={{
            numero,
            decrementar,
            incremetar
        }}>
        {props.children}
        </ContadorContext.Provider>
        </>
    )
}