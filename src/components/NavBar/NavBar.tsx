import Link from "next/link";



export default function NavBar(){
    
    return(
        <>
        
        <nav>
            <ul className="flex justify-evenly items-center gap-4 p-5 bg-slate-700 text-zinc-300">
              <Link href="/">Home </Link>
              <Link href="/basico/circulo"> Props </Link>
              <Link href="/comunicacao/direta"> Comunica Direta</Link>
              <Link href="/comunicacao/indireta">Comunica indireta </Link>
              <Link href="/condicional/faq"> Condicionais </Link>
              {/* <Link href="/hooks/imagem"> Hook Image </Link> */}
              <Link href="/listas/basico"> Render lista</Link>
              <Link href="/listas/produtos"> Render Loop</Link>
              <Link href="/starwars"> Simula API</Link>
              <Link href="/hooks/contador"> Custom UseEffect</Link>
              {/* <Link href="/contexto/contador"> Cont ContexAPI</Link> */}
              <Link href="/layout/"> Grid</Link>
            </ul>
        </nav>
    
        
        </>
    )
}