import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  min-width: 100%;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 0.6rem rgba(0, 0, 0, 0.267);
`;

export const HeaderWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 117rem;
  margin: 0 auto;
`;

export const HeaderImgWrap = styled.div`
  width: 5rem;
  height: 5rem;
`;

export const HeaderImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
