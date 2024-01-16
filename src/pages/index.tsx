import Article from "@/components/article/Article";
import Footer from "@/components/footer/Footer";
import Header from "@/components/head/Header";
import Section from "@/components/section/Section";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main>
        <header>
          <Header />
          <img className="imageRest" src="/img/Fondo.jpg" alt="Not found" />
        </header>
        <nav className="nav-container">
          <h2 className="title-nav">Platos Favoritos</h2>
        </nav>
        <Section />
        <Article />
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
