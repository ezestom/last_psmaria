import React from 'react'
import Image from 'next/image'

type PropType = {
   selected: boolean
   index: number
   src: string
   onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
   const { selected, index, src, onClick } = props

   return (
      <div
         className={'embla-thumbs__slide'.concat(
            selected ? ' embla-thumbs__slide--selected' : ''
         )}
      >
         <button
            onClick={onClick}
            type="button"
            className="embla-thumbs__slide__number relative overflow-hidden"
            aria-label={`Go to slide ${index + 1}`}
         >
            <Image src={src} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
         </button>
      </div>
   )
}
