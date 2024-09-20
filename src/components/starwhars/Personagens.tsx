      import { useEffect, useState } from "react";

      export default function Personagens() {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
          const carregarPersonagens = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
          };

          carregarPersonagens();
        }, []);

        return (
          <>
            
            {loading ? (
              
            <div role="status" className=" flex flex-col w-[600px]  max-w-sm animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            ) : (
              <h1 className="m-10">Personagens Conteudo | Simulando Loading</h1>
            )}
          </>
        );
      }
