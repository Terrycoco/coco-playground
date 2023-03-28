import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client = ApolloClient;

export const getClient = () => {
  //create a new client if there's no existing one
  //or if we are running on the server
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "https:", //main--time-pav6zq.apollographos.net/graphql",
      }),
      cache: new InMemoryCache(),
    });
  } //end if
  return client;
};

//THIS IS HOW TO USE THIS IN A SERVER COMPONENT
// app/page.tsx
// import { getClient } from "@/lib/client";

// import { gql } from "@apollo/client";

// export const revalidate = 5;
// const query = gql`query Now {
//     now(id: "1")
// }`;

// export default async function Page() {
//   const client = getClient();
//   const { data } = await client.query({ query });

//   return <main>{data.now}</main>;
//}
