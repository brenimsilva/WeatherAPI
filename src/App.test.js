import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App Component", () => {
  test("Test request with mocked response", async () => {
    //Arrange
    const mockResponse = {
      id: 1,
      name: "Cidade",
      main: { temp: 12, humidity: 14 },
      weather: [{ id: 1, main: "Clouds" }],
      wind: { speed: 2 },
    };
    window.fetch = jest.fn().mockResolvedValue(mockResponse);
    render(<App />);
    //Act
    //Assert
    const outputElement = await screen.getByText("Cidade", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
