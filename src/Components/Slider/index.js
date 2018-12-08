import React from 'react'
import { Input, Slider } from 'antd'
import { connect } from 'react-redux'

const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const SliderComp = (props) => {

  const changeFromYear = (e) => {
    props.setFromYear(e.target.value)
  }

  const changeToYear = (e) => {
    props.setToYear(e.target.value)
  }

  const changeFromMonth = (e) => { props.setFromMonth(e.target.value)
  }

  const changeToMonth = (e) => {
    props.setToMonth(e.target.value)
  }

  const changeMonths = (e) => {
    if (!Array.isArray(e)) return
    Promise.all([
      props.setFromMonth(e[0]),
      props.setToMonth(e[1])
    ])
  }

  const changeYears = (e) => {
    if (!Array.isArray(e)) return
    Promise.all([
      props.setFromYear(e[0]),
      props.setToYear(e[1])
    ])
  }


  const marksYears = {
    2012: {
      style: {
        color: '#f50',
      },
      label: <strong>Oldest-2012</strong>,
    },
    2018: {
      style: {
        color: '#f50',
      },
      label: <strong>Latest-2018</strong>,
    },
  };

  const marksMonths = {
    1: {
      style: {
        color: '#f50',
      },
      label: <strong>Zeho, Janvier</strong>,
    },
    12: {
      style: {
        color: '#f50',
      },
      label: <strong>Once, Noviembre</strong>,
    },
  };

  return (
    <div style={{textAlign: 'center', width: '80%', marginLeft:'5%'}}>
      <Slider horizontal range marks={marksYears} step={1} onChange={changeYears} min={2012} max={2018} defaultValue={[2013, 2018]} />
      <Slider horizontal range marks={marksMonths} step={1} onChange={changeMonths} min={1} max={12} defaultValue={[1, 8]} />
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

export default connect(null, mapDispatch)(SliderComp)
