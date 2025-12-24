import type { NextRequest } from "next/server";
import {
  getFeedForBase,
  getFeedForBaseQuote,
  getFeedsForChain,
} from "@/lib/feeds";

export async function GET(
  req: NextRequest,
  ctx: RouteContext<"/api/feeds/[chain]">,
) {
  const { chain } = await ctx.params;

  const searchParams = req.nextUrl.searchParams;
  const base = searchParams.get("base");
  const quote = searchParams.get("quote");

  if (base && quote) {
    const feed = await getFeedForBaseQuote(
      chain,
      base.toLowerCase(),
      quote.toLowerCase(),
    );
    return Response.json({ status: "ok", chain, feed });
  }

  if (base) {
    const feeds = await getFeedForBase(chain, base.toLowerCase());
    return Response.json({ status: "ok", chain, feeds });
  }

  const feeds = await getFeedsForChain(chain);

  return Response.json({ status: "ok", chain, feeds });
}
