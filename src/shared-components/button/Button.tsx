import React from "react";

import cx from "classnames";
import { Button, ButtonProps } from "antd";

import styles from "./button.module.scss";

export type CAAPButtonProps = ButtonProps & {};

const CAAPButton: React.FC<CAAPButtonProps> = ({
  type,
  children,
  ...props
}: CAAPButtonProps) => {
  const typeClass = cx({
    [styles["caap-button--solid"]]: type === "default",
    [styles["caap-button--rounded"]]: type === "primary",
    [styles["caap-button--outline"]]: type === "dashed",
    [styles["caap-button--link"]]: type === "link",
    [styles["caap-button--text"]]: type === "text",
  });

  return (
    <>
      <Button {...props} className={cx(styles["caap-button"], typeClass)}>
        {children}
      </Button>
    </>
  );
};

export default CAAPButton;
