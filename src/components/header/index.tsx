import { useEffect, useRef, useState } from "react"
import "./style.css"

/** Keeps the first letter visible; the rest collapses when the header is `scrolled`. */
const CollapsibleWord = ({ word }: { word: string }) => (
  <span className="name-word">
    {word[0]}
    <span className="name-rest">
      <span>{word.slice(1)}</span>
    </span>
  </span>
)

// `id` is the id of the section element each link scrolls to.
const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "works", label: "My Work" },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const sentinel = useRef<HTMLDivElement>(null)

  // Flip `scrolled` only when the top of the page leaves/enters the viewport.
  useEffect(() => {
    const node = sentinel.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting)
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Highlight the nav link whose section crosses the middle of the viewport.
  useEffect(() => {
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)
        )
        setActiveId(NAV_ITEMS.find((i) => visible.has(i.id))?.id ?? null)
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinel} className="header-sentinel" aria-hidden="true" />
      <header className={scrolled ? "scrolled" : ""}>
        <h1 className="header-title">
          <a href="#home" className="header-title-link">
            <span className="sr-only">Logan Brown</span>
            <span aria-hidden="true">
              {"<"}
              <CollapsibleWord word="Logan" />{ scrolled ? "" : " "}<CollapsibleWord word="Brown" />
              {">"}
            </span>
          </a>
        </h1>
        <nav className="nav-items" aria-label="Primary">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? "active" : ""}
              aria-current={activeId === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}

export default Header
