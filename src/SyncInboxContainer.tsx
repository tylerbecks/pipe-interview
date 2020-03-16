/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { Button, Card, Statistic } from "antd";
import SubscriptionsTable from "./SubscriptionsTable";
import MRRCard from "./MRRCard";
import { fetchSubscriptions } from "./util/http";

export default () => {
  const [selectionCount, updateSelectionCount] = useState(0 as number);
  const subscriptions = fetchSubscriptions();
  const handleUpdateMRRSelection = (newSelectionCount: number) => {
    updateSelectionCount(newSelectionCount);
  };

  const getTotalMRR = () => {
    let total = 0;
    for (let index = 0; index < selectionCount; index++) {
      const { mrr } = subscriptions[index];
      total += mrr;
    }

    return total;
  };

  const totalMRR = getTotalMRR();

  return (
    <div>
      <div
        css={css`
          display: flex;
        `}
      >
        <MyCard>
          <MRRCard
            totalMRR={totalMRR}
            onChangeMRR={handleUpdateMRRSelection}
            subscriptions={subscriptions}
            selectionCount={selectionCount}
          />
        </MyCard>
        <MyCard>
          <h4>Total Piped Subscriptions</h4>
          <Statistic value={totalMRR * 12} />
          <Button type="primary">Pipe Subscriptions -></Button>
        </MyCard>
      </div>

      <Card>
        <SubscriptionsTable subscriptions={subscriptions} />
      </Card>
    </div>
  );
};

const MyCard = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      background: white;
      padding: 15px;
      width: 100%;
      text-align: center;
    `}
  >
    {children}
  </div>
);
