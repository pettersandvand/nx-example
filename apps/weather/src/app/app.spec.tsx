import { render } from '@testing-library/react';

// Mock the API client at module level so tests don't trigger fetch
// (jest-environment-jsdom does not have fetch and we don't need a live server here).
jest.mock('../client', () => ({
  API: jest.fn().mockImplementation(() => ({
    nxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNull: {
      getWeatherForecast: jest.fn().mockResolvedValue([]),
      getWeatherForecast2: jest.fn().mockResolvedValue([]),
    },
  })),
}));

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome')).toBeTruthy();
  });
});
