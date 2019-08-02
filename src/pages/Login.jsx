import React from 'react'
import TextFiled from '../components/TextField.jsx'
import NavbarClass from '../components/NavbarClass.jsx'
import LoginCards from '../components/LoginCards.jsx'

class Login extends React.Component{
    render(){
        return (
            <div>
                <NavbarClass/>
                <div style = {{paddingLeft: "20%", paddingRight:"20%", paddingTop:"10%"}}>
                    <LoginCards/>
                </div>
            </div>
        );
    }
}

export default Login;