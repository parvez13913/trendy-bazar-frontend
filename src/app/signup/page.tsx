import Signup from "@/components/Signup/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrendyBazar | Signup",
};

const SignuPage = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default SignuPage;
