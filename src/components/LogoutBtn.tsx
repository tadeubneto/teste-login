'use client'
import {useAuth} from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation';
import {LogOut} from "lucide-react"

export default function LogoutButton() {

    const {logout} = useAuth ()
    const router = useRouter()
   
    const handleLogout = async () => {
        
        try {
            await logout()
            router.push('/')
        }catch (error) {
            console.error("Erro ao fazer o logour", error)
        }
    };
    
return (
    <button
      onClick={handleLogout}
      className=" flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors"
    >
      <LogOut className="w-5 h-5" />
      Sair
    </button>
  );

}
