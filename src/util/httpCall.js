export const getCall = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    });
};


// const getUsersAwait = async (req, res) => { const users = await fetch(`localhost:3000/users`, { method: 'GET', headers:{ 'Content-Type': 'application/json' } }); const usersJson = users.json(); console.log(usersJson); };