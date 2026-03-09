import { useState } from "react";

type FormData = {
  name: string;
  businessName: string;
  email: string;
  message: string;
};

type Service = {
  title: string;
  icon: "code" | "refresh" | "chart";
  description: string;
};

type PortfolioItem = {
  title: string;
  type: string;
  vibe: "hvac" | "dental" | "plumbing";
  description: string;
  accent: string;
  imageLabel: string;
  preview: {
    badge: string;
    headline: string;
    subtext: string;
  };
};

type PricingPlan = {
  name: string;
  price: string;
  note: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export default function BeemanDigitalWebsite() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const endpoint = "https://formspree.io/f/meerengv";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          message: formData.message,
          to: "beemandigital@gmail.com",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send the consultation request right now.");
      }

      setShowSuccess(true);
      setFormData({ name: "", businessName: "", email: "", message: "" });
    } catch (error: unknown) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const services: Service[] = [
    {
      title: "Website Development",
      icon: "code",
      description:
        "Custom websites for small businesses that are fast, mobile-friendly, professionally designed, and built to turn visitors into customers.",
    },
    {
      title: "Website Redesign",
      icon: "refresh",
      description:
        "Modernize outdated websites with cleaner design, stronger messaging, improved performance, and a more credible online presence.",
    },
    {
      title: "Digital Consulting + SEO",
      icon: "chart",
      description:
        "Practical guidance on SEO, visibility, conversions, and digital growth—because strong online performance starts with a strong website foundation.",
    },
  ];

  const portfolio: PortfolioItem[] = [
    {
      title: "ABC Heating Demo",
      type: "HVAC Demo Project",
      vibe: "hvac",
      description:
        "A premium HVAC service concept focused on urgency, financing, seasonal tune-ups, and strong calls to action for emergency repairs.",
      accent: "from-sky-500/30 via-cyan-400/20 to-blue-500/20",
      imageLabel: "Technician at outdoor AC unit",
      preview: {
        badge: "Emergency HVAC",
        headline: "24/7 Heating & AC Repair",
        subtext: "Fast response, financing offers, and maintenance plans built for homeowners.",
      },
    },
    {
      title: "ABC Dental Demo",
      type: "Dental Demo Project",
      vibe: "dental",
      description:
        "A calm, welcoming dental concept designed around patient comfort, family care, and easy appointment booking.",
      accent: "from-indigo-400/30 via-sky-300/20 to-blue-400/20",
      imageLabel: "Smiling patient in bright exam room",
      preview: {
        badge: "Family Dentistry",
        headline: "Modern care. Comfortable visits.",
        subtext: "Clean design, soft visuals, service clarity, and a strong new-patient CTA.",
      },
    },
    {
      title: "ABC Plumbing Demo",
      type: "Plumbing Demo Project",
      vibe: "plumbing",
      description:
        "A high-conversion plumbing concept built around immediate trust, emergency service, and simple quote requests.",
      accent: "from-emerald-500/30 via-teal-400/20 to-cyan-400/20",
      imageLabel: "Plumber repairing sink and pipes",
      preview: {
        badge: "24/7 Plumbing",
        headline: "Leak? Clog? We fix it fast.",
        subtext: "Quick-call layout, service-area proof, and urgent booking options for homeowners.",
      },
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We learn about the business, goals, services, target customers, and what makes the company different.",
    },
    {
      step: "02",
      title: "Strategy & Build",
      description:
        "The site is designed with strong messaging, clean visuals, mobile responsiveness, and search-friendly structure.",
    },
    {
      step: "03",
      title: "Launch & Optimize",
      description:
        "The website goes live with support available for updates, SEO improvements, and future growth.",
    },
  ];

  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      price: "$750",
      note: "one-time build",
      description: "Best for businesses that need a polished web presence quickly.",
      features: [
        "Up to 3 pages",
        "Mobile-friendly design",
        "Basic SEO setup",
        "Contact form integration",
        "Launch support",
      ],
      cta: "Start a Starter Site",
      featured: false,
    },
    {
      name: "Growth",
      price: "$1,500",
      note: "one-time build",
      description:
        "Ideal for businesses that want a more complete website and stronger conversion structure.",
      features: [
        "Up to 6 pages",
        "Custom page sections",
        "SEO-focused structure",
        "Stronger calls to action",
        "Analytics setup",
      ],
      cta: "Book a Growth Build",
      featured: true,
    },
    {
      name: "Monthly Care",
      price: "$95/mo",
      note: "ongoing support",
      description:
        "For businesses that want continued updates, support, and light optimization after launch.",
      features: [
        "Small content edits",
        "Performance monitoring",
        "Basic SEO updates",
        "Priority support",
        "Ongoing guidance",
      ],
      cta: "Ask About Care Plans",
      featured: false,
    },
  ];

  const navItems = ["Services", "Portfolio", "Pricing", "About", "Contact"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6">
          <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-slate-900 p-8 shadow-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20 text-2xl text-blue-300">
              ✓
            </div>
            <h3 className="mt-5 text-center text-2xl font-semibold text-white">
              Consultation request sent
            </h3>
            <p className="mt-3 text-center leading-7 text-slate-400">
              Thanks for reaching out. Beeman Digital received the request and will follow up soon.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 w-full rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="group">
            <div className="text-xl font-semibold tracking-tight text-white">Beeman Digital</div>
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Digital Consulting & Website Development
            </div>
          </a>
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-blue-400/30 bg-blue-500/90 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            Free Consultation
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.75),rgba(2,6,23,1))]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-blue-100">
                Premium websites for local businesses that want to grow
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.05]">
                Beeman Digital builds premium websites that make small businesses look sharper,
                stronger, and more trusted online.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Modern websites, strategic digital consulting, and SEO-minded structure for
                businesses that need a professional online presence that actually helps drive
                growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
                >
                  View Pricing
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get a Free Consultation
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  ["Premium Feel", "Designed to elevate credibility and trust instantly."],
                  ["Built to Convert", "Clear calls to action and strong structure for real leads."],
                  ["SEO Foundation", "Smart structure so businesses can grow from a solid base."],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <div className="text-base font-semibold text-white">{title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">{copy}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/90 p-6 shadow-xl">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-blue-300">Agency Preview</div>
                      <div className="text-xl font-semibold text-white">
                        Custom-feel website experience
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      Premium build
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                      <div className="text-sm font-medium text-blue-300">Homepage Strategy</div>
                      <div className="mt-2 text-2xl font-semibold text-white">
                        A stronger online presence starts with a stronger website.
                      </div>
                      <div className="mt-3 text-sm leading-6 text-slate-300">
                        Clean design, clear service messaging, search-friendly structure, and a
                        polished first impression.
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {services.map((service) => (
                        <div
                          key={service.title}
                          className="rounded-3xl border border-white/10 bg-white/5 p-5"
                        >
                          <div className="text-sm font-semibold text-white">{service.title}</div>
                          <div className="mt-2 text-sm leading-6 text-slate-300">
                            {service.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Premium web and digital services designed to move a business forward.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Beeman Digital focuses on the foundation first: a strong website, strong messaging,
              and a strong digital presence built to support long-term growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/30 to-cyan-300/20 text-blue-300">
                  {service.icon === "code" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  )}
                  {service.icon === "refresh" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 2v6h-6" />
                      <path d="M3 12a9 9 0 0 1 15.55-6.36L21 8" />
                      <path d="M3 22v-6h6" />
                      <path d="M21 12a9 9 0 0 1-15.55 6.36L3 16" />
                    </svg>
                  )}
                  {service.icon === "chart" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M7 14l4-4 3 3 5-7" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Why it matters
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Good SEO, better conversions, and stronger credibility all begin with the
                  website.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-400">
                  A website is the core of a business’s digital presence. It shapes first
                  impressions, supports search visibility, and gives customers a clear path to take
                  action.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Build credibility and trust",
                  "Create the base for SEO growth",
                  "Turn visitors into real leads",
                  "Look polished on every device",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6"
                  >
                    <div className="text-base font-semibold text-white">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                Portfolio
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Demo concepts built to show what Beeman Digital can create.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">
                These sample concepts are intentionally generic and are designed to show the type
                of premium, conversion-focused websites Beeman Digital can build for real
                businesses.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {portfolio.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${item.accent}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.03),rgba(2,6,23,0.60))]" />
                  <div className="absolute inset-x-4 top-4 rounded-[1.4rem] border border-white/10 bg-slate-950/85 p-4 shadow-xl backdrop-blur-sm transition duration-300 group-hover:scale-[1.02]">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">
                        {item.preview.badge}
                      </div>
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                      </div>
                    </div>

                    {item.vibe === "hvac" && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
                          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                            <div className="text-lg font-semibold leading-6 text-white">
                              {item.preview.headline}
                            </div>
                            <div className="mt-2 text-xs leading-5 text-slate-300">
                              {item.preview.subtext}
                            </div>
                            <div className="mt-4 flex gap-2 text-[10px]">
                              <span className="rounded-full bg-blue-500/20 px-2 py-1 text-blue-200">
                                No overtime fees
                              </span>
                              <span className="rounded-full bg-blue-500/20 px-2 py-1 text-blue-200">
                                Free estimate
                              </span>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-sky-500/10 p-3">
                            <div className="mb-2 h-20 rounded-xl bg-[linear-gradient(135deg,#0f172a,#1d4ed8,#38bdf8)]" />
                            <div className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                              Image
                            </div>
                            <div className="mt-1 text-[11px] leading-4 text-white">
                              {item.imageLabel}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[10px]">
                          <div className="rounded-xl bg-blue-500/20 px-2 py-2 text-blue-200">
                            Emergency Repair
                          </div>
                          <div className="rounded-xl bg-blue-500/20 px-2 py-2 text-blue-200">
                            Financing
                          </div>
                          <div className="rounded-xl bg-blue-500/20 px-2 py-2 text-blue-200">
                            Tune-Ups
                          </div>
                        </div>
                      </div>
                    )}

                    {item.vibe === "dental" && (
                      <div className="space-y-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="grid grid-cols-[0.7fr_1.3fr] gap-3">
                            <div className="rounded-2xl bg-[linear-gradient(135deg,#dbeafe,#bfdbfe,#93c5fd)] p-3">
                              <div className="h-full min-h-[88px] rounded-xl border border-white/40 bg-white/50 p-2">
                                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                                  Photo
                                </div>
                                <div className="mt-2 text-[11px] leading-4 text-slate-700">
                                  {item.imageLabel}
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold leading-6 text-white">
                                {item.preview.headline}
                              </div>
                              <div className="mt-2 text-xs leading-5 text-slate-300">
                                {item.preview.subtext}
                              </div>
                              <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-200">
                                <span className="rounded-full bg-indigo-500/20 px-2 py-1 text-indigo-200">
                                  New Patients
                                </span>
                                <span className="rounded-full bg-indigo-500/20 px-2 py-1 text-indigo-200">
                                  Insurance Welcome
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[10px]">
                          <div className="rounded-xl bg-indigo-500/20 px-2 py-2 text-indigo-200">
                            Cleanings
                          </div>
                          <div className="rounded-xl bg-indigo-500/20 px-2 py-2 text-indigo-200">
                            Whitening
                          </div>
                          <div className="rounded-xl bg-indigo-500/20 px-2 py-2 text-indigo-200">
                            Implants
                          </div>
                        </div>
                      </div>
                    )}

                    {item.vibe === "plumbing" && (
                      <div className="space-y-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="text-lg font-semibold leading-6 text-white">
                            {item.preview.headline}
                          </div>
                          <div className="mt-2 text-xs leading-5 text-slate-300">
                            {item.preview.subtext}
                          </div>
                          <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-3">
                            <div className="grid gap-2 text-[10px]">
                              <div className="rounded-xl bg-emerald-500/20 px-2 py-2 text-emerald-200">
                                Drain Cleaning
                              </div>
                              <div className="rounded-xl bg-emerald-500/20 px-2 py-2 text-emerald-200">
                                Water Heaters
                              </div>
                              <div className="rounded-xl bg-emerald-500/20 px-2 py-2 text-emerald-200">
                                Leak Repair
                              </div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-emerald-500/10 p-3">
                              <div className="mb-2 h-20 rounded-xl bg-[linear-gradient(135deg,#022c22,#065f46,#14b8a6)]" />
                              <div className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                                Image
                              </div>
                              <div className="mt-1 text-[11px] leading-4 text-white">
                                {item.imageLabel}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-[10px] text-emerald-200">
                          <span>Same-Day Service</span>
                          <span>Call Now</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">
                    Industry-specific demo preview
                  </div>
                </div>

                <div className="p-7">
                  <div className="text-sm font-medium text-blue-300">{item.type}</div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="border-y border-white/10 bg-white/[0.03] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                Pricing
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Clear pricing for businesses that want quality without agency bloat.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                These are strong starter prices for a new agency: competitive enough to win
                business, but high enough to position the work as premium and serious.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[1.9rem] border p-8 shadow-xl ${
                    plan.featured
                      ? "border-blue-400/40 bg-gradient-to-b from-blue-500/10 to-slate-900 shadow-blue-500/10"
                      : "border-white/10 bg-slate-900/80 shadow-black/10"
                  }`}
                >
                  {plan.featured && (
                    <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                      Most Popular
                    </div>
                  )}
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {plan.name}
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <div className="text-4xl font-semibold text-white">{plan.price}</div>
                    <div className="pb-1 text-sm text-slate-400">{plan.note}</div>
                  </div>
                  <p className="mt-4 leading-7 text-slate-400">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                      plan.featured
                        ? "bg-blue-500 text-white hover:bg-blue-400"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Beeman Digital exists to help small businesses compete online with a more premium,
                professional presence.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                The goal is simple: help businesses look more credible, communicate more clearly,
                and create a better foundation for growth online. Instead of overcomplicating the
                process, Beeman Digital focuses on building high-quality websites that feel modern,
                strategic, and tailored to each business.
              </p>
            </div>
            <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">What Beeman Digital stands for</h3>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>Premium design that builds trust quickly</li>
                <li>Websites tailored to each business, not generic templates</li>
                <li>SEO and digital growth built from the website outward</li>
                <li>Clear communication, reliable delivery, and practical value</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A simple, premium process from first call to launch.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-black/10"
              >
                <div className="text-sm font-semibold text-blue-300">{item.step}</div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-slate-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Ready to build a stronger online presence?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                Whether a business needs a brand-new website, a redesign, or help improving digital
                visibility, Beeman Digital is ready to help.
              </p>
              <div className="mt-8 space-y-4 text-slate-300">
                <div>
                  <span className="font-semibold text-white">Email:</span> beemandigital@gmail.com
                </div>
                <div>
                  <span className="font-semibold text-white">Phone:</span> 972-363-6629
                </div>
                <div>
                  <span className="font-semibold text-white">Business:</span> Beeman Digital
                </div>
                <div>
                  <span className="font-semibold text-white">Focus:</span> Premium websites,
                  digital consulting, and SEO-minded growth for local businesses
                </div>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  placeholder="Your name"
                />
                <input
                  value={formData.businessName}
                  onChange={(e) => handleChange("businessName", e.target.value)}
                  required
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  placeholder="Business name"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  placeholder="Email address"
                />
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  placeholder="Tell me about your business and what you need"
                />
                {errorMessage && (
                  <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {errorMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Request a Consultation"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-slate-200">Beeman Digital</span> — Premium
            websites and digital consulting for local businesses
          </div>
          <div>beemandigital@gmail.com · 972-363-6629</div>
        </div>
      </footer>
    </div>
  );
}
