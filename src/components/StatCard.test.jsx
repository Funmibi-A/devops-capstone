
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StatCard from "./StatCard";

describe("StatCard", () => {
  it("renders the card title and value", () => {
    render(
      <StatCard
        title="Total Pipelines"
        value="24"
        change="+12.5%"
        description="vs. last month"
        icon={() => <span>Icon</span>}
        trend="up"
      />
    );

    expect(screen.getByText("Total Pipelines")).toBeInTheDocument();
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("+12.5%")).toBeInTheDocument();
  });
});
