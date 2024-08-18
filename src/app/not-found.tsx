import { Row } from "antd";
import notFoundImage from "@/assets/trendy-bazar-not-found.svg";

const NotFoundPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundImage: `url(${notFoundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    ></Row>
  );
};

export default NotFoundPage;
