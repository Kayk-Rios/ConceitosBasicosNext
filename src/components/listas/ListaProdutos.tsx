import produtos from "@/constants/produtos";
import Image from "next/image";
import { useState } from "react";
import Butao from "./Butao";

const produtos2 = produtos;

interface GridProps {
  children?: any;
}

export default function ListaProduto(props: GridProps) {
  const [produtos, setProdutos] = useState(false);
  return (
    <>
      {produtos2.map((i) => {
        return (
          <div key={i.id} className=" flex h-full">
            <div className="flex flex-col  w-full h-full border border-zinc-700 rounded-md   ">
              <Image
                src={`${i.imagem}`}
                alt={i.nome}
                width={200}
                height={100}
                className="h-[100%] rounded-md w-[100%]"
              />
              <h2>{i.nome}</h2>
              <p className="p-5">{produtos ? i.descricao : ""}</p>
              {/* <button onClick={()=>setProdutos(!produtos)} >Descriçao</button> */}
              <Butao ver={setProdutos} produtos2={produtos} />
              <p>R$ {i.preco}</p>
              <button className="bg-zinc-600 p-1 m-1 rounded-sm">
                Comprar
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
