import { CloseBox } from "../../assets/icons";
import { TextButton } from "../../components/Button.styles";
import { Flex } from "../../components/flex/Flex.styles";
import Typography from "../../components/typography/Typography.styles";

interface InputCardProps {
  toggleShowInput: () => void;
}

export const InputCard: React.FC<InputCardProps> = ({ toggleShowInput }) => {
  return (
    <Flex gap='0.5rem' direction='column'>
      <Flex justify='space-between'>
        <Typography>Input</Typography>
        <TextButton onClick={() => toggleShowInput()}>
          <CloseBox />
        </TextButton>
      </Flex>
    </Flex>
  );
};
