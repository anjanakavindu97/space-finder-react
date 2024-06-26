import React, { SyntheticEvent } from 'react';
import { AuthService } from '../services/AuthService';
import { User } from '../models/Model';
import history from '../utils/history';

interface LoginProps {
    authService: AuthService,
    setUser: (user: User) => void
}

interface LogingState {
    userName: string,
    password: string,
    loginAttenpted: boolean,
    logingSuccesfull: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LogingState> {

    state: LogingState = {
        userName: '',
        password: '',
        loginAttenpted: false,
        logingSuccesfull: false
    }

    private setUserName(event: CustomEvent) {
        this.setState({ userName: event.target.value })
        //console.log(event.target.value)
    }

    private setPassword(event: CustomEvent) {
        this.setState({ password: event.target.value })
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        this.setState({ loginAttenpted: true })
        const result = await this.props.authService.login(
            this.state.userName,
            this.state.password
        )
        if (result) {
            this.setState({ logingSuccesfull: true })
            this.props.setUser(result)
            history.push('/profile')
        } else {
            this.setState({ logingSuccesfull: false })
        }
    }


    render() {
        let loginMessage: any;
        if (this.state.loginAttenpted) {
            if (this.state.logingSuccesfull) {
                loginMessage = <label>Login Successfull</label>
            } else {
                loginMessage = <label>Login failed</label>
            }
        }

        return (
            <div>
                <h2>Please Loging</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        value={this.state.userName}
                        onChange={e => this.setUserName(e)}
                    /><br />
                    <input
                        value={this.state.password}
                        type='password'
                        onChange={e => this.setPassword(e)}
                    /><br />
                    <input
                        type='submit'
                        value='Login' />
                </form>
                {loginMessage}
            </div>
        )
    }
}