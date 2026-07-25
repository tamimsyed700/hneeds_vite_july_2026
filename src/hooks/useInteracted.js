import { useEffect, useState } from 'react'

const EVENTS = ['scroll', 'touchstart', 'touchend', 'click', 'keydown']
let interacted = false
const listeners = new Set()

function markInteracted() {
  if (interacted) return
  interacted = true
  EVENTS.forEach((event) => window.removeEventListener(event, markInteracted))
  listeners.forEach((notify) => notify())
}

if (typeof window !== 'undefined') {
  EVENTS.forEach((event) => window.addEventListener(event, markInteracted, { passive: true }))
}

// True once the user has scrolled, touched, clicked or pressed a key anywhere on the page.
// Used to defer requesting below-the-fold images until the visitor actually starts interacting.
export default function useInteracted() {
  const [value, setValue] = useState(interacted)

  useEffect(() => {
    if (interacted) {
      setValue(true)
      return
    }
    const notify = () => setValue(true)
    listeners.add(notify)
    return () => listeners.delete(notify)
  }, [])

  return value
}