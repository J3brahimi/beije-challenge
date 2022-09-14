import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "store/store";

// Assets
import { AuthLayoutWrapper } from "./AuthLayout.style";

type TProps = {
  children: JSX.Element[] | JSX.Element | string;
};

const AuthLayout: React.FC<TProps> = ({ children }) => {
  const router = useRouter();
  const userEmail = useSelector((state: RootState) => state.user.email);

  useEffect(() => {
    // if user login redirect to panel
    if (userEmail) router.push("/panel");
  }, [userEmail]);

  return (
    <AuthLayoutWrapper>
      <div className="left-side">
        <Image
          src="/img/beije.jpg"
          alt="BEIJE Logo"
          width="100%"
          height="100%"
        />
      </div>
      <div className="right-side">{children}</div>
    </AuthLayoutWrapper>
  );
};

export default AuthLayout;
