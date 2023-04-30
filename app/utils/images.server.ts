export const uploadImage = async (form: FormData) => {
  const image = form.get("uploadedImage") as Blob;
  const body = new FormData();
  body.append("file", image, "uploadedImage");
  let answer;
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_USER}/images/v1`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API}`,
      },
      body,
    }
  ).then((res) => {
    console.log("RES", { res });
    answer = res;
  });
  return answer;
};
