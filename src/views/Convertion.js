import React, { Component } from "react";
import { ConverterMoney } from "../components";

export default class Convertion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupiah: 0,
      dollar: 0,
      euro: 0,
      yen: 0,
    };
  }

  handleConvertRupiah = (rupiah) => {
    let dollar = (parseFloat(rupiah) / 14398.01).toFixed(2).toString();
    let euro = (parseFloat(rupiah) / 16262.54).toFixed(2).toString();
    let yen = (parseFloat(rupiah) / 134.41).toFixed(2).toString();
    this.setState({ rupiah, dollar, euro, yen });
  };

  handleConvertDollar = (dollar) => {
    let rupiah = (parseFloat(dollar) * 14398.01).toFixed(2).toString();
    let euro = (parseFloat(dollar) / 1.13).toFixed(2).toString();
    let yen = (parseFloat(dollar) * 106.92).toFixed(2).toString();
    this.setState({ rupiah, dollar, euro, yen });
  };

  handleConvertEuro = (euro) => {
    let rupiah = (parseFloat(euro) * 16262.54).toFixed(2).toString();
    let dollar = (parseFloat(euro) * 1.13).toFixed(2).toString();
    let yen = (parseFloat(euro) * 120.77).toFixed(2).toString();
    this.setState({ rupiah, dollar, euro, yen });
  };

  handleConvertYen = (yen) => {
    let rupiah = (parseFloat(yen) * 134.41).toFixed(2).toString();
    let dollar = (parseFloat(yen) / 106.92).toFixed(2).toString();
    let euro = (parseFloat(yen) / 120.77).toFixed(2).toString();
    this.setState({ rupiah, dollar, euro, yen });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("result-convert").innerHTML = `<div class="result-convert-detail">
    Rupiah : ${this.state.rupiah} = Dollar : ${this.state.dollar} = Euro : ${this.state.euro} = Yen : ${this.state.yen}
    </div> `;
    // alert(
    //   `Rupiah : ${this.state.rupiah} = Dollar : ${this.state.dollar} = Euro : ${this.state.euro} = Yen : ${this.state.yen} `
    // );
  };

  render() {
    const { rupiah, dollar, euro, yen } = this.state;
    return (
      <div className="content-convert">
        <h1>Convert Money</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="content-convert-form-list">
            <ConverterMoney
              currLabel="Rupiah"
              convertMoney={rupiah}
              handleConvertMoney={this.handleConvertRupiah}
            />
            <ConverterMoney
              currLabel="Dollar"
              convertMoney={dollar}
              handleConvertMoney={this.handleConvertDollar}
            />
          </div>
          <div className="content-convert-form-list">
            <ConverterMoney
              currLabel="Euro"
              convertMoney={euro}
              handleConvertMoney={this.handleConvertEuro}
            />
            <ConverterMoney
              currLabel="Yen"
              convertMoney={yen}
              handleConvertMoney={this.handleConvertYen}
            />
          </div>
          <button type="submit">Convert Money</button>
        </form>
        <div id="result-convert"></div>
      </div>
    );
  }
}
