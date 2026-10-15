import { useEffect, useState } from 'react'

const TZ = 'America/Bogota' // Cali, Colombia — fixed GMT-5

const timeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: TZ,
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

/** Live local time in Hugo's timezone — a small "we are online" signal. */
export default function LiveClock({ label = false }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 10000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span className="clock">
      {label && <span>Local time </span>}
      {timeFormat.format(now)}
      <span className="clock__sep">·</span>
      GMT-5
    </span>
  )
}
