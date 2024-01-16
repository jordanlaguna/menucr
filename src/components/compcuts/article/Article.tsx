const Article = () => {
  return (
    <>
      <article className="flex1 text1">
        <div className="column">
          <h3 className="title">Plato #5</h3>
          <img
            className="icon"
            src="/img/cuts/PolloAhumado.jpeg"
            alt="Not Found"
          />
          <p className="button">
            Pollo Ahumado. <br /> Precio: ₡5550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #6</h3>
          <img className="icon" src="/img/cuts/SteakTwo.jpeg" alt="Not Found" />
          <p className="button">
            Ribeye Asado. <br /> Precio: ₡8550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #7</h3>
          <img
            className="icon"
            src="/img/cuts/ImageSteak.jpeg"
            alt="Not Found"
          />
          <p className="button">
            New York Steak. <br /> Precio: ₡8550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #8</h3>
          <img className="icon" src="/img/cuts/Minion.jpg" alt="Not Found" />
          <p className="button">
            Filet de Minion. <br /> Precio: ₡8550.
          </p>
        </div>
      </article>
    </>
  );
};
export default Article;
