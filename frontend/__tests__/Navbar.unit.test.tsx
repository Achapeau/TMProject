import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
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

  it("should render log out button when isConnected is true", () => {
    setup({ isConnected: true }); // ARRANGE

    const logOut = screen.getByText(/déconnexion/i); // ACT
    const signIn = screen.queryByText(/^connexion$/i);
    const signUp = screen.queryByText(/^inscription$/i);

    expect(logOut).toBeInTheDocument(); // ASSERT
    expect(signIn).not.toBeInTheDocument();
    expect(signUp).not.toBeInTheDocument();
  });
});
