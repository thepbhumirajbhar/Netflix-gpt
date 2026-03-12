import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constants';



const client = new OpenAI({
  apiKey: process.env[OPEN_AI_KEY], // This is the default and can be omitted
});


export default client;