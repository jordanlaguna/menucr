const Article = () => {
  return (
    <>
      <article className="flex1 text1">
        <div className="column">
          <h3 className="title">Bebida #5</h3>
          <img
            className="icon"
            src="/img/gaseosas/Cocacola.jpg"
            alt="Not Found"
          />
          <p className="button">
            Gaseosa Coca-Cola. <br /> Precio: ₡1200.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #6</h3>
          <img className="icon" src="/img/gaseosas/pepsi.jpg" alt="Not Found" />
          <p className="button">
            Gaseosa Pepsi. <br /> Precio: ₡1200.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #7</h3>
          <img
            className="icon"
            src="/img/gaseosas/melecoton.png"
            alt="Not Found"
          />
          <p className="button">
            Fresco Te Melocotón. <br /> Precio: ₡1300.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #8</h3>
          <img
            className="icon"
            src="/img/gaseosas/fresca.webp"
            alt="Not Found"
          />
          <p className="button">
            Gaseosa Fresca. <br /> Precio: ₡1200.
          </p>
        </div>
      </article>
    </>
  );
};
export default Article;
