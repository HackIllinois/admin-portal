const getUserRoute = `${process.env.REACT_APP_API_ENDPOINT}/user`;

export function fetchUser(id, token) {
  return fetch(`${getUserRoute}/${id}/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  }).then(response => {
    if (response.status >= 400) {
      throw new Error(response);
    }
    return response.json()
  });
}