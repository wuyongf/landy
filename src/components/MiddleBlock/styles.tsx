import styled from "styled-components";

export const MiddleBlockSection = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: white;

  /* Ensures that video or image background does not block other content */
  video,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4; /* Adjust transparency here */
    z-index: 0; /* Places the video or image below other content */
  }

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 570px;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
