export const getUserQuery = `
    query GetUser($email: String!) {
        user(by: {email: $email}) {
            name
            email
            avatarUrl
            githubUrl
            linkedInUrl
          }
    }
`;

export const createUserMutation = `
mutation CreateUser($input: CreateUserInput!) {
    userCreate(input: $input) {
      user {
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
        id
      }
    }
  }
`;
