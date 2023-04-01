import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta
          name="theme-color"
          content="#262626"
          media="(prefers-color-scheme: dark)"
        />
        <Links />
      </head>
      <body className="bg-neutral-100 dark:bg-neutral-900  ">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
