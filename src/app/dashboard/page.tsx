"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Dashboard() {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex-1 flex items-stretch bg-slate-200 text-white">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
            <p className="text-center text-lg mb-6">
              {""}
              Esta é uma página protegida{" "}
            </p>
            <div className="mb-6 text-center">
              <h2 className="text-xl font-semibold mb-2">
                Bem-vindo de volta!
              </h2>
              <p>Você está autenticado e tem acesso à área administrativa.</p>
            </div>
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
