import Article from "@/components/compburger/article/Article";
import Section from "@/components/compburger/section/Section";
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
            src="/img/burguers/fondo.jpg"
            alt="Not found"
          />
        </header>
        <nav className="nav-container">
          <h2 className="title-nav">Platos Burguers</h2>
        </nav>
        <Section />
        <Article />
        <Footer />
      </main>
    </>
  );
}
