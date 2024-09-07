import Image from "next/image"



export default function ImagemAleatoria() {
    let pesquisa: string = ""
    const url: string = 'http://source.unsplash/random/featured/300x300?'

    function urlImagem() {
        return `${url}${pesquisa}`
    }

    function RendenrizaBotao(valor: string) {
        return <button className="bg-slate-400 p-1 m-1  rounded-md hover:bg-slate-600" onClick={() =>{ pesquisa = valor, console.log(pesquisa)}  }>
            {valor}
        </button>
    }

    return (
        <>
            <div className=" gap-3 border border-zinc-500 p-7">
                <Image src={urlImagem()} height={200} width={200}alt="Imagem"/>
                <div className="flex flex-col gap-5">
                    {RendenrizaBotao('Abstract')}
                    {RendenrizaBotao('City')}
                    {RendenrizaBotao('Person')}
                </div>
            </div>

        </>
    )
}