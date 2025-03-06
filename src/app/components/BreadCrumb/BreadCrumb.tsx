'use client'

import { usePathname } from "next/navigation";

const myStyle = {
  padding :'24px',
  
};

function BreadCrumb () {

  const pathname = usePathname();

  return <div style={myStyle} className="text-sky-900">Home  {pathname}</div>

}

export default BreadCrumb;