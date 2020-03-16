import React from "react";
import { Slider, Statistic } from "antd";
import Subscription from "./types/Subscription";

interface Props {
  totalMRR: number;
  onChangeMRR: (num: number) => void;
  subscriptions: Array<Subscription>;
  selectionCount: number;
}

export default ({
  totalMRR,
  onChangeMRR,
  subscriptions,
  selectionCount
}: Props) => {
  return (
    <React.Fragment>
      <h4>MRR for New Subscriptions</h4>
      <Statistic value={totalMRR} />
      <Slider
        max={subscriptions.length}
        onChange={(value: any) => {
          onChangeMRR(value);
        }}
        value={selectionCount}
      />
      {selectionCount} subscriptions
    </React.Fragment>
  );
};
