export default {
  state: {
    fromYear: null,
    ToYear: null,
    fromMonth: null,
    toMonth: null,
  },
  reducer: {
    setFromYear(state, year) {
      return {
        ...state,
        fromYear: year
      }
    },
    setToYear(state, year) {
      return {
        ...state,
        toYear: year
      }
    },
    setFromMonth(state, month) {
      return {
        ...state,
        fromMonth: month
      }
    },
    setToMonth(state, month) {
      return {
        ...state,
        toMonth: month
      }
    },
  },
  dispatch: {
  }

}
