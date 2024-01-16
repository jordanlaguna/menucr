const Section = () => {
  return (
    <>
      <section className="flex text">
        <div className="column">
          <h3 className="title">Bebida #1</h3>
          <img
            className="icon"
            src="/img/cervezas/guarana.jpg"
            alt="Not Found"
          />
          <p className="button">
            Cerveza Smirnoff. <br /> Precio: ₡2000.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #2</h3>
          <img
            className="icon"
            src="/img/cervezas/Pilsen.jpg"
            alt="Not Found"
          />
          <p className="button">
            Cerveza Pilsen. <br /> Precio: ₡1500.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #3</h3>
          <img
            className="icon"
            src="/img/cervezas/imperial.jpg"
            alt="Not Found"
          />
          <p className="button">
            Cerveza Imperial. <br /> Precio: ₡1500.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #4</h3>
          <img
            className="icon"
            src="/img/cervezas/bavaria.webp"
            alt="Not Found"
          />
          <p className="button">
            Cerveza Bavaria. <br /> Precio: ₡1500.
          </p>
        </div>
      </section>
    </>
  );
};
export default Section;
