import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "../ErrorBoundary";

function renderWithProviders(ui: React.ReactElement) {
  return render(<HelmetProvider>{ui}</HelmetProvider>);
}

const ProblemChild = () => {
  throw new Error("Test error");
};

const GoodChild = () => <div>All good</div>;

describe("ErrorBoundary", () => {
  it("renders children when no error", () => {
    renderWithProviders(
      <ErrorBoundary>
        <GoodChild />
      </ErrorBoundary>
    );
    expect(screen.getByText("All good")).toBeInTheDocument();
  });

  it("renders fallback UI when an error is thrown", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    renderWithProviders(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Try Again")).toBeInTheDocument();
    spy.mockRestore();
  });

  it("renders custom fallback when provided", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    renderWithProviders(
      <ErrorBoundary fallback={<div>Custom error UI</div>}>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(screen.getByText("Custom error UI")).toBeInTheDocument();
    spy.mockRestore();
  });
});

