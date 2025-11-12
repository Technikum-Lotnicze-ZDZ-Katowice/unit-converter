import React from "react";

const KryComponent = ({ value }) => {
  const convertDegreeToGrad = (degree) => {
    return (degree * 10) / 9;
  };

  return (
    <div>
      <h2>Stopień &rarr; Grad</h2>
      <p>
        {value} stopni to {convertDegreeToGrad(value).toFixed(2)} gradów.
      </p>
    </div>
  );
};

export default KryComponent;
