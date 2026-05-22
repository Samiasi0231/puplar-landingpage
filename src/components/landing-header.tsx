import { ArrowRight } from 'lucide-react'
import logo from "@/assets/logo.svg";

const navItems = [
  { id: 'product', label: 'Product',      href: '#product' },
  { id: 'card',    label: 'Virtual card', href: '#card'    },
  { id: 'tickets', label: 'Tickets',      href: '#tickets' },
  { id: 'about',   label: 'About',        href: '#'        },
  { id: 'help',    label: 'Help',         href: '#'        },
]

interface LandingHeaderProps {
  active?: string | null
}

export function LandingHeader({ active = null }: LandingHeaderProps) {
  return (
    <header className="bg-puplar-cream/85 backdrop-blur sticky top-0 z-30 border-b border-puplar-900/8">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-14">
          <img
            src="https://res.cloudinary.com/dwvspurak/image/upload/v1779444249/puplar%20logos/puplar-dark_xq5l8m.png"
            alt="Logo"
            className="w-18 h-10 object-contain"
          />
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => {
              const isActive = item.id === active;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-[14px] font-medium tracking-[-0.005em] border-b-2 pb-0.5 transition-colors ${
                    isActive
                      ? "text-puplar-900 border-puplar-700"
                      : "text-puplar-900/75 hover:text-puplar-900 border-transparent"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex items-center text-[14px] text-puplar-900/75 hover:text-puplar-900 px-3 py-2 rounded-md transition-colors"
          >
            Sign in
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-1.5 bg-puplar-700 hover:bg-puplar-900 text-white text-[14px] font-semibold px-3.5 py-2 rounded-md tracking-[-0.005em] transition-colors"
          >
            Get the app
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
