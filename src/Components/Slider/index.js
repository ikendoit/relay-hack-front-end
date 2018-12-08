import React from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'

const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};



const SliderComp = (props) => {

  const changeFromYear = (e) => {
    props.setFromYear(e.target.value)
  }

  const changeToYear = (e) => {
    props.setToYear(e.target.value)
  }

  const changeFromMonth = (e) => {
    props.setFromMonth(e.target.value)
  }

  const changeToMonth = (e) => {
    props.setToMonth(e.target.value)
  }

  return (
    <div>
      <Input placeHolder="From year" onChange={changeFromYear} />
      <Input placeHolder="To year" onChange={changeToYear} />
      <Input placeHolder="From Month" onChange={changeFromMonth} />
      <Input placeHolder="To Month" onChange={changeToMonth} />
    </div>
  )
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => {
  return {
    setFromYear: dispatch.filter.setFromYear,
    setToYear: dispatch.filter.setToYear,
    setFromMonth: dispatch.filter.setFromMonth,
    setToMonth: dispatch.filter.setToMonth
  }
}

export default connect(mapState, mapDispatch)(SliderComp)
