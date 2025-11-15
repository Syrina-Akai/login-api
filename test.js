// function fetch to test post request
async function createUser(userData) {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
    return response.json();
}

// Usage example
createUser({ name: "John Doe", email: "john@gmail.com", age: 25 })
  .then(data => console.log(data))
  .catch(err => console.error(err));


  

// function fetch to test get request
async function getUsers() {
  const response = await fetch("http://localhost:3000/api/users");
  return response.json();
}

// Usage example
// getUsers()
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// function fetch to test get by id request
async function getUserById(userId) {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`);
    return response.json();
}

// Usage example
// getUserById("USER_ID_HERE")
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


// function fetch to test put request
async function updateUser(userId, updatedData) {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    });
    return response.json();
}

// Usage example
// updateUser("USER_ID_HERE", { name: "Jane Doe", age: 30 })
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// function fetch to test delete request
async function deleteUser(userId) {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "DELETE"
    });
    return response.json();
}

// Usage example
// deleteUser("USER_ID_HERE")
//     .then(data => console.log(data))
//     .catch(err => console.error(err));