/* eslint-disable global-require */
import 'jest-localstorage-mock';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/config', () => () => ({ reactStrictMode: false }));
