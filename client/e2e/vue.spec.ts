import { test, expect } from "@playwright/test";
import { TestIDAppRoot } from "../src/components/app/__tests__/ids.js";
import { TestIDModalRoot, TestIDModalOpener, TestIDModalContent } from "../src/components/modal/__tests__/ids.js";

test("visits the app root url", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByTestId(TestIDAppRoot)).toBeVisible();
});

test("click on modal opener and open modal window with create order form", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByTestId(TestIDModalRoot)).toBeVisible();

	const opener = page.getByTestId(TestIDModalOpener);
	await expect(opener).toBeVisible();

	await opener.click();

	await expect(page.getByTestId(TestIDModalContent)).toBeVisible();
});
