import React from "react";
import { TwitchEmbed } from "react-twitch-embed";

function MultiTwitchStreamEmbed() {
  const channels = ["fish_n_fire"];

  return (
    <div>
      {channels.map((channel) => (
        <TwitchEmbed
          key={channel}
          channel={channel}
          width="100%"
          withChat={false}
        />
      ))}
    </div>
  );
}

export default MultiTwitchStreamEmbed;
