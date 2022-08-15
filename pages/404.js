import { useRouter } from "next/router";


function PageNotFound(){


    return (
        <div className="max-w-[720px] w-[720px] p-10 bg-neutral-50 overflow-auto flex items-center justify-center h-[100vh]">
              <p className="font-bold">404 | This page could not be found.</p> 
        </div>
    )
}

export default PageNotFound;