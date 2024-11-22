import { useState } from "react";
import { CloseBox } from "../../assets/icons";
import { TextButton } from "../../components/Button.styles";
import { Flex } from "../../components/flex/Flex.styles";
import { TextInput } from "../../components/text-input/TextInput.styles";
import { CoinSelect } from "../coin-select/CoinSelect";

interface InputCardProps {
  toggleShowInput: () => void;
}

export const InputCard: React.FC<InputCardProps> = ({ toggleShowInput }) => {
  const [amount, setAmount] = useState("");

  return (
    <Flex gap='0.5rem' direction='column'>
      <Flex align='flex-start'>
        <CoinSelect />
        <TextButton onClick={() => toggleShowInput()}>
          <CloseBox />
        </TextButton>
      </Flex>
      <TextInput
        placeholder='Amount *'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextInput placeholder='Price *' />
      <TextInput placeholder='Fee *' />
    </Flex>
  );
};
