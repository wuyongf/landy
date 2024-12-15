import styled from "styled-components";
import { Menu } from "antd";

export const StyledMenu = styled(Menu)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f4f6f8;

  .ant-menu-item {
    font-size: 1rem;
    font-weight: 500;
    padding: 10px 20px;
    color: #333;
    transition: all 0.3s ease;

    &:hover {
      background-color: #2e186a;
      color: #fff;
    }
  }

  .ant-menu-item-selected {
    background-color: rgb(255, 130, 92) !important;
    color: #fff !important;
  }
`;
