import styled from "styled-components";
import bg from "assets/images/login/bg.jpg";

export const Container = styled.div`
  width: 100%;
  background-color: #5c7161;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  padding: 150px 0;

  .ant-form-item {
    margin-bottom: 32px;
    position: relative;

    .ant-form-item-explain {
      position: absolute;
      bottom: -28px;
      left: 0;
    }
    .ant-form-item-control-input {
      max-height: 50px;
      .ant-input {
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 0.4px;
        height: 50px;
        line-height: 22px;
        padding: 0px 11px;

        &-password {
          padding: 0px 11px 0px 0px;
        }
      }
      .ant-btn-primary {
        background-color: rgb(0 0 0 / 85%);
        height: 50px;
        width: 100%;
        border: none;
        font-family: "Montserrat-Medium";
        font-size: 16px;
        font-weight: 500;
        color: #fff;
      }
    }
    .ant-form-item-label {
      .ant-form-item-required {
        line-height: 1.19;
        letter-spacing: 0.4px;
        font-family: "Montserrat-Medium";
        font-size: 16px;
        font-weight: 500;
        &:before {
          content: "" !important;
          margin: 0 !important;
        }
      }
    }
  }

  .ant-checkbox-wrapper .ant-checkbox + span {
    align-self: center;
  }
`;

export const BoxImg = styled.div`
  max-width: 700px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  padding: 75px 70px;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-size: 40px;
  font-family: "DMSerifDisplay-Regular";
`;
