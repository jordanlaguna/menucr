const Section = () => {
  return (
    <>
      <section className="flex text">
        <div className="column">
          <h3 className="title">Plato #1</h3>
          <img className="icon" src="/img/Costillas.jpeg" alt="Not Found" />
          <p className="button">
            Costilla Cerdo Ahumada. <br /> Precio: ₡7550.
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
    </>
  );
};
export default Section;
