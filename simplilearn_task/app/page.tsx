import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto bg-white">

      {/*{/* HERO SECTION */}
<section className="relative w-full h-[420px] md:h-[480px] text-white overflow-hidden">
  {/* Background Image */}

   <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/c.jpg')" }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
    
    {/* Logo */}
    <p className="text-2xl font-semibold mb-4">simplilearn</p>

    {/* Badge */}
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-cyan-400 text-black text-xs font-semibold px-3 py-1 rounded">
        Invite-Only
      </span>
      <span className="text-sm text-gray-300">
        An Executive Roundtable
      </span>
    </div>

    {/* Title */}
    <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
      <span className="text-orange-400">
        The Skills That Matter Next:
      </span>
      <br />
      Preparing Your Workforce
      <br />
      & Leaders for the AI Era
    </h1>

    {/* Meta */}
    <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-200">
      <div className="flex items-center gap-2">
        📅 <span>February 20, 2026</span>
      </div>
      <br></br>
      <div className="flex items-center gap-2"> 
        📍 <span>Chamberlain’s Steak & Fish House, Dallas</span>
      </div>
    </div>
  </div>
</section>



{/* INTRO + QUESTION SECTION */}
<section className="bg-white px-6 py-10">
  {/* RSVP BAR */}
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-8">
    <div className="flex items-center border rounded px-4 py-3 flex-1">
      <svg
        className="w-5 h-5 text-gray-400 mr-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M16 12H8m8 0l-8-6m8 6l-8 6" />
      </svg>
      <input
        type="email"
        placeholder="Enter your work email to confirm your attendance"
        className="flex-1 outline-none text-gray-700"
      />
    </div>

    <button className="bg-orange-400 text-white px-8 py-3 rounded font-semibold">
      RSVP Now
    </button>
  </div>

  {/* TEXT CONTENT */}
  <div className="max-w-4xl mx-auto text-gray-900 space-y-6">
    <p>
      AI is accelerating change across every operational layer. Roles are shifting.
      Leadership models are collapsing and reforming. Frontline and mid-level managers
      will soon lead teams of people and intelligent agents.
    </p>

    <p>
      But even the most advanced enterprises are asking the same question:
    </p>

    <h2 className="text-2xl md:text-3xl font-bold text-center leading-snug">
      Which capabilities will matter most,
      <br />
      and how do we build them at scale?
    </h2>

    <p>
      This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders
      for a candid, senior-level discussion on what’s coming next.
    </p>
  </div>
</section>




{/* WHAT WE'LL EXPLORE */}
<section className="bg-blue-50 px-6 py-14">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-2xl font-bold text-orange-500 mb-2">
      What We’ll Explore
    </h3>

    <p className="text-gray-700 mb-10">
      The critical shifts every enterprise must plan for:
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-blue-600 mb-3 text-2xl">⏱️</div>
        <h4 className="font-semibold mb-1">Skills Decay</h4>
        <p className="text-gray-600 text-sm">
          every 2-3 years<br />faster for technical skills
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-blue-600 mb-3 text-2xl">🔗</div>
        <h4 className="font-semibold mb-1">Manager Role Shift</h4>
        <p className="text-gray-600 text-sm">
          orchestrating<br />people + AI agents
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-blue-600 mb-3 text-2xl">📊</div>
        <h4 className="font-semibold mb-1">Leaders + AI Co-Pilots</h4>
        <p className="text-gray-600 text-sm">
          requires sensemaking<br />and systems thinking
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-blue-600 mb-3 text-2xl">🛡️</div>
        <h4 className="font-semibold mb-1">Frontline Capability</h4>
        <p className="text-gray-600 text-sm">
          now depends<br />on digital fluency
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-blue-600 mb-3 text-2xl">🧠</div>
        <h4 className="font-semibold mb-1">Core Human Capabilities</h4>
        <p className="text-gray-600 text-sm">
          analytical reasoning<br />and scenario planning
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-blue-600 mb-3 text-2xl">🚀</div>
        <h4 className="font-semibold mb-1">Winning Organizations</h4>
        <p className="text-gray-600 text-sm">
          predict skills<br />ahead of demand
        </p>
      </div>
    </div>
  </div>
</section>





{/* FEATURED SPEAKERS */}
<section className="bg-gradient-to-b from-blue-700 to-blue-900 px-6 py-14 text-white">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-2xl font-bold text-orange-400 mb-10">
      Featured Speakers
    </h3>

    <div className="space-y-12">
      {/* Speaker 1 */}
      <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
        <img
          src="/images/k.png"
          alt="Rob Lauber"
          className="rounded-lg w-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold text-cyan-300">
            Rob Lauber
          </h4>
          <p className="text-sm leading-relaxed text-blue-100">
            Rob Lauber is a global workforce and capability building leader with over
            25 years of experience helping organizations prepare leaders and frontline
            teams for change. Most recently, he served as SVP and Chief Learning Officer
            at McDonald’s, leading learning and development across 37,000+ restaurants
            worldwide. His perspective is especially relevant as organizations rethink
            leadership and capability models in the age of AI.
          </p>
        </div>
      </div>

      {/* Speaker 2 */}
      <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
        <img
          src="/images/d.png"
          alt="Krishna Kumar"
          className="rounded-lg w-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold text-cyan-300">
            Krishna Kumar
          </h4>
          <p className="text-sm leading-relaxed text-blue-100">
            Krishna Kumar is the Founder and CEO of Simplilearn, working closely with
            enterprises navigating workforce transformation driven by AI and digital
            change. At the center of the learning and skills ecosystem, he brings a
            unique perspective on how roles, leadership expectations, and capabilities
            are evolving across industries. Through direct engagement with enterprise
            leaders and education partners, he sees what scales and what doesn’t in
            building workforce readiness for the AI era.
          </p>
        </div>
      </div>

      {/* Speaker 3 */}
      <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
        <img
          src="/images/a.png"
          alt="Sudipto Mitra"
          className="rounded-lg w-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold text-cyan-300">
            Sudipto Mitra
          </h4>
          <p className="text-sm leading-relaxed text-blue-100">
            Sudipto Mitra is a senior transformation and growth leader with over 20
            years of experience helping enterprises navigate large-scale change across
            technology, operations, and talent. As Chief Revenue Officer at Simplilearn,
            he works with executive teams to address workforce capability gaps as AI
            reshapes roles and operating models. He previously held leadership roles at
            Accenture, IBM Consulting, and WorkFusion.
          </p>
        </div>
      </div>
    </div>

    {/* ADDITIONAL EXPERT PERSPECTIVES */}
    <div className="mt-14 bg-blue-600/70 border border-blue-400 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-cyan-300 mb-2">
        Additional Expert Perspectives
      </h4>
      <p className="text-sm text-blue-100">
        Invited experts from leading consulting and enterprise learning organizations
        will contribute short perspectives, offering insight into how large
        organizations are evolving skills and leadership models in the AI era.
      </p>
    </div>
  </div>
</section>


    

{/* INSIGHTS SECTION */}
<section className="bg-white px-6 py-14">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h3 className="text-2xl font-bold text-orange-500 mb-8">
      Go behind the curtain with real
      <br />
      examples and high-scale insights
    </h3>

    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* LEFT CONTENT */}
      <div>
        <p className="font-semibold mb-6">You’ll walk away with:</p>

        <ul className="space-y-5 text-gray-800">
          {[
            "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
            "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
            "Signals for where capability gaps may already be forming in your organization.",
            "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
            "Actionable insights you can take straight into your next exec meeting.",
          ].map((item, index) => (
            <li key={index} className="flex gap-4">
              <span className="text-orange-500 font-bold text-xl">|</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* RSVP INPUT */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <div className="flex items-center border rounded px-4 py-3 flex-1">
            <svg
              className="w-5 h-5 text-gray-400 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M16 12H8m8 0l-8-6m8 6l-8 6" />
            </svg>
            <input
              type="email"
              placeholder="Enter your work email to confirm your attendance"
              className="flex-1 outline-none text-gray-700"
            />
          </div>

          <button className="bg-orange-400 text-white px-6 py-3 rounded font-semibold">
            RSVP Now
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full h-[420px]">
        <Image
          src="/images/b1.png"
          alt="Leadership and strategy insights"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
</section>




     




{/* EVENT AGENDA */}
<section className="p-8 bg-cyan-500">
  <h3 className="text-xl font-bold text-white mb-6">Event Agenda</h3>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded shadow">
      <h4 className="font-bold text-blue-700 mb-2">
        Welcome & Opening
      </h4>
      <br></br>
      <p className="text-sm text-black-600">
        <b>Sudipto Mitra, CRO Simplilearn</b>
      </p>
      <p className="text-sm mt-2">
        Why capability-building is now a board-level issue and what’s changing in the workforce landscape.
      </p>
    </div>

    <div className="bg-white p-6 rounded shadow">
      <h4 className="font-bold text-blue-700 mb-2">
        Keynote: What Enterprise Leaders Are Seeing on the Ground
      </h4>
      <p className="text-sm text-black-600">
        <b>Rob Lauber, Former CLO McDonald's</b>
      </p>
      <p className="text-sm mt-2">
        A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.
      </p>
    </div>


    <div className="bg-white p-6 rounded shadow">
      <h4 className="font-bold text-blue-700 mb-2">
        Lunch & Executive Conversation
      </h4>
      <br></br>
      <p className="text-sm text-black-600">
        <b>Industry Experts Invited</b>
      </p>
      <p className="text-sm mt-2">
        What large enterprise talent ecosystems are learning about capability-building at scale.
      </p>
    </div>
    </div>
      </section>




{/* FOOTER / BOTTOM CTA */}
<section className="relative mt-0">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/a1.png')" }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 text-white">
    {/* Top CTA */}
    <p className="font-semibold mb-4">Space is limited.</p>

    <div className="flex flex-col md:flex-row gap-4 items-center mb-10">
      <div className="flex items-center bg-white rounded px-4 py-2 w-full md:w-96">
        <svg
          className="w-5 h-5 text-gray-500 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M16 12H8m8 0l-8-6m8 6l-8 6" />
        </svg>
        <input
          type="email"
          placeholder="Enter your work email to confirm your attendance"
          className="flex-1 outline-none text-black"
        />
      </div>

      <button className="bg-orange-400 text-black px-6 py-3 rounded font-semibold">
        RSVP Now
      </button>
    </div>

    {/* Footer Bottom */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
      <p className="text-xl font-semibold text-white">simplilearn</p>
      <p>© 2009–2025 · Simplilearn Solutions. All Rights Reserved.</p>
    </div>
  </div>
</section>
</main>
);
}