import classes from "./Feed.module7.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <div className={classes["titulo"]}>
        <h1 >
        Método de Cornell
            </h1>
            <hr></hr>
            <p>
            Método de estudio
            </p>
        </div>
     
        
     
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
          <article>
          Este sistema de estudio se caracteriza por dividir una misma hoja de apuntes en cuatro apartados.
          <br></br>
          Para ello, lo primero que hay que hacer es trazar dos líneas horizontales, una en la parte superior y otra en la inferior, de manera que queden dos márgenes horizontales en ambos extremos de la hoja y una parte central. En esta zona centro de la hoja, se dibuja una línea vertical que divide la franja en dos espacios, quedando un cuarto del espacio a la izquierda y tres cuartos a la derecha.
          <br></br>
          ¿Qué debe contener cada apartado?
          <br></br>
          Margen horizontal superior: se reserva para anotar el título, el tema de la clase, la asignatura, la fecha y la paginación -clave para mantener el orden.
          <br></br>
          Espacio principal: la columna más ancha del espacio central, que queda a la derecha, sirve para tomar nota de la información que se considere más relevante de la clase como, por ejemplo, fórmulas, esquemas, frases importantes, desarrollo de conceptos, ejemplos, etc.
          <br></br>
          Margen izquierdo: esta división es para formular preguntas clave que puedan responder a todo el tema, ordenar las ideas y anotar los conceptos clave y aquellas dudas pendientes por resolver.
          <br></br>
          Margen horizontal inferior: por último, en la parte inferior, la hoja se completa con un resumen con el fin de tener una visión general de los puntos más relevantes del tema.
            </article>
          
            </div>

            <div className={classes["left-container"]}>
            <figure>
              <img src="src/assets/feed7.jpeg" width="500px" />
            </figure>
          </div>
          </section>

          <a href="https://www.becas-santander.com/es/blog/metodo-cornell.html">Para comprender mejor este método de estudio</a>
      </body>
    </div>
  );
};

export default Feed;