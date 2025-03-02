import Image from "next/image";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
export default function Home() {
  const myStyle = {
    width:'100%',
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header style={myStyle}>
        <div className="flex-row">
          <Menu/>
          <NavBar/>
        </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

 
      </main>
      <Footer/>
    </div>
  );
}
