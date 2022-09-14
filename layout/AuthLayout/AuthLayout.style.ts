import styled from "@emotion/styled";

export const AuthLayoutWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;

  .left-side {
    background-color: #efe7dd;
    width: 35%;
    height: 100%;
    display: grid;
    place-items: center;
    box-shadow: 0px 2px 51px 0px rgba(0, 0, 0, 0.12);

    img {
      border-radius: 50%;
    }
  }
  .right-side {
    width: 65%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  @media (max-width: 900px) {
    .left-side {
      display: none;
    }
    .right-side {
      width: 100%;
    }
  }
`;
