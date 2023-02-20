import Link from 'next/link';
import { FiChevronDown, FiChevronLeft, FiSearch } from 'react-icons/fi';
import { Container } from '../styles/components/Header';
import useWindowDimensions from '../hooks/useWindowDimensions';

import Input from './Input';
import Menu from './Menu';
import useGeolocation from '../hooks/useGeolocation';

interface IHeaderProps {
  title?: string | string[] | undefined;
  isFixed?: boolean;
}

export default function Header({ title, isFixed }: IHeaderProps) {
  const { width } = useWindowDimensions();
  const { address } = useGeolocation();

  return (
    <Container hasTitle={!!title} isFixed={isFixed}>
      {width >= 960 ? (
        <div className="desktop">
          <Link href="/events">
            <span>
              <svg
                className="logo"
                height="43"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 430.63 119.44"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M26.79,117.05l-3.14-71L3,48.22l-3-27,74.84-3.7L76.69,44,56,44.52l-.92,74.32Z" />
                    <path d="M113.05,119.44,86.25,112l-4.8-74.68,14.6-16.61,46.75-3.47L155,39.62l-6.65,74.8Zm13.86-23.9,3.69-44.09L118,45,107,51.21l1.48,46.36,10,5Z" />
                    <path d="M161.23,118.25l-1.1-98.71,24.2-2.39,1.85,41.23,12.57-3.59,8.87-37.28,24.94,1.19L222.4,64.59l-8,2,18.11,49.24-24.94,1.55L192.46,71.28l-5,1.32,1.85,43.26Z" />
                    <path d="M253.32,119.08l-16.26-9,2-90.46L301,16.79l2.4,28.08-38.25,3.71L265,62.2l34.55-1.91L297.3,78.21l-32.33,1L264.41,96,301,92.32l3,22.1Z" />
                    <path d="M356,117.05v-4.3l-32.34,3.94L310.3,98.17l2.41-33.34L351,58.74,350.4,45l-12.75.84.56,8.6L312.71,56l-4.25-33.34,39.54-6,29.75,6,2.4,92.85Zm-3.14-43.73-14.05,2-.55,12.19,17,2.62Z" />
                    <path
                      d="M420.1,85.7l-23.19-1.4-9.63-70L395.41.84,422.65,0l8,17.14Zm-24.39,7.87,25.89,1.68-1.81,21.36-22.27.56-4.22-11.8Z"
                      style={{ fill: '#c10f1a' }}
                    />
                  </g>
                </g>
              </svg>
            </span>
          </Link>
          <section className="input-section">
            <Input icon={FiSearch} placeholder="Search for an event" />
          </section>
          <Menu />
        </div>
      ) : (
        <div className="mobile">
          <main>
            <svg
              height="33"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 430.63 119.44"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M26.79,117.05l-3.14-71L3,48.22l-3-27,74.84-3.7L76.69,44,56,44.52l-.92,74.32Z" />
                  <path d="M113.05,119.44,86.25,112l-4.8-74.68,14.6-16.61,46.75-3.47L155,39.62l-6.65,74.8Zm13.86-23.9,3.69-44.09L118,45,107,51.21l1.48,46.36,10,5Z" />
                  <path d="M161.23,118.25l-1.1-98.71,24.2-2.39,1.85,41.23,12.57-3.59,8.87-37.28,24.94,1.19L222.4,64.59l-8,2,18.11,49.24-24.94,1.55L192.46,71.28l-5,1.32,1.85,43.26Z" />
                  <path d="M253.32,119.08l-16.26-9,2-90.46L301,16.79l2.4,28.08-38.25,3.71L265,62.2l34.55-1.91L297.3,78.21l-32.33,1L264.41,96,301,92.32l3,22.1Z" />
                  <path d="M356,117.05v-4.3l-32.34,3.94L310.3,98.17l2.41-33.34L351,58.74,350.4,45l-12.75.84.56,8.6L312.71,56l-4.25-33.34,39.54-6,29.75,6,2.4,92.85Zm-3.14-43.73-14.05,2-.55,12.19,17,2.62Z" />
                  <path
                    d="M420.1,85.7l-23.19-1.4-9.63-70L395.41.84,422.65,0l8,17.14Zm-24.39,7.87,25.89,1.68-1.81,21.36-22.27.56-4.22-11.8Z"
                    style={{ fill: '#c10f1a' }}
                  />
                </g>
              </g>
            </svg>
          </main>
        </div>
      )}
    </Container>
  );
}
