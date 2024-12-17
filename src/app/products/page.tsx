// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
// // import image1 from "@/app/public/1.png"
// // Define the product data
// interface Product {
//     id: number;
//     details: string;
//     size: string;
//     color: string;
//     totalPrice: string;
// }

// const products: Product[] = [
//     { id: 1, details: "A stylish shirt with a contemporary design, perfect for casual outings.",
//          size: "S",
//           color: "Red",
//            totalPrice: "$23",
//      },
//     {
//         id: 2, details: "Comfortable and versatile blue jeans, a must-have in every wardrobe.",
//         size: "M",
//         color: "Blue",
//         totalPrice: "$45"
//     },
//     {
//         id:3,details: "A premium black leather jacket, offering both style and warmth for the winter season.",
//         size: "L",
//         color: "Black",
//         totalPrice: "$99",
//     },
//     {
//         id:4,  details: "Lightweight and supportive running shoes designed for athletes and fitness enthusiasts.",
//         size: "8",
//         color: "White",
//         totalPrice: "$60",
//     },
//     {
//         id:5, details: "An elegant evening dress with intricate details, perfect for formal events or parties.",
//         size: "M",
//         color: "Black",
//         totalPrice: "$120",
//     }


//     //   { id: 1, name: "Shirt", rating:4.0 , price: "$23",image: "/Fashion Chic Clothes Online, Discover The Latest Fashion Trends.jpeg"},// Correct image path
//     //   { id: 2, name: "tshirt", rating:3.5, price: "$90" , image: "/Fashion Chic Clothes Online, Discover The Latest Fashion Trends.jpeg"},
//     //   { id: 3, name: "grapes", price: 94 , image: "/images/"},
// ];

// export default function Product() {
//     const [like, setLike] = useState(false);
//     const handleLike = () => {
//         setLike(like => !like);
//         // setAddLike(addLike => !addLike);

//     }

//     return (
//         <div className="grid grid-cols-2">
//             {/* Iterate over the product array and render each product in its own div */}
//             {products.map((product) => (
//                 <div key={product.id} className="px-3 mb-4 p-4 ">


//                     {/* <div className="flex flex-col justify-center items-center mt-3">
// <div className="grid gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  "> */}
//                     <div className="">              {/* Display product image */}
//                         {/* <Image className="rounded-md "
//                             src={product.image}
//                             alt={product.title}
//                             width={200}    // Set width of the image
//                             height={200}   // Set height of the image
//                         /> */}
//                     </div>
//                     <div className="text-sm flex flex-col gap-0.5">

//                         <div className="flex gap-[19vw] text-[2.5vh]">

//                             {/* <div className="text-sm">{product.name}</div> */}
//                             <div className="flex justify-center items-center">
//                                 <FaStar className="text-yellow-500" />
//                                 {/* <div>{product.rating.toFixed(1)}</div> */}
//                             </div>
//                         </div>


//                         {/* <div className="font-semibold">{product.price}</div> */}




//                         {/* <Link href={`/products/${product.id}`}>View Details</Link> */}
//                         <div className="flex justify-start items-center gap-[5vh]">
//                             <button className="bg-black text-white rounded-l-xl rounded-r-xl w-[30vw] hover:bg-neutral-800 text-[2.5vh]">Add To Cart</button>
//                             <div key={product.id} onClick={handleLike}>{!like ? <div><FaRegHeart /></div> : <div><FaHeart /></div>}</div>
//                         </div>
//                         <div>
//                         </div>


//                         {/* </div> */}
//                         {/* </div> */}
//                     </div>


//                 </div>
//             ))}
//         </div>
//     );
// }
