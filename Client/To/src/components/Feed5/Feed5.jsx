import classes from "./Feed.module5.scss";

const Feed = () => {
  return (
    <div>
      <body>
        <div className={classes["titulo"]}>
        <h1 >
              Reglas Mnemotécnicas
            </h1>
            <hr></hr>
            <p>
            Método de estudio
            </p>
        </div>
     
        
     
        <section className={classes["section-1"]}>
          <div className={classes["right-container"]}>
          <article>
              Con esta técnica puedes entrenar al cerebro a través de los juegos para que memorice a medio o largo plazo. Y, en el caso de las reglas mnemotécnicas, esto es posible gracias al uso de la asociación, la repetición y las reglas adaptables.
              Solo son un sistema complementario, ya que no te permiten desmenuzar conceptos para comprenderlos en profundidad, sino que tan solo te traen a la memoria los datos que necesitas.
              Por ejemplo, si estudias la Revolución Francesa, las reglas mnemotécnicas no te servirán para recordar todas las complejidades que representó este período a nivel social, político y económico; de eso se encargan las técnicas de estudio. Sin embargo, estas resultan muy útiles si necesitas saber con detalle fechas, nombres o hechos específicos.
              Trabajan a través de asociaciones de palabras, imágenes y música, lo que ayuda a que el cerebro recuerde, ya que   los sentidos juegan un papel fundamental en la retención de la información.
              <br></br>
              ¿Cómo funcionan las reglas mnemotécnicas?
              <br></br>
              <br></br>
              Método de las iniciales 
              <br></br>
              Esta técnica sirve para memorizar listas de palabras y reglas sencillas. En el caso, por ejemplo, de que debas recordar las provincias de algunas comunidades autónomas, tendrías que coger sus iniciales e imaginar una nueva palabra que te sea fácil de recordar a partir de estas.
              <br></br>
              Método de la cadena
              <br></br>
              Es similar al método anterior, ya que también retiene las iniciales o segmentos de las palabras, pero en lugar de formar un concepto diferente, construyes una oración. La clave es que la historia o la frase sea lo más estrambótica posible. Sin ir más lejos, en química se suele usar para recordar fórmulas y otros datos importantes. Por ejemplo:
              <br></br>
              “Cuando el OSO toca el pITO, PerICO toca el silbATO”
              <br></br>
              La regla a recordar aquí es que los ácidos cuyo nombre termina en “-oso” forman sales que terminan en “-ito”, y los ácidos que terminan en “ico” forman sales con terminación “ato”.
              <br></br>
              <br></br>
              La historia creativa
              <br></br>
              Crear relatos contribuye a que el cerebro genere conexiones emotivas y sensoriales. Si usamos la imaginación, somos más capaces de percibir esas ideas en la cabeza, asociarlas y, por lo tanto, memorizarlas. Por esta razón, si quieres recordar datos difíciles, como una sucesión de números, puedes inventarte un relato corto que los combine.
              <br></br>
              Un ejemplo es cuando se busca que los estudiantes incorporen una lista de vocabulario y, para ello, se crea un relato que la aplica a una situación cotidiana: un episodio en la oficina, una charla en familia, etc. Al conectar las palabras con el contexto, el estudiante logra incorporar casi de manera inconsciente aquello que le costaba.
              <br></br>
              <br></br>
              Método de Loci
              <br></br>
              Se basa en asociar imágenes de lugares y recorridos que conocemos a la perfección con una larga lista de palabras que debemos memorizar. Por tanto, lo primero que hay que hacer es seleccionar un recorrido habitual que conozcas muy bien. Después, diseñar el trayecto y realizarlo una y otra vez, porque el secreto está en los detalles.
            </article>
          
            </div>

            <div className={classes["left-container"]}>
            <figure>
              <img src="src/assets/feed5.jpeg" width="500px" />
            </figure>
          </div>
          </section>

          <a href="https://www.becas-santander.com/es/blog/reglas-mnemotecnicas-ejemplos.html">Para comprender mejor este método de estudio</a>
      </body>
    </div>
  );
};

export default Feed;