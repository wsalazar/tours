import { useState } from "react"

const Tour = ({id, name, info, image, price, removeTour}) => {

 const [readMore, setReadMore] = useState(false)

  return (
   <>
    <article key={id}>
     <p>{name}</p>
     <img src={image} width="50px" height="50px"/>
     <p>${price}</p>
     <p>{!readMore ? info.substr(0,350)+'...' : info}</p>
     <button className="btn" onClick=
     {() => setReadMore(!readMore)}> {!readMore ? "Read More": "Read Less"}</button>
    </article>
    <button className="btn" onClick={() => removeTour(id)}>Remove</button>
    <br/>
    <br/>
   </>
  )
}
export default Tour