import { emailTemplate } from "../../js-foundation/01.template";

describe("01.template", () => {
  test("emailTemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi,");
  });

  test("emailTemplate should contain a name and orderId placeholder", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);

    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toContain("{{orderId}}");
  })
});