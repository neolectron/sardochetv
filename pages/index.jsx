export { default } from './addon.jsx';

import { writeFile } from 'fs/promises';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getLive } from '../queries/livealert.js';

export async function getStaticProps() {
  const client = new ApolloClient({
    uri:
      'https://api-eu-central-1.graphcms.com/v2/cko0hcn1zwhn101xt5z2ehfwp/master',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: getLive('sardoche'),
  });

  await writeFile('./public/live.json', JSON.stringify(data), {
    encoding: 'utf-8',
  });

  return {
    props: {},
  };
}
