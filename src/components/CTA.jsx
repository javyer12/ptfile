import React from 'react';
import cv from "../material/javier_cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">
        Lest's Talk
      </a>
      <a
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1OTdoXYhdaEldDrPEIO8lF2r41r3I1H-c/view?usp=sharing"
      >
        Watch my CV
      </a>
      {/* <a href={cv} download className="btn">
        Download my CV
      </a> */}
    </div>
  );
};
export default CTA;
