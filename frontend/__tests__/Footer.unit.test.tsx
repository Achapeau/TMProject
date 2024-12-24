import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/_components/footer";

const setup = () => {
  render(<Footer />);
  return {
    policy: screen.getByText(/policy/i),
    terms: screen.getByText(/terms/i),
  };
};

describe("Footer", () => {
  it("should render successfully policy and terms links", () => {
    const { policy, terms } = setup(); // ARRANGE & ACT

    expect(policy).toBeInTheDocument();
    expect(terms).toBeInTheDocument(); // ASSERT
  });

  it("links should have an href", () => {
    const { policy, terms } = setup(); // ARRANGE & ACT

    expect(policy).toHaveAttribute("href");
    expect(terms).toHaveAttribute("href"); // ASSERT
  });
});
