import "@testing-library/jest-dom/";
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "@/app/(marketing)/_components/navbar";
const setup = (props = {}) => render(<Navbar {...props} />);

describe("Navbar", () => {
  it("should render sign in and sign up button when isConnected is false, and not log out button", () => {
    setup({ isConnected: false }); // ARRANGE

    const signIn = screen.getByText(/^connexion$/i);
    const signUp = screen.getByText(/^inscription$/i); // ACT
    const logOut = screen.queryByText(/déconnexion/i);

    expect(signIn).toBeInTheDocument();
    expect(signUp).toBeInTheDocument(); // ASSERT
    expect(logOut).not.toBeInTheDocument();
  });

  it.skip("should render log out button when isConnected is true", () => {
    setup({ isConnected: true }); // ARRANGE

    const logOut = screen.getByText(/déconnexion/i); // ACT
    const signIn = screen.queryByText(/^connexion$/i);
    const signUp = screen.queryByText(/^inscription$/i);

    expect(logOut).toBeInTheDocument(); // ASSERT
    expect(signIn).not.toBeInTheDocument();
    expect(signUp).not.toBeInTheDocument();
  });

  it("should redirect to sign in page when sign in button is clicked", () => {
    setup({ isConnected: false }); // ARRANGE

    const signIn = screen.getByText(/^connexion$/i);
    fireEvent.click(signIn); // ACT

    expect(signIn).toHaveAttribute("href", "/sign-in"); // ASSERT
  });

  it("should redirect to sign up page when sign up button is clicked", () => {
    setup({ isConnected: false }); // ARRANGE

    const signUp = screen.getByText(/^inscription$/i);

    fireEvent.click(signUp); // ACT

    expect(signUp).toHaveAttribute("href", "/sign-up"); // ASSERT
  });
});
