const Article = () => {
  return (
    <>
      <article className="flex1 text1">
        <div className="column">
          <h3 className="title">Plato #5</h3>
          <img
            className="icon"
            src="/img/dishs/Casadoeigth.jpg"
            alt="Not Found"
          />
          <p className="button">
            Casado De La Casa. <br /> Precio: ₡4950.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #6</h3>
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
          <h3 className="title">Plato #7</h3>
          <img
            className="icon"
            src="/img/dishs/Casadoseven.png"
            alt="Not Found"
          />
          <p className="button">
            Casado Con Churrasco. <br /> Precio: ₡6550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #8</h3>
          <img
            className="icon"
            src="/img/dishs/Gallopinto.jpeg"
            alt="Not Found"
          />
          <p className="button">
            Gallo Pinto Tico. <br /> Precio: ₡3550.
          </p>
        </div>
      </article>
    </>
  );
};
export default Article;
