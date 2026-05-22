
import { StoreButton } from './store-button'

const footerCols = [
  {
    h: 'Product',
    l: [
      ['Wallet', '#product'],
      ['Virtual card', '#card'],
      ['Crypto funding', '#product'],
      ['Exchange', '#'],
      ['Tickets', '#tickets'],
    ],
  },
  {
    h: 'Company',
    l: [
      ['About', '#'],
      ['Crusaders', '#'],
      ['Careers', '#'],
      ['Contact', '#'],
    ],
  },
  {
    h: 'Resources',
    l: [
      ['FAQ', '#'],
      ['Help center', '#'],
      ['Blog', '#'],
      ['Community', 'https://t.me/usepuplar_community'],
    ],
  },
  {
    h: 'Legal',
    l: [
      ['Privacy', '#'],
      ['Terms', '#'],
      ['Cookies', '#'],
      ['Compliance', '#'],
    ],
  },
]

export function LandingFooter() {
  return (
    <footer className="bg-puplar-900 text-white/70">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12">
          <div>
            <img
              src="https://res.cloudinary.com/dwvspurak/image/upload/v1779444190/puplar%20logos/puplar-white_aw0woh.png"
              alt="Logo"
              className="w-18 h-10 object-contain"
            />
            <p className="mt-5 text-sm leading-relaxed max-w-xs text-white/60">
              Savings, crypto funding, and a global virtual Mastercard — built
              for the way you actually spend.
            </p>
            <div className="mt-5 flex gap-2.5 flex-wrap">
              <StoreButton store="apple" />
              <StoreButton store="google" />
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.h}>
              <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/85 mb-4 font-mono">
                {col.h}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.l.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-white/55 text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8 text-[13px] text-white/55">
          <div>
            <div className="text-white/85 font-mono text-[11px] uppercase tracking-[0.1em] mb-2">
              Berlin
            </div>
            Kaiser Wilhelm Strasse 73
            <br />
            12247 Berlin, Germany
          </div>
          <div>
            <div className="text-white/85 font-mono text-[11px] uppercase tracking-[0.1em] mb-2">
              Port Harcourt
            </div>
            2A Orji Close, Ada George
            <br />
            Rivers State, Nigeria
          </div>
          <div>
            <div className="text-white/85 font-mono text-[11px] uppercase tracking-[0.1em] mb-2">
              Support · 24/7
            </div>
            <a
              href="mailto:support@puplar.com"
              className="hover:text-white transition-colors"
            >
              support@puplar.com
            </a>
            <br />
            <span className="opacity-70">Avg. reply ~ 8 min</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-4 text-[12px] text-white/45">
          <span>© 2026 Puplar · A product of Akawo Synergy Limited</span>
          <span className="font-mono uppercase tracking-[0.1em]">
            Built in Berlin · Port Harcourt
          </span>
        </div>
      </div>
    </footer>
  );
}


