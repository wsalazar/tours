import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Tours/Loading/Loading";
import Tours from "./components/Tours/Tours";
import FetchTours from "./components/Tours/FetchTours/FetchTours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    /**
     * This FetchTours doesn't have to be different component.
     * It can be outside of this useEffect as a separate function.
     * It can be a separate function but it can then call a component as well.
     */
    FetchTours(url).
    then(data => {
      setTours(data)
      setLoading(false)
    })
  }, [])

  const resetList = () => {
    FetchTours(url).
    then(data => {
      setTours(data)
      setLoading(false)
    })  }
  return (
    <>
  <h4>{tours.length === 0 ? 'No Tours': 'Our Tours'}</h4>
  {loading && <Loading />}
  {!loading && <Tours tours={tours} setTours={setTours} />}
  <button className="btn" onClick={resetList}>Reset List</button>
  </>
);

};
export default App;
