

const projectID = "20qe52oi";

// For Sanity query's
export const sanityQueryURL = (query) =>
`https://${projectID}.api.sanity.io/v1/data/query/production?query=${query}`;

// WIP: For API calls
// export const mediaQueryURL = (query) =>
// `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;
