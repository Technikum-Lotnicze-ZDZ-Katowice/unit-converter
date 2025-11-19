import React, { useState } from 'react';

const Converter = (value) => {
  const [fahrenheit, ustawFahrenheit] = useState('');

  const color = value.value > 100 ? 'red' : 'black';

  return (
      <p style={{ color }}>
        {`${value.value}°F = ${((value.value - 32) * 5) / 9}°C`}
      </p>
  );
};

export default Converter;
