import { VideoIconProps } from "../types";

export const VideoIcon = ({ src, width, height, controls = false }: VideoIconProps) => (
  <video src={`${process.env.PUBLIC_URL}/videos/${src}`} width={width} height={height} controls={controls} autoPlay loop muted>
    Your browser does not support the video tag.
  </video>
);