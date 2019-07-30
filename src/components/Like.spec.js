import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Like from './Like';

afterEach(cleanup);

describe('components/Like', () => {
  it('renders content', () => {
    const likes = 4;
    const clickHandler = () => ({});

    const component = render(<Like likes={likes} handleClick={clickHandler} />);

    expect(component.container).toHaveTextContent(`${likes} likes`);
  });

  it('calls handler on button click', () => {
    const likes = 4;
    const clickHandler = jest.fn();

    const component = render(<Like likes={likes} handleClick={clickHandler} />);

    const likeButton = component.container.querySelector('button');
    likeButton.click();

    expect(clickHandler.mock.calls.length).toBe(1);
    likeButton.click();
    expect(clickHandler.mock.calls.length).toBe(2);
  });
});
