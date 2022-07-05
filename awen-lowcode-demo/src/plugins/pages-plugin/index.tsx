import React, { useState, useEffect } from 'react';
import { Nav } from '@alifd/next';
import autil from 'awen/utils';

const tabList = ['home', 'login'];
export default function Pages() {
  const [navKey, setNavKey] = useState([tabList[0]]);
  useEffect(() => {
    if (tabList.indexOf(autil.queryString().type) !== -1) {
      setNavKey([autil.queryString().type]);
    }
  }, []);
  // 切换nav
  const onSelectNav = (arr: Array<string>) => {
    // setNavKey(arr);
    autil.go('/', {
      type: arr[0],
    });
    // todo在读取schema方法中按query判断发请求获取对应的schema
  };
  return (
    <Nav
      style={{ width: '100%' }}
      type="normal"
      embeddable
      selectedKeys={navKey}
      onSelect={onSelectNav}
    >
      <Nav.Item icon="account" key={tabList[0]}>
        首页
      </Nav.Item>
      <Nav.Item icon="account" key={tabList[1]}>
        登录页
      </Nav.Item>
    </Nav>
  );
}
