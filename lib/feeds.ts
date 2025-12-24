import "server-only";
import type { Feed } from "@/types/feeds.d.ts";

const URL_PATTERN =
  "https://reference-data-directory.vercel.app/$LOCATION.json";

const OVERRIDES: Record<string, string> = {
  andromeda: "feeds-ethereum-mainnet-andromeda-1",
  arbitrum: "feeds-ethereum-mainnet-arbitrum-1",
  base: "feeds-ethereum-mainnet-base-1",
  bob: "feeds-bitcoin-mainnet-bob-1",
  botanix: "feeds-bitcoin-mainnet-botanix",
  ethereum: "feeds-mainnet",
  linea: "feeds-ethereum-mainnet-linea-1",
  hyperevm: "feeds-hyperliquid-mainnet",
  mantle: "feeds-ethereum-mainnet-mantle-1",
  moonbeam: "feeds-polkadot-mainnet-moonbeam",
  moonriver: "feeds-kusama-mainnet-moonriver",
  optimism: "feeds-ethereum-mainnet-optimism-1",
  polygon: "feeds-polygon-mainnet-katana",
  scroll: "feeds-ethereum-mainnet-scroll-1",
  soneium: "feeds-ethereum-mainnet-soneium-1",
  starknet: "feeds-ethereum-mainnet-starknet-1",
  xlayer: "feeds-ethereum-mainnet-xlayer-1",
  zkevm: "feeds-ethereum-mainnet-polygon-zkevm-1",
  zksync: "feeds-ethereum-mainnet-zksync-1",
};

export async function getFeedsForChain(chain: string): Promise<Feed[]> {
  const location = OVERRIDES[chain] || `feeds-${chain}-mainnet`;
  const url = URL_PATTERN.replace("$LOCATION", location);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch feeds for chain ${chain}: ${res.status} ${res.statusText}`,
    );
  }
  return await res.json();
}

export async function getFeedForBase(
  chain: string,
  base: string,
): Promise<Feed[]> {
  const _feeds = await getFeedsForChain(chain);
  const feeds = _feeds.filter((feed) =>
    feed.path.toLowerCase().startsWith(`${base.toLowerCase()}`),
  );
  return feeds;
}

export async function getFeedForBaseQuote(
  chain: string,
  base: string,
  quote: string,
): Promise<Feed | null> {
  const feeds = await getFeedsForChain(chain);
  // base-quote is in the `path` field, lowercase
  const feed = feeds.find(
    (feed) =>
      feed.path.toLowerCase() ===
      `${base.toLowerCase()}-${quote.toLowerCase()}`,
  );
  return feed || null;
}
