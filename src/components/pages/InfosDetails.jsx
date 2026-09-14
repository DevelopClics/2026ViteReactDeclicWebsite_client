import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
/* import H2 from "../Elements/H2"; */

const InfosDetails = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="infos">
        <div
          className={`p-3 mt-3  rounded-3 shadow-sm ${
            theme ? `bg-black` : `bg-light`
          }`}
        >
          <div className="container">
            <div
              className={`row text-start
           ${theme ? `bg-black text-light` : `bg-light text-dark`}
          `}
            >
              <div className="col-12 col-md-4">
                <h6>
                  <u>Siége Social</u> :
                  <br />
                  30, avenue Henri Barbusse 07400 Le Teil
                  <br /> <br />
                  <u>Tél.</u> : 09 55 23 69 90
                  <br /> <br />
                  <u>SIRET</u> :
                  <br />
                  943 534 198 000 16
                </h6>
              </div>

              <div className="col-12 col-md-4">
                <h6>
                  <u>Hébergeur</u> : <br />
                  OVH <br />2 Rue Kellermann, <br />
                  59100 Roubaix
                </h6>
                <h6>
                  <u>RGPD</u> : <br />
                  Ce site ne collecte pas de cookies
                </h6>
              </div>
              <div className="col-12 col-md-4">
                <h6>
                  <u>Directrice de la publication :</u> <br />
                  Floriane PEVERELLI
                  <br /> <br />
                  <u>Charte Graphique d'inspiration</u> :<br />
                  GENARO Studio - Lyon
                  <br /> <br />
                  <u>Développement Web et Graphisme</u> :<br />
                  Julien GOSCICKI
                  <br />
                  <br />
                  <u>Credits photos</u> :<br />
                  Le Dauphiné Liberé :
                  <br />
                  Commission EBE (Stephane LECAILLE - Alexandre COVELLI - Cécile
                  BAYLE)
                  <br />
                  <br /> <br />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfosDetails;
