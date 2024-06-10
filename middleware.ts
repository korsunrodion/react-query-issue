import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "al"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!_next/static|_next/image|assets|icons|images|.*.jpg|jpeg|png|gif|svg|mp4|webm|ogg|wav|mp3/i).*)"],
};
