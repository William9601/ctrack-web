import { CloseBox } from "../../assets/icons";
import { TextButton } from "../../components/Button.styles";
import { Flex } from "../../components/flex/Flex.styles";
import { CoinSelect } from "../coin-select/CoinSelect";

interface InputCardProps {
  toggleShowInput: () => void;
}

export const InputCard: React.FC<InputCardProps> = ({ toggleShowInput }) => {
  return (
    <Flex gap='0.5rem' direction='column'>
      <Flex align='flex-start'>
        <CoinSelect />
        <TextButton onClick={() => toggleShowInput()}>
          <CloseBox />
        </TextButton>
      </Flex>
    </Flex>
  );
};
