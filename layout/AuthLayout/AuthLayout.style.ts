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

    .content {
      text-align: center;
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    @media (max-width: 900px) {
      width: 90%;
    }
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

export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 12px auto;
  > a {
    width: 50%;
    text-align: center;
    padding: 8px 0;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
  }
`;
