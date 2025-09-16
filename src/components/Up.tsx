import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

const Up = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200) // show after 200px
    }
    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToHero = () => {
    const hero = document.getElementById("hero")
    if (hero) hero.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToHero}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg
                  bg-primary text-primary-foreground hover:bg-primary/90
                  transition-opacity duration-300
                  ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

export default Up
