import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

export type Typography1Type = {
  className?: string;
  content?: string;

  /** Variant props */
  gutterBottom?: boolean;
  variant?: string;
};

const Subtitle = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 157%;
  font-weight: var(--fontWeightMedium);
`;
const TypographyRoot = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(---fontSize-0875rem);
  color: var(--text-secondary);
  font-family: var(--fontFamily);
`;

const Typography1: FunctionComponent<Typography1Type> = ({
  className = "",
  gutterBottom = false,
  variant = "body1",
  content = "Not sure where to start?",
}) => {
  return (
    <TypographyRoot
      data-gutterBottom={gutterBottom}
      data-variant={variant}
      className={className}
    >
      <Subtitle>{content}</Subtitle>
    </TypographyRoot>
  );
};

export default Typography1;
