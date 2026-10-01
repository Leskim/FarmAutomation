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
    image: "/images/dht11-module.png",
    imageAlt: "Representative product photograph of a blue DHT11 temperature and humidity sensor module",
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
    image: "/images/soil-moisture-probe.png",
    imageAlt: "Representative product photograph of a capacitive soil-moisture probe",
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
    image: "/images/mini-water-pump.png",
    imageAlt: "Representative product photograph of a small DC submersible water pump",
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
    image: "/images/pump-relay-module.png",
    imageAlt: "Representative product photograph of a blue single-channel pump relay module",
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
    <section className="comparison-section" aria-labelledby="comparison-title">
      <div className="section-wrap">
        <div className="comparison-intro">
          <span className="eyebrow eyebrow-green">A lower-cost controller?</span>
          <h2 id="comparison-title">Blue Pill vs <em>the quoted board.</em></h2>
          <p>The STM32 Blue Pill can save a little if the project already has network connectivity. To add a SIM card, however, it needs a separate cellular modem and supply.</p>
        </div>
        <div className="comparison-grid">
          <article className="comparison-card">
            <span className="comparison-kicker">REPLACE THE KSh 750 BOARD</span>
            <h3>STM32 Blue Pill</h3>
            <strong className="comparison-price">~ KSh 450–700</strong>
            <p>Swapping only the quoted board takes the KSh 1,400 parts total to about <strong>KSh 1,100–1,350</strong>—a board-only saving of <strong>KSh 50–300 (about 4–21%)</strong>.</p>
            <p>The Blue Pill has no built-in Wi-Fi. Keep the original Wi-Fi plan only if a separate network module is already available.</p>
            <ShopLink query="STM32F103C8T6 Blue Pill board Kenya">Check Blue Pill listings</ShopLink>
          </article>
          <article className="comparison-card comparison-card-featured">
            <span className="comparison-kicker">ADD CELLULAR INTERNET</span>
            <h3>STM32 + SIM800L modem</h3>
            <strong className="comparison-price">~ KSh 1,950–2,850 total</strong>
            <p>Starting with the same KSh 1,400 parts quote, replace the KSh 750 board with a Blue Pill and add an estimated KSh 850–1,500 SIM800L modem.</p>
            <p>That is roughly <strong>KSh 550–1,450 more</strong> than the quoted build, before SIM/data bundles and a suitable modem supply. It adds mobile-network access, not a cheaper equivalent to Wi-Fi.</p>
            <ShopLink query="SIM800L GSM GPRS module Kenya">Check SIM800L listings</ShopLink>
          </article>
          <div className="comparison-notes">
            <span><Radio aria-hidden="true" /> SIM800L uses 2G GSM/GPRS. Verify supported 2G service and signal with your Kenyan carrier at the farm before buying.</span>
            <span><CircuitBoard aria-hidden="true" /> Rework the ESP8266 Blynk firmware for an STM32 UART and a compatible cellular/Blynk library such as TinyGSM.</span>
            <span><ShieldCheck aria-hidden="true" /> Use a regulator sized for the modem’s brief current peaks. Never power it from a Blue Pill GPIO or its 3.3 V pin.</span>
          </div>
        </div>
        <p className="comparison-footnote">Planning ranges only—not a Novatech quote. Sensor and pump prices are held constant in these totals. The quote screenshot names an ESP32 board, while this repository’s network sketch targets ESP8266/NodeMCU; confirm the exact board before comparing like for like.</p>
      </div>
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
          <span className="gallery-count">01—06 · PROJECT ARCHIVE</span>
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
          <p>The featured clip is the original repository video from 10:43. Pick another archive clip below; playback starts on demand so the whole file is not preloaded.</p>
        </div>
        <VideoShowcase />
        <div className="streaming-note">
          <div><strong>For the smoothest playback of your 500 MB+ master video</strong><p>Upload it to YouTube as <em>Unlisted</em> and embed that player, or use Cloudflare Stream for adaptive-quality streaming. A large MP4 can still buffer on a slow connection even when served in chunks.</p></div>
          <a href="https://studio.youtube.com/" target="_blank" rel="noreferrer">YouTube Studio · upload as Unlisted <ArrowUpRight aria-hidden="true" /></a>
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
