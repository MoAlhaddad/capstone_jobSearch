import React from "react";
import { Table } from "antd";
import { format } from "date-fns";

function Paginate(props) {
  const { jobList, displayFavoriteJobColumn } = props;
  const columns = [
    {
      title: "Job Title",
      dataIndex: "Job Title",
      key: "job_title",
      sorter: (a, b) => a.job > b.job,
      sortDirections: ["descend"],
    },
  ];


  return <Table size="large" columns={columns} dataSource={jobList} />;
}

export default Paginate;
