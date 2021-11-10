import React, { FunctionComponent } from "react";
import { StyledSpinner } from "./index.style";

/** The props of the `Spinner` component */
export interface SpinnerProps {
  /** A condition that, when met, make so that the children of the component are rendered. Otherwise, it shows the spinner*/
  isLoading: boolean;
}

/**
 * Simple spinner component that allows to show the spinner if condition is not met, children otherwise
 */
const Spinner: FunctionComponent<SpinnerProps> = (props) => {
  return (
    <React.Fragment>
      {!props.isLoading ? props.children : <StyledSpinner />}
    </React.Fragment>
  );
};

export default Spinner;
