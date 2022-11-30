import classes from "./Feed.module8.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <div className={classes["titulo"]}>
        <h1 >
            El Resumen
            </h1>
            <hr></hr>
            <p>
            Método de estudio
            </p>
        </div>
     
        
     
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
          <article>
          El resumen es una técnica de estudio con la que conseguiremos que todo el contenido que tenemos que estudiar, por extenso que sea, se convierta en otro documento más corto en el que esté incluida toda la información importante, que nos permita optimizar el tiempo de estudio.
          <br></br>
          A la hora de hacer un buen resumen es importante que hagas una lectura activa del texto que quieras sintetizar. Una vez que hayas leído el texto las veces que sean necesarias para comprenderlo, deberías subrayar el contenido más relevante. 
          <br></br>
          En caso de que el contenido que quieras resumir sea muy extenso también es interesante crear un pequeño esquema que te sirva de guía a la hora de redactar tu resumen.
          <br></br>
          Por cierto, a la hora de redactar el resumen es vital que lo hagas con tus propias palabras.
          <br></br>
          Está totalmente prohibido copiar y pegar.
          <br></br>
          <br></br>

          Para comprender mejor este método de estudio:
          <br></br>
          El resumen es una técnica de estudio con la que conseguiremos que todo el contenido que tenemos que estudiar, por extenso que sea, se convierta en otro documento más corto en el que esté incluida toda la información importante, que nos permita optimizar el tiempo de estudio.
          <br></br>
          A la hora de hacer un buen resumen es importante que hagas una lectura activa del texto que quieras sintetizar. Una vez que hayas leído el texto las veces que sean necesarias para comprenderlo, deberías subrayar el contenido más relevante. 
          <br></br>
          En
          caso de que el contenido que quieras resumir sea muy extenso también es interesante crear un pequeño esquema que te sirva de guía a la hora de redactar tu resumen.
          <br></br>
          Por cierto, a la hora de redactar el resumen es vital que lo hagas con tus propias palabras.
          <br></br>
          Está totalmente prohibido copiar y pegar.
            </article>
          
            </div>

            <div className={classes["left-container"]}>
            <figure>
              <img src="src/assets/feed8.jpeg" width="500px" />
            </figure>
          </div>
          </section>

          <a href="https://www.educalive.com/blog/como-hacer-resumen">Para comprender mejor este método de estudio</a>
      </body>
    </div>
  );
};

export default Feed;