import { Card } from "../../components/card/Card";
import { Flex } from "../../components/flex/Flex.styles";
import Typography from "../../components/typography/Typography.styles";
import { TotalTypography } from "./Dashboard.styles";

export const TotalCard = () => {
  return (
    <Card
      variant='default'
      backgroundColor='secondaryColor'
      padding='spacingMedium'>
      <Flex justify='space-around'>
        <Flex direction='column' gap='0.3rem'>
          <Typography variant='lead' color='contentLeadColor'>
            Total
          </Typography>
          <TotalTypography color='contentLeadColor'>£20,000</TotalTypography>
        </Flex>
        <Flex direction='column' gap='0.3rem'>
          <Typography variant='lead' color='contentLeadColor'>
            Profit
          </Typography>
          <TotalTypography color='contentLeadColor'>
            £2,000 (4%)
          </TotalTypography>
        </Flex>
      </Flex>
    </Card>
  );
};
