import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Content from "../components/Content/Content";

describe("<Content>", () => {
  it("should render the content", () => {
    render(<Content />);

    const mainTitle = screen.getByRole("heading", { level: 1, name: /amazing/i });
    const secondTitle = screen.getByRole("heading", { level: 2, name:/iguana/i });
    const image = screen.getByAltText("iguana") as HTMLImageElement;

    expect(mainTitle).toBeDefined()
    expect(secondTitle).toBeDefined()
    expect(image.src).toEqual("https://www.bebesaurus.com/modules/prestablog/views/img/grid-for-1-7/up-img/108.jpg")
  });
});
