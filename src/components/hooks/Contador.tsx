import { useEffect, useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState<number>(0);
  const [multi10,setMulti10]= useState(0)

    //sem dependencia: sempre chama o useEffect, com dependencia vazia: so 1 vez ao iniciar redenrizaçao inicial, com dependencia: apena  a ouver mudança na condiçao

    function calcular(){
        return contador *10
    }

    useEffect(()=>{
        setMulti10(contador * 10)
    },[contador])


//   function aumentar(){
//     setContador(contador + 1);
//   }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>Contador</h1>
        <div className="flex flex-col">
            <span className="text-xl">{contador}</span>
            <span className="text-zinc-500 text-sm">  {multi10}  </span>
        </div>
        <div className="gap-5 flex">
            <button
             className="bg-zinc-500 rounded-md"
             onClick={ ()=> setContador(contador -1 )}
             >
            Diminuir
            </button>
            <button 
            className="bg-zinc-500 rounded-md"
            onClick={()=>setContador(valorATual => valorATual +1)}
            >
            Aumentar
            </button>   

          
        </div>
      </div>
    </>
  );
}
