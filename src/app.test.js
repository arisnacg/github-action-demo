const app = require("./app");
const request = require("supertest");

describe("POST /login", () => {
  describe("Give username and password", () => {
    test("response with JSON and status code 200", async () => {
      const response = await request(app).post("/login").send({
        username: "username",
        password: "password",
      });
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    test("response has to include user ID", async () => {
      const response = await request(app).post("/login").send({
        username: "username",
        password: "password",
      });
      expect(response.body.user.id).toBeDefined();
    });
  });
  describe("Username or password missing", () => {
    test("response with JSON and status code 400", async () => {
      const testBodyData = [{ username: "username" }, { password: "password" }];
      for (const body of testBodyData) {
        const response = await request(app).post("/login").send(body);
        expect(response.statusCode).toBe(400);
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      }
    });
  });
});
