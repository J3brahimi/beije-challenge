import Head from "next/head";

// Layout
import PanelLayout from "layout/PanelLayout";

// Components
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store/store";
import { setUser } from "store/slices/user.slice";

const Panel = () => {
  const dispatch: AppDispatch = useDispatch();
  const userEmail = useSelector((state: RootState) => state.user.email);

  const handleLogout = () => {
    dispatch(setUser({ email: "" }));
  };
  return (
    <>
      <Head>
        <title>BEIJE | Panel</title>
      </Head>
      <PanelLayout>
        <Chip label={userEmail} variant="outlined" />
        <Button onClick={handleLogout} variant="contained">
          Logout
        </Button>
      </PanelLayout>
    </>
  );
};

export default Panel;
