'use client'
import { usePathname } from "next/navigation";

export default function Footer(){
  const pathname = usePathname();

    return(

        <footer className={`text-sm text-center text-gray-600 ${pathname === '/' ? 'hidden' : 'block'}`}>
       <p className="pt-5 pb-24 ">Create with love Kelompok 6 💙</p>
     </footer>
    )
}