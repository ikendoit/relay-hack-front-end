const URL_BACKEND = process.env.REACT_APP_BACKEND_URL
export default {
  state: {
    data: []
  }, 
  reducers: {
    setData(data) {
      return data
    },
  }, 
  effects: (dispatch) => ({
    async loadData() {
      try {
        const result = await fetch(`${URL_BACKEND}`)
        console.log('loaded from back-end: ',result)
        dispatch.crimeData.setData(result)
      } catch(err) {
        console.log('error loading from backend: ',err)
      }
    }
  })
}
