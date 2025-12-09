import NextImage from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <NextImage
    {...rest}
    placeholder="blur"
    blurDataURL={`${basePath}/static/images/SVG-placeholder.png`}
  />
)

export default Image
