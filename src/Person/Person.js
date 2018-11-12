import React from 'react'
import './Person.css'
// import Radium from 'radium'

// no class, its a function, can't call state
const Person = (props) => {
  // made possible with radim media query
  // TRANSFORMING SELECTORS, ANIMANATIONS WITH KEY FRAMES, WRAP APPLICATION IN SPECIAL COMPONENT
  // PROVIDED BY RADIUM CALLED StyleRoot
  // const style = {
  //   '@media (min-width: 500px)' : {
  //     width: '450px'
  //   }
  // }
  return (
    <div className="Person">
    {/* <div className="Person" style={style}> */}
      <p onClick={props.click}>Hi, my name is {props.name} and I'm {props.age} years old. {props.children}</p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )

}

// export default Radium(Person)
export default Person


// {/* normal input element
//       onChange will be fired whenever the value of this input changes
//       pass in a new handler method */}