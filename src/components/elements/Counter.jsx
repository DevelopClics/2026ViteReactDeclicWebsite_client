import React from "react";
import CountUp from "react-countup";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Counter = ({ end, duration, delay }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.5, // Adjust as needed
  });

  return (
    <div ref={ref}>
      {isIntersecting && (
        <CountUp start={1} end={end} duration={duration} delay={delay} />
      )}
    </div>
  );
};

export default Counter;
