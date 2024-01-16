const Section = () => {
  return (
    <>
      <section className="flex text">
        <div className="column">
          <h3 className="title">Plato #1</h3>
          <img className="icon" src="/img/burguers/Bull.jpg" alt="Not Found" />
          <p className="button">
            La Bull 250g De Carne. <br /> Precio: ₡5850.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #2</h3>
          <img
            className="icon"
            src="/img/burguers/Crispy.jpg"
            alt="Not Found"
          />
          <p className="button">
            Hamburguesa Crispy. <br /> Precio: ₡4550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #3</h3>
          <img
            className="icon"
            src="/img/burguers/Double.jpeg"
            alt="Not Found"
          />
          <p className="button">
            Burguer Doble Carne. <br /> Precio: ₡6550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #4</h3>
          <img
            className="icon"
            src="/img/burguers/normal.jpg"
            alt="Not Found"
          />
          <p className="button">
            Burguer Sencilla. <br /> Precio: ₡3000.
          </p>
        </div>
      </section>
    </>
  );
};
export default Section;
