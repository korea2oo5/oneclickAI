import React from "react";

const ProgressBar = (props) => {
  let { id, completed, label } = props;
  let bgcolor;

  // completed = 20;
  // label = "aaaa";

  if (id == 0) {
    bgcolor = "#3498DB";
  } else if (id == 1) {
    bgcolor = "#FFA07A";
  } else if (id == 2) {
    bgcolor = "#00695c";
  } else if (id == 3) {
    bgcolor = "#6a1b9a";
  } else if (id == 4) {
    bgcolor = "#ef6c00";
  }

  const outerContainerStyle = {
    border: "1px solid black",
    display: "flex",
  };

  const labelStyles = {
    width: "20%",
    border: "1px solid black",
    padding: 0,
    color: bgcolor,
    fontWeight: "bold",
  };

  const barContainerStyles = {
    height: 20,
    width: "80%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 3,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const valueStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={outerContainerStyle}>
      <span style={labelStyles}>{`${label}`}</span>
      <div style={barContainerStyles}>
        {/* <input /> */}
        <div style={fillerStyles}>
          {/* <input /> */}
          <span style={valueStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
