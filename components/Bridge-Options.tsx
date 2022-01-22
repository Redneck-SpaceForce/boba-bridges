import bridgesJson from '../resources/bridges.json';
import assets from '../resources/assets.json';

function assetList(bridge: any, network: string) {
  const match = bridgesJson.find(
    (x) => x.gateway === bridge && x.network.includes(network)
  );
  let assetList;
  if (match) {
    assetList = match.assets.map((assetSymbol: string) => {
      return (
        <img
          key={assetSymbol}
          src={assets.find((a) => a.symbol === assetSymbol)?.logo}
          className="flex-shrink-0 mx-1 h-6 w-6 rounded-full"
          title={assets.find((a) => a.symbol === assetSymbol)?.symbol}
        />
      );
    });
  }
  return <div className="flex">{assetList}</div>;
}

export default function BridgeOptions(props: any) {
  const listBridges = props.bridges.map((bridge: any) => {
    const match = bridgesJson.find((x) => x.gateway === bridge);
    if (match?.oneWay && props.direction === 'from') {
      return;
    }
    return (
      <li key={bridge}>
        <a href={match?.url} target="_blank">
          <button className="flex-wrap border rounded w-full text-left mt-2 py-1 pl-2 bg-gradient-to-tr from-gray-600 to bg-gray-100 text-black">
            {bridge}
            {assetList(bridge, props.network)}
          </button>
        </a>
      </li>
    );
  });
  return <ul>{listBridges}</ul>;
}
