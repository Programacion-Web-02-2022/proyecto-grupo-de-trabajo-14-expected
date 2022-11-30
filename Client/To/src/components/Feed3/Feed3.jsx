import classes from "./Feed.module3.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
            <h1>
            ¡Conoce tu estilo de aprendizaje!
            </h1>
            <hr></hr>
            <p>
            En este apartado descubrirar cual es el método de estudio más adecuado para que mejores tu aprendizaje
            </p>
            <button>TEST</button>
            
          </div>
          

          <div className={classes["left-container"]}>
            <figure>
              <img src="src/assets/image2.jpeg" width="500px" />
            </figure>
          </div>
        </section>
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
            <h1>
            Metodos de Estudio
            </h1>
            <hr></hr>
            <p>
            Son distintas perspectivas o estrategias aplicadas al aprendizaje. Generalmente son fundamentales para al canzar el éxito académico y conseguir buenas notas.
            </p>
          </div>
        </section>

        <section>
          <div className={classes["grid-container"]}>
            <div className={classes["grid-item"]}>
              <i class="fi fi-rr-pencil"></i>
              <h1>Mapa Mental</h1>
              <p>
              Resume y organiza nuestras ideas.
              </p>
              <button ><a>Conocer más</a></button>
            </div>

            <div className={classes["grid-item"]}>
              <i class="fi fi-rr-pencil"></i>
              <h1>Fichas de estudio</h1>
              <p>
              Para asimilar datos concretos
              </p>
              <button><a>Conocer más</a></button>
            </div>

            <div className={classes["grid-item"]}>
            <i class="fi fi-rr-pencil"></i>
              <h1>Subrayar</h1>
              <p>
              Destaca las partes más significativas del texto.  
              </p>
              <button><a href="../../../../index4.html">Conocer más</a></button>
            </div>

            <div className={classes["grid-item"]}>
            <i class="fi fi-rr-pencil"></i>
              <h1>Reglas Mnemotécnicas</h1>
              <p>
              Memorizar listas y conjuntos.
              </p>
              <button><a>Conocer más</a></button>
            </div>

            <div className={classes["grid-item"]}>
            <i class="fi fi-rr-pencil"></i>
              <h1>Método de Cornell</h1>
              <p>
              Un nuevo procedimiento eficaz, rápido y sencillo para tomar apuntes.
              </p>
              <button><a>Conocer más</a></button>
            </div> 

            <div className={classes["grid-item"]}>
            <i class="fi fi-rr-pencil"></i>
              <h1>Resumen</h1>
              <p>
              Incluye la información más importante para estudiar.
              </p>
              <button><a>Conocer más</a></button>
            </div>

          </div>
        </section>
      </body>
    </div>
  );
};

export default Feed;
