import React, { useState } from "react";
import * as S from "./style";
import { Layout } from "antd";

interface Props {}

function Test({}: Props): React.ReactElement {
  return (
    <Layout>
      <S.WpContainer>
        <S.Container>
          <h1>Header</h1>
          <div>component header</div>
        </S.Container>
      </S.WpContainer>
    </Layout>
  );
}

export default Test;
