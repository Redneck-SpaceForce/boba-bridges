import bridgesJson from '../resources/bridges.json';

export default function BridgeOptions(props: any) {
  const listBridges = props.bridges.map((bridge: any) => {
    const match = bridgesJson.find((x) => x.gateway === bridge);
    if (match?.oneWay && props.direction === 'from') {
      return;
    }
    return (
      <li
        key={bridge}
        className="border rounded text-left mt-2 py-1 pl-2 bg-gradient-to-tr from-gray-600 to bg-gray-100 text-black"
      >
        {bridge} -{' '}
        <a href={match?.url} target="_blank">
          {' '}
          {match?.url}{' '}
        </a>
      </li>
    );
  });
  return <ul>{listBridges}</ul>;
}
