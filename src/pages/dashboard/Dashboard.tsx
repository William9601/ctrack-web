import {
  GridContainer,
  GridItemOne,
  GridItemThree,
  GridItemTwo,
} from "./Dashboard.styles";
import { PortfolioCard } from "../../features/portfolio-card/PortfolioCard";
import { TotalCard } from "../../features/total-card/TotalCard";
import { HistoryInputCard } from "../../features/history-input-card/HistoryInputCard";

export const Dashboard = () => {
  return (
    <GridContainer>
      <GridItemOne>
        <TotalCard />
      </GridItemOne>
      <GridItemTwo>
        <PortfolioCard />
      </GridItemTwo>
      <GridItemThree>
        <HistoryInputCard />
      </GridItemThree>
    </GridContainer>
  );
};
