import React from 'react';
import { User } from '../models/Model'
import { AuthService } from '../services/AuthService'
import { Loging } from './Login';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Profile } from './Profile';

interface AppState{
  user: User | undefined
}

export class App extends React.Component<{}, AppState>{

  private authService: AuthService = new AuthService();

  constructor(props: any) {
    super(props)
    this.state = {
      user: undefined
    }

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
      <div className='wrapper'>
        <Router>
          <div>
            <Navbar user={this.state?.user}/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Loging authService={this.authService} setUser={this.setUser}/>} />
              <Route path='/profile' element={<Profile authService={this.authService} user={this.state.user}/>} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
