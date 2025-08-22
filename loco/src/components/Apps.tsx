import { FunctionComponent } from "react";
import HoodieConnectCard from "./HoodieConnectCard";
import styled from "styled-components";

export type AppsType = {
  className?: string;
};

const AppsRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0px 0px var(--3);
  gap: var(--gap-10);
`;

const Apps: FunctionComponent<AppsType> = ({ className = "" }) => {
  return (
    <AppsRoot className={className}>
      <HoodieConnectCard
        title="HOODIE CONNECT"
        text="Connect with your business partners and enable efficient ordering by sharing POS and wholesale data"
      />
      <HoodieConnectCard
        title="SALES ENABLEMENT"
        text="Quickly get the dispensary and product information you need to sell more"
        hoodieConnectCardBorder="1px solid #00acc1"
        hoodieConnectCardFlex="1"
        hoodieConnectCardAlignSelf="unset"
        iconMargin="unset"
        iconDisplay="flex"
        iconFlexDirection="row"
        iconAlignItems="flex-start"
        iconJustifyContent="flex-start"
      />
    </AppsRoot>
  );
};

export default Apps;
