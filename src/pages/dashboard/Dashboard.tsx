import {
  GridContainer,
  GridItemOne,
  GridItemThree,
  GridItemTwo,
} from "./Dashboard.styles";
import { HistoryCard } from "../../features/history-card/HistoryCard";
import { PortfolioCard } from "../../features/portfolio-card/PortfolioCard";
import { TotalCard } from "../../features/total-card/TotalCard";

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
        <HistoryCard />
      </GridItemThree>
    </GridContainer>
  );
};
