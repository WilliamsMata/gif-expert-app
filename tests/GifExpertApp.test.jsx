import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  const inputValue = "Pokemon";

  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });

  test("Debe contener un H1", () => {
    render(<GifExpertApp />);

    expect(screen.findByRole("heading", { level: 1 })).toBeTruthy();
  });

  test("Hacer envió al formulario debe agregar el valor del input", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getByText(inputValue)).toBeTruthy();
  });

  test("Si el valor del input ya se encuentra no debe ser agregado nuevamente", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getAllByText(inputValue)).toHaveLength(1);
  });
});
