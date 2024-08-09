import Tour from "./Tour"

const Tours = ({tours, setTours}) => {
   const removeTour = (id)=> {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
 
  return (
   <>
   {tours.map((tour) => {
      return <Tour key={tour.id} {...tour} removeTour={removeTour} />
   })}
      
   </>
  )
}
export default Tours