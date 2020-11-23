import React, {useState} from 'react'
import {connect} from 'react-redux'
import {changeAge, changeName, changeLocale} from '@/store/actions'
import { Drawer, Button, Switch } from 'antd'
import './index.css'
import { FormattedMessage  } from 'react-intl'

function Home(props) {
  const cookies = {}
  document.cookie ? document.cookie.split(';').map(val => {
      cookies[val.split('=')[0]] = val.split('=')[1]
  }) : [];

  const [visible, setVisible] = useState(false)
  const [isLocal, setLocal]   = useState(cookies['language'] != undefined && cookies['language'] == 'true' ? true : false)

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChangeLocal = () => {
    setLocal(!isLocal)
    document.cookie=`language=${!isLocal}`;
    window.location.reload()
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
