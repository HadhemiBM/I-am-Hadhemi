// import siteMetadata from '@/data/siteMetadata'
// import projectsData from '@/data/projectsData'
// import Card from '@/components/Card'

// export default function Projects() {
//   return (
//     <div className="mx-auto max-w-6xl divide-y divide-gray-400">
//         <div className="space-y-2 pt-6 pb-8 md:space-y-5">
//           <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
//             Projects
//           </h1>
//           <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
//             A list of projects I have been working on or built
//           </p>
//         </div>
//         <div className="container py-12">
//           <div className="-m-4 flex flex-wrap">
//             {projectsData.map((d) => (
//               <Card
//                 key={d.title}
//                 title={d.title}
//                 description={d.description}
//                 imgSrc={d.imgSrc}
//                 href={d.href}
//                 github={d.github}
//                 tech1={d.tech1}
//                 tech2={d.tech2}
//                 tech3={d.tech3}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//   )
// }
import projectsData from '@/data/projectsData'
import { useState } from 'react'

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Design', value: 'design' },
]

const CATEGORY_MAP = {
  'AccesSiv : LandingPage': 'web',
  'Actoob : LandingPage': 'web',
  'Actoob : Application Mobile': 'mobile',
  'Persista Technology': 'web',
  'Labo Creatif': 'web',
  '4ina Technologie': 'web',
  "Playsoft": 'design',
  'Yoga Website': 'web',
  "Blasti": 'mobile',
  'Real Estate Website': 'web',
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [overlayProject, setOverlayProject] = useState(null)

  const filtered =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => CATEGORY_MAP[p.title] === activeCategory)

  return (
    <div className="mx-auto max-w-6xl  py-4">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-medium leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Projects
        </h1>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          A list of projects I have been working on or built
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-150 ${
              activeCategory === cat.value
                ? 'border-transparent  text-white dark:bg-gray-100 dark:text-gray-900'
                : 'border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl gap-4">
        <div className="grid grid-cols-1 gap-px  sm:grid-cols-2  lg:grid-cols-3">
          {filtered.map((project) => (
            <div key={project.title} className="p-3">
              <ProjectCard
                project={project}
                index={projectsData.indexOf(project)}
                onCardClick={() => setOverlayProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {overlayProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-900">
            <button
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              onClick={() => setOverlayProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{overlayProject.title}</h2>
            {overlayProject.imgSrc && (
              <img src={overlayProject.imgSrc} alt={overlayProject.title} className="mb-4 w-full rounded-lg object-cover" />
            )}
            <p className="mb-4 text-gray-700 dark:text-gray-300">{overlayProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[overlayProject.tech1, overlayProject.tech2, overlayProject.tech3, overlayProject.tech4, overlayProject.tech5, overlayProject.tech6].filter(Boolean).map((tech) => (
                <span key={tech} className="rounded-full border border-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              {overlayProject.href && (
                <a href={overlayProject.href} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-600">Live Site</a>
              )}
              {overlayProject.github && (
                <a href={overlayProject.github} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-900">GitHub</a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )

function ProjectCard({ project, index, onCardClick }) {
  const num = String(index + 1).padStart(3, '0')
  const techs = [
    project.tech1,
    project.tech2,
    project.tech3,
    project.tech4,
    project.tech5,
    project.tech6,
  ].filter(Boolean)

  const isGithubLink =
    project.github && project.github.startsWith('https://github.com')

  return (
    <div
      className="group relative flex min-h-[220px] cursor-pointer flex-col gap-3 overflow-hidden bg-white p-6 transition-colors rounded-lg border dark:border-gray-800 duration-200 hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900"
      onClick={onCardClick}
    >
      {project.imgSrc && (
        <div
          className={
            "absolute inset-0 bg-cover bg-center transition-opacity duration-300 " +
            "group-hover:opacity-100 " +
            (project.imgSrc ? "opacity-[0.07] group-hover:opacity-100" : "")
          }
          style={{ backgroundImage: `url('${project.imgSrc}')` }}
          aria-hidden="true"
        />
      )}

      {/* Hide text on hover */}
      <div className="relative z-10 flex flex-col gap-3 transition-opacity duration-300 group-hover:opacity-0">
        <div className="flex items-start justify-between">
          <span className="text-[11px] font-medium tracking-widest text-gray-400 dark:text-gray-600">
            {num}
          </span>
          <div className="flex gap-2">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Live site"
                className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-gray-300 text-gray-400 transition-all hover:border-gray-500 hover:text-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:border-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {isGithubLink && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="GitHub"
                className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-gray-300 text-gray-400 transition-all hover:border-gray-500 hover:text-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:border-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div>
          <h2 className="mb-1.5 text-[15px] font-medium leading-snug text-gray-900 dark:text-gray-100">
            {project.title}
          </h2>
          <p className="line-clamp-3 text-[12px] leading-relaxed text-gray-800 dark:text-gray-200">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 px-2 py-0.5 text-[10px] text-gray-400 dark:border-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>    
      {/* </div>     */}





      {/* Show thumbnail at full opacity on hover, hide text */}
      {project.imgSrc && (
        <div
          className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          style={{ backgroundImage: `url('${project.imgSrc}')` }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}}