import styled from "styled-components";

export const Container = styled.div`
  .box-logo {
    padding: 70px 0;
    background-color: #fff;
    text-align: center;

    img {
      width: 120px;
      object-fit: contain;
      height: auto;
      cursor: pointer;
      &.mini-logo {
        width: 70px;
      }
    }
  }

  .ant-layout-sider {
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 5%) 0px 4px 5px -2px,
      rgb(0 0 0 / 4%) 0px 7px 10px 1px, rgb(0 0 0 / 2%) 0px 2px 16px 1px;

    .hr-sider {
      width: calc(100% - 40px);
      margin: 40px auto;
      border: 1px solid #d9d9d9;
    }

    .box-logout {
      display: flex;
      align-items: center;
      padding: 0 25px;
      gap: 10px;
    }
  }

  .ant-layout-sider-trigger {
    background-color: #1890ff;
  }

  .ant-layout-header {
    background-color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 35px;

    .ant-input-affix-wrapper {
      max-width: 450px;
      border-radius: 100px;
      padding: 4px 25px;

      .ant-input {
        min-height: 35px;
      }

      .ant-input-suffix {
        svg {
          width: 20px;
          height: auto;
        }
      }
    }
    .ant-row {
      .hr-rotate {
        margin: 0 25px 0 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item-hr {
          width: 2px;
          background-color: #d9d9d9;
          height: 90%;
        }
      }

      .avatar {
        width: 50px;
        height: auto;
        object-fit: contain;
      }

      .box-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        .name-admin {
          font-weight: 700;
          line-height: 22px;
          font-size: 30px;
          font-size: 16px;
        }
        .position-user {
          line-height: 18px;
          font-size: 13px;
          color: rgb(0 0 0 / 55%);
          font-weight: 600;
        }
      }

      .ti-home {
        font-size: 20px;
        cursor: pointer;
      }

      .center-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;
