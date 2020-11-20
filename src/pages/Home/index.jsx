import React, {useState} from 'react'
import {connect} from 'react-redux'
import {changeAge, changeName} from '@/store/actions'
import { Drawer, Button } from 'antd'
import './index.css'

function Home(props) {
  console.log(props)

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container">
      Home-{props.store.name}-{props.store.age}
      <button onClick={props.handleChangeName}>
        点我改变
      </button>
      <button onClick={props.handleChangeAge}>
        点我改变年纪
      </button>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
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
