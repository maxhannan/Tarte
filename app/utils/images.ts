export const uploadImage = async (images: Blob[]) => {
  if (images.length < 1) {
    return [];
  }
  const imagesSaving = images.map(async (image) => {
    const savedImage = await singleUpload(image);
    console.log({ savedImage });
    return savedImage;
  });
  const savedImages = await Promise.all(imagesSaving);
  return savedImages;
};

export const singleUpload = async (image: Blob) => {
  const url = await getUrl();
  console.log({ url });
  const body = new FormData();
  body.append("file", image, image.name);
  const response = await fetch(url.result.uploadURL, {
    method: "POST",

    body,
  });
  console.log({ response });
  const desereli = await response.json();
  console.log({ desereli });
  return desereli.result.variants[0];
};

export const getUrl = async () => {
  const ImageLink = await fetch("/app/ImageLink", { method: "GET" }).then(
    (res) => res.json()
  );
  return ImageLink;
};
