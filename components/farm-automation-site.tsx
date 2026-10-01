import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CircuitBoard,
  Cpu,
  Droplets,
  ExternalLink,
  Github,
  Leaf,
  Radio,
  ShieldCheck,
  Sprout,
  Thermometer,
  Waves,
} from "lucide-react"

const parts = [
  {
    number: "01",
    icon: Cpu,
    category: "Controller",
    name: "ESP8266 NodeMCU",
    detail: "Wi-Fi microcontroller · runs the sensing and Blynk connection",
    price: 750,
    cheaper: "ESP-01 Wi-Fi board",
    cheaperPrice: 400,
    search: "ESP8266 NodeMCU board",
    cheaperSearch: "ESP-01 WiFi module",
    tag: "The brain",
  },
  {
    number: "02",
    icon: Thermometer,
    category: "Air sensor",
    name: "DHT11 temperature & humidity",
    detail: "Digital readings sent to the dashboard every 2.5 seconds",
    price: 350,
    cheaper: "Bare DHT11 sensor",
    cheaperPrice: 250,
    search: "DHT11 temperature humidity sensor",
    cheaperSearch: "DHT11 bare sensor",
    tag: "2-in-1 sensor",
  },
  {
    number: "03",
    icon: Droplets,
    category: "Soil sensor",
    name: "Soil moisture probe",
    detail: "Analog soil reading drives the automatic watering decision",
    price: 150,
    cheaper: "Basic resistive probe",
    cheaperPrice: 100,
    search: "soil moisture sensor module",
    cheaperSearch: "resistive soil moisture probe",
    tag: "Water wisely",
  },
  {
    number: "04",
    icon: Waves,
    category: "Watering",
    name: "5V mini submersible pump",
    detail: "Moves water when the soil falls below its moisture threshold",
    price: 500,
    cheaper: "3–6V micro water pump",
    cheaperPrice: 350,
    search: "5V mini submersible water pump",
    cheaperSearch: "3-6V mini water pump",
    tag: "On demand",
  },
  {
    number: "05",
    icon: ShieldCheck,
    category: "Driver · recommended",
    name: "5V relay module",
    detail: "Safely switches the pump; don’t power a motor directly from an MCU pin",
    price: 250,
    cheaper: "Transistor driver + diode",
    cheaperPrice: 120,
    search: "5V single channel relay module",
    cheaperSearch: "transistor motor driver module",
    tag: "Protect the board",
  },
]

function ShopLink({ query, children }: { query: string; children: React.ReactNode }) {
  const href = `https://www.jumia.co.ke/catalog/?q=${encodeURIComponent(query)}`
  return (
    <a className="shop-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ExternalLink aria-hidden="true" />
    </a>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Farm Automation home">
        <span className="brand-mark"><Sprout aria-hidden="true" /></span>
        <span className="brand-copy"><strong>Farm<span>Automation</span></strong><small>GROW WITH LESS GUESSWORK</small></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#system">The system</a>
        <a href="#components">Components</a>
        <a href="#field-notes">Field notes</a>
      </nav>
      <a className="header-link" href="https://github.com/Leskim/FarmAutomation" target="_blank" rel="noreferrer">
        <Github aria-hidden="true" />
        <span>View the project</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-shade" />
      <div className="hero-content">
        <span className="eyebrow hero-eyebrow"><span className="live-dot" /> A small build with a big purpose</span>
        <h1 id="hero-title">Let the soil<br />tell you <em>when.</em></h1>
        <p>A practical, low-cost farm automation project bringing together soil moisture sensing, local weather readings and on-demand watering.</p>
        <div className="hero-actions">
          <a className="button button-light" href="#components">Explore the components <ArrowDown aria-hidden="true" /></a>
          <a className="hero-text-link" href="#field-notes"><span className="play-icon">▶</span> Watch the build</a>
        </div>
      </div>
      <div className="hero-caption"><span>01 / 03</span><span>Sensor-led irrigation · Kenya</span></div>
      <div className="hero-side-note"><Leaf aria-hidden="true" /><span>Grow thoughtfully</span></div>
    </section>
  )
}

function ProjectIntro() {
  return (
    <section className="intro-section section-wrap" id="system" aria-labelledby="intro-title">
      <div className="intro-copy">
        <span className="eyebrow eyebrow-green">A smarter way to water</span>
        <h2 id="intro-title">Simple parts.<br /><em>More intentional</em> growing.</h2>
        <p className="intro-lede">This build reads the soil before it waters. A Wi-Fi microcontroller gathers sensor readings, shares them to a dashboard and switches a small pump when the soil needs attention.</p>
        <a className="underlined-link" href="https://github.com/Leskim/FarmAutomation" target="_blank" rel="noreferrer">Explore the source code <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="system-card" aria-label="Project overview">
        <div className="system-card-head"><span className="system-label"><span className="live-dot" /> SYSTEM OVERVIEW</span><span className="system-location">KENYA · DIY BUILD</span></div>
        <div className="system-flow">
          <div className="flow-node"><span className="flow-icon"><Thermometer aria-hidden="true" /></span><strong>Sense</strong><small>Soil + air</small></div>
          <span className="flow-line" aria-hidden="true" />
          <div className="flow-node"><span className="flow-icon"><Radio aria-hidden="true" /></span><strong>Connect</strong><small>ESP8266 Wi-Fi</small></div>
          <span className="flow-line" aria-hidden="true" />
          <div className="flow-node"><span className="flow-icon"><Droplets aria-hidden="true" /></span><strong>Water</strong><small>Only when needed</small></div>
        </div>
        <div className="system-card-foot"><span><Check aria-hidden="true" /> Open-source project</span><span>Designed to be built on</span></div>
      </div>
    </section>
  )
}

function ComponentCard({ part }: { part: (typeof parts)[number] }) {
  const Icon = part.icon
  return (
    <article className="part-card">
      <div className="part-card-top">
        <span className="part-number">{part.number}</span>
        <span className="part-tag">{part.tag}</span>
      </div>
      <div className="part-icon"><Icon aria-hidden="true" /></div>
      <span className="part-category">{part.category}</span>
      <h3>{part.name}</h3>
      <p className="part-detail">{part.detail}</p>
      <div className="part-price"><span>Est. price</span><strong>KSh {part.price.toLocaleString("en-KE")}</strong></div>
      <div className="alternative">
        <span className="alternative-label">LOWER-COST OPTION</span>
        <div className="alternative-row"><span>{part.cheaper}</span><strong>~ KSh {part.cheaperPrice.toLocaleString("en-KE")}</strong></div>
        <ShopLink query={part.cheaperSearch}>Compare local listings</ShopLink>
      </div>
      <div className="card-shop"><ShopLink query={part.search}>Find this component</ShopLink></div>
    </article>
  )
}

function ComponentsSection() {
  return (
    <section className="components-section" id="components" aria-labelledby="components-title">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow eyebrow-green">The hardware list</span>
            <h2 id="components-title">Small kit. <em>Real impact.</em></h2>
            <p>Core components from the project, with practical lower-cost alternatives.</p>
          </div>
          <div className="cost-note"><span>STARTER PARTS ESTIMATE</span><strong>~ KSh 2,000</strong><small>Before cables, power supply & delivery</small></div>
        </div>
        <div className="parts-grid">{parts.map((part) => <ComponentCard key={part.number} part={part} />)}</div>
        <p className="price-disclaimer">Prices are planning estimates in Kenyan shillings, not live quotes. Retailer stock, quality and delivery costs vary; compare current listings before buying. Choose a driver rated for your pump and supply.</p>
      </div>
    </section>
  )
}

function FieldNotes() {
  const videoUrl = "https://raw.githubusercontent.com/Leskim/FarmAutomation/soilmoisture/Arduino%20Codes/moistureSenswithPump/moisturesensorvid.mp4"
  return (
    <section className="field-notes section-wrap" id="field-notes" aria-labelledby="video-title">
      <div className="video-column">
        <div className="video-frame">
          <video controls preload="metadata" playsInline poster="/images/farm-rows.png" aria-label="Farm automation soil moisture and pump demonstration">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support embedded video. <a href={videoUrl}>Open the project video</a>.
          </video>
          <span className="video-caption"><span className="live-dot" /> FROM THE PROJECT REPOSITORY</span>
        </div>
      </div>
      <div className="video-copy">
        <span className="eyebrow eyebrow-green">Field notes · 01</span>
        <h2 id="video-title">A closer look<br />at the <em>build.</em></h2>
        <p>See the soil moisture sensor and mini pump working together in the original project demo.</p>
        <div className="video-meta"><span><CircuitBoard aria-hidden="true" /> Hands-on prototype</span><span><Droplets aria-hidden="true" /> Automatic watering</span></div>
        <a className="button button-dark" href="https://github.com/Leskim/FarmAutomation" target="_blank" rel="noreferrer">Explore the full project <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark"><Sprout aria-hidden="true" /></span>
          <span className="brand-copy"><strong>Farm<span>Automation</span></strong><small>GROW WITH LESS GUESSWORK</small></span>
        </a>
        <p>Built around a simple idea:<br /><em>use water with intention.</em></p>
        <a className="footer-github" href="https://github.com/Leskim/FarmAutomation" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub repository <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="footer-bottom section-wrap"><span>© 2026 Farm Automation project showcase</span><span>Made for growers, curious minds & better harvests <Leaf aria-hidden="true" /></span></div>
    </footer>
  )
}

export function FarmAutomationSite() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <ProjectIntro />
      <ComponentsSection />
      <FieldNotes />
      <SiteFooter />
    </main>
  )
}

export { ShopLink }
