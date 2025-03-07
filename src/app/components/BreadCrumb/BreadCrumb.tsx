'use client'

import { usePathname } from "next/navigation";

const myStyle = {
  padding :'24px',
  
};

function BreadCrumb () {

  const pathname = usePathname();

  return <div style={myStyle} className="text-sky-900 text-2xl px-4 bg-sky-100">Home <span className="text-sky-900 text-2xl font-bold mx-3">{pathname}</span> </div>

}

export default BreadCrumb;