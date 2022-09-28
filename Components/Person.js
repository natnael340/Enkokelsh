import React from 'react'
import { View, Text } from 'react-native'
import { SvgXml } from 'react-native-svg'

const xml = `<svg
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:ns1="http://sozi.baierouge.fr"
    id="svg2"
    xml:space="preserve"
    viewBox="0 0 35 35"
    version="1.1"
  >
    <g
      id="g10"
      transform="matrix(1.25 0 0 -1.25 0 35)" >
        <g
        id="g6008"
        transform="matrix(.32503 0 0 .32503 -100.86 -132.32)" >
        <g
          id="g5704"
          transform="translate(362.96 472.25)" > 
            <path
            id="path5706"
            fill-rule="evenodd"
            fill="#6f6c6d"
            d="m0 0c0-4.93-3.997-8.927-8.927-8.927-4.929 0-8.927 3.997-8.927 8.927s3.998 8.927 8.927 8.927c4.93 0 8.927-3.997 8.927-8.927" />
        </g>
      <g
          id="g5708"
          transform="translate(362.69 459.83)" >
          <path
            id="path5710"
            fill-rule="evenodd"
            fill="#6f6c6d"
            d="m0 0c-1.353 0.946-3.808 1.721-5.458 1.721h-6c-1.65 0-4.105-0.775-5.458-1.721l-0.084-0.059c-1.353-0.946-2.458-3.07-2.458-4.72v-11.625c0-1.651 0.562-4.097 1.25-5.438 0.687-1.341 1.475-2.437 1.75-2.437s0.722-1.332 0.993-2.959l2.014-12.082c0.271-1.627 1.506-2.959 2.743-2.959h4.5c1.237 0 2.472 1.332 2.743 2.959l2.014 12.082c0.271 1.627 0.718 2.959 0.993 2.959s1.062 1.096 1.75 2.437c0.687 1.341 1.25 3.787 1.25 5.438v11.625c0 1.65-1.105 3.774-2.458 4.72l-0.084 0.059z"
        />
        </g>
        </g>
      </g>
  </svg>
`

const Person = (props) => {
    return (
        <View>
            <SvgXml xml={xml} width={props.width} height={props.height} />
        </View>
    )
}

export default Person
