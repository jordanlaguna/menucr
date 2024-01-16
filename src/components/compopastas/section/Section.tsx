const Section = () => {
  return (
    <>
      <section className="flex text">
        <div className="column">
          <h3 className="title">Plato #1</h3>
          <img className="icon" src="/img/pastas/Pasta.jpg" alt="Not Found" />
          <p className="button">
            Pasta Lenguini. <br /> Precio: ₡4950.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #2</h3>
          <img
            className="icon"
            src="/img/pastas/PastaTwo.jpeg"
            alt="Not Found"
          />
          <p className="button">
            Pasta Carne-Salsa. <br /> Precio: ₡4550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #3</h3>
          <img
            className="icon"
            src="/img/pastas/PastaTres.jpg"
            alt="Not Found"
          />
          <p className="button">
            Pasta En Tomate. <br /> Precio: ₡4550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #4</h3>
          <img
            className="icon"
            src="/img/pastas/PastaFour.webp"
            alt="Not Found"
          />
          <p className="button">
            Pasta En Salsa Blanca. <br /> Precio: ₡5000.
          </p>
        </div>
      </section>
    </>
  );
};
export default Section;
