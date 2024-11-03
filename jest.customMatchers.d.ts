// jest.customMatchers.d.ts
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeLargerThan(target: number): R;
    }
  }
}

export {};
