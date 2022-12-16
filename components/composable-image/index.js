import { Image } from 'components/image'
import s from './composable-image.module.scss'

export function ComposableImage({ sources, width = 684, height = 403 }) {
  const amount = sources.items.length
  return (
    <div className={s.images}>
      {sources.items.map((source) => (
        <Image
          key={source.url}
          src={source.url}
          alt={source.title}
          width={width / amount}
          height={height}
          className={s.image}
          style={{ '--height': height, '--width': width / amount }}
        />
      ))}
    </div>
  )
}
