import styled from "@emotion/styled";

export const PanelLayoutWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;

  header {
    height: 12%;
    background-color: #efe7dd;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    box-shadow: 0px 2px 51px 0px rgba(0, 0, 0, 0.12);

    img {
      border-radius: 50%;
    }
  }

  .content {
    width: 100%;
    height: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;
