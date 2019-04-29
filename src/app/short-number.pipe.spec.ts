import { ShortNumberPipe } from "./short-number.pipe";

describe("ShortNumberPipe", () => {
  it("create an instance", () => {
    const pipe = new ShortNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it("returns value as string if value < 1000", () => {
    const pipe = new ShortNumberPipe();
    const result = pipe.transform(800);

    expect(result).toBe("800");
  });

  it("returns 1.0K if value = 1000", () => {
    const pipe = new ShortNumberPipe();
    const result = pipe.transform(1000);

    expect(result).toBe("1.0K");
  });

  it("returns 133.2K if value is 133222", () => {
    const pipe = new ShortNumberPipe();
    const result = pipe.transform(133222);

    expect(result).toBe("133.2K");
  });
});
