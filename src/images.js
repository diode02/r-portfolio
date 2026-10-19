const images = import.meta.glob("./assests/images/*", {
  eager: true,
  query: "?url",
  import: "default",
});
export function imageUrl(name) {
  return images[`./assests/images/${name}`];
}
