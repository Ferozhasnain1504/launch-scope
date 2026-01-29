import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:"https://66422ec23a43a1bce5128021de6e93f9@o4510793227370496.ingest.us.sentry.io/4510793234251776",
  integrations:[
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      autoInject : true,
    }),
  ],
  tracesSampleRate: 1.0,
  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
