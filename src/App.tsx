import { useState } from "react";

export default function BeemanDigitalWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      // To make this send real emails, replace the placeholder URL below
      // with a real endpoint from Formspree, Web3Forms, EmailJS, or your own backend.
      // Example: const endpoint = "https://formspree.io/f/your-form-id";
      const endpoint = "https://formspree.io/f/meerengv";

      if (endpoint) {
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
      } else {
        // Fallback so the form still works immediately in a basic way.
        const subject = encodeURIComponent(`Consultation Request from ${formData.businessName || formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}
Business Name: ${formData.businessName}
Email: ${formData.email}

Project Details:
${formData.message}`
        );
        window.location.href = `mailto:beemandigital@gmail.com?subject=${subject}&body=${body}`;
      }

      setShowSuccess(true);
      setFormData({ name: "", businessName: "", email: "", message: "" });
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const services = [
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

  const portfolio = [
    {
      title: "Local HVAC Company",
      type: "Demo Project",
      description:
        "A trustworthy service-business concept focused on emergency calls, financing, local credibility, and fast lead capture.",
    },
    {
      title: "Family Dental Practice",
      type: "Demo Project",
      description:
        "A polished website concept built around service clarity, patient trust, and appointment-driven calls to action.",
    },
    {
      title: "Residential Plumbing Business",
      type: "Demo Project",
      description:
        "A conversion-focused layout designed for mobile users, clear services, and quick quote or call actions.",
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

  const pricing = [
    {
      name: "Starter",
      price: "$750",
      note: "one-time build",
      description:
        "Best for businesses that need a polished web presence quickly.",
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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="group">
            <div className="text-xl font-semibold tracking-tight text-white">Beeman Digital</div>
            <div className="text-xs tracking-[0.18em] text-slate-400 uppercase">Digital Consulting & Website Development</div>
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
        {showSuccess && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6">
            <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-slate-900 p-8 shadow-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20 text-2xl text-blue-300">
                ✓
              </div>
              <h3 className="mt-5 text-center text-2xl font-semibold text-white">Consultation request sent</h3>
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.75),rgba(2,6,23,1))]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-blue-100">
                Premium websites for local businesses that want to grow
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.05]">
                Beeman Digital builds premium websites that make small businesses look sharper, stronger, and more trusted online.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Modern websites, strategic digital consulting, and SEO-minded structure for businesses that need a professional online presence that actually helps drive growth.
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
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
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
                      <div className="text-xl font-semibold text-white">Custom-feel website experience</div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      Premium build
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                      <div className="text-sm font-medium text-blue-300">Homepage Strategy</div>
                      <div className="mt-2 text-2xl font-semibold text-white">A stronger online presence starts with a stronger website.</div>
                      <div className="mt-3 text-sm leading-6 text-slate-300">
                        Clean design, clear service messaging, search-friendly structure, and a polished first impression.
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="text-sm font-semibold text-white">Custom Messaging</div>
                        <div className="mt-2 text-sm leading-6 text-slate-300">
                          Tailored headlines and sections built around each business.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="text-sm font-semibold text-white">SEO-Ready Structure</div>
                        <div className="mt-2 text-sm leading-6 text-slate-300">
                          Organized pages and content that support future search visibility.
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-5 text-sm leading-6 text-slate-200">
                      Built for local businesses such as HVAC companies, plumbers, dentists, contractors, med spas, restaurants, and more.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Premium web and digital services designed to move a business forward.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Beeman Digital focuses on the foundation first: a strong website, strong messaging, and a strong digital presence built to support long-term growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              return (
                <div
                  key={service.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/30 to-cyan-300/20 text-blue-300">
                    {service.icon === "code" && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )}
                    {service.icon === "refresh" && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 2v6h-6" />
                        <path d="M3 12a9 9 0 0 1 15.55-6.36L21 8" />
                        <path d="M3 22v-6h6" />
                        <path d="M21 12a9 9 0 0 1-15.55 6.36L3 16" />
                      </svg>
                    )}
                    {service.icon === "chart" && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 3v18h18" />
                        <path d="M7 14l4-4 3 3 5-7" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Why it matters</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Good SEO, better conversions, and stronger credibility all begin with the website.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-400">
                  A website is the core of a business’s digital presence. It shapes first impressions, supports search visibility, and gives customers a clear path to take action.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Build credibility and trust",
                  "Create the base for SEO growth",
                  "Turn visitors into real leads",
                  "Look polished on every device",
                ].map((benefit) => (
                  <div key={benefit} className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Portfolio</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Demo concepts now. Real client work soon.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">
                These example concepts show the style, structure, and level of quality Beeman Digital can create. Real portfolio projects can be added here later and linked directly into this section.
              </p>
            </div>
            <div className="max-w-sm text-sm leading-6 text-slate-500">
              Placeholder examples can stay here for now while future client projects are built out.
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {portfolio.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-lg shadow-black/10">
                <div className="h-56 bg-[linear-gradient(135deg,#0f172a,#1e3a8a,#155e75)]" />
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Pricing</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Clear pricing for businesses that want quality without agency bloat.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                These are strong starter prices for a new agency: competitive enough to win business, but high enough to position the work as premium and serious.
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
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{plan.name}</div>
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">About</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Beeman Digital exists to help small businesses compete online with a more premium, professional presence.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                The goal is simple: help businesses look more credible, communicate more clearly, and create a better foundation for growth online. Instead of overcomplicating the process, Beeman Digital focuses on building high-quality websites that feel modern, strategic, and tailored to each business.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A simple, premium process from first call to launch.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-black/10">
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Ready to build a stronger online presence?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                Whether a business needs a brand-new website, a redesign, or help improving digital visibility, Beeman Digital is ready to help.
              </p>
              <div className="mt-8 space-y-4 text-slate-300">
                <div><span className="font-semibold text-white">Email:</span> beemandigital@gmail.com</div>
                <div><span className="font-semibold text-white">Phone:</span> 972-363-6629</div>
                <div><span className="font-semibold text-white">Business:</span> Beeman Digital</div>
                <div><span className="font-semibold text-white">Focus:</span> Premium websites, digital consulting, and SEO-minded growth for local businesses</div>
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
            <span className="font-semibold text-slate-200">Beeman Digital</span> — Premium websites and digital consulting for local businesses
          </div>
          <div>beemandigital@gmail.com · 972-363-6629</div>
        </div>
      </footer>
    </div>
  );
}
