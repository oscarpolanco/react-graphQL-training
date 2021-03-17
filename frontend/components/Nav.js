import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();

  return (
    <NavStyles>
      <Link href="/products">product</Link>
      {user && (
        <>
          <Link href="/sell">sell</Link>
          <Link href="/order">orders</Link>
          <Link href="/account">account</Link>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sing In</Link>
        </>
      )}
    </NavStyles>
  );
}
