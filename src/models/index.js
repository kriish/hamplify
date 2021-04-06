// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Wastebin, Note } = initSchema(schema);

export {
  Wastebin,
  Note
};