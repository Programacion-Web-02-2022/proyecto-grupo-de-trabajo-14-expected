import classes from "./Feed.module6.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <div className={classes["titulo"]}>
        <h1 >
            Mapa Mental
            </h1>
            <hr></hr>
            <p>
            Método de estudio
            </p>
        </div>
     
        
     
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
          <article>
          Un mapa mental es una representación gráfica en la que, podemos desarrollar una idea o concepto central, mediante una serie de ramificaciones que permiten ordenar y asociar una serie de conceptos e información relacionados con el concepto central.
          <br></br>
          Son muy visuales y esto facilita mucho el estudio. Con un solo vistazo a un mapa mental vamos a obtener una gran cantidad de información sobre un tema concreto, y además tendremos una imagen muy clara de cómo se relaciona toda esta información.
          <br></br>
          Puedes utilizar los mapas mentales para tomar apuntes y notas, ya que esta herramienta te permite capturar y organizar la información más importante que se ha visto en clase.
          <br></br>
          Los estudios han demostrado que el uso de estos mapas mentales aumenta de manera significativa la retención de la memoria.
          <br></br>
            </article>
          
            </div>

            <div className={classes["left-container"]}>
            <figure>
              <img src="src/assets/feed6.jpeg" width="500px" />
            </figure>
          </div>
          </section>

          <a href="https://www.educalive.com/blog/mapas-mentales-que-son-y-como-se-hacen">Para comprender mejor este método de estudio</a>
      </body>
    </div>
  );
};

export default Feed;