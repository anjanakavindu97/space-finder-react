import React from "react";
import { User, UserAttribute } from "../models/Model";
import { AuthService } from "../services/AuthService";
import { Link } from "react-router-dom";

interface ProfileState {
    userAttributes: UserAttribute[]
}

interface ProfileProps {
    user: User | undefined
    authService: AuthService
}

export class Profile extends React.Component<ProfileProps, ProfileState> {

    state: ProfileState = {
        userAttributes: []
    }

    async componentDidMount() {
        if (this.props.user) {
            const userAtrs = await this.props.authService.getUserAttributes(this.props.user)
            this.setState({
                userAttributes: userAtrs
            })
        }
    }

    private renderUserAttributes() {
        const rows = []
        for (const userAttribute of this.state.userAttributes) {
            rows.push(<tr key={userAttribute.Name.toString()}>
                <td>{userAttribute.Name}</td>
                <td>{userAttribute.Value}</td>
            </tr>)
        }
        return <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    }
    render() {
        let ProfileSpace
        if (this.props.user) {
            ProfileSpace = <div>
                <h3>Hello {this.props.user.userName}</h3>
                Here are your attributes
                {this.renderUserAttributes()}
                </div>
        } else {
            ProfileSpace = <div>
                Please <Link to='/login'>Login</Link>
                </div>
        }

        return (
            <div>
                Welcome to your profile
                {ProfileSpace}
            </div>
        )
    }
}