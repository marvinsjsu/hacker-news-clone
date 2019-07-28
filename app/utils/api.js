const endpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0`);
const topStories = `topstories.json`;
const story = `item`;

export function getTopStoriesIds (max) {
  return fetch(`${endpoint}/${topStories}`)
    .then((res) => res.json())
    .then((data) => data.slice(0, max));
}

export function getStory (id) {
  return fetch(`${endpoint}/${story}/${id}.json`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getTopStories (max=50) {
  return getTopStoriesIds(max)
    .then((ids) => (
      Promise.all(ids.map(getStory))
        .then((stories) => stories)
    ))
}