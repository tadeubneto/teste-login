'use client'
import Footer from "@/components/Footer";
import Login from "./login/page";
import Header from "@/components/Header";



export default function Home() {
  
 return (
 <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-1">    
     <Login />
    </div>
    <Footer />
</div>

 )
}
