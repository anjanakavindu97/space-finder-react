import React from 'react';
import { Login } from '../../src/components/Login';
import ReactTestRenderer from 'react-test-renderer';

describe('Login component snapshot test', () => {

    test('initial test', () => {
        const snap = ReactTestRenderer.create(
        <Login authService={{} as any} setUser={{} as any} />);

        expect(snap).toMatchSnapshot();
    });
});