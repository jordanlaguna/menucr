const Section = () => {
  return (
    <>
      <section className="flex text">
        <div className="column">
          <h3 className="title">Bebida #1</h3>
          <img
            className="icon"
            src="/img/gaseosas/Blanco.webp"
            alt="Not Found"
          />
          <p className="button">
            Fresco Te Blanco. <br /> Precio: ₡1500.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #2</h3>
          <img className="icon" src="/img/gaseosas/fanta.jpg" alt="Not Found" />
          <p className="button">
            Gaseosa Fanta. <br /> Precio: ₡1200.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #3</h3>
          <img className="icon" src="/img/gaseosas/limon.jpg" alt="Not Found" />
          <p className="button">
            Fresco Te Limón. <br /> Precio: ₡1300.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #4</h3>
          <img
            className="icon"
            src="/img/gaseosas/mirinda.jpg"
            alt="Not Found"
          />
          <p className="button">
            Gaseosa Mirinda. <br /> Precio: ₡1200.
          </p>
        </div>
      </section>
    </>
  );
};
export default Section;
