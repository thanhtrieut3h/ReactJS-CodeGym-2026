import ItemUser from "./ItemUser";

const UsersList = ({ data = [] }) => {
    return (
        <table width="100%" border={1} cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <ItemUser users={data} />
            </tbody>
        </table>
    )
  /*
  return (
    <ul>
      <ItemUser users={data} />
    </ul>
  );
  */
};
export default UsersList;
