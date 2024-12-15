import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { StyledMenu } from "./style";

const ProductMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate(`${process.env.PUBLIC_URL}/product/inspection-robot`)}>
        Inspection Robot
      </Menu.Item>
      {/* <Menu.Item key="2" onClick={() => navigate("product/dual-robot")}>
        Dual Robot System
      </Menu.Item> */}
    </Menu>
  );
};

export default ProductMenu;
