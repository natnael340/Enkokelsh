import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

const xml = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<polygon style="fill:#D9D9D9;" points="402.254,169.372 300.012,140.825 282.031,187.182 286.559,264.662 362.528,293.841 
	409.509,285.913 "/>
<polygon style="fill:#BFBFBF;" points="362.528,293.842 409.509,285.913 407.557,254.555 388.296,257.806 343.696,268.888 "/>
<path style="fill:#F0F0F0;" d="M482.682,273.567l-73.173,12.346L300.012,140.825l27.651-71.261
	c4.951-12.769,18.927-19.611,31.998-15.576c115.374,35.62,139.664,142.4,144.695,191.061
	C505.775,258.785,496.306,271.263,482.682,273.567z"/>
<path style="fill:#D9D9D9;" d="M504.293,245.055c-0.137-2.138-0.407-4.273-0.674-6.39c-1.34-10.588-3.282-21.1-5.821-31.466
	c-0.004-0.016-0.008-0.032-0.012-0.048c-2.749-11.226-6.451-23.292-11.436-35.607c4.456,16.67,6.793,31.778,8.006,43.506
	c1.419,13.735-8.05,26.212-21.674,28.517l-73.173,12.346l-11.213,1.893l21.213,28.107c0,0,73.17-12.346,73.173-12.346
	c10.458-1.764,19.331-10.108,21.268-20.626C504.431,250.327,504.462,247.689,504.293,245.055z"/>
<g>
	<path style="fill:#FFBA4D;" d="M116.927,439.011c-26.814,12.312-58.646,23.264-88.659,19.347
		c-5.446-0.711-19.441-3.467-20.672-10.513c-1.549-8.866,16.018-11.347,21.824-12.993c24.287-6.884,49.064-14.68,65.521-35.112
		L116.927,439.011z"/>
	<path style="fill:#FFBA4D;" d="M239.314,393.565c0,0,36.177-9.667,65.358-46.394c0,0-7.241,58.596,7.413,98.214
		c2.932,7.927,10.553,13.141,19.004,13.141h52.572v-4.193c0-20.284-16.443-36.727-36.727-36.727l0,0
		c0,0,14.087-55.342,15.597-123.765l-80.498-106.659c0,0-174.341,17.106-174.341,174.076L239.314,393.565z"/>
</g>
<path style="fill:#FAA330;" d="M69.558,420.143c4.052,11.291,10.015,21.679,17.506,30.765c10.376-3.406,20.431-7.565,29.863-11.896
	L94.94,399.741C87.805,408.598,79.104,415.079,69.558,420.143z"/>
<path style="fill:#FFE182;" d="M235.074,417.607h-2.77c4.775-9.717,7.466-20.642,7.466-32.199c0-40.383-32.737-73.119-73.119-73.119
	s-73.119,32.737-73.119,73.119s32.737,73.119,73.119,73.119h109.342C275.994,435.928,257.673,417.607,235.074,417.607z"/>
<path d="M27.299,465.788c4.428,0.578,9.047,0.871,13.732,0.871c21.854,0,45.678-6.019,74.632-18.865
	c13.903,11.383,31.661,18.227,50.99,18.227h109.343c4.142,0,7.5-3.358,7.5-7.5c0-23.934-17.454-43.867-40.302-47.739
	c1.256-3.772,2.211-7.625,2.888-11.54c9.032-3.243,29.302-12.03,49.529-31.135c-0.833,21.292-0.099,54.081,9.441,79.875
	c3.991,10.79,14.455,18.039,26.039,18.039h52.572c4.142,0,7.5-3.358,7.5-7.5v-4.193c0-21.225-15.03-39.007-35.006-43.26
	c3.824-17.394,12.016-59.864,13.699-110.862l114.08-19.25c17.456-2.952,29.704-19.065,27.884-36.683
	c-2.717-26.284-10.458-65.549-31.906-103.351c-26.319-46.389-66.033-78.05-118.037-94.105c-16.745-5.169-34.844,3.63-41.202,20.03
	l-44.016,113.45c-11.909,1.703-44.81,7.688-79.284,25.248c-56.052,28.55-89.146,74.317-95.853,132.427
	c-9.727,13.32-15.486,29.712-15.486,47.431c0,4.128,0.315,8.185,0.916,12.148c-14.549,16.279-35.634,23.294-59.574,30.079
	c-5.747,1.629-11.622,2.553-17.049,5.195c-10.397,5.063-10.802,12.388-10.118,16.305C2.252,460.816,18.059,464.582,27.299,465.788z
	 M302.138,156.084l13.055,17.298c2.433,3.221,7.275,3.903,10.504,1.469c3.261-2.461,3.931-7.242,1.468-10.505l-18.647-24.709
	l26.14-67.367c3.526-9.093,13.539-13.978,22.793-11.121c48.232,14.891,85.044,44.221,109.415,87.175
	c20.166,35.543,27.462,72.634,30.032,97.49c1.01,9.774-5.783,18.713-15.461,20.35l-68.682,11.588l-67.736-89.75
	c-2.495-3.306-7.197-3.964-10.504-1.468c-3.306,2.495-3.963,7.198-1.468,10.504l63.039,83.527l-30.312,5.116l-75.237-99.689
	L302.138,156.084z M115.6,344.242c12.309-15.238,31.462-24.459,51.053-24.459c10.406,0,20.376,2.381,29.634,7.078
	c3.693,1.874,8.208,0.399,10.082-3.295s0.399-8.208-3.295-10.082c-11.38-5.773-23.634-8.701-36.42-8.701
	c-2.856,0-5.71,0.458-8.55,0.458c-13.883,1.454-26.952,6.419-38.135,14.397c5.121-20.962,14.354-39.781,27.577-56.151
	c14.24-17.628,33.159-32.557,56.232-44.371c32.278-16.527,63.886-22.319,74.898-23.94l76.294,101.09
	c-1.763,65.507-15.163,118.929-15.304,119.485c-1.185,4.673,2.457,9.349,7.268,9.349c14.998,0,27.394,11.356,29.042,25.92h-44.886
	c-5.336,0-10.146-3.313-11.97-8.242c-13.835-37.408-7.073-94.126-7.003-94.693c0.412-3.334-1.444-6.537-4.542-7.836
	c-3.099-1.3-6.683-0.38-8.773,2.25c-18.195,22.9-39.444,34.745-51.579,40.094c-0.004-0.115-0.015-0.23-0.019-0.346
	c-0.157-3.894-0.601-7.784-1.318-11.614c-2.479-13.254-8.305-25.87-16.856-36.302c-2.626-3.204-7.352-3.672-10.555-1.046
	c-3.204,2.626-3.672,7.352-1.046,10.555c9.539,11.637,14.844,26.516,14.844,41.562c0,9.999-2.287,19.915-6.697,28.892
	c-1.142,2.325-1.004,5.074,0.365,7.272c2.126,3.415,5.585,3.536,9.137,3.536c15.85,0,29.158,11.091,32.571,25.92H166.653
	c-29.372,0-54.296-19.398-62.639-46.055c-0.022-0.071-0.043-0.143-0.065-0.214C97.569,384.052,101.997,361.082,115.6,344.242z
	 M27.828,442.964c22.255-5.21,46.131-13.357,63.53-28.684c3.064,8.015,7.394,15.465,12.868,22.135
	c-23.43,9.905-49.274,17.855-74.986,14.5c-6.445-0.841-11.415-2.672-13.493-4.038C18.578,445.128,25.369,443.539,27.828,442.964z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

const Animal = (props) => {
  return (
    <View>
      <SvgXml xml={xml} width={props.width} height={props.height} />
    </View>
  );
};

export default Animal;