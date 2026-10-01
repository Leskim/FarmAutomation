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
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { ProjectGallery, VideoShowcase } from "@/components/showcase-media"

type Part = {
  number: string
  icon: LucideIcon
  category: string
  name: string
  detail: string
  price: number
  image: string
  imageAlt: string
  alternative?: string
  alternativePrice?: string
  search: string
  alternativeSearch?: string
  tag: string
}

const suppliedImages = {
  prototype: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projectphoto-qppleT6SZcMZbqLZqNeciGY57XYEir.jpg",
  soilBed: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/farmauto1-a918hpHoXjhetDb8ogvJOBV4G9An8s.png",
  waterSetup: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/farmauto2-OOThyrQqYkWqo4Og4IoWkUBdBOmniP.png",
  vendorQuote: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/costs-syD39sLCsi1Hz9r8GGlynh3fdimTqm.png",
}

const parts: Part[] = [
  {
    number: "01",
    icon: Cpu,
    category: "Controller · quote item",
    name: "Wi-Fi development board",
    detail: "Novatech lists an ESP32 board at KSh 750. The Blynk sketch in this repository uses ESP8266 / NodeMCU libraries—check the exact board before ordering.",
    price: 750,
    image: suppliedImages.prototype,
    imageAlt: "The farm prototype controller and connected sensor inside its enclosure",
    alternative: "STM32 Blue Pill (board only)",
    alternativePrice: "~ KSh 450–700",
    search: "ESP32 development board WiFi Bluetooth",
    alternativeSearch: "STM32F103C8T6 Blue Pill board",
    tag: "The controller",
  },
  {
    number: "02",
    icon: Thermometer,
    category: "Air sensor · quote item",
    name: "DHT11 temperature & humidity",
    detail: "Reads ambient temperature and relative humidity; both values are sent to the Blynk dashboard.",
    price: 200,
    image: suppliedImages.prototype,
    imageAlt: "The blue DHT11 temperature and humidity sensor attached to the prototype",
    alternative: "Bare DHT11 sensor",
    alternativePrice: "~ KSh 150",
    search: "DHT11 temperature humidity sensor module",
    alternativeSearch: "DHT11 bare sensor Kenya",
    tag: "Two readings",
  },
  {
    number: "03",
    icon: Droplets,
    category: "Soil sensor · quote item",
    name: "Soil moisture probe",
    detail: "Samples soil moisture through the analog input. Calibrate its dry/wet readings in the actual soil before setting a watering threshold.",
    price: 150,
    image: suppliedImages.soilBed,
    imageAlt: "Moisture probe installed in the project garden bed",
    alternative: "Basic resistive probe",
    alternativePrice: "~ KSh 100",
    search: "soil moisture sensor module Kenya",
    alternativeSearch: "resistive soil moisture sensor probe",
    tag: "Water by need",
  },
  {
    number: "04",
    icon: Waves,
    category: "Watering · quote item",
    name: "Mini DC submersible pump",
    detail: "The small pump moves water from a reservoir when the controller requests watering. Keep the pump submerged while running.",
    price: 300,
    image: suppliedImages.waterSetup,
    imageAlt: "The project garden, pump, water bucket and connecting tubing",
    alternative: "3–6 V micro pump",
    alternativePrice: "~ KSh 250",
    search: "mini DC submersible water pump Kenya",
    alternativeSearch: "3-6V mini submersible pump",
    tag: "On demand",
  },
  {
    number: "05",
    icon: ShieldCheck,
    category: "Motor driver · add-on",
    name: "Pump switching driver",
    detail: "A relay or correctly rated transistor/MOSFET driver protects the microcontroller from motor current and inductive kickback. Not itemized in the Novatech quote.",
    price: 250,
    image: suppliedImages.prototype,
    imageAlt: "The prototype enclosure with its controller and switching hardware",
    search: "5V relay module motor driver Kenya",
    tag: "Recommended",
  },
]

function ShopLink({ query, children }: { query: string; children: ReactNode }) {
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
        <a href="#gallery">Field gallery</a>
        <a href="#video">Video</a>
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
        <p>A practical Kenyan farm prototype pairing live soil and weather readings with on-demand watering—documented with the real parts, readings and Blynk setup.</p>
        <div className="hero-actions">
          <a className="button button-light" href="#components">Explore the components <ArrowDown aria-hidden="true" /></a>
          <a className="hero-text-link" href="#video"><span className="play-icon" aria-hidden="true">▶</span> Watch the project clips</a>
        </div>
      </div>
      <div className="hero-caption"><span>01 / FIELD BUILD</span><span>Sensor-led irrigation · Kenya</span></div>
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
        <p className="intro-lede">The prototype reads soil moisture and air conditions, reports values to Blynk, and switches a small pump. The screenshots below show the actual dashboard, serial output and wiring flow.</p>
        <a className="underlined-link" href="https://github.com/Leskim/FarmAutomation" target="_blank" rel="noreferrer">Explore the source code <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="system-card" aria-label="Project overview">
        <div className="system-card-head"><span className="system-label"><span className="live-dot" /> SYSTEM OVERVIEW</span><span className="system-location">KENYA · DIY BUILD</span></div>
        <div className="system-flow">
          <div className="flow-node"><span className="flow-icon"><Thermometer aria-hidden="true" /></span><strong>Sense</strong><small>Soil + air</small></div>
          <span className="flow-line" aria-hidden="true" />
          <div className="flow-node"><span className="flow-icon"><Radio aria-hidden="true" /></span><strong>Connect</strong><small>Wi-Fi / Blynk</small></div>
          <span className="flow-line" aria-hidden="true" />
          <div className="flow-node"><span className="flow-icon"><Droplets aria-hidden="true" /></span><strong>Water</strong><small>When needed</small></div>
        </div>
        <div className="system-card-foot"><span><Check aria-hidden="true" /> Open-source project</span><span>Designed to be built on</span></div>
      </div>
    </section>
  )
}

function ComponentCard({ part }: { part: Part }) {
  const Icon = part.icon
  return (
    <article className="part-card">
      <div className="part-image"><img src={part.image} alt={part.imageAlt} loading="lazy" /></div>
      <div className="part-card-top">
        <span className="part-number">{part.number}</span>
        <span className="part-tag">{part.tag}</span>
      </div>
      <div className="part-icon"><Icon aria-hidden="true" /></div>
      <span className="part-category">{part.category}</span>
      <h3>{part.name}</h3>
      <p className="part-detail">{part.detail}</p>
      <div className="part-price"><span>{part.category.includes("quote") ? "Novatech quote" : "Planning estimate"}</span><strong>KSh {part.price.toLocaleString("en-KE")}</strong></div>
      {part.alternative && (
        <div className="alternative">
          <span className="alternative-label">LOWER-COST ALTERNATIVE</span>
          <div className="alternative-row"><span>{part.alternative}</span><strong>{part.alternativePrice}</strong></div>
          <ShopLink query={part.alternativeSearch ?? part.alternative}>Compare listings</ShopLink>
        </div>
      )}
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
            <p>Prices transcribed from the supplied Novatech Inc. cart; cheaper alternatives are planning estimates.</p>
          </div>
          <div className="cost-note"><span>NOVATECH QUOTED PARTS</span><strong>KSh 1,400</strong><small>4 quoted lines · before delivery</small></div>
        </div>
        <div className="parts-grid">{parts.map((part) => <ComponentCard key={part.number} part={part} />)}</div>
        <div className="quote-panel">
          <div className="quote-copy">
            <span className="eyebrow eyebrow-green">Original supplier summary</span>
            <h3>The quote behind the estimate.</h3>
            <p>The four Novatech items total KSh 1,400: soil probe 150, DHT11 200, Wi-Fi development board 750 and submersible pump 300. A motor driver is a separate recommended add-on.</p>
            <p className="quote-warning"><strong>Board mismatch to resolve:</strong> the quote image names an ESP32 board, while the repository Blynk sketch includes ESP8266 / NodeMCU libraries.</p>
          </div>
          <img className="quote-image" src={suppliedImages.vendorQuote} alt="Novatech Inc. Nairobi cart summary showing soil moisture sensor KSh 150, DHT11 KSh 200, ESP32 development board KSh 750, pump KSh 300 and total KSh 1,400" loading="lazy" />
        </div>
        <p className="price-disclaimer">Quoted prices come from the supplied screenshot, not a live retailer feed. Alternative prices are rough local-market estimates, not confirmed quotes; compare stock, sensor type, delivery and quality before buying. Do not power a pump directly from a microcontroller GPIO.</p>
      </div>
    </section>
  )
}

function BluePillComparison() {
  return (
    <section className="comparison-section section-wrap" aria-labelledby="comparison-title">
      <div className="comparison-intro">
        <span className="eyebrow eyebrow-green">A lower-cost controller?</span>
        <h2 id="comparison-title">Blue Pill vs <em>NodeMCU.</em></h2>
        <p>The STM32 Blue Pill can lower the microcontroller-only bill. It does not include Wi-Fi, so the cellular version needs another modem—and that changes the total.</p>
      </div>
      <div className="comparison-grid">
        <article className="comparison-card">
          <span className="comparison-kicker">BOARD ONLY</span>
          <h3>STM32 Blue Pill</h3>
          <strong className="comparison-price">~ KSh 450–700</strong>
          <p>Compared with the KSh 750 Wi-Fi board on the quote, the estimated saving is only about KSh 50–300—and the Blue Pill has no built-in Wi-Fi.</p>
          <ShopLink query="STM32F103C8T6 Blue Pill board Kenya">Check Blue Pill listings</ShopLink>
        </article>
        <article className="comparison-card comparison-card-featured">
          <span className="comparison-kicker">CELLULAR ADD-ON</span>
          <h3>SIM800L GSM / GPRS modem</h3>
          <strong className="comparison-price">~ KSh 850–1,500</strong>
          <p>Blue Pill + modem becomes roughly KSh 1,300–2,200 before a SIM, data bundles or power supply—so it is not cheaper than the quoted board by itself.</p>
          <ShopLink query="SIM800L GSM GPRS module Kenya">Check SIM800L listings</ShopLink>
        </article>
        <div className="comparison-notes">
          <span><Radio aria-hidden="true" /> SIM800L is 2G only; check local GPRS coverage before buying.</span>
          <span><CircuitBoard aria-hidden="true" /> Rewrite the ESP8266 Blynk connection for STM32 + TinyGSM / modem UART.</span>
          <span><ShieldCheck aria-hidden="true" /> Give the modem a suitable regulated supply for brief high-current bursts; do not power it from a Blue Pill GPIO.</span>
        </div>
      </div>
      <p className="comparison-footnote">These are planning ranges, not a vendor quote. A Blue Pill makes sense if its lower board cost matters and connectivity is already available; cellular is useful where Wi-Fi is absent, but is unlikely to reduce the total cost here.</p>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="section-wrap">
        <div className="section-heading gallery-heading">
          <div>
            <span className="eyebrow eyebrow-green">From the workbench</span>
            <h2 id="gallery-title">The build, <em>in the field.</em></h2>
            <p>Step through the real setup, live readings and pump-control screenshots.</p>
          </div>
          <span className="gallery-count">01—07 · PROJECT ARCHIVE</span>
        </div>
        <ProjectGallery />
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section className="video-section" id="video" aria-labelledby="video-title">
      <div className="section-wrap">
        <div className="video-heading">
          <div>
            <span className="eyebrow video-eyebrow">Watch the original project</span>
            <h2 id="video-title">See the system <em>in motion.</em></h2>
          </div>
          <p>Three original repository clips are available below. Choose a clip, then press play; the player requests the stream only when you start it.</p>
        </div>
        <VideoShowcase />
        <div className="streaming-note">
          <div><strong>For the smoothest playback of your 500 MB+ master video</strong><p>Upload it to YouTube as <em>Unlisted</em> and embed that player, or use Cloudflare Stream for adaptive-quality streaming. A large MP4 can still buffer on a slow connection even when served in chunks.</p></div>
          <a href="https://studio.youtube.com/" target="_blank" rel="noreferrer">Upload privately on YouTube <ArrowUpRight aria-hidden="true" /></a>
        </div>
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
      <BluePillComparison />
      <GallerySection />
      <VideoSection />
      <SiteFooter />
    </main>
  )
}

export { ShopLink }
