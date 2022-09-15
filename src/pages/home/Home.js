import React from "react";
import { LeftHome } from "../homeleft/LeftHome";
import Header from "./../header/Header";
import { Story } from "./../../components/story/Story";
import { RightLink } from "../../components/rightlink/RightLink";
import "./style.css";
import { CreateStory } from "../../components/CreateStory/CreateStory";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <LeftHome />
      <div className="middle-section">
        {" "}
        <Story />
        <CreateStory/>
      </div>
      <RightLink />
    </div>
  );
};
export default Home;
