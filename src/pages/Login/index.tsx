import { Button, Checkbox, Form, Input, notification } from "antd";
import { UrlInternal } from "common/constants/endpoints";
import { setDataUser } from "features/user/userSlice";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { saveLocalStorage } from "utils/localStorage";
import { GETME } from "utils/localStorage/type";

import * as S from "./style";

function Login(): React.ReactElement {
  const history = useHistory();
  const location = useLocation();
  const stateBackUrl: any = location?.state;
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    try {
      console.log("values", values);
      dispatch(setDataUser("qwiqeutgegnehp"));
      saveLocalStorage(GETME, "qwiqeutgegnehp", 7, true);
      stateBackUrl?.fromURL
        ? history.push(stateBackUrl?.fromURL)
        : history.push(UrlInternal.HOME);
      // const res: any = await loginApi({
      //   userName: values.username,
      //   password: values.password,
      // });
      // if (res.data.accessToken) {
      //   if (res.data.userRole === "ADMIN") {
      //     notification.open({
      //       message: "관리자의 계정은 접속권한이 없습니다.",
      //       placement: "bottomRight",
      //       duration: 0,
      //     });
      //   } else {
      //     if (remember) {
      //       saveLocalStorage(GETME, res.data, 7);
      //     } else {
      //       saveLocalStorage(GETME, res.data, 7, true);
      //     }
      //     stateBackUrl?.fromURL
      //       ? history.push(stateBackUrl?.fromURL)
      //       : history.push(UrlInternal.HOME);
      //   }
      // }
    } catch (error) {}
  };

  const onFinishFailed = (values: any) => {
    let feildErr: any = values?.errorFields[0]?.name[0];
    const feildDom: any = document?.querySelector(`input[name='${feildErr}']`);
    feildDom?.focus();
  };

  return (
    <S.Container>
      <S.BoxImg>
        <S.Title>LOGIN</S.Title>
        <Form
          name="basic"
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="아이디"
            name="username"
            rules={[
              { required: true, message: "아이디를 입력해주세요" },
              {
                pattern: /^[^\s+]/,
                message: "아이디를 잘못 입력하셨습니다. 다시 확인해주세요.",
              },
            ]}
          >
            <Input name="username" />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
          >
            <Input.Password name="password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="">
            <Checkbox onChange={(e) => setRemember(e.target.value)}>
              자동로그인
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              로그인
            </Button>
          </Form.Item>
        </Form>
      </S.BoxImg>
    </S.Container>
  );
}

export default Login;
