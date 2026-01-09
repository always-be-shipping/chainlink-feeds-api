# Chainlink Feeds API 🚢

> **A RESTful API for accessing Chainlink price feed data across multiple blockchain networks**
> 
> By [Always be Shipping](https://github.com/always-be-shipping)

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://chainlink-feeds.alwaysbeshipp.ing)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)

## 📖 Overview

The Chainlink Feeds API provides a simple, fast, and reliable way to query Chainlink oracle price feed data across multiple blockchain networks. Whether you're building a DeFi application, analytics dashboard, or research tool, this API gives you programmatic access to thousands of price feeds. 

**Live API:** [https://chainlink-feeds.alwaysbeshipp.ing](https://chainlink-feeds.alwaysbeshipp.ing)

## ✨ Features

- 🌐 **Multi-Chain Support** - Access feeds from Ethereum, Polygon, Arbitrum, Base, Optimism, and more
- 🔍 **Flexible Filtering** - Query by base asset, quote asset, or both
- ⚡ **Fast & Cached** - Edge cache provided by Vercel
- 📊 **Rich Metadata** - Get contract addresses, decimals, heartbeat, and more
- 🎨 **Clean API Design** - RESTful endpoints with JSON responses
- 🔒 **TypeScript First** - Full type safety and IntelliSense support

## 🚀 Quick Start

### API Endpoints

#### Get All Feeds for a Chain

```bash
GET /api/feeds/[chain]
```

**Example:**
```bash
curl https://chainlink-feeds.alwaysbeshipp.ing/api/feeds/ethereum
```

#### Filter by Base Asset

```bash
GET /api/feeds/[chain]?base=[asset]
```

**Example:**
```bash
curl https://chainlink-feeds.alwaysbeshipp.ing/api/feeds/ethereum?base=eth
```

#### Filter by Base and Quote Assets

```bash
GET /api/feeds/[chain]?base=[asset]&quote=[asset]
```

**Example:**
```bash
curl https://chainlink-feeds.alwaysbeshipp.ing/api/feeds/ethereum?base=eth&quote=usd
```

### Supported Chains

- `ethereum` - Ethereum Mainnet
- `polygon` - Polygon (Matic)
- `arbitrum` - Arbitrum One
- `base` - Base
- `optimism` - Optimism
- `linea` - Linea
- `andromeda` - Metis Andromeda
- `mantle` - Mantle
- `moonbeam` - Moonbeam
- `moonriver` - Moonriver
- `bob` - BOB (Build on Bitcoin)
- `botanix` - Botanix
- `hyperevm` - Hyperliquid EVM

... and more!  See `lib/feeds.ts` for the complete list.

### Response Format

```json
{
  "status":  "ok",
  "chain":  "ethereum",
  "feed": {
    "name": "ETH / USD",
    "pair": ["ETH", "USD"],
    "assetName": "ETH / USD",
    "feedType": "Crypto",
    "contractAddress": "0x...",
    "proxyAddress": "0x...",
    "decimalPlaces": 8,
    "heartbeat": 3600,
    "threshold": 0.5,
    "docs": {
      "baseAsset": "ETH",
      "quoteAsset": "USD",
      "blockchainName": "Ethereum",
      "assetClass": "Crypto",
      // ...additional metadata
    }
  }
}
```

## 🛠️ Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [Bun](https://bun.sh/) (recommended) or npm/yarn/pnpm
- [Convex Account](https://convex.dev/) (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/always-be-shipping/chainlink-feeds-api.git
   cd chainlink-feeds-api
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```
   Follow the prompts to create a new Convex project and set up your environment.

4. **Configure environment variables**
   
   Create a `.env.local` file:
   ```bash
   NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
   ```

5. **Start the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

   This runs both the Next.js dev server and Convex backend concurrently.

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Scripts

```bash
# Run both Next.js and Convex in development mode
bun dev

# Run only Next.js
bun dev-next

# Run only Convex
bun dev-convex

# Build for production
bun build

# Start production server
bun start

# Run linter
bun lint
```

## 📁 Project Structure

```
chainlink-feeds-api/
├── app/
│   ├── api/
│   │   └── feeds/
│   │       └── [chain]/
│   │           └── route.ts      # API route handler
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   └── globals. css               # Global styles
├── components/
│   └── providers/
│       └── convex. tsx            # Convex provider
├── convex/
│   └── _generated/               # Convex generated code
├── lib/
│   └── feeds.ts                  # Feed fetching logic
├── types/
│   └── feeds. d.ts                # TypeScript types
└── public/                       # Static assets
```

## 🔧 Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Backend:** [Convex](https://convex.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime:** [Bun](https://bun.sh/) (optional)
- **Font:** [Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the Always be Shipping organization. Check the repository for specific license details.

## 🔗 Links

- **Live Demo:** [https://chainlink-feeds.alwaysbeshipp.ing](https://chainlink-feeds.alwaysbeshipp.ing)
- **Organization:** [Always be Shipping](https://github.com/always-be-shipping)
- **Chainlink Documentation:** [https://docs.chain.link](https://docs.chain.link)

## 🙏 Acknowledgments

- Price feed data sourced from [Chainlink Reference Data](https://reference-data-directory.vercel.app/)
- Built with ❤️ by the Always be Shipping team

---

**Note:** This is an unofficial API for accessing Chainlink feed data. For production applications, always verify data directly from on-chain sources. 
