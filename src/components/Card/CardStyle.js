import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: 15rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }

  figure {
    width: 100%;
    height: clamp(13rem, 20vw, 16rem);
    // border: 1px solid red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    // border: 1px solid red;
    > * {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      margin-bottom: 7px;
    }

    p {
      font-size: clamp(0.85rem, 1.5vw, 0.95rem);
      margin-top: 10px;
    }
  }
`;
