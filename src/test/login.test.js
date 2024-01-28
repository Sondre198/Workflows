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
    // Mock a successful response from the API
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ accessToken: "test-token", user: "test-user" }),
    });

    // Act: Call the login function
    await login("test@example.com", "testing123");

    // Assert: Ensure storage.save is called with the expected arguments
    expect(storage.save).toHaveBeenCalledWith("token", "test-token");
  });

  // Add more test cases if needed
});

