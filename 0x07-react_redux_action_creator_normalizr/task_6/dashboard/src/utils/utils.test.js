import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
  expect(getFullYear()).toBe(2022);
});
