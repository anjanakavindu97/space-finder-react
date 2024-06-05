import React from 'react'
import { SpaceComponent } from '../../src/components/spaces/SpaceComponent'
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'

describe('Space component test suite', () => {

    let container: HTMLDivElement
    const reserveSpaceMock = jest.fn()

    function cleanUpTest() {
        document.body.removeChild(container)
        container.remove()
        jest.clearAllMocks()
    }

    function setUpTest(element: React.FunctionComponentElement<any>) {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(element,container)
    }

    describe('test with photo URL', () => {

        beforeEach(() => {
            setUpTest(
                <SpaceComponent
                    spaceId={'1'}
                    name={'someName'}
                    location={'someLocation'}
                    photoUrl={'some.url'}
                    reserveSpace={reserveSpaceMock}
                />
            )
        })

        test('Show image correclty', () => {
            const image = container.querySelector('img')
            expect(image!).toBeInTheDocument()
            expect(image!.src).toBe('http://localhost/some.url')
        })

        test('Show labels correclty', () => {
            const label = container.querySelectorAll('label')
            expect(label[0]).toHaveTextContent('someName')
            expect(label[1]).toHaveTextContent('1')
            expect(label[2]).toHaveTextContent('someLocation')
        })

        test('reserve spaces', () => {
            const button = container.querySelector('button')
            fireEvent.click(button!)
            expect(reserveSpaceMock).toBeCalledWith('1')
        })

        afterEach(() => {
            cleanUpTest()
        })
    })

    describe('test without photo URL', () => {
        beforeEach(() => {
            setUpTest(
                <SpaceComponent
                    spaceId={'1'}
                    name={'someName'}
                    location={'someLocation'}
                    reserveSpace={reserveSpaceMock}
                />
            )
        })

        test('Show image correclty', () => {
            const image = container.querySelector('img')
            expect(image).toBeInTheDocument()
            expect(image!.src).toBeTruthy()
        })

        afterEach(() => {
            cleanUpTest()
        })
    })
})