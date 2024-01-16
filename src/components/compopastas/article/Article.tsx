const Article = () => {
  return (
    <>
      <article className="flex1 text1">
        <div className="column">
          <h3 className="title">Plato #5</h3>
          <img
            className="icon"
            src="/img/pastas/pastafive.jpg"
            alt="Not Found"
          />
          <p className="button">
            Pasta Pastrani. <br /> Precio: ₡4950.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #6</h3>
          <img
            className="icon"
            src="/img/pastas/Pastasix.jpeg"
            alt="Not Found"
          />
          <p className="button">
            Pasta Con Parmesanno. <br /> Precio: ₡5550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #7</h3>
          <img
            className="icon"
            src="/img/pastas/pastaseven.webp"
            alt="Not Found"
          />
          <p className="button">
            Pasta Spaguetti. <br /> Precio: ₡6550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #8</h3>
          <img
            className="icon"
            src="/img/pastas/pastaeigth.jpg"
            alt="Not Found"
          />
          <p className="button">
            Pasta En Tiras. <br /> Precio: ₡3550.
          </p>
        </div>
      </article>
    </>
  );
};
export default Article;
