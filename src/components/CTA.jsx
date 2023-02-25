import React from 'react';
// import cv from "../material/fran_cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
      <a
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.canva.com/design/DAFS3vyQgWU/uD9bqDSt6j9qvsmIIshHxw/view?utm_content=DAFS3vyQgWU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
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
