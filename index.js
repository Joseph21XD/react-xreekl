import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

/**Componente Funcional */
function MiComponente(props){
  return <><p>Hola {props.nombre}</p> {props.children}</>;
}

/**Componente Orientado a Objetos */
class MiComponenteClass extends Component{
  render(){
    return <p>Hello World</p>;
  }
}

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Mundo"
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <MiComponente nombre={nombre+" "+(2+3*4)}>
          <p> jaja saludos</p>
        </MiComponente>
        <MiComponenteClass/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
