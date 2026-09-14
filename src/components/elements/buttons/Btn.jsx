import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Btn = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <a
      href="https://fr.ulule.com/embarquez-a-bord-de-la-nouvelle-guinguette-mobile/?utm_campaign=presale_234186&utm_source=shared-from-Ulule-project-page-on---http.referer--&utm_medium=uluid_6994343&fbclid=IwY2xjawTVftxleHRuA2FlbQIxMABicmlkETEyMmZ2UEh3Z3lVdmcwRG93c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHphZOEUfVnBu1XfjfuuSwe3aeql3LlVL6r87htJO9QyLQb-FPEeFjY8NC8WU_aem_3iHCQO9bcqnWbF-zREFnlQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        type="button"
        className={`btn btn-sm fw-bold  fw-bold w-100 ${
          theme ? "btn-outline-light" : "btn-outline-dark"
        }`}
      >
        <h3>
          <strong>Nous soutenir</strong>
        </h3>
      </button>
    </a>
  );
};

export default Btn;
