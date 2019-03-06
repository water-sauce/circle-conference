import React from "react";

const LineSVG = ({
  style = {},
  className = "",
  viewBox="",
  fill1="#7000FF",
  fill2="#FFC700",
}) => (
<svg width="963px" height="520" viewBox="0 0 963 320" fill="none" xmlns="http://www.w3.org/2000/svg" id="line-dance">
	<line y1="-1" x2="962.775" y2="-1" transform="matrix(0.954085 -0.299535 0.384358 0.923184 19.6794 302.265)" stroke="url(#paint0_linear)" strokeWidth="2" id="gradient-line" />
	<circle cx="946" cy="10" r="9" stroke={fill1} strokeWidth="2" id="circle-purple" />
	<circle cx="10" cy="304" r="9" stroke={fill2} strokeWidth="2" id="circle-yellow" />
	<defs>
		<linearGradient id="paint0_linear" x1="962.775" y1="2.5928e-06" x2="0" y2="4.6632e-07" gradientUnits="userSpaceOnUse">
			<stop stopColor="#7000FF"/>
			<stop offset="1" stopColor="#FFC700"/>
		</linearGradient>
	</defs>
</svg>

);

export default LineSVG;
