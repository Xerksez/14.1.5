// MyComponent.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
    it('renders without crashing', () => {
        render(<MyComponent />);
    });

    it('displays initial count', () => {
        const { getByText } = render(<MyComponent />);
        expect(getByText('Count: 0')).toBeInTheDocument();
    });

    it('increments count when button is clicked', async () => {
        const { getByText } = render(<MyComponent />);
        const incrementButton = getByText('Increment');

        fireEvent.click(incrementButton);

        await waitFor(() => {
            expect(getByText('Count: 1')).toBeInTheDocument();
        });
    });
});
