import React from "react"
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview"

const Spotlight = ({ pieces }) => {
  const randomList = Math.floor(Math.random() * pieces.length)
  const randomPiece = pieces[randomList]

  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 pt-20 pb-6">
      <ArtPiecePreview
        slug={randomPiece.slug}
        key={randomPiece.slug}
        title={randomPiece.name}
        artist={randomPiece.artist}
        image={randomPiece.imageSource}
      />
    </div>
  )
}

export default Spotlight
