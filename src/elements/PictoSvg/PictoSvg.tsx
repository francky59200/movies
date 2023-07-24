import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

export interface Props {
  icon?: string
  className?: string
}

const PictoSvg = ({ icon, className }: Props) => {
  const [svgSource, setSvgSource] = useState<any>('')

  useEffect(() => {
    let isMounted = true
    import(`../../public/icons/${icon}.svg`).then((module) => {
      return isMounted && setSvgSource(module.default)
    })
    return () => {
      isMounted = false
    }
  }, [icon, setSvgSource])

  return <ReactSVG className={className } src={svgSource} />
}

export default PictoSvg
