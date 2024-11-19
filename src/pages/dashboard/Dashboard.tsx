import {
  GridContainer,
  GridItemOne,
  GridItemThree,
  GridItemTwo,
} from "./Dashboard.styles";
import { InputCard } from "../../features/history-card/InputCard";
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
        <InputCard />
      </GridItemThree>
    </GridContainer>
  );
};
