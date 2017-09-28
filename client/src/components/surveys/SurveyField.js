import React from 'react';

export default ({ input, label }) => {
  return (
    <div>
      <lavel>{label}</lavel>
      <input {...input} />
    </div>
  );
};
