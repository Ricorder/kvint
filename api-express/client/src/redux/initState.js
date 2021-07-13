const initState = () => {
  const state  = {
    calls: [],
  }
  const fromLS = JSON.parse(window.localStorage.getItem('Kvint'))
  return fromLS ? fromLS : state
}

export default initState
