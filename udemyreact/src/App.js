import React from "react";
import { Fragment } from "react";

class App extends React.Component{

  state = {
    
    nome : ""
    
  }
  
modificarNome = (event) => {
  this.setState({
    nome: event.target.value
  })
}

componentDidMount(){
  console.log('Executou o DidMount')
}

  render(){
    console.log('Executou o render')
    return (
      <Fragment>
        <input className="text-centralizado" type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello {this.state.nome}</h1>
        <h2>idade = {this.props.idade}</h2>
      </Fragment>
                
      
      
      
    )
  }
}

export default App;