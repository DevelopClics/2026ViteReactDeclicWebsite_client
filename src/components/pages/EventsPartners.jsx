import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import EVENTSPARTNERS from "../datas/eventspartnersDatas.json";

/* import H2 from "../Elements/H2"; */

const EventsPartners = () => {
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
              {EVENTSPARTNERS.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-6 col-sm-4 col-md-3 col-lg-2  m-3 badge bg-light shadow-lg "
                  >
                    <a href={item.url} target="blank">
                      <img
                        className="img-fluid "
                        src={item.image}
                        alt={item.alt}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPartners;
