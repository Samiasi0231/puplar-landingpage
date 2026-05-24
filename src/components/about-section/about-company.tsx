import { ArrowRight } from "lucide-react";

export function AboutCompany() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-14 pb-20">
      <div className="rounded-2xl border border-puplar-900/10 bg-white p-10 lg:p-14 grid lg:grid-cols-[2fr_1fr] gap-10 items-center">
        <div>
          <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700 mb-3">
            Parent company
          </div>
          <h3 className="font-display font-bold text-[28px] tracking-[-0.02em] text-puplar-900 leading-tight mb-3">
            Puplar is a product of Akawo Synergy Limited.
          </h3>
          <p className="text-[15px] leading-[1.6] text-puplar-900/65 max-w-[560px]">
            Akawo Synergy Limited is incorporated in Nigeria and operates under
            partnerships with licensed money service providers across the EU,
            UK, and West Africa.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-puplar-700 hover:bg-puplar-900 text-white text-[14px] font-semibold px-4 py-3 rounded-lg transition"
          >
            Talk to the team
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/careers"
            className="inline-flex items-center justify-center gap-2 bg-white border border-puplar-900/15 hover:border-puplar-900/30 text-puplar-900 text-[14px] font-semibold px-4 py-3 rounded-lg transition"
          >
            We're hiring · 4 roles
          </a>
        </div>
      </div>
    </section>
  );
}
