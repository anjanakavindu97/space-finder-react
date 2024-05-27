import React from 'react';
import { User } from '../models/Model'
import { AuthService } from '../services/AuthService'
import { Loging } from './Login';

interface AppState{
  user: User | undefined
}

export class App extends React.Component<{}, AppState>{

  private authService: AuthService = new AuthService();

  constructor(props: any) {
    super(props)

    this.setUser = this.setUser.bind(this)
  }

  private setUser(user: User) {
    this.setState({
      user: user
    })
    console.log('setting the user ' + user)
  }

  render() {
    return (
      <div>
        App from class work....
        <Loging authService={this.authService} setUser={this.setUser}/>
      </div>
    );
  }
}
