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
    <div className={`font-[family-name:var(--font-geist-sans)] h-screen bg-sky-50`} style={mainStyle}>
 
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" >

        <div className="flex justify-center">
          <ProductsTable OurProducts={OurProducts}/>
        </div>
        
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

 
      </main>
      
    </div>
  );
}
