import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Spinner from "react-bootstrap/Spinner";

import JOINS from "../datas/joinDatas.json";

const JoinImage = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const [imageHasLoaded, setImageHasLoaded] = useState(false);

  useEffect(() => {
    if (imageHasLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Ensure spinner is visible for at least 1 second
      return () => clearTimeout(timer);
    }
  }, [imageHasLoaded]);

  return (
    <div
      className="col-4 col-xl-2 m-3 badge bg-light shadow-lg d-flex justify-content-center align-items-center"
      style={{ minHeight: '120px', position: 'relative' }} // Give a min-height to the container for the spinner
    >
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner animation="border" role="status" variant="secondary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          visibility: loading ? 'hidden' : 'visible',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity
          width: '100%'
        }}
      >
        <img
          className="img-fluid"
          src={item.image}
          alt={item.alt}
          style={{ objectFit: 'contain' }}
          onLoad={() => {
            setImageHasLoaded(true);
          }}
          onError={() => {
            setImageHasLoaded(true); // Still set to true to hide spinner even on error
          }}
        />
      </a>
    </div>
  );
};

const Joins = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="infos">
        <div
          className={`rounded-3 shadow-sm ${theme ? `bg-black` : `bg-light`}`}
        >
          <div className="container">
            <div
              className={`row  justify-content-center
           ${theme ? `bg-black text-light` : `bg-light text-dark`}
          `}
            >
              {JOINS.map((item) => (
                <JoinImage item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joins;
