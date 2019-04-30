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
class Contador extends Component{
  constructor(props){
    super(props);
    this.state={contador: 0};
  }
  aumentar = ()=>{ this.setState({contador: this.state.contador+1})};

  render(){
    return (<div><p>{this.state.contador}</p><button onClick={this.aumentar}>Aumentar</button></div>);
  }
}

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  syncEmail = (email) => {
    this.setState({email: email});

  }

  syncPwd = (passwd) => {
    this.setState({password:passwd});
  }

  submitForm = () => {
    console.log(this.state)
  }

  render(){
    return (<form>
    <input onChange={(ev)=>{this.syncEmail(ev.target.value)}}
    type="email" placeholder="Correo Electrónico" value={this.state.email}></input>
    <input onChange={(ev)=>{this.syncPwd(ev.target.value)}}
    type="password" placeholder="Contraseña" value={this.state.password}></input>
    <div>
    <input 
    onClick={this.submitForm}
    type="submit" value="Enviar"></input>
    </div>
    </form>);
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
        <Contador/>
        <Formulario/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
