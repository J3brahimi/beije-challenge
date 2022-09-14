import styled from "@emotion/styled";

export const SignInFormWrapper = styled.form`
  text-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 900px) {
    width: 75%;
  }
`;
