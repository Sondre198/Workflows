import { logout } from "../js/api/auth/logout.js";
import * as storage from "../js/storage/index.js";

jest.mock("../js/storage/index.js");

describe("logout function", () => {
  beforeEach(() => {
    // Clear mock calls on storage.remove before each test
    storage.remove.mockClear();
  });

  it("should remove the token and profile from storage", () => {

    logout();
    
    // Check the number of times storage.remove was called
    expect(storage.remove).toHaveBeenCalledTimes(2);

    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");
  });
});
