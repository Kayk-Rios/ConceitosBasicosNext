import ImagemAleatoria from "@/components/hooks/imagemAleatoria";



export default function Imagem(){
    return(
        <>
        <div className="flex flex-col justify-center items-center gap-5 h-screen">
            <h1>Hooks imagem</h1>
            <div className="flex flex-row gap-5 justify-center items-center">
                <ImagemAleatoria/>
                <ImagemAleatoria/>
               
            </div>
        </div>
        </>
    )
}