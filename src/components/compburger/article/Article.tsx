const Article = () => {
  return (
    <>
      <article className="flex1 text1">
        <div className="column">
          <h3 className="title">Plato #5</h3>
          <img
            className="icon"
            src="/img/burguers/Hotoriginal.jpg"
            alt="Not Found"
          />
          <p className="button">
            Hot Dog Original. <br /> Precio: ₡3000.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #6</h3>
          <img
            className="icon"
            src="/img/burguers/Tacospastor.jpg"
            alt="Not Found"
          />
          <p className="button">
            Tacos Al Pastor. <br /> Precio: ₡4550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #7</h3>
          <img className="icon" src="/img/burguers/wrap.jpg" alt="Not Found" />
          <p className="button">
            Wrap De Pollo. <br /> Precio: ₡4550.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Plato #8</h3>
          <img
            className="icon"
            src="/img/burguers/Tacostostados.jpg"
            alt="Not Found"
          />
          <p className="button">
            Tacos Americanos. <br /> Precio: ₡4950.
          </p>
        </div>
      </article>
    </>
  );
};
export default Article;
