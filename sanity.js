import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'znrpgrsm',
  dataset: 'production',
  useCdn: true,
  headers: {
    'X-Custom-Header': 'custom-value',
  },
  apiVersion: '2025-06-13',
});

const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);

export default client;
