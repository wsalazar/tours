import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <article className="single-tour" key={id}>
        <div className="tour-info">
          <h5>{name}</h5>
          <img src={image} />
          <span className="tour-price">${price}</span>
          <p>{!readMore ? info.substr(0, 350) + '...' : info}</p>
          <button
            className="btn info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {' '}
            {!readMore ? 'Read More' : 'Read Less'}
          </button>
        </div>
        <button className="btn delete-btn" onClick={() => removeTour(id)}>
          Remove
        </button>
      </article>
    </>
  );
};
export default Tour;
