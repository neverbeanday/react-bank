import React, { Component } from "react";
import { FaEuroSign } from "react-icons/fa";

export default class ConverterMoney extends Component {
  handleConvertMoney = (e) => {
    this.props.handleConvertMoney(e.target.value);
  };
  render() {
    const { currLabel, convertMoney } = this.props;

    return (
      <>
        <div className="convert-input">
          <label>
            {currLabel === "Rupiah"
              ? "Rupiah"
              : currLabel === "Dollar"
              ? "Dollar"
              : currLabel === "Euro"
              ? "Euro"
              : currLabel === "Yen"
              ? "Yen"
              : ""}
          </label>
          <input
            type="number"
            value={convertMoney}
            onChange={this.handleConvertMoney}
            placeholder={currLabel}
          />
        </div>
      </>
    );
  }
}
