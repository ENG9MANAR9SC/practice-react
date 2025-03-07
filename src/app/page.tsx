import Image from "next/image";
import { OurProducts, ProductsTable } from "./components/Products/ProductsTable";


export default function Home() {
  const myStyle = {
    width:'100%',
  };
  const mainStyle = {
    height:'100vh',
  }
  const imageStyle = {
    background: 'linear-gradient(rgba(7, 25, 53, 0.2), rgba(8, 17, 109, 0.2)), url(./hero2.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  };

  const waveStyle = {
    background: 'url(./wave.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    
  };
  const handleSearch = (searchTerm:string) => {
    console.log('dsd', searchTerm);
  }

  return (
    <div className={`font-[family-name:var(--font-geist-sans)] bg-sky-50 relative text-sky-900 min-height-100`} style={mainStyle}>
 
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" >

        <div style={imageStyle} className="justify-items-center content-evenly my-6 h-[550px]">
          <h3 className="pb-2 font-bold text-4xl">New Forest Ice Cream</h3>
          <p className="pb-2 text-2xl w-1/2">We’ve been whipping up smiles since 1983 with our award-winning, nut-free ice cream, sorbets and desserts. 
            Both real dairy ice cream and plant-based treats, and everything in between. Because we’re making the world a cooler place.
          </p>
          <div className="flex gap-2">
            <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer">Our Products</button>
            <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer">Become a Customer</button>
          </div>
        </div>

        <div className="justify-items-center relative self-center mb-6 rounded-lg bg-sky-200 p-4">
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
          <div className="flex justify-between mb-4 bg-white p-6 rounded-lg">
            <div className="relative">
              <div className="absolute top-0 left-0 ml-[-36px] mt-[-36px]">
                <img src="./decoration-bee.svg"></img>
              </div>
              <img className="rounded-lg" src="./ice-cream.jpg" width="600"></img>
            </div>
            <div className="w-1/2 gap-6"> 
              <h4 className="my-6 font-bold text-3xl">Partner with us for irresistible frozen delights</h4>
              <p className="mb-6 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer"> Read More </button>
            </div>
          </div>
          <div className="flex justify-between mb-4 bg-white p-6 rounded-lg">
            <div className="w-1/2 gap-6"> 
              <h4 className="my-6 font-bold text-3xl">Browse our products</h4>
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
              <img className="rounded-lg" src="./ice-cream2.jpg" width="600"></img>
            </div>
          </div>
        </div>

        <div className="">
            <div style={waveStyle} className="h-12 rotate-180 mb-[-6px]">
            </div>
            <div className="flex justify-between gap-6 ">
              <div className="flex justify-between p-12" style={{ backgroundColor: "#FCF8E1" }}>
                  <div className="w-1/2">
                    <div className="relative">
                      <h4 className="my-6 font-bold text-3xl z-40">Paultons Park is proud</h4>
                      <div className="absolute top-0 z-0 mt-[-46px] ml-[-24px]">
                      <svg width="80" viewBox="0 0 127 100" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.986 44.434h2.054c5.573 0 10.56 2.151 14.96 6.453 4.497 4.205 6.746 9.485 6.746 15.84 0 6.258-2.249 11.44-6.746 15.547-4.4 4.009-9.876 6.013-16.427 6.013-7.138 0-13.102-2.835-17.893-8.506C2.986 74.01.64 65.847.64 55.287c0-9.68 2.053-18.724 6.16-27.133 4.204-8.507 9.288-15.204 15.253-20.093C28.115 3.074 33.493.58 38.186.58c3.13 0 5.574.928 7.334 2.786 1.76 1.858 2.64 4.254 2.64 7.187 0 4.302-1.907 7.48-5.72 9.533-5.183 2.836-9.29 6.16-12.32 9.974-3.032 3.813-4.743 8.604-5.134 14.373zm64.827 0h1.907c5.475 0 10.413 2.151 14.813 6.453 4.498 4.205 6.747 9.485 6.747 15.84 0 6.16-2.249 11.343-6.747 15.547-4.4 4.204-9.876 6.307-16.427 6.307-7.235 0-13.2-2.934-17.893-8.8-4.693-5.867-7.04-14.032-7.04-24.494 0-7.529 1.222-14.617 3.667-21.266 2.444-6.65 5.573-12.418 9.386-17.307 3.911-4.987 8.067-8.898 12.467-11.733C95.191 2.047 99.2.58 102.72.58c3.226 0 5.671.928 7.333 2.786 1.76 1.76 2.64 4.156 2.64 7.187 0 4.4-1.907 7.578-5.72 9.533-5.378 3.031-9.436 6.405-12.173 10.12-2.738 3.618-4.4 8.36-4.987 14.227zm-48.605 20.6c-.427-11.085-10.826-13.357-16.222-14.147.221.195.471.407.743.637 2.74 2.32 7.663 6.49 7.663 14.007 0 7.726-4.893 13.371-7.82 16.743l.682-.26c5.376-2.042 14.954-5.68 14.954-16.98zm65.226 0c-.426-11.085-10.825-13.357-16.222-14.147.222.195.472.407.743.637 2.74 2.32 7.663 6.49 7.663 14.007 0 7.726-4.892 13.371-7.819 16.743l.676-.258.005-.002c5.377-2.042 14.954-5.68 14.954-16.98z"
                          fill="#AADDF7"
                        />
                        </svg>
                      </div>
                    </div>

                    <p className="mb-6 text-xl w-1/2">Paultons Park is proud to have a long standing relationship with New Forest Ice Cream that goes back many years. Indeed, to source from a local company a first class, quality product which is supplied in a reliable and efficient manner is a real bonus.
                      Moreover, New Forest Ice Cream supplies all our ice cream requirements today, and consequently, we very much value their first-class service.</p>
                    <span>Stephen Lorton – Commercial Director</span>
                  </div>
                  <div>
                    <img src="./ice-cream3.jpg" className="rounded-lg" width="600"></img>
                  </div>
              </div>
            </div>
            <div style={waveStyle} className="h-24 mt-[-6px]">
            </div>
        </div>
       </div>
 
      </main>
      
    </div>
  );
}
