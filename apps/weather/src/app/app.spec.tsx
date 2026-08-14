import { render } from '@testing-library/react';

// Mock the API client at module level so tests don't trigger fetch
// (jest-environment-jsdom does not have fetch and we don't need a live server here).
// eslint-disable-next-line import/first
jest.mock('../client', () => ({
  API: jest.fn().mockImplementation(() => ({
    nxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNull: {
      getWeatherForecast: jest.fn().mockResolvedValue([]),
      getWeatherForecast2: jest.fn().mockResolvedValue([]),
    },
  })),
}));

// eslint-disable-next-line import/first
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    // The greeting text is split across elements, so use a partial text matcher.
    expect(getByText(/Welcome/)).toBeTruthy();
  });
});
