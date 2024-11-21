import { useState } from "react";
import { Card } from "../../components/card/Card";
import { InputCard } from "./InputCard";
import { HistoryCard } from "./HistoryCard";

export const HistoryInputCard = () => {
  const [showInputCard, setShowInputCard] = useState(false);

  const toggleShowInput = () => {
    setShowInputCard(!showInputCard);
  };

  return (
    <Card
      variant='default'
      backgroundColor='secondaryColor'
      padding='spacingMedium'>
      {showInputCard ? (
        <InputCard toggleShowInput={toggleShowInput} />
      ) : (
        <HistoryCard toggleShowInput={toggleShowInput} />
      )}
    </Card>
  );
};
