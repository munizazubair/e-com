import Link from "next/link"
export default function Dynamic() {
    return(
        <div>
            <ul className="text-xl font-bold text-black">
                
                <li><Link href={"/Dynamic/1"}>burger</Link></li>
                <li><Link href={"/Dynamic/2"}>pizza</Link></li>
            </ul>
        </div>
    )
}