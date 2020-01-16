export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}

export function removeAuthedUser (id) {
  return {
    type: REMOVE_AUTHED_USER,
    id
  }
}

export function handleLogin ({user}) {
  return (dispatch) => {
    dispatch(setAuthedUser(user))
  }
}

export function handleLogout ({user}) {
  return (dispatch) => {
    dispatch(removeAuthedUser(user))
  }
}