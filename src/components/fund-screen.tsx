import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

const assets = [
  {
    sym: "USDT",
    name: "Tether",
    rate: "1.00",
    bg: "#26a17b",
    logo: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
  },
  {
    sym: "BTC",
    name: "Bitcoin",
    rate: "67,412",
    bg: "#f7931a",
    logo: "https://res.cloudinary.com/dwvspurak/image/upload/v1779442378/utilities/crypto-currencies/bitcoin-btc-logo_zkjr2h.png",
  },
  {
    sym: "ETH",
    name: "Ethereum",
    rate: "3,128.40",
    bg: "#627eea",
    logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    sym: "USDC",
    name: "USD Coin",
    rate: "1.00",
    bg: "#2775ca",
    logo: "https://assets.coingecko.com/coins/images/6319/large/usdc.png",
  },
  {
    sym: "SOL",
    name: "Solana",
    rate: "168.22",
    bg: "#9945ff",
    logo: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
  },
  {
    sym: "TRX",
    name: "Tron",
    rate: "0.124",
    bg: "#eb0029",
    logo: "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png",
  },
];

const CryptoIconFallback = ({ sym, bg }: { sym: string; bg: string }) => (
  <div
    className="w-4 h-4 rounded-full grid place-items-center text-white text-[8px] font-bold"
    style={{ background: bg }}
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
      className="w-4 h-4 rounded-full object-cover"
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
};

export function FundScreen() {
  return (
    <div className="px-5 pt-1 pb-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[15px] font-display font-bold text-puplar-900">
          Fund wallet
        </div>
        <div className="w-7 h-7 rounded-full bg-white border border-puplar-900/10 grid place-items-center text-puplar-900/70">
          <X className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-puplar-900/8 p-4 mb-4">
        <div className="text-[10px] font-mono uppercase tracking-[0.1em] text-puplar-900/55 mb-1">
          You pay
        </div>
        <div className="flex items-baseline justify-between">
          <div className="font-display text-[28px] font-bold text-puplar-900 tracking-[-0.02em]">
            500.00
          </div>
          <div className="flex items-center gap-1.5 bg-puplar-cream border border-puplar-900/10 rounded-full px-2 py-1">
            <CryptoIcon sym="USDT" logo={assets[0].logo} bg={assets[0].bg} />
            <span className="text-[11px] font-semibold text-puplar-900">
              USDT
            </span>
            <ChevronDown className="w-3 h-3 text-puplar-900/60" />
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-puplar-900/8 flex items-center justify-between">
          <div className="text-[11px] text-puplar-900/60">You receive</div>
          <div className="text-[13px] font-semibold text-puplar-900 font-mono">
            $500.00 USD
          </div>
        </div>
      </div>

      <div className="text-[10px] font-mono uppercase tracking-[0.1em] text-puplar-900/55 mb-2">
        400+ assets
      </div>
      <div className="bg-white rounded-2xl border border-puplar-900/8 divide-y divide-puplar-900/6">
        {assets.map((a) => (
          <div key={a.sym} className="flex items-center gap-3 px-3 py-2.5">
            <CryptoIcon sym={a.sym} logo={a.logo} bg={a.bg} />
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold text-puplar-900">
                {a.sym}
              </div>
              <div className="text-[10px] text-puplar-900/50">{a.name}</div>
            </div>
            <div className="text-[11px] font-mono text-puplar-900/70">
              ${a.rate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
