const TableHead = (props) => {
  const { tableData } = props;
  const tableHead = Object.keys(tableData[0]).map((data, index) => (
    <td key={index}>{data}</td>
  ));

  return <th>{tableHead}</th>;
};

export default TableHead;
