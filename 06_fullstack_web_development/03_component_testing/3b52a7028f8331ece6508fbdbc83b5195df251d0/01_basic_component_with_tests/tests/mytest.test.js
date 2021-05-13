import "regenerator-runtime/runtime";
import { openBrowser, closeBrowser, goto, text, waitFor, click, button } from "taiko";

describe("HideOrNotHide Web page test", () => {
  beforeAll(async () => {
    await openBrowser({ args: ["--window-size=1440,1000"], headless: true, observe: false, observeTime: 6000 });
  });

  afterAll(async () => {
    await closeBrowser();
  });

  test("check that when launching the page, the paragraph 'This is my text' is present", async () => {
    expect.assertions(1);

    await goto("http://localhost:8080");

    await waitFor("This is my text");
    expect(await text("This is my text").exists()).toBeTruthy();
  });

  test("check that there is a 'Reveal content' button when click on 'Hide content' button", async () => {
    expect.assertions(1);

    await click(button("Hide content"));
    expect(await button("Reveal content").exists()).toBeTruthy();
  });
  //A FINIR PLUTARD
  // test("check that the paragraph is no longer there when click on 'Hide content' ", async () => {
  //   expect.assertions(1);

  //   await waitFor("This is my text");
  //   expect(await text("This is my text").exists()).toBe(false);
  // });

  test("check that there is a 'Hide content' button when click on 'Reveal content' button", async () => {
    expect.assertions(1);

    await click(button("Reveal content"));
    expect(await button("Hide content").exists()).toBeTruthy();
  });

  test("check that the paragraph is there again when click on 'Reveal content' button", async () => {
    expect.assertions(1);

    await waitFor("This is my text");
    expect(await text("This is my text").exists()).toBeTruthy();
  });
});
