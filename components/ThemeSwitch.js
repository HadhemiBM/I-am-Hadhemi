import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'
import useSound from 'use-sound'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const [ThemeSound] = useSound('/static/sounds/switch-on.mp3')

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="ml-1 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-zinc-300 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800">
      <button
        className="flex h-8 w-8 items-center justify-center p-2 transition-transform duration-200 hover:scale-110 active:scale-90"
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => {
          handleThemeSwitch()
          ThemeSound()
        }}
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <HiSun className="h-4 w-4" />
        ) : (
          <HiMoon className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}

export default ThemeSwitch
