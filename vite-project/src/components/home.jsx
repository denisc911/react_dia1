import React from 'react';
const hobby = ["Los Ordenadores", "Escuchar Musica", "Coleccion de Monedas", "Gamming PC"]
const tech = ["HTML", "CSS", "JS", "C++", "PHP", ".net", "VB", "Mysql-SQL server", "Node","react"]
class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <section className="about">
          <h2>Sobre Mí</h2>
          <p>Soy {this.props.name} {this.props.surname} y tengo {this.props.age}.
            Mi mayores hobbies han sido{this.props.hobbie}.
            En estos momentos {this.props.currentL} mas en concreto {this.props.matter}. 
            Principalmente mi interés se centra en la parte de {this.props.interest} aunque sin dejar de lado el back.
          </p>
          <p>
            En mi tiempo libre intento siempre hacer cosas que me llenan y ayudan a despejarme entre las que se encuentran:
          </p>
          <ul className="lista">
        {hobby.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
        </section>
        <div className="techs">
          <h2>Tech:</h2>
          <p>
            Estas son las tecnologías que manejo:
          </p>
        <ul className="lista">
          {tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      </div>
      </main>
    );
  }
}

export default Home;



