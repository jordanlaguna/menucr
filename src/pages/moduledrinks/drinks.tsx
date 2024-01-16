import Article from "@/components/compdrink/article/Article";
import Section from "@/components/compdrink/section/Section";
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
            src="/img/fondoBebidas.webp"
            alt="Not found"
          />
        </header>
        <nav className="nav-container">
          <h2 className="title-nav">Bebidas Favoritas</h2>
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
