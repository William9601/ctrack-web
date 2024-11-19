import {
  GridContainer,
  GridItemOne,
  GridItemThree,
  GridItemTwo,
} from "./Dashboard.styles";
import { InputCard } from "./InputCard";
import { PortfolioCard } from "./PortfolioCard";
import { TotalCard } from "./TotalCard";

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
