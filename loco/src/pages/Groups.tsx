import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Apps from "../components/Apps";
import Typography1 from "../components/Typography1";
import HoodieConnectCard from "../components/HoodieConnectCard";
import styled from "styled-components";

const Help = styled(Box)`
  width: 476px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10);
`;
const GroupsRoot = styled(Box)`
  width: 100%;
  position: relative;
  background-color: var(--blueGrey-50);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--3);
  box-sizing: border-box;
  gap: var(--gap-10);
  line-height: normal;
  letter-spacing: normal;
`;

const Groups: FunctionComponent = () => {
  return (
    <GroupsRoot>
      <Apps />
      <Help>
        <Typography1
          gutterBottom={false}
          variant="subtitle2"
          content="Not sure where to start?"
        />
        <HoodieConnectCard
          title="KNOWLEDGE CENTER"
          text="All the information you need to understand and use the Hoodie App"
          hoodieConnectCardBorder="1px solid #fdd835"
          hoodieConnectCardFlex="unset"
          hoodieConnectCardAlignSelf="stretch"
          iconMargin="unset"
          iconDisplay="flex"
          iconFlexDirection="row"
          iconAlignItems="flex-start"
          iconJustifyContent="flex-start"
        />
      </Help>
    </GroupsRoot>
  );
};

export default Groups;
