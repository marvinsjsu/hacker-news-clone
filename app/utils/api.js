const endpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0`);
const topStories = `topstories.json`;
const newStories = `newstories.json`;
const item = `item`;
const user = `user`;

export function getStoryIds (typeStory, max) {
  return fetch(`${endpoint}/${typeStory}`)
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
  return fetch(`${endpoint}/${item}/${id}.json`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getTopStories (max=50) {
  return getStoryIds(topStories, max)
    .then((ids) => (
      Promise.all(ids.map(getStory))
        .then((stories) => stories)
    ))
}

export function getNewStories (max=50) {
  return getStoryIds(newStories, max)
    .then((ids) => (
      Promise.all(ids.map(getStory))
        .then((stories) => stories)
    ))
}

export function getComment (commentId) {
  return fetch(`${endpoint}/${item}/${commentId}.json`)
    .then((res) => res.json())
    .then((comment) => comment)
}

export function getStoryComments (storyId) {
  return getStory(storyId)
    .then(({ kids }) => (
      Promise.all(kids.map(getComment))
        .then((comments) => comments)
    ))
}

function storyFilter (item) {
  return item.type === 'story';
}
