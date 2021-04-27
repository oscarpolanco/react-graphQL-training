import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      id
      label
      total
      items {
        id
        name
        description
        photo {
          id
          image {
            publicUrlTransformed
          }
          altText
        }
        price
        quantity
      }
      user {
        id
      }
      charge
    }
  }
`;

export default function SingleOrder({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const order = data.Order;

  return (
    <div>
      <p>{id}</p>
      <div>{JSON.stringify(order)}</div>
    </div>
  );
}
