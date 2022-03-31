import React from 'react'

const getViewBox = name => {
  switch (name) {
    case "circle":
      return "0 0 1000 1000";
    case "cross":
      return "0 0 503.021 503.021";
    case "refresh":
      return "0 0 24 24";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "circle":
      return (
        <g {...props}>
          <path d="M500 10C229.4 10 10 229.4 10 500s219.4 490 490 490 490-219.4 490-490S770.6 10 500 10zm0 729.1c-131.6 0-238.3-106.7-238.3-238.3 0-131.6 106.7-238.3 238.3-238.3 131.6 0 238.3 106.7 238.3 238.3 0 131.6-106.7 238.3-238.3 238.3z" />
        </g>
      );
    case "cross":
      return (
        <g {...props}>
          <path d="M491.613 75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056 0L251.507 132.222 130.686 11.407c-15.202-15.202-39.853-15.202-55.055 0l-64.23 64.236c-15.202 15.202-15.202 39.854 0 55.056l120.821 120.815L11.401 372.328c-15.202 15.202-15.202 39.854 0 55.056l64.235 64.229c15.202 15.202 39.854 15.202 55.056 0l120.815-120.814 120.822 120.814c15.202 15.202 39.854 15.202 55.056 0l64.235-64.229c15.202-15.202 15.202-39.854 0-55.056L370.793 251.514l120.82-120.815c15.202-15.209 15.202-39.854 0-55.056z" />
        </g>
      );
    case "refresh":
      return (
        <g {...props}>
          <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </g>
      );
    default:
      return <path />;
  }
};

const defaultColor = (name) => {
  switch (name) {
    case "circle":
      return "#ffb300";
    case "cross":
      return "#1fb8ff";
    default:
      return "grey";
  }
}

const MarkType = ({
  name = "",
  fill = defaultColor(name),
  viewBox = "",
  className = "",
  width = "100%",
  height = "100%"
}) => {

  if (fill === "")
    fill = defaultColor(name);

  return (
    <svg
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || getViewBox(name)}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {getPath(name, { fill })}
    </svg>
  )
};

export default MarkType;