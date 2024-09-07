interface TabelaSerieA {
  times: string[];
}

export default function TabelaSrieA(props: TabelaSerieA) {

 
  let times2 = props.times.map((selecao, i)=>{
    
    return <li className={`list-decimal ${i%2 ? 'bg-yellow-300': 'bg-yellow-500'}`} key={selecao}>{selecao}</li>


   })

  return (
    <>
      <ol className="flex flex-col">{times2}</ol>
    </>
  );
}
