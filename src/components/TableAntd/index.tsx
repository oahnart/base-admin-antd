import React from "react";
import { Table, TableProps } from "antd";
import * as S from "./style";

interface Props extends TableProps<any> {}

function TableAntd(props: Props) {
  return (
    <S.Container>
      <Table
        {...props}
        rowClassName={(record: any, index) => {
          return `row-style-${index % 2}`;
        }}
      />
    </S.Container>
  );
}

export default TableAntd;
