import {
  CloseOutlined,
  DesktopOutlined,
  FileOutlined,
  HomeFilled,
  HomeOutlined,
  LogoutOutlined,
  PieChartOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Divider, Input, MenuProps, Row } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";

import Logo from "assets/images/logo.png";
import Avatar from "assets/images/avatar.png";
import Kr from "assets/images/lang-kr.png";
import En from "assets/images/lang-eng.png";

import * as S from "./style";
import { MultipleLanguage } from "components";
import { useTranslation } from "react-i18next";
import { saveLocalStorage } from "utils/localStorage";
import { LANG } from "utils/localStorage/type";

import { Link, useHistory } from "react-router-dom";
import { UrlInternal } from "common/constants/endpoints";

interface Props {
  children?: React.ReactNode;
}

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "/test", <FileOutlined />),
];

const Template: React.FC = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { i18n } = useTranslation();
  const history = useHistory();

  const listOptions = [
    {
      src: Kr,
      name: "Korea",
      lang: "kr",
    },
    {
      src: En,
      name: "English",
      lang: "en",
    },
  ];

  const getLangSelected = (e: any) => {
    i18n.changeLanguage(e.lang);
    saveLocalStorage(LANG, e.lang, 7);
  };

  return (
    <S.Container>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="box-logo">
            <img
              src={Logo}
              alt="logo"
              className={collapsed ? "mini-logo" : ""}
              onClick={() => history.push(UrlInternal.HOME)}
            />
          </div>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={({ keyPath }) => {
              history.push(keyPath[0]);
              console.log("113", keyPath[0]);
            }}
          />

          <hr className="hr-sider" />

          <div
            className="box-logout"
            style={{ justifyContent: collapsed ? "center" : "flex-start" }}
          >
            <LogoutOutlined />
            {!collapsed && <div>Logout</div>}
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header>
            <Input placeholder="Search..." suffix={<SearchOutlined />} />
            <Row>
              <Col className="box-info">
                <Row gutter={[30, 0]}>
                  <Col className="center-icon">
                    {/* <i className="ti ti-home" /> */}
                    <HomeFilled className="ti-home" />
                    {/* <HomeOutlined /> */}
                  </Col>
                  <Col className="center-icon">
                    {/* <HomeOutlined /> */}
                    <MultipleLanguage
                      langSelected={getLangSelected}
                      listOptions={listOptions}
                    />
                  </Col>
                </Row>
              </Col>
              <div className="hr-rotate">
                <div className="item-hr" />
              </div>
              <Col>
                <Row gutter={[15, 0]}>
                  <Col className="box-info">
                    <div className="name-admin">Billi Danyonka</div>
                    <div className="position-user">Admin Manager</div>
                  </Col>
                  <Col>
                    <img src={Avatar} alt="avatar" className="avatar" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: "20px 20px 0" }}>{children}</Content>
        </Layout>
      </Layout>
    </S.Container>
  );
};

export default Template;
