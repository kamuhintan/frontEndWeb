//no 2
export default function ambilDataUser() {
  return fetch('https://reqres.in/api/users')
      .then((response) => {
          return response.json();
      })
      .then((users) => {
          return console.log(users.data)
        });
}