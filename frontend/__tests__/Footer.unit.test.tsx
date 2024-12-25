import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/app/(marketing)/_components/footer";

describe("Footer", () => {
  it("should render successfully policy and terms links", () => {
    render(<Footer />); // ARRANGE

    const policy = screen.getByText(/^politique de confidentialité$/i);
    const terms = screen.getByText(/^conditions d'utilisation$/i); // ACT

    expect(policy).toBeInTheDocument();
    expect(terms).toBeInTheDocument(); // ASSERT
  });
});
