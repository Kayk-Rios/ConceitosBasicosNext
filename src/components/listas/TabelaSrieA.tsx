import times from "./Times";

interface TabelaSerieA{
  times: string[]
}

export default function TabelaSrieA(props: TabelaSerieA) {

  let times2 = props.times.map((selelao,i)=>{
    return(
      <li key={i} className={`list-decimal 
        ${i%2 ? 'bg-slate-400': 'bg-slate-300'}
      `}>

      <h2>{selelao}</h2>
      </li>

    )
  })
  return (
    <>
      <ol className="flex flex-col">{times2}</ol>
    </>
  );
}

