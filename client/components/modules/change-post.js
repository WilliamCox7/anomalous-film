export function changePost(index, setIndex, setChangedIndex) {
  localStorage.setItem("postIndex", index);
  setIndex(index);
  setChangedIndex(index);
}
