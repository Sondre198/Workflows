import { login } from "../js/api/auth/login.js";
import * as storage from "../js/storage/index.js";

jest.mock("../js/storage/index.js");

global.fetch = jest.fn();

describe("login function", () => {
  beforeEach(() => {
    fetch.mockClear();
    storage.save.mockClear();
  });

  it("should save token in storage when login is successful", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ accessToken: "test-token", user: "test-user" }),
    });

    await login("test@example.com", "testing123");

    expect(storage.save).toHaveBeenCalledWith("token", "test-token");
  });
});

