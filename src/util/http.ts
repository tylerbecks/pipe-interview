import subscriptions from "../subscriptions.json";
import Subscription from "../types/Subscription";

export const fetchSubscriptions = (): Array<Subscription> =>
  subscriptions.map(s =>
    Object.assign({}, s, {
      startDate: new Date(s.startDate),
      endDate: new Date(s.endDate)
    })
  );
