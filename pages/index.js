import dynamic from 'next/dynamic'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import experienceData from '@/data/experienceData'
import useSound from 'use-sound'

const RoughNotation = dynamic(
  () => import('react-rough-notation').then((m) => m.RoughNotation),
  { ssr: false }
)

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const [ThemeSoundResume] = useSound(`${basePath}/static/sounds/loading.mp3`)
  const [ThemeSoundbuild] = useSound(`${basePath}/static/sounds/turn_page.wav`)

  return (
    <>
      <div>
        <div className="mb-4 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-2">
            <h1 className="pb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am {''}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">
                Hadhemi
              </span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              {`Welcome to ${siteMetadata.description}. 
               I am a passionate Full Stack Developer who creates innovative solutions.I enjoy building `}
              meaningful applications and learning cutting-edge technologies.
            </h2>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
              This is my place for{'  '}
              <RoughNotation
                animate="true"
                type="box"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
              >
                thoughts, reflections & everything&nbsp;{'  '}
              </RoughNotation>
              in between. Have a good read!
            </p>
            <div className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              This is my place for{' '}
              <RoughNotation
                animate="true"
                type="highlight"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
              >
                thoughts, reflections & everything&nbsp;
              </RoughNotation>
              in between. Have a good read!{' '}
              <div className="mt-8 text-slate-600 dark:text-slate-400">
                <span className="text-sm">Press</span>{' '}
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ⌘
                </span>{' '}
                <span className="text-sm">/ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ctrl
                </span>{' '}
                <span className="text-sm">+ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  K
                </span>{' '}
                <span className="text-sm">to contact</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-4 gap-8 py-12">
              <div
                className="my-2 grid items-start gap-8"
                onClick={() => {
                  ThemeSoundbuild()
                }}
              >
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/projects">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">What I built</span>
                      </span>
                      <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Projects&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="my-2 grid items-start gap-8"
                onClick={() => {
                  ThemeSoundbuild()
                }}
              >
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/about">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">Read my story</span>
                      </span>
                      <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        About&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="my-2 grid items-start gap-8"
                onClick={() => {
                  ThemeSoundbuild()
                }}
              >
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="mailto:ben.manssour.hadhemi@gmail.com">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-fuchsia-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">Hire me!</span>
                      </span>
                      <span className="pl-6 text-fuchsia-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Mail&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="my-2 grid items-start gap-8"
                onClick={() => {
                  ThemeSoundResume()
                }}
              >
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link
                    href="/static/pdf/Hadhemi-Ben-Mansour.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-cyan-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">Resume</span>
                      </span>
                      <span className="pl-6 text-cyan-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        PDF&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Experience Timeline */}
      <div className="mt-4  pt-0 dark:border-gray-700">
        <h2 className="mb-10 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Experience
        </h2>

        <div className="relative">
          {/* desktop: horizontal line */}
          <div className="absolute left-0 top-[11px] hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 md:block" />

          {/* mobile: vertical line */}
          <div className="absolute left-[11px] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 md:hidden" />

          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {experienceData.slice().reverse().map((exp, index) => (
              <div key={index} className="relative flex flex-col pl-8 md:items-center md:pl-0 md:text-center">
                {/* desktop dot */}
                <span className="mb-4 hidden h-6 w-6 shrink-0 rounded-full bg-white ring-2 ring-pink-500 dark:bg-black dark:ring-pink-500 md:block" />

                {/* mobile dot */}
                <span className="absolute left-0 top-1 h-6 w-6 shrink-0 rounded-full bg-white ring-2 ring-pink-500 dark:bg-black dark:ring-pink-500 md:hidden" />

                {/* date */}
                <p className="font-mono text-xs text-gray-400 dark:text-gray-500">{exp.range}</p>

                {/* title */}
                <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-100">
                  {exp.title}
                </p>

                {/* company */}
                <Link
                  href={exp.url}
                  className="mt-0.5 text-sm text-pink-500 hover:text-pink-600 dark:text-pink-400"
                >
                  {exp.company}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-right">
          <Link
            href="/about"
            className="text-sm font-medium text-pink-500 hover:text-pink-600 dark:text-pink-400"
          >
            See full experience &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
