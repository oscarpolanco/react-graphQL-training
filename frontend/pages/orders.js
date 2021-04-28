import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import ErrorMessage from '../components/ErrorMessage';

const ALL_ORDERS_QUERY = gql`
  query ALL_ORDERS_QUERY {
    orders: allOrders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function OrdersPage() {
  const { data, loading, error } = useQuery(ALL_ORDERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  const { orders } = data;

  console.log(orders);

  return (
    <div>
      <p>{JSON.stringify(orders)}</p>
    </div>
  );
}
