import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                passWord: ''
            }
        };
    }
    handleChange(event, fieldType) {
        const value = event.target.value || '';
        const formData = this.state.formData;
        formData[fieldType] = value;
        this.setState({ formData });
    }

    render() {
        return<form>
            <label htmlFor="username">用户名
                <input type="text" id="username"
                    value={this.state.formData.userName}
                    onChange={(event) => this.handleChange(event, 'userName')} /></label>
            <label htmlFor="passwd">密码
                <input type="password" id="passwd" 
                value={this.state.formData.passWord}
                onChange={(event) => this.handleChange(event, 'passWord')}/></label>
            <input type="submit" />
        </form>
    }
}

export default Login;