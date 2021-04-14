type MyObject = {
  objectType: string;
  quantity: number;
  description: string;
  storedIn: string;
}

export function findMyMaps(objects: MyObject[]): MyObject[] {
  const myObjectTab = objects.filter((obj) => {
    if (obj.objectType === "map") {
      return obj;
    }
  });
  return myObjectTab;
}
