import Article from "@/components/compopastas/article/Article";
import Section from "@/components/compopastas/section/Section";
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
            src="/img/pastas/fondopastas.png"
            alt="Not found"
          />
        </header>
        <nav className="nav-container">
          <h2 className="title-nav">Platos Pastas</h2>
        </nav>
        <Section />
        <Article />
        <Footer />
      </main>
    </>
  );
}
