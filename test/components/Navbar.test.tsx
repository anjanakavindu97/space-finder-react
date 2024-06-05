import { Navbar } from '../../src/components/Navbar'
import  ReactDOM  from 'react-dom'
import { User } from '../../src/models/Model'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { getByTestId } from '@testing-library/react'


describe('Navbar test suite', () => {

    let container: HTMLDivElement
    const someUser: User = {
        email: 'someEmail',
        userName: 'someUser'
    }
    const baseLink = 'http://localhost'

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    test('Render correctly with user', () => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(
            <BrowserRouter>
                <Navbar user={someUser} />
            </BrowserRouter>,
            container
        )

        const links = container.querySelectorAll('a')
        expect(links[0].href).toBe(baseLink + '/')
        expect(links[1].href).toBe(baseLink + '/profile')
        expect(links[2].href).toBe(baseLink + '/spaces')
        expect(links[3].href).toBe(baseLink + '/logout')
    })

    test('Render correctly with user using data test', () => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(
            <BrowserRouter>
                <Navbar user={someUser} />
            </BrowserRouter>,
            container
        )

        const homeLink = getByTestId(container, 'home-link') as HTMLAnchorElement
        expect(homeLink.href).toBe(baseLink + '/')

        const profileLink = getByTestId(container, 'profile-link') as HTMLAnchorElement
        expect(profileLink.href).toBe(baseLink + '/profile')

        const spaceLink = getByTestId(container, 'space-link') as HTMLAnchorElement
        expect(spaceLink.href).toBe(baseLink + '/spaces')
    })

    test('Render correctly without user using data test', () => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(
            <BrowserRouter>
                <Navbar user={undefined} />
            </BrowserRouter>,
            container
        )

        const loginLink = getByTestId(container, 'login-link') as HTMLAnchorElement
        expect(loginLink.href).toBe(baseLink + '/login')
    })
})