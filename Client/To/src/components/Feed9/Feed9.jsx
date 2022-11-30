import classes from "./Feed.module9.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <div className={classes["titulo"]}>
        <h1 >
            Fichas de Estudio
            </h1>
            <hr></hr>
            <p>
            Método de estudio
            </p>
        </div>
     
        
     
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
          <article>
              Son unas tarjetas hechas específicamente para estudiar, en las que por una cara se pone el concepto o pregunta a estudiar y por la otra cara se pone la respuesta o el desarrollo.
              <br></br>
              Estas fichas de estudio te servirán para sintetizar los conceptos más importantes que tengas que estudiar: definiciones, ejemplos, fórmulas, datos, fechas clave, normativa, etc.
              <br></br>
              A la hora de crear estas tarjetas de estudio tendrás que ser original y creativo con la información que vas a estudiar y esto hará que tu actitud frente al estudio cambie totalmente y por lo tanto tus resultados mejoren.
            </article>
          
            </div>

            <div className={classes["left-container"]}>
            <figure>
              <img src="src/assets/feed9.jpeg" width="500px" />
            </figure>
          </div>
          </section>

          <a href="https://www.educalive.com/blog/como-estudiar-tarjetas-estudio-flashcards-ejemplos">Para comprender mejor este método de estudio</a>
      </body>
    </div>
  );
};

export default Feed;