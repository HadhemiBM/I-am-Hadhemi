import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import Link from './Link'
import { HamburgerMenuIcon, Link2Icon } from '@radix-ui/react-icons'
import useSound from 'use-sound'

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const [ThemeSound] = useSound(`${basePath}/static/sounds/page-change.mp3`)

  return (
    <Menu as="div" className="relative z-10 inline-block text-left ">
      <div>
        <Menu.Button
          className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-2 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 active:scale-75 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600"
          aria-label="Toggle List Menu"
        >
          <HamburgerMenuIcon className="h-4 w-4" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => {
          toggleIcon()
          ThemeSound()
        }}
        afterLeave={() => {
          toggleIcon()
          ThemeSound()
        }}
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800 ">
          <div className="py-1"></div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/contact"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <Link2Icon className="mr-4 mt-0.5" /> Contact
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
