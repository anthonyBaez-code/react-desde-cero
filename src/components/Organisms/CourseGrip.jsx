import React from "react"
import CourseCard from "../Molecules/CourseCard"
import withLoader from "../HOC/withLoader"



const CourseGrip = ({courses}) =>(
    <div className="ed-grid m-grid-4">
    { 
        courses.map( c => (
      <CourseCard
            key={c.id}
            id={c.id}
            title={c.title}
            image={c.image}
            price={c.price}
            professor={c.profesor}
      />
      )) 
    }
</div>
)

export default withLoader("courses")(CourseGrip)