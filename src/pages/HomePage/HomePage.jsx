import React from "react";
import logo from "../../assets/logo.svg";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <img src={logo} className="hipo-logo" alt="logo" />

      <h1 className="homepage-title">Github Profile Explorer</h1>

      <Form>
        <Input />
      </Form>
    </div>
  );
}

export default HomePage;
