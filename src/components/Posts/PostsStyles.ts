import styled from "styled-components";

export const Carousel = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.a`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  height: 25em;
  width: 30em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: none;
  transition: all 0.5s ease;
  margin-right: 2rem;
  margin-bottom: 2rem;

  & :hover {
    transform: scale(1.03);
  }
`;

export const Img = styled.img`
  height: 60%;
  object-fit: contain;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.3em;
  color: #9cc9e3;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const Subtitle = styled.h2`
  font-size: 0.9em;
  color: #9cc9e3;
  margin-bottom: 1rem;
`;

export const Blurb = styled.p`
  font-size: 1em;
  color: #e4e6e7;
`;
