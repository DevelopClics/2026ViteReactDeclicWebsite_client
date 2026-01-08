import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import LOLPARTNERS from "../datas/lolpartnersDatas.json";

/* import H2 from "../Elements/H2"; */

const LolPartners = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="infos">
        <div
          className={`my-5 rounded-3 shadow-sm ${
            theme ? `bg-black` : `bg-light`
          }`}
        >
          <div className="container">
            <div
              className={`row  justify-content-center
           ${theme ? `bg-black text-light` : `bg-light text-dark`}
          `}
            >
              {LOLPARTNERS.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-3 m-1 m-sm-2 m-md-4  m-lg-3 m-xl-4 badge bg-light shadow-lg "
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

export default LolPartners;
