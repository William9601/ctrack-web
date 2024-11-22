import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import theme from "../../assets/styles/theme";

export const StyledDatePicker = styled(DatePicker)({
  "& .MuiOutlinedInput-root": {
    height: "2.5rem",
    border: `1px solid ${theme.colors.onSurfaceColor}`,

    "& fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-input": {
    color: theme.colors.contentLeadColor,
  },
  "& .MuiSvgIcon-root": {
    color: theme.colors.contentLeadColor,
  },
});
