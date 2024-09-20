import { useEffect, useState } from "react";


export default function Loading(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const carregarPersonagens = async () => {
          await new Promise((resolve) => setTimeout(resolve, 4000));
          setLoading(false);
        };
    
        carregarPersonagens();
      }, []);

    return (
      <>
        {loading ? (
          <h1 className="m-10">Carregando...</h1>
        ) : (
          <h1 className="m-10"> Simulando Loading</h1>
        )}
      </>
    );
}