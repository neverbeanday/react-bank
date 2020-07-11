import React, { Component } from "react";

export default class ContactForm extends Component {
  //Scroll Restioration
  // useEffect(() => {
  //   window.scrollTo(0, 0, "smooth");
  // }, []);
  constructor(props) {
    super(props);
    this.inputFile = React.createRef();
    this.inputCategory = React.createRef();
    this.state = {
      name: "",
      email: "",
      tell: "",
    };
  }
  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    alert(`
      Name: ${this.state.name}
      Email: ${this.state.email}
      Tell Us your concerns: ${this.state.tell}
      Category: ${this.inputCategory.current.value}
      File: ${this.inputFile.current.files[0].name}
    `);
    // console.log("Name: " + this.state.name);
    // console.log("Email: " + this.state.email);
    // console.log("Tell Us: " + this.state.tell);
    // console.log("Category: " + this.inputCategory.current.value);
    // console.log("File: " + this.inputFile.current.files[0].name);
    event.preventDefault();
  };
  onSubmit;
  render() {
    const { name, email, tell } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="content-contact-form">
        <p>Please share the detail</p>
        <div>
          <label>Name :</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Email Address :</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Select Category :</label>
          <select ref={this.inputCategory}>
            <option name="category" value="Tell me about">
              Tell me about
            </option>
            <option name="category" value="Help me with">
              Help me with
            </option>
          </select>
        </div>
        <div>
          <label>Tell us your concerns :</label>
          <textarea
            name="tell"
            type="text"
            value={tell}
            onChange={this.onChange}
            rows="8"
          />
          <p>The more we know, the more we would be able to help you.</p>
        </div>
        <div>
          <label for="file" className="file-input">
            Attach File
          </label>
          <input name="file" type="file" id="file" ref={this.inputFile} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
