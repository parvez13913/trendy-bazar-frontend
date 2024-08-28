import Login from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrendyBazar | Login",
};

const loginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default loginPage;
