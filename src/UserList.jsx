import users from './data';
import {formatUser} from './functions';

  const UserList = () => {
    return (
      <div>
        {users.map((user) => (
          <p key={user.name}>{formatUser(user)}</p>
        ))}
      </div>
    );
  };
  export default UserList;