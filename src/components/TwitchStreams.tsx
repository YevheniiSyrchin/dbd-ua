import React, { useEffect, useState } from "react";

interface Streamer {
  nickname: string;
  "stream-info": string;
}

function TwitchStreams() {
  const [streamerNicknames, setStreamerNicknames] = useState<string[]>([]);
  const [currentStreamIndex, setCurrentStreamIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
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
          setIsLoading(false);
        } else {
          setError("API response format is not as expected.");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setError("Error fetching streamer data: " + error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
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
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          <button
            className="carousel-button prev"
            onClick={prevStream}
          ></button>
          <iframe
            src={`https://player.twitch.tv/?channel=${streamerNicknames[currentStreamIndex]}&parent=dbd.com.ua`}
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
