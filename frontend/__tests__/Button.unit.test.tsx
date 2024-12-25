import "@testing-library/jest-dom/";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

describe("Button", () => {
  it("should render as a button by default", () => {
    render(<Button> Default </Button>); // ARRANGE

    const button = screen.getByRole("button"); // ACT

    fireEvent.click(button);

    expect(button).toBeEnabled(); // ASSERT
  });

  it("should render as a link when href is provided", () => {
    render(
      <Button asChild>
        <Link href='/'> Link </Link>
      </Button>
    ); // render(<Button asChild href="/"> Link </Button>); // ARRANGE

    const link = screen.getByRole("link"); // ACT

    expect(link).toHaveAttribute("href", "/"); // ASSERT
  });
});
