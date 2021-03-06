import React from "react";

const SmallLineSVG = ({
  style = {},
  className = "",
  viewBox="",
  fill1="#7000FF",
  fill2="#FFC700",
}) => (
<svg width="361px" height="126px" viewBox="0 0 361 126" version="1.1" xmlns="http://www.w3.org/2000/svg" id="gradient-line-small">
    <defs>
        <linearGradient x1="100.090462%" y1="45.3567839%" x2="0.0904922798%" y2="54.8242337%" id="linearGradient-1">
            <stop stopColor={fill1} offset="0%"></stop>
            <stop stopColor={fill2} offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group-3" transform="translate(1.000000, 1.000000)" strokeWidth="2">
            <path d="M16.7059,112.044 L341.706,12.044" id="Path" stroke="url(#linearGradient-1)"></path>
            <circle id="Oval" stroke={fill1} cx="350" cy="9" r="9"></circle>
            <circle id="Oval" stroke={fill2} cx="9" cy="115" r="9"></circle>
        </g>
    </g>
</svg>
);

export default SmallLineSVG;
