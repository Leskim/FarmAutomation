"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react"

const gallerySlides = [
  {
    src: "/images/sensor-connections.jpg",
    alt: "Firmware screenshot showing the DHT11 pin definition and sensor-reading routine",
    title: "01 — Read the sensors",
    description: "The project sketch samples soil moisture and reads ambient temperature and humidity from the DHT11.",
  },
  {
    src: "/images/serial-readings.jpg",
    alt: "Arduino serial monitor showing temperature, humidity, and soil moisture values",
    title: "02 — Live readings",
    description: "Temperature, relative humidity, and raw soil values appear in the serial monitor.",
  },
  {
    src: "/images/blynk-setup.jpg",
    alt: "Screenshot from the Blynk setup for the farm automation project",
    title: "03 — Blynk setup",
    description: "The app setup connects project telemetry to a phone-friendly dashboard.",
  },
  {
    src: "/images/blynk-dashboard.jpg",
    alt: "Farm automation Blynk dashboard on a desktop screen",
    title: "04 — Blynk dashboard",
    description: "A live view makes it easier to check the garden without standing by the bed.",
  },
  {
    src: "/images/pump-dashboard.jpg",
    alt: "Blynk dashboard screenshot for controlling the irrigation pump",
    title: "05 — Pump control",
    description: "A dashboard control provides a manual way to switch the watering output.",
  },
  {
    src: "/images/pump-status.jpg",
    alt: "Blynk pump status screenshot showing the watering control state",
    title: "06 — Water when needed",
    description: "The pump control sits alongside the sensor-led watering workflow.",
  },
]

const projectClips = [
  {
    title: "Featured repository video · 10:43",
    src: "https://media.githubusercontent.com/media/Leskim/FarmAutomation/soilmoisture/NovaBlynky/VID20220520104322.mp4",
    poster: "/images/sensor-connections.jpg",
  },
  {
    title: "Repository video · 10:46",
    src: "https://media.githubusercontent.com/media/Leskim/FarmAutomation/soilmoisture/NovaBlynky/VID20220520104626.mp4",
    poster: "/images/blynk-dashboard.jpg",
  },
  {
    title: "Repository video · 10:48",
    src: "https://media.githubusercontent.com/media/Leskim/FarmAutomation/soilmoisture/NovaBlynky/VID20220520104811.mp4",
    poster: "/images/pump-dashboard.jpg",
  },
]

export function ProjectGallery() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const currentSlide = gallerySlides[activeSlide]

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % gallerySlides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [activeSlide, isPaused])

  function showPrevious() {
    setActiveSlide((current) => (current - 1 + gallerySlides.length) % gallerySlides.length)
  }

  function showNext() {
    setActiveSlide((current) => (current + 1) % gallerySlides.length)
  }

  return (
    <div
      className="project-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label="Farm Automation project photos and screenshots"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false)
      }}
    >
      <div className="gallery-photo-wrap">
        <Image
          key={currentSlide.src}
          className="gallery-photo"
          src={currentSlide.src}
          alt={currentSlide.alt}
          fill
          sizes="(max-width: 720px) 88vw, 66vw"
          priority
        />
        <div className="gallery-photo-shade" />
        <span className="gallery-counter">{String(activeSlide + 1).padStart(2, "0")} / {String(gallerySlides.length).padStart(2, "0")}</span>
        <div className="gallery-caption" key={currentSlide.title}>
          <span>{currentSlide.title}</span>
          <p>{currentSlide.description}</p>
        </div>
        <div className="gallery-arrows">
          <button type="button" onClick={showPrevious} aria-label="Previous project photo"><ArrowLeft aria-hidden="true" /></button>
          <button type="button" onClick={showNext} aria-label="Next project photo"><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <div className="gallery-controls">
        <div className="gallery-dots" aria-label="Choose a project photo">
          {gallerySlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={index === activeSlide ? "gallery-dot is-active" : "gallery-dot"}
              aria-label={`Show ${slide.title}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        <span className="gallery-current-title">{currentSlide.title.replace(/^\d+ — /, "")}</span>
        <button
          className="gallery-pause"
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        </button>
      </div>
    </div>
  )
}

export function VideoShowcase() {
  const [activeClip, setActiveClip] = useState(0)
  const clip = projectClips[activeClip]

  return (
    <div className="video-showcase">
      <div className="video-player-wrap">
        <video key={clip.src} className="video-player" aria-label={clip.title} controls preload="none" poster={clip.poster} playsInline>
          <source src={clip.src} type="video/mp4" />
          Your browser does not support embedded video. <a href={clip.src}>Open the original project clip.</a>
        </video>
        <span className="video-live-label"><span className="live-dot" /> ORIGINAL REPOSITORY FOOTAGE</span>
        <a className="video-open-link" href={clip.src} target="_blank" rel="noreferrer">Open clip <ArrowRight aria-hidden="true" /></a>
      </div>
      <div className="video-playlist" role="group" aria-label="Choose an original project clip">
        {projectClips.map((item, index) => (
          <button
            className={index === activeClip ? "video-clip is-selected" : "video-clip"}
            key={item.src}
            type="button"
            aria-pressed={index === activeClip}
            onClick={() => setActiveClip(index)}
          >
            <span className="video-clip-number">0{index + 1}</span>
            <span>{item.title}</span>
            <Play aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  )
}

export { gallerySlides }
