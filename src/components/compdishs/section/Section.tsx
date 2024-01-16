const Section = () => {
  return (
    <>
      <section className="flex text">
        <div className="column">
          <h3 className="title">Plato #1</h3>
          <img className="icon" src="/img/CasadoTwo.png" alt="Not Found" />
          <p className="button">
            Casado Filete-Pescado. <br /> Precio: ₡3950.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #2</h3>
          <img className="icon" src="/img/casadoThree.jpg" alt="Not Found" />
          <p className="button">
            Casado Carne-Salsa. <br /> Precio: ₡4550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #3</h3>
          <img className="icon" src="/img/Casado.webp" alt="Not Found" />
          <p className="button">
            Casado Bistec-Cerdo. <br /> Precio: ₡3550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #4</h3>
          <img className="icon" src="/img/CasadoFour.jpg" alt="Not Found" />
          <p className="button">
            Casado Filete-Pollo. <br /> Precio: ₡4000.
          </p>
        </div>
      </section>
    </>
  );
};
export default Section;
