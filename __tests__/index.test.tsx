/*
  [1] describe : Block of multi test
  [2] test : To write test inside it
  [3] only : To run just specific block , can use it on ( describe and test)
  [3] skip : To skip specific block , can use it on ( describe and test)
  [4] beforeAll(() => {}, timeout) 
      * default timeout is 5s *
      It will execute only one time before al the test cases,
      If we have 3 test cases , the before hook will execute only one time.
  [5] beforeEach((() => {}, timeout)
      It will execute only one time before all and every test cases,
      If we have 3 test cases , the before each will execute 3 time.
  [6] afterAll((() => {}, timeout)
      It will execute only one time after al the test cases,
      If we have 3 test cases , the after hook will execute only one time.
  [7] afterEach((() => {}, timeout)
      It will execute only one time after all and every test cases,
      If we have 3 test cases , the after each will execute 3 time.
  [8] toHaveLength : to check matcher length    
  [8] not.toHaveLength : to check don't matcher length    
  [9] toContain : to check contain element    
  [10] not.toContain : to check don't contain element    
  [11] toBeFalsy    
  [12] toBeTruthy    
  [13] toBeGreaterThan    
  [14] toBeGreaterThanOrEqual    
  [15] toBelessThan    
  [16] toBeLessThanOrEqual    
  [17] toBeUndefined    
  [18] toMatch(/eyad/) : to check string contain inseide sentence    
  [19] toHaveProperty(Property , Value) : to check property or value contain inside object
  [20] expect.extend : to create new matceher     
  [21] expect.anything : everything is success except [nul - undefined]   
  [21] expect.any(constructor) : check constructor 
  [21] expect.arrayContaining(array) : Match Array 

*/

// import { MockFn } from "@/components/functions/MockFn";
import { SumFn } from "@/components/functions/SumFn";

describe("Test Sum Function", () => {
  test("Return number 10", () => {
    expect(SumFn(10)).toBe(10);
  });
  test.skip("Return number 20", () => {
    expect(SumFn(20)).toBe(20);
  });
  test("Return number 30", () => {
    expect(SumFn(30)).toBe(30);
  });
});

describe("Check Array is a number", () => {
  test("return number", () => {
    expect(isNaN(1)).toBeFalsy();
  });
});

// function cleanUpDatabase(db: any) {
//   db.cleanUp();
// }

// afterAll(() => {
//   cleanUpDatabase(globalDatabase);
// });

// create new matcher

expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    // received => 100
    // target => 12
    if (pass) {
      return {
        message: () => "TRUE",
        pass: true,
      };
    } else {
      return {
        message: () => "FALSE",
        pass: false,
      };
    }
  },
});

test("Check LargerThan", () => {
  expect(100).toBeLargerThan(12);
});

test("Expect anything", () => {
  expect("eyad").toEqual(expect.anything());
});

test("Expect any", () => {
  expect("eyad").toEqual(expect.any(String));
});

test("Expect arrayContaining", () => {
  expect([1, 2, 3, 6]).toEqual(expect.arrayContaining([1, 1]));
});

// test("MockFn", () => {
//   const mocker = jest.fn((name) => `Hello ${name}`);
//   expect(MockFn("eyad")).toBe("Hello eyad");
//   expect(MockFn("dani")).toBe("Hello dani");

//   expect(mocker).toHaveBeenCalled();
//   expect(mocker).toHaveBeenCalledTimes(2);
//   expect(mocker).toHaveBeenCalledWith("eyad");
//   expect(mocker).toHaveBeenLastCalledWith("dani");
// });
