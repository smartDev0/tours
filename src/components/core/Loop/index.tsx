import React from "react";

/** The props of the `Loop` component */
interface LoopProps<T> {
  /** The array of items that will be mapped to React Components */
  items: T[];

  /** The function that maps each item to a React Component */
  children(item: T, index: number): JSX.Element;
}

/**
 * Simple loop component that allows declaring a loop in the JSX.
 * This could be used instead of the more-standard JSX way of using map.
 */
const Loop: <T>(props: LoopProps<T>) => React.ReactElement<LoopProps<T>> = (
  props
) => {
  return <React.Fragment>{props.items.map(props.children)}</React.Fragment>;
};

export default Loop;
