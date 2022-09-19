import styled from "@emotion/styled";

export const SignInFormWrapper = styled.form`
  text-align: center;
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
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;

  > button {
    position: absolute;
    top: 40%;
    right: 24px;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    width: fit-content !important;
  }
`;
