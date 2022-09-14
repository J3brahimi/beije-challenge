import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "store/store";

// Assets
import { PanelLayoutWrapper } from "./PanelLayout.style";

type TProps = {
  children: JSX.Element[] | JSX.Element | string;
};

const PanelLayout: React.FC<TProps> = ({ children }) => {
  const router = useRouter();
  const userEmail = useSelector((state: RootState) => state.user.email);

  useEffect(() => {
    // if user not login redirect to sign-in
    if (!userEmail) router.push("/auth/sign-in");
  }, [userEmail]);

  return (
    <PanelLayoutWrapper>
      <header>
        <Image src="/img/beije.jpg" alt="BEIJE Logo" width={64} height={64} />
      </header>
      <div className="content">{children}</div>
    </PanelLayoutWrapper>
  );
};

export default PanelLayout;
