import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ThemeContext } from "../../../context/ThemeContext";
import VISUALS from "../../datas/visualsTeamDatas.json";
import TitleTwo from "../../elements/Titles/TitleTwo";

const AboutVisualsDedc = () => {
  const { theme } = useContext(ThemeContext);
  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

  const boxesRef = useRef([]);

  useGSAP(() => {
    boxesRef.current.forEach((img, index) => {
      const speed = VISUALS[index].speed; // ← vitesse définie dans le JSON

      gsap.fromTo(
        img,
        { opacity: 0.25 },
        {
          opacity: 1,
          duration: speed, // ← chaque vitesse est unique
          repeat: -1,
          yoyo: true,
          ease: "power3.inOut",
        }
      );
    });
  }, []);

  return (
    <>
      <div className="container-fluid pt-5 px-0 px-lg-5 rounded-1">
        <div className="text-dark">
          <TitleTwo txt='Portrait de " Dream Team "' />

          <div className="row gx-0">
            {VISUALS.map((item, index) => (
              <div
                key={item.id}
                className="col-12 col-md-6 col-lg-4 col-xl-2 col-xxl-2 px-0 align-self-center"
              >
                <h5 className="mt-0 mb-0">
                  <img
                    ref={(el) => (boxesRef.current[index] = el)}
                    className="img-fluid"
                    src={item.image}
                    alt={item.alt}
                    style={{ objectFit: "contain" }}
                  />
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVisualsDedc;
