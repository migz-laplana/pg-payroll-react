import React, { useEffect, useState } from 'react'
import list from "../images/list.png"
import payrollcopy from "../images/payrollcopy.jpg"
import record from "../images/record.png"
// import { db } from './firebase'
import PageTitle from '../components/PageTitle'
import { Button, Layout, Menu } from 'antd'
import { Typography } from 'antd';

import "./AntDashboard.css"


function AntDashboard() {

    const { Header, Content, Footer } = Layout;
    const { Title, Paragraph } = Typography;

    //----------STATE VARIABLES
    const [employees, setEmployees] = useState([]);

    //----------EFFECTS


    console.log(employees);


    return (

        <div className="main">
            <Layout className="layout">
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Employees List</Menu.Item>
                        <Menu.Item key="3">Attendance</Menu.Item>
                        <Menu.Item key="4">Payslip</Menu.Item>
                    </Menu>
                </Header>
                <Content className="content__container">
                    <h1>main content!!</h1>

                </Content>
                <Footer className="footer">
                    Powergear Inc. designed with Ant Design
                </Footer>
            </Layout>
        </div>
    )
}

export default AntDashboard
