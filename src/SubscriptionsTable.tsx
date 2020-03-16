import React from "react";
import { Table } from "antd";
import Subscription from "./types/Subscription";

interface Props {
  subscriptions: Array<Subscription>;
}

export default ({ subscriptions }: Props) => {
  const columns = [
    {
      title: "Company",
      dataIndex: "company",
      key: "company"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Invoice ID",
      dataIndex: "invoiceID",
      key: "invoiceID"
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate"
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate"
    },
    {
      title: "MRR",
      dataIndex: "mrr",
      key: "mrr"
    }
  ];

  return (
    <div>
      <Table dataSource={subscriptions} columns={columns} />
    </div>
  );
};
