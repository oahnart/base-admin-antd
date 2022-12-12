import styled from "styled-components";

export const Container = styled.div`
  .box-logo {
    padding: 70px 0;
    background-color: #fff;
    text-align: center;

    img {
      width: 140px;
      object-fit: contain;
      height: auto;
      &.mini-logo {
        width: 70px;
      }
    }
  }

  .ant-layout-sider {
    background-color: #fff;
  }

  .ant-layout-sider-trigger {
    background-color: #1890ff;
  }

  .ant-layout-header {
    background-color: #fff;
  }
`;
