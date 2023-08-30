const slugify = require("../slugify");

describe("slugify", () => {
  test("should return slugified string", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: false,
      forceSuffix: false,
      slugify: true,
      outputLength: 0,
      outputCase: "lower",
    });
    expect(slugifiedStr).toBe("this-is-a-test-string");
  });
  test("should return slugified string with prefix and without suffix", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: true,
      forceSuffix: false,
      slugify: true,
      outputLength: 0,
      outputCase: "lower",
    });
    expect(slugifiedStr).toBe("thisthis-is-a-test-string");
  });
  test("should return slugified string with suffix and without prefix", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: false,
      forceSuffix: true,
      slugify: true,
      outputLength: 0,
      outputCase: "lower",
    });
    expect(slugifiedStr).toBe("this-is-a-test-stringstring");
  });
  test("should return slugified string with prefix and suffix", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: true,
      forceSuffix: true,
      slugify: true,
      outputLength: 0,
      outputCase: "lower",
    });
    expect(slugifiedStr).toBe("thisthis-is-a-test-stringstring");
  });
  test("should return slugified string with prefix and suffix and output length", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: true,
      forceSuffix: true,
      slugify: true,
      outputLength: 10,
      outputCase: "lower",
    });
    expect(slugifiedStr).toBe("thisthis-i");
  });
  test("should return slugified string with prefix and suffix and output length and capitalize", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: true,
      forceSuffix: true,
      slugify: true,
      outputLength: 10,
      outputCase: "capitalize",
    });
    expect(slugifiedStr).toBe("Thisthis-i");
  });
  test("should return slugified string with prefix and suffix and output length and upper", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: true,
      forceSuffix: true,
      slugify: true,
      outputLength: 10,
      outputCase: "upper",
    });
    expect(slugifiedStr).toBe("THISTHIS-I");
  });
  test("should return slugified string with prefix and suffix and output length and lower", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: true,
      forceSuffix: true,
      slugify: true,
      outputLength: 10,
      outputCase: "lower",
    });
    expect(slugifiedStr).toBe("thisthis-i");
  });
  test("should return slugified string with prefix and suffix and output length and lower and no slugify", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: true,
      forceSuffix: true,
      slugify: false,
      outputLength: 10,
      outputCase: "lower",
    });
    expect(slugifiedStr).toBe("thisthis i");
  });

  test("should return slugified string with prefix and suffix and output length and lower and no slugify and no force prefix and suffix", () => {
    const slugifiedStr = slugify({
      inputStr: "This is a test string",
      prefix: "this",
      suffix: "string",
      forcePrefix: false,
      forceSuffix: false,
      slugify: false,
      outputLength: 10,
      outputCase: "lower",
    });
    expect(slugifiedStr).toBe("this is a ");
  });
});
