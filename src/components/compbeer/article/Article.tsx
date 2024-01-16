const Article = () => {
  return (
    <>
      <article className="flex1 text1">
        <div className="column">
          <h3 className="title">Bebida #5</h3>
          <img
            className="icon"
            src="/img/cervezas/adaneva.jpg"
            alt="Not Found"
          />
          <p className="button">
            Cerveza Adan y Eva. <br /> Precio: ₡2000.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #6</h3>
          <img
            className="icon"
            src="/img/cervezas/heineken.jpg"
            alt="Not Found"
          />
          <p className="button">
            Cerveza Heineken. <br /> Precio: ₡2000.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #7</h3>
          <img
            className="icon"
            src="/img/cervezas/imperialsilver.jpg"
            alt="Not Found"
          />
          <p className="button">
            Imperial Silver. <br /> Precio: ₡1500.
          </p>
        </div>
        <div className="column">
          <h3 className="title">Bebida #8</h3>
          <img
            className="icon"
            src="/img/cervezas/Pilsen6.jpg"
            alt="Not Found"
          />
          <p className="button">
            Pilsen 6.0. <br /> Precio: ₡1500.
          </p>
        </div>
      </article>
    </>
  );
};
export default Article;
