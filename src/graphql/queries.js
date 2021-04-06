/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWastebin = /* GraphQL */ `
  query GetWastebin($id: ID!) {
    getWastebin(id: $id) {
      id
      name
      capacity
      fillPercentage
      createdAt
      updatedAt
    }
  }
`;
export const listWastebins = /* GraphQL */ `
  query ListWastebins(
    $filter: ModelWastebinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWastebins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        capacity
        fillPercentage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
