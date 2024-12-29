import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import PlatformLayout from "@/app/(platform)/layout";

const setup = () => render(<PlatformLayout children={<div>children</div>} />);
describe("PlatformLayout", () => {
  it("should render successfully", () => {
    setup(); // ARRANGE

    const clerkProvider = screen.getByTestId("clerk-provider"); // ACT

    expect(clerkProvider).toBeInTheDocument(); // ASSERT
  });
});
