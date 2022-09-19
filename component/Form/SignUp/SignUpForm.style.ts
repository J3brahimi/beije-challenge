import styled from "@emotion/styled";

export const SignUpFormWrapper = styled.form`
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
