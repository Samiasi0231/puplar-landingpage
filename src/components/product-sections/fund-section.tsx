import { PhoneFrame } from "@/components/phone-frame";
import { FundScreen } from "@/components/fund-screen";
import { useState } from "react";

// Real cryptocurrency logos from CoinGecko CDN
const assets = [
  {
    sym: "USDT",
    name: "Tether",
    bg: "#26a17b",
    logo: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
  },
  {
    sym: "BTC",
    name: "Bitcoin",
    bg: "#f7931a",
    logo: "https://res.cloudinary.com/dwvspurak/image/upload/v1779442378/utilities/crypto-currencies/bitcoin-btc-logo_zkjr2h.png",
  },
  {
    sym: "ETH",
    name: "Ethereum",
    bg: "#627eea",
    logo: "https://res.cloudinary.com/dwvspurak/image/upload/v1779442491/utilities/crypto-currencies/optimism-ethereum-op-logo_abcpu1.png",
  },
  {
    sym: "USDC",
    name: "USD Coin",
    bg: "#2775ca",
    logo: "https://assets.coingecko.com/coins/images/6319/large/usdc.png",
  },
  {
    sym: "SOL",
    name: "Solana",
    bg: "#9945ff",
    logo: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
  },
  {
    sym: "TRX",
    name: "TRON",
    bg: "#eb0029",
    logo: "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png",
  },
  {
    sym: "BNB",
    name: "Binance Coin",
    bg: "#f0b90b",
    logo: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
  },
  {
    sym: "MATIC",
    name: "Polygon",
    bg: "#8247e5",
    logo: "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
  },
  {
    sym: "DAI",
    name: "DAI",
    bg: "#f5ac37",
    logo: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-dai.png",
  },
  {
    sym: "DOGE",
    name: "Dogecoin",
    bg: "#c2a633",
    logo: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
  },
];

const CryptoIconFallback = ({ sym, bg }: { sym: string; bg: string }) => (
  <div
    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
    style={{ backgroundColor: bg }}
  >
    {sym[0]}
  </div>
);

const CryptoIcon = ({
  sym,
  logo,
  bg,
}: {
  sym: string;
  logo: string;
  bg: string;
}) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return <CryptoIconFallback sym={sym} bg={bg} />;
  }

  return (
    <img
      src={logo}
      alt={sym}
      className="w-6 h-6 rounded-full object-cover"
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
};

export function FundSection() {
  return (
    <section className="bg-puplar-900 text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-emerald-300 mb-3">
            Fund wallet
          </div>
          <h2 className="font-display font-bold text-[44px] leading-[1.05] tracking-[-0.025em] text-white">
            Bring any asset.
            <br />
            We'll get you the best global rate.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-white/65 max-w-[520px]">
            400+ cryptocurrencies. 14 fiat corridors. One USD wallet that's
            ready to spend. No spread tricks, no hidden FX — quote shown before
            you confirm.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {assets.map((a) => (
              <div
                key={a.sym}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1 pr-3 py-1 hover:bg-white/10 transition-colors cursor-pointer group"
                title={a.name}
              >
                <CryptoIcon sym={a.sym} logo={a.logo} bg={a.bg} />
                <span className="text-[12px] font-medium text-white/85 font-mono">
                  {a.sym}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-[12px] font-medium text-white/65 font-mono">
                + 390 more
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-[480px]">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-emerald-300/80 mb-1">
                Quote latency
              </div>
              <div className="font-display font-bold text-[32px] tracking-[-0.02em]">
                ~ 1.2s
              </div>
              <div className="text-[12px] text-white/55 mt-1">
                Median across all corridors
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-emerald-300/80 mb-1">
                Spread
              </div>
              <div className="font-display font-bold text-[32px] tracking-[-0.02em]">
                0.4%
              </div>
              <div className="text-[12px] text-white/55 mt-1">
                Industry average is 1.8%
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneFrame width={290} scheme="dark">
            <FundScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
