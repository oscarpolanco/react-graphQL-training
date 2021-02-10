import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/products">product</Link>
      <Link href="/sell">sell</Link>
      <Link href="/order">orders</Link>
      <Link href="/account">account</Link>
    </nav>
  );
}
