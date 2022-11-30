import classes from "./Feed4.module.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <div className={clasess["titulo"]}>
        <h1 >
            Subrayar
            </h1>
            <hr></hr>
            <p>
            Método de estudio
            </p>
        </div>
     
        
     
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
          <article>
              Consiste en poner una raya debajo de las ideas más importantes de un texto, con el fin de destacarlas del
              resto, y favorecer así su atención.

              Para aplicar adecuadamente este método es necesario saber leer los apuntes, los libros, las copias
              y todo material escrito que aporte a los estudios realizados. Al hacer el subrayado se deben tener en
              cuenta las palabras clave de los párrafos y de las frases; no es adecuado subrayar frases completas,
              que terminan sin encerrar el contenido principal del mensaje.

              Para esto es necesario hacer por lo menos una lectura previa del material que se va a subrayar (Ana
              María Álvarez Aguirre, Santiago de Chile, 2009).
            </article>
          
            </div>

            <div className={classes["left-container"]}>
            <figure>
              <img src="src/assets/subrayar.png" width="500px" />
            </figure>
          </div>
          </section>

          <a href="https://estudianteforever.com/tecnica-de-estudio-el-subrayado/">Para comprender mejor este método de estudio</a>
      </body>
    </div>
  );
};

export default Feed;