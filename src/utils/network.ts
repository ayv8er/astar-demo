export enum Network {
  ETHEREUM_SEPOLIA = 'ethereum-sepolia',
  ETHEREUM = 'ethereum',
  ASTAR_KATANA = 'astar-katana',
  ASTAR_KYOTO = 'astar-kyoto',
  ASTAR_ZKEVM = 'astar-zkevm',
}

export const getNetworkUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      return 'https://ethereum-rpc.publicnode.com	';
    case Network.ETHEREUM:
      return 'https://rpc.ankr.com/eth';
    case Network.ASTAR_KATANA:
      return 'https://rpc.startale.com/zkatana';
    case Network.ASTAR_KYOTO:
      return 'https://rpc.startale.com/zkyoto';
    case Network.ASTAR_ZKEVM:
      return 'https://rpc.startale.com/astar-zkevm';
    default:
      throw new Error('Network not supported');
  }
};

export const getChainId = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      return 11155111;
    case Network.ETHEREUM:
      return 1;
    case Network.ASTAR_KATANA:
      return 1261120;
    case Network.ASTAR_KYOTO:
      return 6038361;
    case Network.ASTAR_ZKEVM:
      return 3776;
  }
};

export const getNetworkToken = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM:
    case Network.ETHEREUM_SEPOLIA:
    case Network.ASTAR_KATANA:
    case Network.ASTAR_KYOTO:
    case Network.ASTAR_ZKEVM:
      return 'ETH';
  }
};

export const getFaucetUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      return 'https://sepoliafaucet.com/';
  }
};

export const getNetworkName = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      return 'Ethereum (Sepolia)';
    case Network.ETHEREUM:
      return 'Ethereum (Mainnet)';
    case Network.ASTAR_KATANA:
      return 'Astar (Katana)';
    case Network.ASTAR_KYOTO:
      return 'Astar (Kyoto)';
    case Network.ASTAR_ZKEVM:
      return 'Astar (zkEVM)';
  }
};

export const getBlockExplorer = (address: string) => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM:
      return `https://etherscan.io/address/${address}`;
    case Network.ETHEREUM_SEPOLIA:
      return `https://sepolia.etherscan.io/address/${address}`;
    case Network.ASTAR_KATANA:
      return `https://zkatana.explorer.startale.com/address/${address}`;
    case Network.ASTAR_KYOTO:
      return `https://astar-zkyoto.blockscout.com/address/${address}`;
    case Network.ASTAR_ZKEVM:
      return `https://astar-zkevm.explorer.startale.com/address/${address}`
  }
};