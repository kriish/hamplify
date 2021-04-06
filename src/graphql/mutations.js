/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWastebin = /* GraphQL */ `
  mutation CreateWastebin(
    $input: CreateWastebinInput!
    $condition: ModelWastebinConditionInput
  ) {
    createWastebin(input: $input, condition: $condition) {
      id
      name
      capacity
      fillPercentage
      createdAt
      updatedAt
    }
  }
`;
export const updateWastebin = /* GraphQL */ `
  mutation UpdateWastebin(
    $input: UpdateWastebinInput!
    $condition: ModelWastebinConditionInput
  ) {
    updateWastebin(input: $input, condition: $condition) {
      id
      name
      capacity
      fillPercentage
      createdAt
      updatedAt
    }
  }
`;
export const deleteWastebin = /* GraphQL */ `
  mutation DeleteWastebin(
    $input: DeleteWastebinInput!
    $condition: ModelWastebinConditionInput
  ) {
    deleteWastebin(input: $input, condition: $condition) {
      id
      name
      capacity
      fillPercentage
      createdAt
      updatedAt
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
