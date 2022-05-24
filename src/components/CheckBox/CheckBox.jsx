import React, { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="check-box">
      <input type="checkbox" value="Box1" onChange={handleChange} />
      <p>
        <label> I am an artist</label>
      </p>
    </div>
  );
}

export { Checkbox };
