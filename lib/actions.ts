import { createUserMutation, getUserQuery } from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";

const apiUrl = process.env.NEXT_PUBLIC_GRAFBASE_API_URL || "";

const apiKey = process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || "";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables: any) => {
  try {
    return await client.request(query, variables);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUser = async (email: string) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getUserQuery, { email });
};

export const createUser = async (
  name: string,
  email: string,
  avatarUrl: string
) => {
  client.setHeader("x-api-key", apiKey);
  const variables = {
    input: {
      name,
      email,
      avatarUrl,
    },
  };
  return makeGraphQLRequest(createUserMutation, variables);
};
