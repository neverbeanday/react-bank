import React, { useContext } from "react";
import OB from "../assets/icon-online.svg";
import SB from "../assets/icon-budgeting.svg";
import FO from "../assets/icon-onboarding.svg";
import OA from "../assets/icon-api.svg";
import { ThemeContext } from "../themeContext";

export default function Home() {
  const list = [
    {
      id: 1,
      image: <img src={OB} />,
      title: "Online Banking",
      content:
        "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.",
    },
    {
      id: 2,
      image: <img src={SB} />,
      title: "Simple Budgeting",
      content:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
    },
    {
      id: 3,
      image: <img src={FO} />,
      title: "Fast Onboarding",
      content: "We don't do branches.Open your account in minutes online and start taking control of your finances right away."
    },
    {
      id: 4,
      image: <img src={OA} />,
      title: "Open API",
      content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
  ];
  const { colorTheme, backgroundTheme, onChangeTheme } = useContext(
    ThemeContext
  );

  return (
    <div className="content-wrap content-wrap--background">
      <div className="content-wrap-product">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
      </div>
      <div
        className="content-wrap-choose"
        style={{
          backgroundColor: backgroundTheme === "dark" ? "black" : "white",
        }}
      >
        <div className="content-wrap-choose-title">
          <h2 style={{ color: colorTheme === "white" ? "white" : "black" }}>
            Why choose Easybank?
          </h2>
          <p style={{ color: colorTheme === "white" ? "white" : "black" }}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="content-wrap-choose-detail">
          {list.map((post) => (
            <div className="content-wrap-choose-detail-list" key={post.id}>
              {post.image}
              <h3 style={{ color: colorTheme === "white" ? "white" : "black" }}>
                {post.title}
              </h3>
              <p style={{ color: colorTheme === "white" ? "white" : "black" }}>
                {post.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
