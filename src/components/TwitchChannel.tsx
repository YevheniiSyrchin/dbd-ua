import React, { useEffect, useState } from "react";
import TwitchEmbedVideo from "react-twitch-embed-video";

interface Streamer {
  nickname: string;
  "stream-info": string;
}

function TwitchStreams() {
  const [streamerNicknames, setStreamerNicknames] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/pages?page-type=main-page"
    )
      .then((response) => response.json())
      .then((data) => {
        if (
          data &&
          data.response &&
          data.response["main-page-data"] &&
          data.response["main-page-data"]["user-twitch-stream-data"]
        ) {
          const streamers: Streamer[] =
            data.response["main-page-data"]["user-twitch-stream-data"];
          const filteredStreamers = streamers
            .filter((streamer) => streamer["stream-info"] !== "offline")
            .map((streamer) => streamer.nickname);
          setStreamerNicknames(filteredStreamers);
        } else {
          console.error("API response format is not as expected:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching streamer data:", error);
      });
  }, []);

  return (
    <div>
      {streamerNicknames.map((nickname) => (
        <div key={nickname}>
          <TwitchEmbedVideo
            channel={nickname}
            width="100%"
            height="450px"
            layout="video"
            targetId="twitch-embed"
            theme="dark"
            autoplay={false}
            muted={false}
          />
        </div>
      ))}
    </div>
  );
}

export default TwitchStreams;
