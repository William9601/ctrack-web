import { Card } from "../../components/card/Card";
import Typography from "../../components/typography/Typography.styles";
import {
  GridContainer,
  GridItemOne,
  GridItemThree,
  GridItemTwo,
} from "./Dashboard.styles";
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
        <Card
          variant='default'
          backgroundColor='secondaryColor'
          padding='spacingMedium'>
          <div>
            <Typography variant='h1' color='errorColor'>
              Three
            </Typography>
          </div>
        </Card>
      </GridItemThree>
    </GridContainer>
  );
};
