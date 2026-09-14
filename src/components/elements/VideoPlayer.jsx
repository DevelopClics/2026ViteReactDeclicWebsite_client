import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

export default function VideoPlayer({ video }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const height = isMobile ? "250" : isTablet ? "400" : "600";

  return (
    <YouTube
      videoId={video}
      opts={{
        width: "100%",
        height,
        playerVars: {
          autoplay: 0,
        },
      }}
    />
  );
}
