

// // hide API key
const projectID = process.env.SANITY_ID;

// For Sanity query's
export const sanityQueryURL = (query) =>
`https://${projectID}.api.sanity.io/v1/data/query/production?query=${query}`;


// WIP: For API calls
// export const sanityClient = createClient({
//     projectId: projectID,
//     dataset: "production",
//     useCdn: true,
// });