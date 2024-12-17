import Link from "next/link";
import Image from "next/image";
import { FaStar , FaRegHeart , FaHeart} from "react-icons/fa";

export default async function Product() {
    let data = await (await fetch("http://localhost:3000/api/product")).json();
    return(
        <div>
        {data.map((product:any, index:number) => (
            <div key={product.id} className="" >
                 <Image className="rounded-md "
                            src={product.image}
                            alt={product.title}
                            width={100}    
                            height={100}   
                          />

<div className="text-sm ">
            
            <div className="flex gap-[10vw] text-[2.5vh]">

            <div className="text-sm">{product.title}</div>

            <div className="flex justify-center items-center">

          <FaStar className="text-yellow-500"/>

              <div>{product.rating.toFixed(1)}</div> 

            </div>

            </div>

            <div className="font-semibold">{product.price}</div>


            <Link href={`/products/${product.id}`}>View Details</Link>
            <div className="flex justify-start items-center gap-[5vh]">
                <button className="bg-black text-white rounded-l-xl rounded-r-xl w-[30vw] hover:bg-neutral-800 text-[2.5vh]">Add To Cart</button>
                {/* <div  key={product.id}  onClick={handleLike}>{!like ? <div><FaRegHeart /></div> : <div><FaHeart /></div> }</div> */}
            </div>
       
         
            </div>
                    </div>   

))};


                    </div>
            
        )
}