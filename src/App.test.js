import App from "./App";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShawllowWrapper for the App component.
 * @function setupWrapper
 * @returns {ShallowWrapper}
 */

const setupWrapper = () => shallow(<App />);

const findByTestAttr = (wrapper, attrName) => {
  return wrapper.find(`[data-test='${attrName}']`);
};

test("renders without crashing", () => {
  const wrapper = setupWrapper();
  const appComponent = findByTestAttr(wrapper, "app-component");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setupWrapper();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setupWrapper();
  const displayComponent = findByTestAttr(wrapper, "display-component");
  expect(displayComponent.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = setupWrapper();
  const count = findByTestAttr(wrapper, "count");
  expect(count.text()).toBe("0");
});

test("clicking button increments counter display", () => {
  const wrapper = setupWrapper();
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  const count = findByTestAttr(wrapper, "count");
  expect(count.text()).toBe("1");
});

test("renders decrement button", () => {
  const wrapper = setupWrapper();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  expect(decrementButton.length).toBe(1);
});

test("clicking button decrements counter display", () => {
  const wrapper = setupWrapper();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const count = findByTestAttr(wrapper, "count");
  expect(count.text()).toBe("0");
});

test("clicking decrement button when count is 0 shows error message", () => {
  const wrapper = setupWrapper();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const errorMessage = wrapper.find("[error='true']");
  expect(errorMessage.length).toBe(1);
});

test("clicking increments button removes the error message", () => {
  const wrapper = setupWrapper();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const errorMessage = wrapper.find("[error='true']");
  expect(errorMessage.length).toBe(0);
});
