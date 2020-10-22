import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 90vh;
  color: #f4f4f4;
`;
export const InfoWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  padding: 2.2rem;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImagWrapper = styled.div`
  background: red;
  height: 100%;
  width: 100%;
`;
export const Img = styled.img``;
export const DateP = styled.p`
  color: #000;
  font-size: 5rem;
  letter-spacing: 1.5rem;
  margin: 0;
`;
export const DescriptionP = styled.p`
  color: #454545;
  font-size: 0.8em;
  transform: rotate(-90deg);
  width: 300px;
  position: relative;
  right: 22%;
  z-index: -10;
  /* Legacy vendor prefixes that you probably don't need... */

  /* Safari */
  -webkit-transform: rotate(-90deg);

  /* Firefox */
  -moz-transform: rotate(-90deg);

  /* IE */
  -ms-transform: rotate(-90deg);

  /* Opera */
  -o-transform: rotate(-90deg);

  /* Internet Explorer */
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
`;
