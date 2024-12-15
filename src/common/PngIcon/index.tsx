import { PngIconProps } from "../types";

export const PngIcon = ({ src, width, height }: PngIconProps) => (
  <img src={`${process.env.PUBLIC_URL}/img/png/${src}`} alt={src} width={width} height={height} />
);
