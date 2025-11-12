import React, { useState } from 'react';

const converter = (value) => {
  const [fahrenheit, ustawFahrenheit] = useState('');

  return (
      <p>
        {`${value.value}°F = ${((value.value - 32) * 5) / 9}°C`}
      </p>
  );
};

export default converter;