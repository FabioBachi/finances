import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

export type HoodieConnectCardType = {
  className?: string;
  title?: string;
  text?: string;

  /** Style props */
  hoodieConnectCardBorder?: CSSProperties["border"];
  hoodieConnectCardFlex?: CSSProperties["flex"];
  hoodieConnectCardAlignSelf?: CSSProperties["alignSelf"];
  iconMargin?: CSSProperties["margin"];
  iconDisplay?: CSSProperties["display"];
  iconFlexDirection?: CSSProperties["flexDirection"];
  iconAlignItems?: CSSProperties["alignItems"];
  iconJustifyContent?: CSSProperties["justifyContent"];
};

const Icon11 = styled.input<{
  iconMargin?: CSSProperties["margin"];
  iconDisplay?: CSSProperties["display"];
  iconFlexDirection?: CSSProperties["flexDirection"];
  iconAlignItems?: CSSProperties["alignItems"];
  iconJustifyContent?: CSSProperties["justifyContent"];
}>`
  margin: 0;
  margin: ${(p) => p.iconMargin};
  display: ${(p) => p.iconDisplay};
  flex-direction: ${(p) => p.iconFlexDirection};
  align-items: ${(p) => p.iconAlignItems};
  justify-content: ${(p) => p.iconJustifyContent};
`;
const H = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 157%;
  font-weight: var(--fontWeightMedium);
`;
const Body = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.17px;
  line-height: 143%;
  color: var(--text-disabled);
`;
const Content = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4);
`;
const HoodieConnectCardRoot = styled(Box)<{
  hoodieConnectCardBorder?: CSSProperties["border"];
  hoodieConnectCardFlex?: CSSProperties["flex"];
  hoodieConnectCardAlignSelf?: CSSProperties["alignSelf"];
}>`
  flex: 1;
  border-radius: var(--borderRadius);
  background-color: var(--color-white);
  border: 1px solid var(--primary-main);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--2);
  gap: var(--2);
  text-align: left;
  font-size: var(---fontSize-0875rem);
  color: var(--text-primary);
  font-family: var(--fontFamily);
  border: ${(p) => p.hoodieConnectCardBorder};
  flex: ${(p) => p.hoodieConnectCardFlex};
  align-self: ${(p) => p.hoodieConnectCardAlignSelf};
`;

const HoodieConnectCard: FunctionComponent<HoodieConnectCardType> = ({
  className = "",
  title = "HOODIE CONNECT",
  text = "Connect with your business partners and enable efficient ordering by sharing POS and wholesale data",
  hoodieConnectCardBorder,
  hoodieConnectCardFlex,
  hoodieConnectCardAlignSelf,
  iconMargin,
  iconDisplay,
  iconFlexDirection,
  iconAlignItems,
  iconJustifyContent,
}) => {
  return (
    <HoodieConnectCardRoot
      hoodieConnectCardBorder={hoodieConnectCardBorder}
      hoodieConnectCardFlex={hoodieConnectCardFlex}
      hoodieConnectCardAlignSelf={hoodieConnectCardAlignSelf}
      className={className}
    >
      <Icon11
        type="checkbox"
        iconMargin={iconMargin}
        iconDisplay={iconDisplay}
        iconFlexDirection={iconFlexDirection}
        iconAlignItems={iconAlignItems}
        iconJustifyContent={iconJustifyContent}
      />
      <Content>
        <H>{title}</H>
        <Body>{text}</Body>
      </Content>
    </HoodieConnectCardRoot>
  );
};

export default HoodieConnectCard;
