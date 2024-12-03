'use client'

import LogoutButton from "@/components/LogoutBtn";


export default function Dashboard() {
    return (
      <div className="p-8 text-white">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Página protegida</p>
        <LogoutButton />
        </div>
    );
  }