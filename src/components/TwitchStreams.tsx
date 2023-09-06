import React, { useEffect, useState } from "react";

interface Streamer {
  nickname: string;
  "stream-info": string;
}

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
}

function TwitchStreams() {
  const [streamerNicknames, setStreamerNicknames] = useState<string[]>([]);
  const [currentStreamIndex, setCurrentStreamIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const nextStream = () => {
    setCurrentStreamIndex((prevIndex) =>
      prevIndex === streamerNicknames.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevStream = () => {
    setCurrentStreamIndex((prevIndex) =>
      prevIndex === 0 ? streamerNicknames.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <button
            className="carousel-button prev"
            onClick={prevStream}
          ></button>
          <iframe
            src={`https://player.twitch.tv/?channel=${streamerNicknames[currentStreamIndex]}&parent=dbd-ua.eremenko.top`}
            width="100%"
            height="450px"
          ></iframe>
          <button
            className="carousel-button next"
            onClick={nextStream}
          ></button>
        </>
      )}
    </div>
  );
}

export default TwitchStreams;
