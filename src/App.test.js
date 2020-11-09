import React from 'react';
import { fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';
import { FetchShow as mockFetchShow } from './api/FetchShow';
jest.mock('./api/FetchShow');

test('render w/o errors', () => {
    render(<App />);
});

test('fetches and render episodes data', async () => {
    render(<App />);
    mockFetchShow.mockResolvedValueOnce({
        data: [
            { episode_name: 'Chapter One: The Vanishing of Will Byers', episode_id: 553946 },
            { episode_name: 'Chapter Five: The Flea and the Acrobat', episode_id: 578666 }
        ]
    });
});

//     const button = screen.getByRole('button')
//     fireEvent.click(button);

//     await waitFor(() => {
//         const episodes = screen.getAllByTestId('episodes')
// expect(episodes).toHaveLength(8)
//     })
// })