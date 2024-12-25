import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/app/(marketing)/_components/footer";

describe("Footer", () => {
  it("should render successfully policy and terms links", () => {
    render(<Footer />); // ARRANGE

    const policy = screen.getByText(/policy/i);
    const terms = screen.getByText(/terms/i); // ACT

    expect(policy).toBeInTheDocument();
    expect(terms).toBeInTheDocument(); // ASSERT
  });
});
