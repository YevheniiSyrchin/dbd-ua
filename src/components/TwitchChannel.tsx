import React from "react";
import { TwitchEmbed } from "react-twitch-embed";

function TwitchStreamEmbed() {
  return (
    <div>
      <TwitchEmbed channel="n0oP" width="780px" withChat={false} />
    </div>
  );
}
export default TwitchStreamEmbed;
