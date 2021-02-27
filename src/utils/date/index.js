export const getChatTime = (today) => {
  const hour = today.getHours();
  const minute = today.getMinutes();
  return `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setChatDate = (today) => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return `${year}-${month}-${date}`;
};
