import { Menu } from 'antd';
import { HomeFilled  , FormOutlined ,NotificationOutlined , SnippetsOutlined} from '@ant-design/icons';
import Link from 'next/link';
import { useContext , useEffect} from 'react';
import AppContext from '../context/state';

export default function Navigation({isAdmin}) {

  const value = useContext(AppContext);

  const handleClick = e => {
      console.log(e.key)
    value.setPageState(e.key);
  };
  useEffect(() => {
        console.log(value.state.pageState)
      
  }, [value])
    return (
      <Menu onClick={handleClick} selectedKeys={[value.state.pageState]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeFilled></HomeFilled>}>
            <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="form" icon = {<FormOutlined></FormOutlined>} >
            <Link href="/form">Form</Link>
        </Menu.Item>
        <Menu.Item key="interview" icon = {<SnippetsOutlined></SnippetsOutlined>}>
            <Link href="/interview">Interview</Link>
        </Menu.Item>
        <Menu.Item key = "results" icon = {<NotificationOutlined></NotificationOutlined>}>
            <Link href="/results">Results</Link>
        </Menu.Item>

        {isAdmin ? <Menu.Item key = "admin" icon = {<NotificationOutlined></NotificationOutlined>}>
            <Link href="/admin">Admin</Link>
        </Menu.Item> : null}
      </Menu>
    );
}