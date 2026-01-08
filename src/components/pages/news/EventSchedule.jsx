import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { v4 as uuidv4 } from "uuid";
import NEXTDATES from "../../datas/nextDatesDatas.json";

import CarteRdvHoriz from "../../elements/Cards/CardRdvHoriz";

const EventSchedule = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="pt-5" id="eventschedule"></div>
      <div className="container pt-5 rounded-1">
        <div
          className={`
             ${theme ? `text-light` : `text-dark`}`}
        >
          <div className="row  justify-content-center ">
            {NEXTDATES.map((nextDate) => {
              return (
                <CarteRdvHoriz
                  key={uuidv4()}
                  id={nextDate.id}
                  pct={nextDate.pct}
                  title={nextDate.title}
                  place={nextDate.place}
                  day={nextDate.day}
                  date={nextDate.date}
                  hours={nextDate.hours}
                  content1={nextDate.content1}
                  content2={nextDate.content2}
                  content3={nextDate.content3}
                  content4={nextDate.content4}
                  content5={nextDate.content5}
                  subcontent1={nextDate.subcontent1}
                  subcontent2={nextDate.subcontent2}
                  subcontent3={nextDate.subcontent3}
                  subcontent4={nextDate.subcontent4}
                  subcontent5={nextDate.subcontent5}
                  resa={nextDate.resa}
                  cost={nextDate.cost}
                  link={nextDate.link}
                />
              );
            })}
          </div>

          {/* <h4 className="pt-4 text-light text-uppercase text-start">
            <span
              className={` Titre2 px-2
              ${theme ? `text-light` : `text-dark`}`}
            >
              Réservation conseillée : 06 58 23 03 26
            </span>
          </h4> */}
        </div>
      </div>
    </>
  );
};

export default EventSchedule;
