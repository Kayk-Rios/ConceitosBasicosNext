import Grid from "@/components/layout/Grid";



export default function PaginaLayoutGrid(){
    return(
        <>
       <div className="flex flex-col  justify-center items-center h-screen">
            
                <div className="w-[90%]  lg:w-4/5">
                    <Grid>
                        <div className="h-36  w-full bg-purple-500"></div>
                        <div className="h-36  w-full bg-purple-500"></div>
                        <div className="h-36  w-full bg-purple-500"></div>
                        <div className="h-36 w-full bg-purple-500"></div>
                        <div className="h-36 w-full bg-purple-500"></div>
                        </Grid>
                </div>
        
        </div>
        
        </>
    )
}