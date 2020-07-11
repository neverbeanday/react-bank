import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home, Convertion, About, Contact } from "./views"; //Load view yang di tampilkan di bagian content
import { Header, Footer } from "./components"; //Load component yang ditampilkan
import { ThemeContext } from "./themeContext";

class App extends React.Component {
  constructor() {
    super();
    this.onChangeTheme = () => {
      this.setState((prevState) => ({
        backgroundTheme:
          prevState.backgroundTheme === "dark" ? "white" : "dark",
        colorTheme: prevState.colorTheme === "white" ? "dark" : "white",
      }));
    };
    this.state = {
      backgroundTheme: "white",
      colorTheme: "dark",
      onChangeTheme: this.onChangeTheme,
    };
  }

  render() {
    return (
      <Router>
        {" "}
        {/* Pembungkus Router */}
        <div className="App">
          <ThemeContext.Provider value={this.state}>
            <Header /> {/* Komponen Header */}
            <Switch>
              {" "}
              {/* Wadah Views untuk di tampilkan */}
              <Route exact path="/">
                {" "}
                {/* Wrap dari Views yang ingin ditampilkan */}
                {/* Exact berfungsi untuk menentukan default dari View/Route yang ingin tampilkan */}
                {/* Path befungsi untuk menentukan lokasi dari Route di URL */}
                <Home />
              </Route>
              <Route path="/convertion">
                <Convertion />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
            <Footer /> {/* Komponen Footer */}
          </ThemeContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
