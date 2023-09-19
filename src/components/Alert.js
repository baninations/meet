// src/components/Alert.js

import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.textColor,
      backgroundColor: this.bgColor,
      borderWidth: "3px",
      borderStyle: "dotted",
      borderColor: this.borderColor,
      borderRadius: "10px",
      textAlign: "center",
      fontSize: "14px",
      margin: "15px 0",
      padding: "12px",
      boxShadow: "3px 3px 5px 0 rgba(0,0,0,0.3)",
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontFamily: "Arial, sans-serif",
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(0, 0, 255)"; // blue
    this.bgColor = "rgb(220, 220, 255)"; // light blue
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(255,0,0)"; //red
    this.bgColor = "rgb(255,220,220)"; // light red
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(204, 85, 0)";
    this.bgColor = "rgb(242, 140, 40)";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
