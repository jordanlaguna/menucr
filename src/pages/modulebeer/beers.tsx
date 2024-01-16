import Article from "@/components/compbeer/article/Article";
import Section from "@/components/compbeer/section/Section";
import Footer from "@/components/footer/Footer";
import Header from "@/components/head/Header";

export default function Home() {
  return (
    <>
      <main>
        <header>
          <Header />
          <img
            className="imageRest"
            src="/img/cervezas/fondo.jpg"
            alt="Not found"
          />
        </header>
        <nav className="nav-container">
          <h2 className="title-nav">Cervezas Favoritas</h2>
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
