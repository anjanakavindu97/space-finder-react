import React from 'react'
import { SpaceComponent } from '../../src/components/spaces/SpaceComponent'
import ReactDOM from 'react-dom'

describe('Space component test suite', () => {

    let container: HTMLDivElement
    const reserveSpaceMock = jest.fn()

    describe('test with photo URL', () => {

        beforeEach(() => {
            container = document.createElement('div')
            document.body.appendChild(container)
            ReactDOM.render(
                <SpaceComponent
                    spaceId={'1'}
                    name={'someName'}
                    location={'someLocation'}
                    reserveSpace={reserveSpaceMock}
                />,
                container
            )
        })

        test('Basic rendering', () => {
            
        })

        afterEach(() => {
            document.body.removeChild(container)
            container.remove()
            jest.clearAllMocks()
        })
    })

    describe('test without photo URL', () => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })
})