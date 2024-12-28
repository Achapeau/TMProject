import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { PlatformLayout } from "@/app/(platform)/layout";

describe("PlatformLayout", () => {
  it("should render successfully", () => {
    render(<PlatformLayout />); // ARRANGE

    const clerkProvider = screen.getByTestId("clerk-provider"); // ACT

    expect(clerkProvider).toBeInTheDocument(); // ASSERT
  });
});
