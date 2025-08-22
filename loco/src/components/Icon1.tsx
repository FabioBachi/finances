import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

export type Icon1Type = {
  className?: string;
  icon?: string;

  /** Variant props */
  size?: string;
  type?: string;
};

const Icon11 = styled.img`
  height: 35px;
  width: 35px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const IconRoot = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Icon1: FunctionComponent<Icon1Type> = ({
  className = "",
  size = "Medium",
  type = "SVG Icon",
  icon,
}) => {
  return (
    <IconRoot data-size={size} data-type={type} className={className}>
      <Icon11 loading="lazy" alt="" src={icon} />
    </IconRoot>
  );
};

export default Icon1;
