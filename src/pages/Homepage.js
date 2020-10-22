import React, { useState } from "react";
import { Nelson } from "../components/Data/Data";
import { HomePageContainer } from "./HomePageElements";
import Information from "../components/Data/Information";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Information {...Nelson} />
    </HomePageContainer>
  );
};

export default HomePage;
