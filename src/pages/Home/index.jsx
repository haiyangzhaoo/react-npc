import React from 'react'
import {connect} from 'react-redux'
import {changeAge, changeName} from '@/store/actions'

function Home(props) {
  console.log(props)

  return (
    <>
      Home-{props.store.name}-{props.store.age}
      <button onClick={props.handleChangeName}>
        点我改变
      </button>
      <button onClick={props.handleChangeAge}>
        点我改变年纪
      </button>
    </>
  )
}

const stateToProps = store => {
  return {store}
}

// 派发的2种形式
const dispatchToProps = dispatch => {
  return {
    handleChangeName() {
      dispatch({
        type: 'change_name',
        value: '哈哈，看到你的小可爱了吗？'
      })
    },
    handleChangeAge(e) {
      console.log(e.target.innerText)
      dispatch(changeAge(e.target.innerText))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Home)
