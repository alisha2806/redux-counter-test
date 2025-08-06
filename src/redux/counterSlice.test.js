import counterReducer, { increment, decrement, reset } from "./counterSlice";

describe("counterSlice", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });

  it("should increment the count", () => {
    const initialState = { value: 0 };
    const newState = counterReducer(initialState, increment());
    expect(newState.value).toBe(1);
  });

  it("should decrement the count", () => {
    const initialState = { value: 2 };
    const newState = counterReducer(initialState, decrement());
    expect(newState.value).toBe(1);
  });

  it("should not decrement below 0", () => {
    const initialState = { value: 0 };
    const newState = counterReducer(initialState, decrement());
    expect(newState.value).toBe(0);
  });

  it("should reset the count", () => {
    const initialState = { value: 5 };
    const newState = counterReducer(initialState, reset());
    expect(newState.value).toBe(0);
  });
});
