import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "store/store";

// Assets
import { AuthLayoutWrapper, TabWrapper } from "./AuthLayout.style";

type TProps = {
  children: JSX.Element[] | JSX.Element | string;
  activeTab: "sign-in" | "sign-up";
};

const AuthLayout: React.FC<TProps> = ({ children, activeTab }) => {
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
      <div className="right-side">
        <div className="content">
          <h2>Merhaba</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam
          </p>
          <TabWrapper>
            <Link href="/auth/sign-in">
              <a
                style={{
                  borderBottom: activeTab === "sign-in" ? "3px solid #555" : "",
                }}
              >
                Sign in
              </a>
            </Link>
            <Link href="/auth/sign-up">
              <a
                style={{
                  borderBottom: activeTab === "sign-up" ? "3px solid #555" : "",
                }}
              >
                Sign up
              </a>
            </Link>
          </TabWrapper>
          {children}
        </div>
      </div>
    </AuthLayoutWrapper>
  );
};

export default AuthLayout;
