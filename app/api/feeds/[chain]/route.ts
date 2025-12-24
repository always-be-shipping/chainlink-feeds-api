import type { NextRequest } from "next/server";
import { getFeedsForChain } from "@/lib/feeds";

export const dynamic = "force-static";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/feeds/[chain]">,
) {
  const { chain } = await ctx.params;
  const feeds = await getFeedsForChain(chain);

  return Response.json({ status: "ok", chain, feeds });
}
