import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/_components/navbar";

const setup = (props = {}) => render(<Navbar {...props} />);

describe("Navbar", () => {
  it("should render sign in and sign up button when isConnected is false, and not log out button", () => {
    setup({ isConnected: false }); // ARRANGE

    const signIn = screen.getByText(/sign in/i);
    const signUp = screen.getByText(/sign up/i);
    const logOut = screen.getByText(/log out/i); // ACT

    expect(signIn).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
    expect(logOut).not.toBeInTheDocument(); // ASSERT
  });

  it("should render log out button when isConnected is true", () => {
    setup({ isConnected: true }); // ARRANGE

    const logOut = screen.getByText(/log-out/i);
    const signIn = screen.getByText(/sign in/i);
    const signUp = screen.getByText(/sign up/i); // ACT

    expect(logOut).toBeInTheDocument();
    expect(signIn).not.toBeInTheDocument();
    expect(signUp).not.toBeInTheDocument(); // ASSERT
  });
});
