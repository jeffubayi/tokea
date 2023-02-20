import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Home from './events';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('events');
  }, [router]);

  return <Home />;
}
