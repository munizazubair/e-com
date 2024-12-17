import Link from "next/link"
export default function Main() {
    return(
        <div className="h-screen bg-black text-white flex  justify-start items-center">
            <h1 className="text-4xl w-96 pl-20"> Get <i>Variety Of Clothes</i> from <span className="fonts">M Fits</span> That You Want</h1>   
            <button className="h-18 w-52 bg-white text-black hover:bg-slate-300 rounded-l-lg rounded-r-lg"><Link href={"./product"}>Click here for options</Link></button>         
        </div>
    )
}