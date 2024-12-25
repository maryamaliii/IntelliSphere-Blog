
import { AlignRight } from "lucide-react"
import Link from "next/link"



import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import localFont from "next/font/local";

  const quella = localFont({
    src: "../app/fonts/quella-owyda.otf",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
  

export default function Header() {
    return (
        /* Logo */
        <header className="md:w-auto h-auto bg-blue-950 text-white">
           <div className="flex justify-between items-center p-4">
            <h1 className={`text-2xl  hover:text-blue-400 ${quella.className}`}>IntelliSphere</h1>
            {/*Nav Button */}
            <ul className="hidden md:block">
                <li className="space-x-6 py-4 px-4 text-2xl font-serif">
                 <button className="scale-100 hover:scale-110  hover:text-blue-400"><Link href="/">Home</Link></button>
                 <button className="scale-100 hover:scale-110 hover:text-blue-400"><Link href="/blog">Blog</Link></button>
                 <button className="scale-100 hover:scale-110  hover:text-blue-400"><Link href="/about">About</Link></button>
                 <button className="scale-100 hover:scale-110  hover:text-blue-400"><Link href="/contact">Contact</Link></button>
                </li>
            </ul>
            
            <Sheet>
  <SheetTrigger className="md:hidden text-white">
  <AlignRight/>
    </SheetTrigger>
    
  <SheetContent className="bg-white text-black w-48 h-96">
  <SheetTitle className={`text-2xl ${quella.className}`}>IntelliSphere</SheetTitle>
  <ul>
                <li className="flex flex-col items-start space-y-4 mt-6 text-2xl font-serif">
                 <button className="scale-100 hover:scale-110 hover:text-blue-400"><Link href="/">Home</Link></button>
                 <button className="scale-100 hover:scale-110  hover:text-blue-400"><Link href="/blog">Blog</Link></button>
                 <button className="scale-100 hover:scale-110  hover:text-blue-400"><Link href="/about">About</Link></button>
                 <button className="scale-100 hover:scale-110  hover:text-blue-400"><Link href="/contact">Contact</Link></button>
                </li>
            </ul>
  </SheetContent>
</Sheet>
</div>

        </header>
    )
}