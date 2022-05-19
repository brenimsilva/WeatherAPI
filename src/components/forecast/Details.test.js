import { getByText, render, screen } from "@testing-library/react";
import Details from "./Details";

describe("Greeting Component", () => {
  test("Render Umidade Text", () => {
    // Arrange
    render(<Details />);

    // Act

    //Assert
    const umidadeElement = screen.getByText("Umidade", { exact: true });
    expect(umidadeElement).toBeInTheDocument();
  });
});
