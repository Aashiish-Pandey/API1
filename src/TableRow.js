const TableRow = (props) => {
  const { tableData } = props;

  return tableData.map((item, index) => (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.address.street}</td>
      <td>{item.phone}</td>
      <td>{item.website}</td>
      <td>{item.company.name}</td>
    </tr>
  ));
};

export default TableRow;
