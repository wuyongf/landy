import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Drawer,  Dropdown} from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import ProductMenu from "../ProductMenu";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const navigate = useNavigate();

  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => {
            navigate("/home"); // Navigate to /home first
            setTimeout(() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 100); // Adjust delay as needed
          }}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => {
            navigate("/home"); // Navigate to /home first
            setTimeout(() => {
              const element = document.getElementById("mission");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 100); // Adjust delay as needed
          }}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <Dropdown overlay={<ProductMenu />} trigger={['click']}>
          <CustomNavLinkSmall onClick={(e) => e.preventDefault()}>
            <Span>{t("Product & Service")}</Span>
          </CustomNavLinkSmall>
        </Dropdown>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => {
            navigate(`${process.env.PUBLIC_URL}/home`); // Navigate to /home first
            setTimeout(() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 100); // Adjust delay as needed
          }}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="nwlogo&name.svg" width="90px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
