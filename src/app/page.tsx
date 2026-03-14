export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-dark/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-cream-dark flex items-center justify-center shadow-sm">
              <span className="text-brand-orange font-heading text-2xl leading-none">
                C
              </span>
            </div>
            <span className="text-xl font-heading font-medium tracking-tight text-gray-900">
              Cliber AI
            </span>
          </div>
          <a
            href="#contact"
            className="text-sm text-gray-500 hover:text-brand-green transition-colors"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
          <div className="absolute top-20 right-[15%] w-72 h-72 bg-brand-green/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-32 left-[10%] w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />

          <div className="absolute top-1/4 left-[8%] w-px h-32 bg-gradient-to-b from-transparent via-brand-green/20 to-transparent" />
          <div className="absolute top-1/3 right-[12%] w-px h-24 bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent" />
          <div className="absolute bottom-1/4 left-[20%] w-16 h-px bg-gradient-to-r from-transparent via-brand-green/15 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cream-dark text-sm text-gray-500 mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" aria-hidden="true" />
                Building domain-specific AI
              </div>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 leading-[0.95] mb-8 animate-fade-in-up-delay-1">
              Intelligence,
              <br />
              <span className="text-brand-green">Specialized.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delay-2">
              We don&apos;t build general-purpose AI. We build systems that
              master specific domains — understanding the rules, the context, and
              the stakes that matter.
            </p>

            <div className="animate-fade-in-up-delay-3">
              <a
                href="https://www.saudi-judge.cliberai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-2xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow hover:scale-[1.02]"
              >
                <span>Try Saudi Judge</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <p className="mt-4 text-sm text-gray-500">
                AI-powered Saudi legal judgment prediction
              </p>
            </div>

            <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
              <div className="group p-6 rounded-2xl bg-white/60 border border-cream-dark/50 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.573.096a9.016 9.016 0 01-5.124 0l-.573-.096c-1.717-.293-2.3-2.379-1.067-3.61L14.25 15.3"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-medium text-gray-900 mb-2">
                  Domain Expertise
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Each product is built with deep understanding of its
                  field&apos;s regulations and practices.
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-white/60 border border-cream-dark/50 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-brand-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-medium text-gray-900 mb-2">
                  Precision First
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  High-stakes domains demand accuracy. Our models are tuned to
                  deliver reliable results.
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-white/60 border border-cream-dark/50 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-medium text-gray-900 mb-2">
                  Region Aware
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Built for specific markets and jurisdictions, not one-size-fits-all solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-24 bg-white border-t border-cream-dark/50"
        >
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-10">
              Interested in our products or want to explore a partnership?
              We&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact@cliberai.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cream border border-cream-dark text-gray-700 hover:bg-cream-dark transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-brand-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                contact@cliberai.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-cream border-t border-cream-dark/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white border border-cream-dark flex items-center justify-center">
              <span className="text-brand-orange font-heading text-base leading-none">
                C
              </span>
            </div>
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Cliber AI
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Intelligence, Specialized.
          </p>
        </div>
      </footer>
    </div>
  );
}
