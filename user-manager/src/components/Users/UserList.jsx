import Card from "../UI/Card";

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card>
        <div className="text-center">
          <p>No Users Exist</p>
        </div>
      </Card>
    );
  }

  return (
    <div>
      {props.users.map((user) => (
        <Card key={user.id}>
          <div  className="text-center">
            <div>{user.username}</div>
            <div>{user.age}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
