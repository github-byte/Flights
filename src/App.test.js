import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Home from './home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('searches for a flight when search button is clicked', () => {
//   const mockSearchFlight = jest.fn();
//   const { getByLabelText, getByText } = render(
//     <Home searchFlight={mockSearchFlight} />
//   );

//   // Fill in the search input fields (if any)
//   // For example, if there's an input for departure and destination airports:
//   const departureInput = screen.getByLabelText(/Departure/i);
//   const destinationInput = screen.getByLabelText(/Arrival/i);

//   fireEvent.change(departureInput, { target: { value: 'Indira Gandhi Airport' } });
//   fireEvent.change(destinationInput, { target: { value: 'Mumbai' } });

//   // Click the search button
//   const searchButton = screen.getByText(/Search/i);
//   fireEvent.click(searchButton);

//   // Check if the searchFlight function is called with correct parameters
//   // expect(mockSearchFlight).toHaveBeenCalledWith({ departure: '', destination: 'LAX' });
// });