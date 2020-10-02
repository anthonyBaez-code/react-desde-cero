import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [
{
  "title": "React desde cero",
  "image":"https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
  "price": 40,
  "profesor":"Beto Quiroga"
},{
  "title": "Drupal desde cero",
  "image":"https://edteam-media.s3.amazonaws.com/courses/small/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
  "price": 30,
  "profesor":"Beto Quiroga"
},{
  "title": "Go desde cero",
  "image":"https://edteam-media.s3.amazonaws.com/courses/small/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
  "price": 50,
  "profesor":"Alexys Lozada"
},{
  "title": "HTML desde cero",
  "image":"https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
  "price": 10,
  "profesor":"Alvaro Felipe"
}

]

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
{
  cursos.map(curso => <Curso title={curso.title}image={curso.image}price={curso.price}profesor={curso.profesor}/>)
}
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

