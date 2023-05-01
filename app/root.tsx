import {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
  json,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "manifest",
      href: "/manifest.json",
      id: "manifest-placeholder",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport:
    "width=device-width,initial-scale=1, maximum-scale=1.0,user-scalable=0 ",
  "apple-mobile-web-app-capable": "yes",

  display: "standalone",
  "mobile-web-app-capable": "yes",

  "apple-touch-fullscreen": "yes",
});
export const loader: LoaderFunction = async () => {
  return json({
    ENV: {
      CLOUDFLARE_USER: process.env.CLOUDFLARE_USER,
      CLOUDFLARE_API: process.env.CLOUDFLARE_API,
    },
  });
};
export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta
          name="theme-color"
          content="#171717"
          media="(prefers-color-scheme: dark)"
        />
        <Links />
      </head>
      <body className="bg-neutral-100 dark:bg-neutral-900 font-workSans   ">
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
