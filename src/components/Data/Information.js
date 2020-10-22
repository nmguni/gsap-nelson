import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import {
  InfoContainer,
  InfoWrapper,
  Column1,
  Column2,
  ImagWrapper,
  DateP,
  DescriptionP,
  Img,
} from "./DataElements";

const Information = ({ description, date, date2, img, alt }) => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <Column1>
          <Navbar />
          <DescriptionP>{description}</DescriptionP>
          <DateP>
            {date} <br /> {date2}
          </DateP>
        </Column1>
        <Column2>
          <ImagWrapper>
            <Img src={img} alt={alt} />
          </ImagWrapper>
        </Column2>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Information;
