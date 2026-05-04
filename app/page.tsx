export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Discord Bot + Web Dashboard
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track Habits &amp; Goals<br />Inside Your Discord Server
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Add accountability groups, daily check-ins, and leaderboards to any Discord server. Keep your community motivated and on track.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Add to Discord – $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Works with any Discord server.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "✅", title: "Daily Check-ins", desc: "Bot pings members each day to log habit completions directly in Discord." },
          { icon: "🏆", title: "Leaderboards", desc: "Automated weekly leaderboards keep the whole server engaged and competing." },
          { icon: "👥", title: "Accountability Groups", desc: "Create small groups so members hold each other accountable every day." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">/month per server</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited habits & members",
              "Daily automated check-ins",
              "Weekly leaderboards",
              "Accountability groups",
              "Web dashboard for admins",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I add the bot to my server?",
              a: "After subscribing, you'll receive an invite link. Click it, select your server, and the bot is live in seconds."
            },
            {
              q: "Can members track multiple habits?",
              a: "Yes. Each member can create and track as many habits as they want. The bot handles all check-ins automatically."
            },
            {
              q: "What happens if I cancel?",
              a: "The bot is removed from your server at the end of the billing period. Your data is retained for 30 days if you resubscribe."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Discord Habit Tracker. All rights reserved.
      </footer>
    </main>
  );
}
