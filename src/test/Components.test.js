import { render } from "@testing-library/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConverterMoney } from "../components/ConverterMoney";
import { Home } from "../views/Home";
import { About } from "../views/About";
import { Contact } from "../views/Contact";
import { ContactDetail } from "../views/ContactDetail";
import { ContactForm } from "../views/ContactForm";
import { Convertion } from "../views/Convertion";

test("Render Header Component", () => {
  render(Header);
});

test("Render Footer Component", () => {
  render(Footer);
});
test("Render Home Component", () => {
  render(Home);
});
test("Render About Component", () => {
  render(About);
});
test("Render Contact Component", () => {
  render(Contact);
});
test("Render Convertion Component", () => {
  render(Convertion);
});
test("Render Cases By ConverterMoney Component", () => {
  render(ConverterMoney);
});
test("Render Cases By ContactDetail Component", () => {
  render(ContactDetail);
});
test("Render Cases By ContactForm Component", () => {
  render(ContactForm);
});
