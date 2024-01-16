import Header from "@/components/head/Header";
import Section from "@/components/compcuts/section/Section";
import Article from "@/components/compcuts/article/Article";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <header>
        <Header />
        <img className="imageRest" src="/img/fondocarnes.jpg" alt="Not found" />
      </header>
      <nav className="nav-container">
        <h2 className="title-nav">Cortes De Carne</h2>
      </nav>
      <Section />
      <Article />
      <Footer />
    </>
  );
}
