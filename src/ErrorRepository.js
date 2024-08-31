export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors
      .set(404, "Not Found")
      .set(400, "Bad Request")
      .set(403, "Forbidden")
      .set(401, "Unauthorized");
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      return "Unknown error";
    }
  }
}
