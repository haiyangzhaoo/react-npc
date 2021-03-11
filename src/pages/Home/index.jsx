import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {changeAge, changeName, changeLocale} from '@/store/actions'
import { Drawer, Button, Switch } from 'antd'
import './index.css'
import { FormattedMessage } from 'react-intl'
import Cookies from 'js-cookie'

function Home(props) {
  const [visible, setVisible] = useState(false)
  const [isLocal, setLocal]   = useState(Cookies.get('language') == 'true' ? true : false)

  useEffect(() => {
    console.log(isLocal)
  }, [isLocal])

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChangeLocal = () => {
    // 强制刷新。。不OK
    // window.location.reload();
    setLocal(!isLocal)
    Cookies.set('language', !isLocal);
  }

  return (
    <div className="container">
      <Switch checkedChildren="中文" unCheckedChildren="英文" defaultChecked={!!isLocal} onClick={onChangeLocal} />
      Home-{props.store.name}-{props.store.age}
      <button onClick={props.handleChangeName}>
        点我改变
      </button>
      <button onClick={props.handleChangeAge}>
        点我改变年纪
      </button>
      <Button type="primary" onClick={showDrawer}>
        <FormattedMessage id="home.slider" />
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
    },
    handleChangeLocale(val) {
      console.log(val)
      dispatch(changeLocale(val))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Home)
