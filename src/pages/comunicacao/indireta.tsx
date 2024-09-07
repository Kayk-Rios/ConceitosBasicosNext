import Contador from "@/components/comunicacao/Indireta/Contador";






export default function PaginaDireta(){
    return(
        <>
                <div className=" flex justify-center items-center flex-col mt-[150px]">
                    <h1 className="text-[25px]">Comunicacao indireta</h1>
                    <div className="flex gap-5">
                        <Contador/>
                    
                    </div>

                </div>
        
        </>
    )
}