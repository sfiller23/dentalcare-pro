export const isOneMinuteLeft = (dateString: string): boolean => {
  const targetTime = new Date(dateString).getTime(); // Convert the date string to a timestamp
  console.log(targetTime, "expire");

  const currentTime = new Date(Date.now()).getTime(); // Get the current timestamp
  console.log(targetTime - currentTime);

  return targetTime - currentTime <= 60 * 1000 * 24 * 60 * 60 * 1000;
};
