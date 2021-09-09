/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

type GameCardProps = {
  data: any
}

export const GameCard = ({ data }: GameCardProps) => {
  const coverImage = `https://images.igdb.com/igdb/image/upload/t_cover_big/${
    data.cover ? data.cover.image_id : `nocover_qhhlj6`
  }.jpg`

  return (
    <Link href={`/games/${data.slug}`}>
      <a
        title={data.name}
        className="block bg-gray-700 hover:text-secondary shadow-md rounded-md overflow-hidden"
      >
        <img src={coverImage} alt={data.name} />
        <div className="p-3 text-sm">{data.name}</div>
      </a>
    </Link>
  )
}
