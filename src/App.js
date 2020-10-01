import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'


const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de EDteam</p>
        <p> Tu futuro te está esperando</p>
        <a href="http://ed.team" classNameName="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
</div>
</>
)

export default App;


//Reglas

//1: Toda etiqueta debe cerrarse
//2: Los componentes deben devolver un solo elemento padre
//3:Apoyarse de los Fragment cuando necesito devolver 2 elementos
//4:Fragment => <> hijos </>
//5: img siempre se cierra
//6: classNameName => classNameNameName
//7: for => htmlFor

