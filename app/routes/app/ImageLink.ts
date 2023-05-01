import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const ImageLink = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_USER}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API}`,
      },
    }
  );
  console.log({ ImageLink });
  return ImageLink;
};
