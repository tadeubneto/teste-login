import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-900 h-[10vh] flex items-center justify-between">
      <div className="flex items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://premiersoft.net/imagens/logo_premiersoft.png"
          alt="Logo"
          width={250}
          height={250}
        />
      </div>
    </header>
  );
}
