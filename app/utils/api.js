const endpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0`);
const topStories = `topstories.json`;
const story = `item`;
const user = `user`;

export function getTopStoriesIds (max) {
  return fetch(`${endpoint}/${topStories}`)
    .then((res) => res.json())
    .then((data) => data.slice(0, max));
}

export function getUser (userId) {
  return fetch(`${endpoint}/${user}/${userId}.json`)
    .then((res) => res.json())
    .then((data) => data)
}

export function getUserStories (userId) {
  return getUser(userId)
    .then(({ submitted }) => (

      Promise.all(submitted.slice(0, 30).map(getStory))
        .then((stories) => stories.filter(storyFilter))
    ))
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

function storyFilter (item) {
  return item.type === 'story';
}
