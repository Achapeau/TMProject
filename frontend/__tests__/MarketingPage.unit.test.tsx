import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import { MarketingPage } from "@/app/(marketing)/page";

const setup = (props = {}) => render(<MarketingPage {...props} />);

describe("MarketingPage", () => {
  it("should have a marketing heading successfully", () => {
    setup(); // ARRANGE

    const heading = screen.getByRole("heading", { level: 1 }); // ACT

    expect(heading).toHaveClass("marketing-heading"); // ASSERT
  });

  it("should have a marketing description successfully", () => {
    setup(); // ARRANGE

    const description = screen.getByTitle(/marketing description/i); // ACT

    expect(description).toBeInTheDocument(); // ASSERT
  });

  it("should have an inscription link successfully", () => {
    setup(); // ARRANGE

    const link = screen.getByTitle(/inscription/i); // ACT

    expect(link).toBeInTheDocument(); // ASSERT
  });

  it("renders the promo banner when discount is active", () => {
    setup({ discount: true }); // ARRANGE

    const banner = screen.getByText(/special discount/i); // ACT

    expect(banner).toBeInTheDocument(); // ASSERT
  });

  it("does not render the promo banner when discount is not active", () => {
    setup({ discount: false }); // ARRANGE

    const banner = screen.queryByText(/special discount/i); // ACT

    expect(banner).not.toBeInTheDocument(); // ASSERT
  });
});
