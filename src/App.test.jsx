import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
describe("redesigned portfolio", () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = "#/home";
    window.scrollTo = vi.fn();
  });
  it("introduces seven years of experience and opens selected work", async () => {
    render(<App />);
    expect(
      screen.getByText("Hands-on engineering experience"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", { name: /Explore my work/ }));
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /All/ })).toBeInTheDocument(),
    );
  });
  it.each([
    ["Work", /Ideas into/],
    ["Experience", /Hands-on craft/],
    ["About", /An engineer/],
    ["Let’s talk", /The next good idea/],
  ])("opens %s", async (link, heading) => {
    render(<App />);
    fireEvent.click(
      screen
        .getByRole("navigation")
        .querySelector(
          `a[href="${link === "Work" ? "#/projects" : link === "Experience" ? "#/experience" : link === "About" ? "#/education" : "#/contact"}"]`,
        ),
    );
    await waitFor(() =>
      expect(
        screen.getByRole("heading", { level: 1, name: heading }),
      ).toBeInTheDocument(),
    );
  });
  it("filters projects and opens a project overview", async () => {
    window.location.hash = "#/projects";
    render(<App />);
    fireEvent.click(
      screen.getByRole("button", { name: "Commerce", exact: true }),
    );
    expect(
      screen.getByRole("button", { name: "Commerce", exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.queryByRole("heading", { name: "Newzjacker", exact: true }),
    ).not.toBeInTheDocument();
    fireEvent.click(
      screen
        .getByRole("heading", { name: "Alt Vault", exact: true })
        .closest("a"),
    );
    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "What went into it." }),
      ).toBeInTheDocument(),
    );
    expect(
      screen.queryByRole("link", { name: /Visit project/ }),
    ).not.toBeInTheDocument();
  });
  it("toggles and restores the theme", () => {
    const { unmount, container } = render(<App />);
    expect(container.querySelector(".portfolio")).toHaveAttribute(
      "data-theme",
      "light",
    );
    fireEvent.click(screen.getByRole("button", { name: "Toggle color theme" }));
    expect(localStorage.getItem("theme")).toBe("dark");
    unmount();
    const second = render(<App />);
    expect(second.container.querySelector(".portfolio")).toHaveAttribute(
      "data-theme",
      "dark",
    );
  });
  it("opens and closes mobile navigation", async () => {
    render(<App />);
    const menu = screen.getByLabelText("Toggle navigation");
    fireEvent.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(screen.getByRole("link", { name: "Work", exact: true }));
    await waitFor(() => expect(menu).toHaveAttribute("aria-expanded", "false"));
  });
  it("copies the contact email with confirmation", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    window.location.hash = "#/contact";
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Copy email address" }));
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "Email address copied.",
      ),
    );
    expect(writeText).toHaveBeenCalledWith("mwaqasilyas01@gmail.com");
  });
});
