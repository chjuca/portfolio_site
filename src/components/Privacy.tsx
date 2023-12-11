import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "ES" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Declaración de protección de datos</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Politica de Privacidad</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
