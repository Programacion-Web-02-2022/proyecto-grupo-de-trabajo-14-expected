import classes from "./Feed.module.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
            <h1>
              Un Espacio <br /> Para Ti
            </h1>
            <p>
            Empieza ahora para que te motives. Convierta su potencial en progreso con una página maravillosamente simple.


            </p>
            <button><a href="../../../../index2.html" className={classes["link"]}>Try To Ü As Guest</a></button>
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
              Encuentra una técnica de estudio que facilite el aprendizaje.
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Métodos de estudio</h1>
              <p>
              Dependiendo del método de estudio se le proporcionarán recomendaciones.
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Agenda semanal</h1>
              <p>
              Mostrará las metas de la semana que tienes por cumplir.  
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Inspiración diaria</h1>
              <p>
              Sección especial donde mostrará diferentes contenidos para motivar.
              </p>
            </div>
            <div className={classes["grid-item"]}>
              <h1>Registro de emociones</h1>
              <p>
              Se le darán emociones predeterminadas al usuario para que seleccione 1 o 2 por cada día.
              </p>
            </div> 
            <div className={classes["grid-item"]}>
              <h1>Pomodoro</h1>
              <p>
              Se le proporcionará un cronómetro para que lleve la duración de cada intervalo de tiempo dedicado al estudio.
              </p>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Feed;
