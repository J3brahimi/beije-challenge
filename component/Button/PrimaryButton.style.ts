import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#000000",
  padding: "6px",
  borderRadius: "28px",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#444444",
    color: "#ffffff",
  },
}));
