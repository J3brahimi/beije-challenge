import styled from "@emotion/styled";

export const SignUpFormWrapper = styled.form`
  text-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    width: 100%;

    > p {
      text-align: left;

      > a {
        color: #363634;
      }
    }

    > button {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    width: 75%;
  }
`;
