import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Picture from "../../elements/Picture";
import loc01 from "../../../img/loc/flyer-a6-loc-vaisselle-final-repris.jpg";
import loc02 from "../../../img/loc/flyer-a6-loc-vaisselle-final-repris2.jpg";
import RENT from "../../datas/rentdishesDatas.json";
import Quote from "../../elements/Quote";

const Loc = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* <div id="location" className="pt-5"></div> */}
      <div className="container pt-5 rounded-1">
        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          {/* <TitleTwo txt="Titre 1" /> */}
          <h2 className="pt-2  text-start">
            Marre de la vaisselle jetable et des couteaux en bois qui grincent
            sous les dents ? <br /> Sensibilité écologique ? Envie de beau ? Et
            si on mutualisait enfin de la belle vaisselle pour vos évènements
            privés et autres repas associatifs?
          </h2>
          {/* <p className="pt-2 Texte1 text-start"></p> */}
          <h5 className="pt-2 Texte1 text-start">
            Déclic et des Claps vous propose un service de location de vaisselle
            chinée avec amour dans les brocantes locales et choisie avec soin
            pour une belle harmonie de vos tables ! <br /> <br />
            En plus… Déclic et des Claps livre et lave. Alors, facilitez-vous la
            vie et faites un geste pour la planète ! A vos commandes !
          </h5>

          <h5 className="pt-2 Texte1 text-start  ">
            <div className="my-5 text-center ">
            <div className="row">
                <div className="col-12 col-lg-6 d-flex mb-3">
                  <div style={{ height: "400px" }} className="w-100">
                    <Picture
                      pct={loc01}
                      classe="rounded-5 w-100 h-100"
                      alt="Photo vue intérieure du LOL"
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-6 d-flex mb-3">
                  <div style={{ height: "400px" }} className="w-100">
                    <Picture
                      pct={loc02}
                      classe="rounded-5 w-100 h-100"
                      alt="Photo vue extérieure du LOL"
                    />
                  </div>
                </div>
              </div>

              {/* <div className="row">
                <Picture
                  classe=" col-12 mb-3 mb-lg-0
              me-lg-4 
              col-lg-5 rounded-5"
                  pct={loc01}
                  alt="Photocarte recto"
                />
                <Picture
                  classe=" col-12 mt-3 mt-lg-0 ms-lg-4 col-lg-5 rounded-5"
                  pct={loc02}
                  alt="Photo carte verso"
                />
              </div> */}
            </div>
            <Quote
              line1="J'ai fait appel à l'association Déclic et des Claps
            pour la location de vaisselle à l'occasion d'un anniversaire
            avec 80 invités, et je suis absolument ravie !"
              line2="La vaisselle vintage
            et dépareillée a donné un charme incroyable à notre événement, les
            invités ont tous adoré. "
              line3="L'accueil et le sérieux de l'équipe
            ont également été remarquables. Et le gros plus : pas besoin de
            faire la vaisselle !"
              line4=""
              line5="C'est un service pratique, abordable et
            original que je recommande vivement."
              line6="Merci encore à
            l'ssociation pour leur professionnalisme et leur gentillesse
            !"
              sign="Céline VINCENT"
            />
          </h5>

          {/* <div className="row align-items-justify justify-content-center">
            {RENT.map((nextDate) => {
              return (
               
                  pct={nextDate.pct}
               
                
              );
            })}
          </div> */}
          <div className="row mt-5">
            {RENT.map((item) => {
              return (
                <div
                  className="mx-auto col-12 mb-3 col-sm-6  mb-sm-4 col-md-4  col-lg-2 "
                  key={item.id}
                >
                  <img
                    className="rounded-4 img-fluid "
                    src={item.pct}
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loc;
