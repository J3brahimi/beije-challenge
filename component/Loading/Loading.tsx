import { LoadingWrapper } from "./Loading.style";
import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => {
  return (
    <LoadingWrapper>
      <MoonLoader color="#efe7dd" size={32} />
    </LoadingWrapper>
  );
};

export default Loading;
