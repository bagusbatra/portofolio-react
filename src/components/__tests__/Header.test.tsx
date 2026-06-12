import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HelmetProvider } from "react-helmet-async";
import Header from "../Header";

const defaultProps = {
  activeSection: "ecosystem",
  scrollToSection: vi.fn(),
  navigateTo: vi.fn(),
};

function renderWithProviders(ui: React.ReactElement) {
  return render(<HelmetProvider>{ui}</HelmetProvider>);
}

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the BB logo", () => {
    renderWithProviders(<Header {...defaultProps} />);
    expect(screen.getByText("BB")).toBeInTheDocument();
  });

  it("renders Bagus Batra name", () => {
    renderWithProviders(<Header {...defaultProps} />);
    expect(screen.getByText("Bagus Batra")).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    renderWithProviders(<Header {...defaultProps} />);
    expect(screen.getByText("Arcade")).toBeInTheDocument();
    expect(screen.getByText("Expertise")).toBeInTheDocument();
    expect(screen.getByText("Solutions")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Journal")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  it("renders Projects link", () => {
    renderWithProviders(<Header {...defaultProps} />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders Contact CTA button", () => {
    renderWithProviders(<Header {...defaultProps} />);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("calls navigateTo when Projects is clicked", async () => {
    const navigateTo = vi.fn();
    renderWithProviders(<Header {...defaultProps} navigateTo={navigateTo} />);
    await userEvent.click(screen.getByText("Projects"));
    expect(navigateTo).toHaveBeenCalledWith("/projects");
  });

  it("calls scrollToSection when Contact CTA is clicked", async () => {
    const scrollToSection = vi.fn();
    renderWithProviders(<Header {...defaultProps} scrollToSection={scrollToSection} />);
    const [ctaButton] = screen.getAllByText("Contact").slice(-1);
    await userEvent.click(ctaButton);
    expect(scrollToSection).toHaveBeenCalledWith("consultation-hub");
  });

  it("applies active style to the current section", () => {
    renderWithProviders(<Header {...defaultProps} activeSection="work" />);
    const solutionsBtn = screen.getByText("Solutions");
    expect(solutionsBtn.className).toContain("text-brand-accent");
  });
});
