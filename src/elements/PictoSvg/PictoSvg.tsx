import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

export interface Props {
  icon: string
}

const PictoSvg = ({ icon }: Props) => {
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

  return <ReactSVG src={svgSource} />
}

export default PictoSvg
