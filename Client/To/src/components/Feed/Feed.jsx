import classes from "./Feed.module.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
            <h1>
              Un Espacio <br /> " " Para Ti
            </h1>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500,
            </p>
            <button>Try To Ü</button>
          </div>

          <div className={classes["left-container"]}>
            <figure>
              <img src="src/assets/image.png" width="500px" />
            </figure>
          </div>
        </section>

        <section>
          <div className={classes["container-text"]}>
            <div className={classes["content-text"]}>
              <h2>
                Transforme su espacio para enfocarse, <br /> panel productivo e
                inspirador.
              </h2>
              <h2>Haz tu mejor y más inspirado trabajo</h2>
            </div>
          </div>
        </section>

        <section>
          <div className={classes["grid-container"]}>
            <div className={classes["grid-item"]}>
              <h1>Conoce tu estilo de aprendizaje</h1>
              <p>
                Transforme su espacio para enfocarse, panel productivo e
                inspirador.
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Conoce tu estilo de aprendizaje</h1>
              <p>
                Transforme su espacio para enfocarse, panel productivo e
                inspirador.
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Conoce tu estilo de aprendizaje</h1>
              <p>
                Transforme su espacio para enfocarse, panel productivo e
                inspirador.
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Conoce tu estilo de aprendizaje</h1>
              <p>
                Transforme su espacio para enfocarse, panel productivo e
                inspirador.
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Conoce tu estilo de aprendizaje</h1>
              <p>
                Transforme su espacio para enfocarse, panel productivo e
                inspirador.
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Conoce tu estilo de aprendizaje</h1>
              <p>
                Transforme su espacio para enfocarse, panel productivo e
                inspirador.
              </p>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Feed;
