import styled from "styled-components";

export const Languages = styled.div`
  width: 41px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  .language {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    position: relative;
    div {
      cursor: pointer;
    }
  }
  .language-block {
    display: flex;
    align-items: center;
    img {
      margin: 0;
    }
  }
  .language-title {
    font-size: 16px;
    margin-right: 10px;
  }

  p {
    margin: 0px;
  }
  img {
    /* width:21px;
    height: 15px; */
    margin-right: 10px;
    object-fit: cover;
  }
  .headers {
    justify-content: space-between;
    align-items: center;
    > div {
      &.adrs-line {
        width: 70%;
        span {
          display: block;
          line-break: anywhere;
        }
      }
      &.language {
        width: 30%;
      }
    }
  }

  .pop-content {
    background-color: #ffffff;
    list-style-type: none;
    padding: 20px 0 20px;
    position: absolute;
    top: 30px;
    right: 0;
    z-index: 1;
    min-width: 160px;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgb(153 153 153 / 14%),
      0 3px 1px -2px rgb(153 153 153 / 20%), 0 1px 5px 0 rgb(153 153 153 / 12%);
    span {
      color: #212121;
    }
    .close-btn {
      position: absolute;
      right: 7px;
      top: 5px;
      width: 30px;
      height: 30px;
      padding: 0;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      color: #000000;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      outline: none !important;
    }
    li {
      padding: 5px 10px;
      button {
        display: flex;
        font-size: 16px;
        align-items: center;
      }
    }
  }
`;
