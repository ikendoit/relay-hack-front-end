import React from 'react'

const URL_BACKEND = process.env.REACT_APP_BACKEND

export const CrimeDataContext = React.createContext({
  data: [],
  setData: (p) => {},
  loadData: (p) => {},
})

function CrimeDataContextProvider (props) {

  const [ data, setData ] = React.useContext([])

  const loadData = async () => {
    try {
      const result = await fetch(`${URL_BACKEND}`)
      console.log('loaded from back-end: ',result)
      setData(result)
    } catch(err) {
      console.log('error loading from backend: ',err)
    }
  }

  const value = {
    data,
    setData,
    loadData
  }

  return (
    <CrimeDataContext.Provider value={value}> 
      {props.children}
    </CrimeDataContext.Provider>
  )
}

export default CrimeDataContextProvider
