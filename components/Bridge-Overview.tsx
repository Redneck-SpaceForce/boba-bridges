import { NetworkSelector } from './Network-Selector';
import MyTabs from './Toggle';
import bridges from '../resources/bridges.json';
import BridgeOptions from './Bridge-Options';

export function BridgeOverview() {
  const tabs = MyTabs();
  let render, selected: { network: any; logo?: string; website?: string };
  if (tabs.direction === 'to') {
    const data = NetworkSelector({ data: 'from' });
    render = data.render;
    selected = data.selected;
  } else {
    const data = NetworkSelector({ data: 'to' });
    render = data.render;
    selected = data.selected;
  }
  const availableBridges = bridges
    .map((bridge) => {
      if (bridge.network.includes(selected.network)) {
        return bridge.gateway;
      }
      return;
    })
    .filter(Boolean);
  const options = BridgeOptions({
    bridges: availableBridges,
    direction: tabs.direction,
  });
  return (
    <div className="min-w-full">
      {tabs.tab}
      {render}
      {options}{' '}
    </div>
  );
}
