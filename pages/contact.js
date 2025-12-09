import ContactLink from '@/components/ContactLink'

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Contact
      </h1>
      <div className="pb-10 pt-8">
        <ul className="flex flex-col space-y-2 font-normal">
          <ContactLink
            href="mailto:ben.manssour.hadhemi@gmail.com"
            title="gmail"
            icon="ben.manssour.hadhemi"
          />
          <ContactLink href="https://github.com/HadhemiBM" title="github" icon="HadhemiBM" />

          <ContactLink
            href="https://www.linkedin.com/in/hadhemi-ben-mansour-0241701a5"
            title="linkedin"
            icon="HadhemiBenMansour"
          />
        </ul>
      </div>
    </div>
  )
}

export default Contact
