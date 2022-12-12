import styled from "styled-components";

export const Container = styled.div`
  /**table */
  .ant-table-wrapper {
    .ant-table-cell {
      font-family: "Montserrat-Regular";
      font-size: 14px;
      letter-spacing: 0.4px;
      text-align: center;
      /* color: #5d7160; */
    }
    .ant-table-header {
      .ant-table-cell {
        font-family: "Montserrat-SemiBold";
        font-size: 16px;
        font-weight: 600;
        &::before {
          content: none !important;
        }
      }
      .ant-table-thead > tr > th {
        border: none;
        background-color: #e6f7ff;
        padding: 20px 8px;
        @media screen and (max-width: 768px) {
          padding: 20px 5px;
        }
      }
    }
    .ant-table-body {
      cursor: pointer;
      .ant-table-tbody > tr > td {
        border-bottom: 0;
        padding: 13px 10px;
      }
    }
    .row-style-1 {
      background-color: #f5f5f575;
    }
  }
  /** pagination */
  .ant-pagination {
    margin-top: 42px;
    align-items: center;
    gap: 0px;

    .ant-pagination-next,
    .ant-pagination-prev {
      svg {
        margin-top: 9px;
      }
    }

    .ant-pagination-item {
      border: none;
      a {
        font-size: 14px;
        color: #111;
        font-family: "Montserrat-Regular";
        margin-top: 0.8px;
        :hover {
          color: #1890ff;
        }
      }
    }
    .ant-pagination-item-active {
      border: solid 1px #1890ff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #1890ff;
      line-height: 31px;
      a {
        color: #1890ff;
        font-family: "Montserrat-Regular";
        margin-top: -0.2px;
        padding: 0;
      }
    }
    .ant-pagination-item-ellipsis {
      top: 30%;
    }
    .ant-pagination-options {
      display: none;
    }
  }
`;
