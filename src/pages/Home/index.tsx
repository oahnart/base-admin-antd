import { Breadcrumb } from "antd";
import { TableAntd } from "components";
import React, { useState } from "react";

import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";

const dataSource = [
  {
    id: 1,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
  {
    id: 2,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
  {
    id: 3,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
  {
    id: 4,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
  {
    id: 5,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
  {
    id: 6,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
  {
    id: 7,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
  {
    id: 8,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
  {
    id: 9,
    name: "name",
    total: "total",
    date: "date",
    quantitative: "quantitative",
    price: "price",
    progress: "progress",
  },
];

interface Pagination {
  current?: number;
  pageSize?: number;
}

function Home() {
  const CURRENT_PAGE = 1;
  const PAGE_SIZE = 4;

  const [pagination, setPagination] = useState<Pagination>({
    current: CURRENT_PAGE,
    pageSize: PAGE_SIZE,
  });

  const columns = [
    {
      title: "번호",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "상품명",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "주문번호",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "주문일자",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "수량",
      dataIndex: "quantitative",
      key: "quantitative",
    },
    {
      title: "구매금액",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "주문상태",
      dataIndex: "progress",
      key: "progress",
    },
  ];

  const itemRender = (current: any, type: string, originalElement: any) => {
    if (type === "prev") {
      return <ArrowLeft />;
    }
    if (type === "next") {
      return <ArrowRight />;
    }
    return originalElement;
  };

  return (
    <div className="box-container">
      <Breadcrumb>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>

      <TableAntd
        rowKey={(record: any) => record.id}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          itemRender: itemRender,
          // total: data?.pageable?.totalElement ?? 0,
          // total: 20,
          // ...pagination,
        }}
        scroll={{ y: "auto", x: 920 }}
        // onChange={(e) => getDataTogetherHistory(e.current, e.pageSize)}
        // loading={isLoading}
        // onRow={(record, rowIndex) => {
        //   return {
        //     onClick: () => {
        //       history.push(
        //         `${UrlInternal.MYPAGE_ART_SHOPPING_HISTORY}/${record.total}`
        //       );
        //     },
        //   };
        // }}
      />
    </div>
  );
}

export default Home;
