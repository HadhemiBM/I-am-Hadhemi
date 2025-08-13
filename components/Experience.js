import Link from '@/components/Link'

const Experience = ({ title, company, location, range, url, text1, text2, text3,text4,text5,text6 ,text7}) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500">
          <Link href={url} className="company">
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">{range}</div>
        <div className="p-2">
          <div className="flex flex-row ">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text1}</div>
          </div>
          <div className="flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text2}</div>
          </div>
          {text3 && (

          <div className="items-top flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text3}</div>
          </div>
)}

          {text4 && (
  <div className="items-top flex flex-row">
    <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
    <div className="text-gray-500 dark:text-gray-400">{text4}</div>
  </div>
)}
 {text5 && (
  <div className="items-top flex flex-row">
    <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
    <div className="text-gray-500 dark:text-gray-400">{text5}</div>
  </div>
)}
 {text6 && (
  <div className="items-top flex flex-row">
    <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
    <div className="text-gray-500 dark:text-gray-400">{text6}</div>
  </div>
)} {text7 && (
  <div className="items-top flex flex-row">
    <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
    <div className="text-gray-500 dark:text-gray-400">{text7}</div>
  </div>
)}
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200  dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Experience
