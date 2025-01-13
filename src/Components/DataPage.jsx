import React from 'react';

const DataPage = () => {
  const data = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Data Page</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>Item {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataPage;
