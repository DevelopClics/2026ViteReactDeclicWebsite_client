import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import VISUALS from "../../datas/visualsTeamDatas.json";
import TitleTwo from "../../elements/Titles/TitleTwo";
import Picture from "../../elements/Picture";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutVisualsDedc = () => {
  const { theme } = useContext(ThemeContext);
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".team-member", {
        opacity: 0,
        y: 50,
        stagger: {
          amount: 1,
          grid: "auto",
          from: "start",
        },
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div ref={container} className="container-fluid pt-5 px-0 px-lg-5 rounded-1">
        <div className={theme ? "text-light" : "text-dark"}>
          <TitleTwo txt='Portrait de la " Dream Team "' />

          <div className="row gx-0">
            {VISUALS.map((item) => (
              <div
                key={item.id}
                className="team-member col-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 px-0 align-self-center"
              >
                <h5 className="mt-0 mb-0">
                  <Picture
                    classe="img-fluid"
                    pct={item.image}
                    alt={item.alt}
                    speed={item.speed}
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
