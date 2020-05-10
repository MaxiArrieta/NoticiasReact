import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = { 
    noticias: []
   }

componentDidMount() {
  this.consultarNoticias();
}

consultarNoticias = async (categoria = 'general') => {
  const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=fe4175aa9dcb4b8da514d7819047e113`
  const respuesta = await fetch( url );
  const noticias = await respuesta.json();

  this.setState({
    noticias : noticias.articles
  })

}

  render() { 
    return ( 
      <Fragment>
        <Header
          titulo= "Noticias React-API"
        />
        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias= {this.consultarNoticias}
          />
          <ListaNoticias
            noticias = { this.state.noticias }
          />
        </div>
      </Fragment>
     );
  }
}
 
export default App