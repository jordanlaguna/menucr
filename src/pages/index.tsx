import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="contenedorOne">
        <header>
          <h1>Restaurante XYZ</h1>
          <p>Menú de Comidas</p>
        </header>

        <section>
          <article>
            <h2>Plato 1</h2>
            <p>Descripción del plato 1. Incluye ingredientes y detalles.</p>
            <p>Precio: $10.99</p>
          </article>

          <article>
            <h2>Plato 2</h2>
            <p>Descripción del plato 2. Incluye ingredientes y detalles.</p>
            <p>Precio: $12.99</p>
          </article>
        </section>
        <section>
          <article>
            <h2>Plato 1</h2>
            <p>Descripción del plato 1. Incluye ingredientes y detalles.</p>
            <p>Precio: $10.99</p>
          </article>

          <article>
            <h2>Plato 2</h2>
            <p>Descripción del plato 2. Incluye ingredientes y detalles.</p>
            <p>Precio: $12.99</p>
          </article>
        </section>
        <section>
          <article>
            <h2>Plato 1</h2>
            <p>Descripción del plato 1. Incluye ingredientes y detalles.</p>
            <p>Precio: $10.99</p>
          </article>

          <article>
            <h2>Plato 2</h2>
            <p>Descripción del plato 2. Incluye ingredientes y detalles.</p>
            <p>Precio: $12.99</p>
          </article>
        </section>
        <section>
          <article>
            <h2>Plato 1</h2>
            <p>Descripción del plato 1. Incluye ingredientes y detalles.</p>
            <p>Precio: $10.99</p>
          </article>

          <article>
            <h2>Plato 2</h2>
            <p>Descripción del plato 2. Incluye ingredientes y detalles.</p>
            <p>Precio: $12.99</p>
          </article>
        </section>
      </div>
    </>
  );
}
