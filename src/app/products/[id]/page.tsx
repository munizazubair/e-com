// // "use client";
// import Product from "../page";
// // Define an interface for the expected props
// // interface ProductListProps {
// //   id: number;
// //   name:string;
// //   price:number;
// // }
// // const products: ProductListProps[] = [
// //   { id: 1, name: "apple", price: 78 },
// //   { id: 2, name: "banana", price: 90 },
// //   { id: 3, name: "grapes", price: 94 },
// // ];


// export default async function ProductList({params}:any) {
//   let data = await (await fetch("http://localhost:3000/api/product")).json();

//     const {id} = params;
//   return (
//     <div className="text-xl text-black">
//       {/* Here, you can access the id prop and display it */}
//       {data.map((product:any, id:number) => (

//       <p>{id}, {product.details}</p>
//       ))}
//     </div>
//   );
// }
