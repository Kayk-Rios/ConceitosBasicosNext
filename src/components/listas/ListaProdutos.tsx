import produtos from "@/constants/produtos";
import Image from "next/image";
import { useState } from "react";


const produtos2 = produtos;

interface GridProps {
  children?: any;
}

export default function ListaProduto(props: GridProps) {
  const [produtos, setProdutos] = useState(false);
  return (
    <>
    <article>
      {produtos2.map((i)=>{
        return(
            <div key={i.id} className=" flex">

              <Image src={i.imagem} width={300} height={300} alt={i.nome}/>
              <div className={`flex-col justify-center items-center`}>
                <h2>{i.nome}</h2>
                <p>R$ {i.preco}</p>
                <button onClick={()=>setProdutos(!produtos)}>Ver descriçao</button>
                <p>{produtos ? i.descricao : '' }</p>
              </div>

            </div>
        )})}

    </article>
    </>
  );
}
