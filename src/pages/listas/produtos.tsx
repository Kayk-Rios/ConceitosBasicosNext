
import LayoutGrid2 from "@/components/layout/LayoutGrid2";
import ListaProduto from "@/components/listas/ListaProdutos"


export default function PaginaProduto(){
   
    return(
        <>
        <div className=" flex flex-col   justify-center items-center
         h-[90%]
        
        ">
  
          <div className="flex justify-center items-center   w-[95%] gap-4">
             <LayoutGrid2>
                <ListaProduto/>

             </LayoutGrid2>
            </div>


        </div>
        </>
    )
}