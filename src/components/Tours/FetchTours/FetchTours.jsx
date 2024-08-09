const FetchTours = (url) => {
    const getTours = async () => {
      const response = await fetch(url)
      const json = await response.json();
      return json;
    }
    return getTours()
}
export default FetchTours