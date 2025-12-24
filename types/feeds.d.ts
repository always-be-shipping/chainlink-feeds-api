export type Feed = {
  compareOffchain: string;
  contractAddress: `0x${string}`; // Specific template literal for hex addresses
  contractType: string;
  contractVersion: number;
  decimalPlaces: number | null;
  ens: string;
  formatDecimalPlaces: number | null;
  healthPrice: string;
  heartbeat: number;
  history: boolean; // Use a more specific type if the history structure is known
  multiply: string;
  name: string;
  pair: [string, string]; // Fixed-length tuple for the pair
  path: string;
  proxyAddress: `0x${string}`;
  threshold: number;
  valuePrefix: string;
  valueSuffix: string;
  assetName: string;
  feedCategory: string;
  feedType: string;
  docs: {
    assetClass: string;
    assetSubClass: string;
    attributeType: string;
    baseAsset: string;
    baseAssetEntityId: string;
    blockchainName: string;
    deliveryChannelCode: string;
    issuer: string;
    marketHours: string;
    porAuditor: string;
    porSource: string;
    porType: string;
    productSubType: string;
    productType: string;
    productTypeCode: string;
    reserveAsset: string;
    reserveAssetClic: string;
    underlyingAsset: string;
    underlyingAssetClic: string;
  };
  decimals: number;
};
