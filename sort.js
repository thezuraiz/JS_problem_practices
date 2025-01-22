console.clear();
const users = [
  {
    name: "John Doe",
    age: 28,
    address: "123 Elm Street, Springfield",
    role: "Software Engineer",
  },
  {
    name: "Jane Smith",
    age: 34,
    address: "456 Oak Avenue, Metropolis",
    role: "Project Manager",
  },
  {
    name: "Michael Johnson",
    age: 42,
    address: "789 Pine Road, Gotham City",
    role: "Graphic Designer",
  },
  {
    name: "Emily Davis",
    age: 25,
    address: "321 Maple Lane, Star City",
    role: "Data Analyst",
  },
  {
    name: "Robert Brown",
    age: 30,
    address: "654 Cedar Street, Central City",
    role: "Marketing Specialist",
  },
];
function sortUsers(criteria, condition, value) {
  let filteredUser = users.filter((user) => {
    if (condition == "==") return user[criteria] == value;
    else if (condition == "<") return user[criteria] < value;
    else if (condition == ">") return user[criteria] > value;
    else if (condition == "<=") return user[criteria] <= value;
    else if (condition == ">=") return user[criteria] >= value;
    else false;
  });
  console.table(filteredUser);
}

sortUsers("age", ">=", 30);
sortUsers("age", "<=", 30);

function sortUsers(criteria, condition, value) {
  const filteredUsers = users.filter((user) =>
    new Function(
      "user",
      `return user["${criteria}"] ${condition} ${JSON.stringify(value)}`
    )(user)
  );

  console.table(filteredUsers);
}
