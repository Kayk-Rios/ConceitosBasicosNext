interface GridProps {
    children: any;
    cols?:number
  }
  export default function LayoutGrid2(props: GridProps) {
    return (
  
      //onde a magia acontece:  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
      <>
        <div>
        <h1 className="flex justify-center mt-[10%] gap-5 mb-11">Grid layout</h1>
            <div className={`
             grid 
              grid-cols-2 
             sm:grid-cols-2 
             lg:grid-cols-4
             gap-4
               w-full
              `}>
            
            
              {props.children}
            </div>
        </div>
      </>
    );
  }
  