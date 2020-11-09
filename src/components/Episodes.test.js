import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

test('render w/o errors', () => {
    render(<Episodes episodes={[]}/>);
});

const episodes = [
    { episode_name: 'Chapter One: The Vanishing of Will Byers', episode_id: 553946 },
    { episode_name: 'Chapter Five: The Flea and the Acrobat', episode_id: 578666 }
]

test('rerenders correctly when passing in new episodes data', () => {
    const {rerender} = render(<Episodes episodes={[]}/>);
    
    let episodesObj = screen.queryAllByTestId("episodes");
    expect(episodesObj).toStrictEqual([]);

    rerender(<Episodes episodes={episodes}/>);

    episodesObj = screen.queryAllByTestId("episodes");
    expect(episodesObj).toHaveLength(2);
})