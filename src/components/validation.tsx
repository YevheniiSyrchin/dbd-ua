export const isValidLogin = (value: string) =>
  /^[A-Za-z0-9_]{4,16}$/.test(value);
export const isValidPassword = (value: string) =>
  /^[A-Za-z0-9]{4,16}$/.test(value);
export const isValidTwitchLink = (value: string) => {
  const twitchUrlPattern = /^(https:\/\/)?(www\.)?twitch\.tv\/[A-Za-z0-9_]+$/;
  return twitchUrlPattern.test(value);
};
