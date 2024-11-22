import { useState } from "react";
import { CloseBox } from "../../assets/icons";
import { TextButton } from "../../components/Button.styles";
import { Flex } from "../../components/flex/Flex.styles";
import { TextInput } from "../../components/text-input/TextInput.styles";
import { CoinSelect } from "../coin-select/CoinSelect";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledDatePicker } from "../../components/date-picker/DatePicker.styles";

interface InputCardProps {
  toggleShowInput: () => void;
}

export const InputCard: React.FC<InputCardProps> = ({ toggleShowInput }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  console.log(date);

  return (
    <Flex gap='0.5rem' direction='column'>
      <Flex align='flex-start'>
        <CoinSelect />
        <TextButton onClick={() => toggleShowInput()}>
          <CloseBox />
        </TextButton>
      </Flex>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          value={date}
          onChange={(newValue) => setDate(newValue)}
          format='DD-MM-YYYY'
        />
      </LocalizationProvider>

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
