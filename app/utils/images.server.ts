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

const singleUpload = async (image: Blob) => {
  const body = new FormData();
  body.append("file", image, image.name);
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_USER}/images/v1`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API}`,
      },
      body,
    }
  );
  console.log({ response });
  const desereli = await response.json();
  console.log({ desereli });
  return desereli.result.variants[1];
};
