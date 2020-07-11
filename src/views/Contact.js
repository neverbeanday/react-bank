import React from "react";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import ContactDetail from "./ContactDetail";
import ContactForm from './ContactForm';

export default function Contact() {
  const history = useHistory();
  let match = useRouteMatch();

  return (
      <div className="content-contact">
        <h2>Contact Us</h2>
        <p>Wherever you are in the world, we are just a click away!</p>
        <ul>
          <li>
            <NavLink
              exact
              to={`${match.url}/form`}
              className="content-contact-link"
              activeClassName="content-contact-link-active"
            >
              Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/contact`}
              className="content-contact-link"
              activeClassName="content-contact-link-active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.url}/form`}>
            <ContactForm />
          </Route>
          <Route path={`${match.url}/contact`}>
            <ContactDetail />
          </Route>
        </Switch>
      </div>
  );
}
