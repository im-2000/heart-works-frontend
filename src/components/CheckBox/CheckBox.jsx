function Checkbox(props) {
  const handleChange = () => {
    props.setChecked(!props.checked);
  };
  console.log("checkbox", handleChange);
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
