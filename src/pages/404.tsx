import Link from 'next/link';
import Empty from '../components/Empty';

import { Container } from '../styles/pages/404';

export default function NotFound() {
  return (
    <Container>
      <Empty />
      <span role="img" aria-label="emoji of doubt">
        Page does not exist
      </span>
      <Link href="/events">
        <span role="img" aria-label="emoji of happiness">
          Click here to return home.
        </span>
      </Link>
    </Container>
  );
}
