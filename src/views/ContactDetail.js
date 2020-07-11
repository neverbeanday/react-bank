import React from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "../actions/counterAction";
import { FaFacebookF, FaLinkedin, FaInstagram, FaAngleUp, FaAngleDown } from "react-icons/fa";

const ContactDetail = (props) => {
  return (
    <div className="contact-detail">
      <div className="contact-detail-list">
        <div className="contact-detail-list-item">
          <FaFacebookF />
          <p>ahmadarifsaputra</p>
        </div>
        <div className="contact-detail-list-item">
          <FaLinkedin />
          <p>ahmadarifs</p>
        </div>
        <div className="contact-detail-list-item">
          <FaInstagram />
          <p>ahmad_arifs</p>
        </div>
      </div>
      <div className="contact-counter">
        <h1>Counter Contact : <br />{props.counter}</h1>
        <div className="contact-counter-button">
          <button onClick={props.handleIncrement}><FaAngleUp /></button>
          <button onClick={props.handleDecrement}><FaAngleDown /></button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(incrementAsync()),
    handleDecrement: () => dispatch(decrementAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);
