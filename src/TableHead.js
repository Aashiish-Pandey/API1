const TableHead = (props) => {
  const { tableData } = props;
  const tableHead = Object.keys(tableData[0]).map((data, index) => (
    <th key={index}>{data}</th>
  ));

  return <tr>{tableHead}</tr>;
};

export default TableHead;
