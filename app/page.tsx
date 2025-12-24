import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Chainlink Feed API</h1>
      <p className="text-lg mb-4">By Always be Shipping 🚢</p>
      <p className="mb-4">
        Lookup Chainlink feeds by chain at <code>/api/feeds/[chain]</code>
      </p>
      <p>Examples:</p>
      <ul className="mb-4">
        <li>
          <Link href="/api/feeds/ethereum">Ethereum Feeds</Link>
        </li>
        <li>
          <Link href="/api/feeds/polygon">Polygon Feeds</Link>
        </li>
      </ul>
      <p className="mb-4">
        Use query parameters <code>?base=BASE&quote=QUOTE</code> to filter feeds
        by base and quote assets.
      </p>
      <p>Example:</p>
      <ul>
        <li>
          <Link href="/api/feeds/ethereum?base=eth&quote=usd">
            ETH/USD Feed on Ethereum
          </Link>
        </li>
      </ul>
    </div>
  );
}
