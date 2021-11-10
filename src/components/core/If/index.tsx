import React, {FunctionComponent} from "react";

/** The props of the `If` component */
export interface IfProps {
  /** A condition that, when met, make so that the children of the component are rendered */
  condition: boolean;
}

/**
 * Simple testing component that allows to declaring a condition within JSX.
 * This could be used instead of the more-standard JSX way of using ternary operators.
 */
const If: FunctionComponent<IfProps> = (props) => {
  return (
    <React.Fragment>
      {props.condition ? props.children : undefined}
    </React.Fragment>
  );
};

export default If;
