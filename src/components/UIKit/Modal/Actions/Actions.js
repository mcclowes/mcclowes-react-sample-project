import PropTypes from "prop-types";
import React from "react";
import { ActionsWrapper } from "./csx";
import Padded from "../../Padded";
import Button from "../../Button";

const Actions = props => {
  const { children, actions } = props;

  return (
    <ActionsWrapper>
      {children}

      {actions &&
        actions.map(action => {
          return (
            <Padded space="p3">
              <Button
                text={action.text}
                onClick={action.doClick}
                to={action.to}
              />
            </Padded>
          );
        })}
    </ActionsWrapper>
  );
};

Actions.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.shape({
    doClick: PropTypes.func,
    text: PropTypes.string,
    to: PropTypes.string
  })
};

export default Actions;
