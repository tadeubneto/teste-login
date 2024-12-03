'use client'
import {useAuth} from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation';

export default function LogoutButton() {

    const {logout} = useAuth ()
    const router = useRouter()
   
    const handleLogout = async () => {
        
        try {
            await logout()
            router.push('/login')
        }catch (error) {
            console.error("Erro ao fazer o logour", error)
        }
    };
    
return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
    >
      Sair
    </button>
  );

}
