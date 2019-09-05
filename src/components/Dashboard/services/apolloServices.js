import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';

export default class ApolloService {
  constructor(url) {
    this.client = new ApolloClient({
      uri: url,
      cache: new InMemoryCache({
        addTypename: false
      })
    });
  }

  /**
   * Query to GraphQL server
   *
   * @param {string} queryStr Graphql query
   * @return { Promise<any> } Promise that resolves the data of GraphQL service
   *
   * @example
   * const queryStr = `{
   *      devicesAlerts(first:2) {
   *          alert_id
   *          datetime
   *          org_id
   *      }
   *  }`;
   */
  query(queryStr) {
    return this.client.query({
      query: gql`${queryStr}`
    }).then(
      result => result.data
    );
  }
}
