import React, { useEffect, useState } from 'react'

export interface Picto {
  icon: string
  rest: any
}

export interface params {
  rest: any
  'aria-label': boolean
  classname: string
  viewBox: any
}

const PictoSvg = ({ icon, ...rest }: Picto) => {
  const [svgSource, setSvgSource] = useState<any>('')

  useEffect(() => {
    let isMounted = true
    import(`../../public/icons/${icon}.svg`).then(module => isMounted && setSvgSource(module.default))
    return () => {
      isMounted = false
    }
  }, [icon, setSvgSource])

  const { type, props } = svgSource
  const { viewBox, children } = props

  const params: params = {
    'aria-label': true,
    'classname': 'w-[24px] h-[24px]',
    viewBox,
    ...rest,
  }

  return type ?? React.createElement(type, params, children)
}

export default PictoSvg
