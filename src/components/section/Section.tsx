const Section = () => {
  return (
    <>
      <section className="flex text">
        <div className="column">
          <h3 className="title">Plato #1</h3>
          <img
            className="icon"
            src="/img/dishs/Ejecutivo.webp"
            alt="Not Found"
          />
          <p className="button">
            Filete Pescado. <br /> Precio: ₡5550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #2</h3>
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
          <h3 className="title">Plato #3</h3>
          <img className="icon" src="/img/cuts/Steak.jpeg" alt="Not Found" />
          <p className="button">
            Costilla Res Ahumada. <br /> Precio: ₡9550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #4</h3>
          <img className="icon" src="/img/dishs/Casado.webp" alt="Not Found" />
          <p className="button">
            Casado Bistec-Cerdo. <br /> Precio: ₡3550.
          </p>
        </div>
      </section>
    </>
  );
};
export default Section;
