import { unmountComponentAtNode, render } from "react-dom";
import { act } from "@testing-library/react";
import TaskItem from "../components/taskItem/TaskItem";
import Task from "../models/Task";
import Status from "../models/Status";
import React from "react";

let container: Element = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render task item correctly", () => {
  const taskDescription = "test description";
  act(() => {
    const task = new Task(1, taskDescription, new Date(), Status.NotStarted);
    render(<TaskItem task={task}/>, container);
  });
  expect(Array.from(container.childNodes[0].childNodes).map(x => x.textContent).some(x => x == taskDescription)).toBe(true);
});