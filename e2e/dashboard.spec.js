
import { test, expect } from "@playwright/test";

test.describe("DevOpsFlow Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load the dashboard successfully", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Welcome back, Funmibi" })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Pipeline Overview" })
    ).toBeVisible();
  });

  test("should display all pipeline stages", async ({ page }) => {
    const pipeline = page.locator(".pipeline-card");

    await expect(pipeline.locator(".stage-details h3")).toHaveText([
      "Source",
      "Lint",
      "Tests",
      "Build",
      "Deploy",
    ]);

    await expect(
      pipeline.getByText("Application deployed successfully", {
        exact: true,
      })
    ).toBeVisible();
  });

  test("should display deployment environments", async ({ page }) => {
    const environments = page.locator(".environment-card");

    await expect(
      environments.getByRole("heading", {
        name: "Development",
        exact: true,
      })
    ).toBeVisible();

    await expect(
      environments.getByRole("heading", {
        name: "Staging",
        exact: true,
      })
    ).toBeVisible();

    await expect(
      environments.getByRole("heading", {
        name: "Production",
        exact: true,
      })
    ).toBeVisible();

    await expect(environments.getByText("Deployed", { exact: true }))
      .toHaveCount(2);
  });

  test("should display deployment history", async ({ page }) => {
    const history = page.locator(".deployment-card");

    await expect(
      history.getByRole("heading", { name: "Deployment History" })
    ).toBeVisible();

    await expect(history.locator("tbody tr")).toHaveCount(3);
  });
});

