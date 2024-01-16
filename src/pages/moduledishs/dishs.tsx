import Header from "@/components/head/Header";
import Section from "@/components/compdishs/section/Section";
import Article from "@/components/compdishs/article/Article";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <main>
        <header>
          <Header />
          <img className="imageRest" src="/img/Dishs.jpg" alt="Not found" />
        </header>
        <nav className="nav-container">
          <h2 className="title-nav">Platos Ejecutivos</h2>
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
