import { setVideoYt } from "./querySlice";

export const handleSearchYt = async (searchQuery, dispatch) => {
  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`
  );

  const json = await data.json();
  dispatch(setVideoYt(json?.items));
};

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

//Function to find the nth prime number
export const findNthPrime = (n) => {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
};
