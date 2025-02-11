import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <header className="flex justify-between items-center px-8 py-4">
          <div>
            <p className="text-xl font-bold">CATÁLOGO DE ESPAÇONAVES</p>
          </div>

          <nav className="flex gap-4">
            <Link href="/">Início</Link>
            <Link href="/spaceships">Espaçonaves</Link>
            <Link href="/categories">Categorias</Link>
          </nav>
        </header>

        <main className="flex-1 flex justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
