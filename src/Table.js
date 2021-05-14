import TableHead from "./TableHead";
import TableRow from "./TableRow";
import React from "react";

const Table = (props) => {
  const { tableData } = props;

  return (
    <table>
      <TableHead tableData={tableData} />
      <TableRow tableData={tableData} />
    </table>
  );
};

export default Table;
