import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/CircleContainer/Button/Button";

describe("<Button>", () => {
  it("should render a button", () => {
    render(<Button id="1" icon="fas fa-bars" />);
    
    const buttonElement = screen.getByRole("button") as HTMLButtonElement;
    const icon = buttonElement.children.item(0)!
     
    expect(buttonElement.id).toEqual("1")
    expect(icon.className).toContain("fas fa-bars")
  });
});
