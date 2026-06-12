import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HelmetProvider } from "react-helmet-async";
import NotFoundPage from "../NotFoundPage";

function renderWithProviders(ui: React.ReactElement) {
  return render(<HelmetProvider>{ui}</HelmetProvider>);
}

describe("NotFoundPage", () => {
  it("renders 404 heading", () => {
    renderWithProviders(<NotFoundPage onBack={vi.fn()} />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders Page Not Found message", () => {
    renderWithProviders(<NotFoundPage onBack={vi.fn()} />);
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
  });

  it("renders description text", () => {
    renderWithProviders(<NotFoundPage onBack={vi.fn()} />);
    expect(
      screen.getByText(/The route you're looking for doesn't exist/)
    ).toBeInTheDocument();
  });

  it("renders Back to Home button", () => {
    renderWithProviders(<NotFoundPage onBack={vi.fn()} />);
    expect(screen.getByText("Back to Home")).toBeInTheDocument();
  });

  it("calls onBack when button is clicked", async () => {
    const onBack = vi.fn();
    renderWithProviders(<NotFoundPage onBack={onBack} />);
    await userEvent.click(screen.getByText("Back to Home"));
    expect(onBack).toHaveBeenCalledOnce();
  });
});
