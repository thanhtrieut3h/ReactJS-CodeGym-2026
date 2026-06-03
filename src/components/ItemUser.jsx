const ItemUser = ({ users }) => {
  return (
    <>
      {users.map((u) => (
        <tr>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.age}</td>
        </tr>
      ))}
    </>
  );
  /*
    return (
        <>
            {users.map(u => (
                <>
                   <li> Id: {u.id}</li>
                   <li> Name: {u.name}</li>
                   <li>Age: {u.age}</li>
                </>
            ))}
        </>
    );
    */
};
export default ItemUser;
