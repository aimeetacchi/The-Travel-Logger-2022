// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// Learn more: http://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

// jsdom does not implent scrollIntoView
//




afterEach(() => {
    cleanup();
})