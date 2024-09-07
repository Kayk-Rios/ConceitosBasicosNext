


export default function Eventos(){

    let contador = 0

    function incrementar() {
       console.log(contador++) 
    }


    return(
        <>
       <button className="flex justify-center items-center bg-emerald-400 rounded-md w-[100px] h-[100px]" onClick={incrementar}>Evento</button>
        
        </>
    )
}