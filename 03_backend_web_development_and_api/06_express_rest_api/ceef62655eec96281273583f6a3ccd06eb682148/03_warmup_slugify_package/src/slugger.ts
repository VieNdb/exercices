import slugify from "slugify"

export function slugger(stringToSlug : string): string  {
  const myString = slugify(stringToSlug);
  return myString ;
}

export function sluggerWithUnderscores(stringToSlug: string): string  {
  const myString = slugify(stringToSlug, "_");
  return myString ;
}