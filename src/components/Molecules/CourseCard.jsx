import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const CourseCard = ({id,title, image, price, profesor}) =>(

<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <Link to={`/cursos/${id}`}>
      <img src={image} alt={title}/>
    </Link>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">
        { `Prof.:${profesor}`}
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price}`}</a>
      </div>
  </div>
</article>
)

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  profesor: PropTypes.string
}

CourseCard.defaultProps ={
  title: "No se encontró título",
  image: "https://cache.desktopnexus.com/thumbseg/1726/1726524-bigthumbnail.jpg",
  price:"--",
  profesor:""
}
export default CourseCard