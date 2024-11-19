import { AddBox } from "../../assets/icons";
import { TextButton } from "../../components/Button.styles";
import { Card } from "../../components/card/Card";
import { Flex } from "../../components/flex/Flex.styles";
import Typography from "../../components/typography/Typography.styles";

export const HistoryCard = () => {
  // const [showInputCard, setShowInputCard] = useState(false);

  const onClickAddButton = () => {
    console.log("Click");
  };

  return (
    <Card
      variant='default'
      backgroundColor='secondaryColor'
      padding='spacingMedium'>
      <Flex gap='0.5rem' direction='column'>
        <Flex justify='space-between'>
          <Typography variant='h1' color='contentLeadColor'>
            Bitcoin
          </Typography>
          <TextButton onClick={() => onClickAddButton()}>
            <AddBox />
          </TextButton>
        </Flex>
        <Typography variant='lead' color='contentLeadColor'>
          Current Value £72,427
        </Typography>
        <Flex justify='space-between'>
          <Typography variant='body' color='contentColor'>
            11/08/1990
          </Typography>
          <Typography variant='body' color='contentColor'>
            1 at £30,000
          </Typography>
        </Flex>
      </Flex>
    </Card>
  );
};
