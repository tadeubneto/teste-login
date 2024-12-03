import Link from "next/link"
import LogoutButton from "./LogoutBtn"
import { Home, BookOpen, User, LogOut } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 h-[80vh] bg-white border-r border-gray-200 flex-shrink-0">
      <div className="sticky top-0 p-6">
        <nav className="space-y-4">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <BookOpen size={20} />
            <span>Blog</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <User size={20} />
            <span>Sobre</span>
          </Link>
          <LogoutButton />
            
        </nav>
      </div>
    </aside>
  )
}