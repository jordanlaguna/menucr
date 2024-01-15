import Footer from "@/components/footer/Footer";
import Header from "@/components/head/Header";
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
        <section className="flex text">
          <div className="column">
            <h3 className="title">Plato #1</h3>
            <img className="icon" src="/img/Costillas.jpeg" alt="Not Found" />
            <p className="button">
              Costilla Cerde Ahumada. <br /> Precio: ₡7550.
            </p>
          </div>
          <div className="column">
            <h3 className="title">Plato #2</h3>
            <img className="icon" src="/img/Burrito.jpeg" alt="Not Found" />
            <p className="button">
              Burrito Especial. <br /> Precio: ₡4550.
            </p>
          </div>
          <div className="column">
            <h3 className="title">Plato #3</h3>
            <img className="icon" src="/img/Steak.jpeg" alt="Not Found" />
            <p className="button">
              Costilla Res Ahumada. <br /> Precio: ₡9550.
            </p>
          </div>
          <div className="column">
            <h3 className="title">Plato #4</h3>
            <img className="icon" src="/img/PolloAsado.jpeg" alt="Not Found" />
            <p className="button">
              Pollo Asado. <br /> Precio: ₡6000.
            </p>
          </div>
        </section>
        <article className="flex1 text1">
          <div className="column">
            <h3 className="title">Plato #5</h3>
            <img
              className="icon"
              src="/img/PolloAhumado.jpeg"
              alt="Not Found"
            />
            <p className="button">
              Pollo Ahumado. <br /> Precio: ₡5550.
            </p>
          </div>
          <div className="column">
            <h3 className="title">Plato #6</h3>
            <img className="icon" src="/img/SteakTwo.jpeg" alt="Not Found" />
            <p className="button">
              Ribeye Asado. <br /> Precio: ₡8550.
            </p>
          </div>
          <div className="column">
            <h3 className="title">Plato #7</h3>
            <img className="icon" src="/img/ImageSteak.jpeg" alt="Not Found" />
            <p className="button">
              New York Steak. <br /> Precio: ₡8550.
            </p>
          </div>
          <div className="column">
            <h3 className="title">Plato #8</h3>
            <img className="icon" src="/img/ChorizoAr.jpeg" alt="Not Found" />
            <p className="button">
              Chorizo Argentino. <br /> Precio: ₡6550.
            </p>
          </div>
        </article>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
