import Link from "next/link";
import "./globals.css";
import Footer from "@/components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <header className="flex justify-between items-center px-6 py-4 sm:px-8">
          <div>
            <Link className="text-xl font-bold" href={"/"}>CATÁLOGO DE ESPAÇONAVES</Link>
          </div>

          <nav className="sm:flex gap-4">
            <Link href="/">Início</Link>
            <Link href="/spaceships">Espaçonaves</Link>
            <Link href="/categories">Categorias</Link>
          </nav>
        </header>

        <main className="flex-1 flex justify-center w-full max-w-4xl mx-auto">
          {children}
        </main>
        <footer>
          <Footer name="José Nascimento" email="joseeantonioo2000@gmail.com" linkedin="https://www.linkedin.com/in/jose-antonio-nascimento-957124211/"
            github="https://github.com/Antonio-Nasc" />
        </footer>
      </body>
    </html>
  );
}
