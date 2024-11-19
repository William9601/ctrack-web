import { Card } from "../../components/card/Card";
import {
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "./PortfolioCard.styles";

export const PortfolioCard = () => {
  const data = [
    { coin: "Bitcoin", invested: "$1000", profit: "$200 (5%)", total: "$1200" },
    {
      coin: "Ethereum",
      invested: "$1500",
      profit: "$300 (21%)",
      total: "$1800",
    },
    {
      coin: "Cardano",
      invested: "$2000",
      profit: "$400 (12%)",
      total: "$2400",
    },
  ];

  return (
    <Card
      variant='default'
      backgroundColor='secondaryColor'
      padding='spacingMedium'>
      <Table>
        <thead>
          <TableRow>
            <TableHeader></TableHeader>
            <TableHeader>Invested</TableHeader>
            <TableHeader>Profit</TableHeader>
            <TableHeader>Total</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.coin}</TableCell>
              <TableCell>{row.invested}</TableCell>
              <TableCell>{row.profit}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};
