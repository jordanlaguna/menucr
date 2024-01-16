import Article from "@/components/compsoda/article/Article";
import Section from "@/components/compsoda/section/Section";
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
            src="/img/gaseosas/fondo.png"
            alt="Not found"
          />
        </header>
        <nav className="nav-container">
          <h2 className="title-nav">Gaseosas Favoritas</h2>
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
