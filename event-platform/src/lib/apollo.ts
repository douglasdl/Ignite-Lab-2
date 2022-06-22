import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/xxxxxxxxxxxxxxxxx76axgqsk/master',
    cache: new InMemoryCache()
})