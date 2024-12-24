import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import { Logo } from "@/components/logo";

const setup = (props = {}) => render(<Logo {...props} />);

describe("Logo", () => {
  it("image should be rendered and have alt text", () => {
    setup(); // ARRANGE

    const image = screen.getByRole("img", {
      name: /Logo french task manager/i,
    }); // ACT

    expect(image).toHaveAttribute("src", "/logo.png");
    expect(image).toHaveAttribute("alt", "Logo french task manager"); // ASSERT
  });

  it("title of the app be rendered", () => {
    setup(); // ARRANGE

    const title = screen.getByRole("heading", { level: 1 }); // ACT

    expect(title).toHaveTextContent(/french task manager/i); // ASSERT
  });

  it("doesn't render the title when hideTitle is true", () => {
    setup({ hideTitle: true }); // ARRANGE

    const title = screen.queryByRole("heading", { level: 1 }); // ACT

    expect(title).not.toBeInTheDocument(); // ASSERT
  });
});
