import { Select, SelectChangeEvent } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { FC, useState } from "react";
import theme from "../../assets/styles/theme";
// import { GetCoinsApi } from "../../../services/api/getCoins";
// import { Coin } from "./types";

// interface CoinSelectProps {
//   setCoin: (selectedCoin: string) => void;
//   coin: string;
// }

interface Coin {
  coin_id: number;
  coin_name: string;
}

export const CoinSelect: FC = () => {
  //   const [coinList, setCoinList] = useState<Coin[]>([]);
  const [coin, setCoin] = useState(""); // Should be passed as a prop

  //   useEffect(() => {
  //     GetCoinsApi().then((res) => {
  //       setCoinList(res);
  //     });
  //   }, []);

  const coinList = [
    { coin_id: 1, coin_name: "Bitcoin" },
    { coin_id: 2, coin_name: "Ethereum" },
    { coin_id: 3, coin_name: "Cardano" },
  ];

  const selectCoin = (event: SelectChangeEvent<string>) => {
    const selectedCoin = event.target.value;
    setCoin(selectedCoin);
  };

  return (
    <FormControl
      fullWidth
      size='small'
      sx={{
        marginRight: theme.spacing.spacingSmall,
        marginBottom: theme.spacing.spacingMedium,
      }}>
      <InputLabel
        id='demo-simple-select-label'
        sx={{
          color: theme.colors.contentLeadColor,
        }}>
        Add Currency
      </InputLabel>
      <Select
        value={coin}
        label='Add currency'
        sx={{
          border: `1px solid ${theme.colors.contentLeadColor}`,
          color: theme.colors.contentLeadColor,
          "& .MuiSvgIcon-root": {
            color: theme.colors.contentLeadColor,
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: theme.colors.contentLeadColor,
              "& .MuiMenuItem-root": {
                padding: 2,
                color: theme.colors.surfaceColor,
              },
            },
          },
        }}
        onChange={selectCoin}>
        {coinList.map((coin: Coin) => (
          <MenuItem key={coin.coin_id} value={coin.coin_id}>
            {coin.coin_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
