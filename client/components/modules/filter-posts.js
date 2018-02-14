export function filterPosts(posts, search) {
  return posts.filter((post) => {
    if (JSON.stringify(post).toLowerCase().indexOf(search.toLowerCase()) > -1) {
      return true;
    } else {
      return false;
    }
  });
}
