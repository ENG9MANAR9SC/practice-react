import Image from "next/image";
import { OurProducts, ProductsTable } from "./components/Products/ProductsTable";


export default function Home() {
  const myStyle = {
    width:'100%',
  };
  const mainStyle = {
    height:'100vh',
  }

  const handleSearch = (searchTerm:string) => {
    console.log('dsd', searchTerm);
  }

  return (
    <div className={`font-[family-name:var(--font-geist-sans)] bg-sky-50 text-sky-900 min-height-100`} style={mainStyle}>
 
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" >

        <div className="justify-items-center my-6">
          <h3 className="pb-2 font-bold text-4xl">New Forest Ice Cream</h3>
          <p className="pb-2 text-2xl w-1/2">We’ve been whipping up smiles since 1983 with our award-winning, nut-free ice cream, sorbets and desserts. 
            Both real dairy ice cream and plant-based treats, and everything in between. Because we’re making the world a cooler place.
          </p>
          <div className="flex gap-2">
            <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer">Our Products</button>
            <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer">Become a Customer</button>
          </div>
        </div>

        <div className="justify-items-center relative self-center my-6 rounded-lg bg-sky-200 p-4">
          <div className="absolute top-0 left-0 ml-[-36px] mt-[-36px]">
            <img src="./butterfly.svg"></img>
           </div>
          <h3 className="pb-2 text-4xl font-bold "> Request a brochure from us today</h3>
          <p className="pb-2 text-2xl w-1/2">Our brochure gives the complete run down of our flavours, additionally equipment and products. Sign up today.</p>
          <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer">Become a Customer</button>
        </div>
       
        {/* <div className="flex justify-center">
          <ProductsTable OurProducts={OurProducts}/>
        </div> */}

       <div>
        <div className="px-4">
          <div className="flex justify-between mb-4 bg-white p-4 rounded-lg">
            <div className="relative">
              <div className="absolute top-0 left-0 ml-[-36px] mt-[-36px]">
                <img src="./decoration-bee.svg"></img>
              </div>
              <img className="rounded-lg" src="./ice-cream.jpg" width="400"></img>
            </div>
            <div className="w-1/2 gap-6"> 
              <h4 className="mb-6 font-bold text-3xl">Partner with us for irresistible frozen delights</h4>
              <p className="mb-6 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer"> Read More </button>
            </div>
          </div>
          <div className="flex justify-between mb-4 bg-white p-4 rounded-lg">
            <div className="w-1/2 gap-6"> 
              <h4 className="mb-6 font-bold text-3xl">Browse our products</h4>
              <p className="mb-6 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer"> Our Products </button>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 ml-[-36px] mt-[-36px]">
                <img src="./decoration-leaf.svg"></img>
              </div>
              <img className="rounded-lg" src="./ice-cream2.jpg" width="400"></img>
            </div>
          </div>
        </div>
       </div>
 
      </main>
      
    </div>
  );
}
