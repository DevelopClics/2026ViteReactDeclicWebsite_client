import React from "react";

const Quote = ({ guillFin, line1, line2, line3, line4, line5, sign }) => {
  return (
    <>
      <div className="row gx-0 pt-2  text-start">
        <div className="col-2 text-end pe-0 quote-start">«</div>{" "}
        <div className="col-8 quote-text">
          <div
            className="rounded-4 p-1 p-md-2 p-lg-3 p-xl-4 p-xxl-5"
            style={{
              backgroundColor: "#f39540",
            }}
          >
            <blockquote>
              <h5 className="quote-text">
                <strong>
                  <div className="pb-3">{line1}</div>
                  <div className="pb-3">{line2}</div>
                  <div className="pb-1">{line3}</div>
                  <div className="pb-1">{line4}</div>
                  <div className="pb-1">{line5}</div>
                </strong>
              </h5>
            </blockquote>
            <h5>{sign}</h5>
          </div>
        </div>
        <div style={guillFin} className="col-2 ms-0 ps-0 text-start quote-end">
          »
        </div>
      </div>
    </>
  );
};

export default Quote;
