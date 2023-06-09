function UserList() {
    const [userList, setUserList] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUserList(response.data);
        })
        .catch(error => {
          console.error('Error fetching user list:', error);
        });
    }, []);
  
    return (
      <div className="user-list-container">
        <h2>User List</h2>
        <ul className="user-list">
          {userList.map(user => (
            <li key={user.id} className="user-item">
              <strong>Name:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Username:</strong> {user.username}<br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UserList;
  