import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../../../styles/components/pages/Home/Categories';
import CategoryPlaceHolder from './placeholders/CategoryPlaceHolder';
import { useAxios } from '../../../hooks/useAxios';

interface ICategory {
  id: number;
  title: string;
  image_url: string;
}

export default function Categories(): JSX.Element {
  const { data } = useAxios<ICategory[]>('categories');

  if (!data) {
    return (
      <Container className="scroll-box">
        <div role="list" className="scroll-box__wrapper">
          <CategoryPlaceHolder repeatCount={13} />
        </div>
      </Container>
    );
  }

  return (
    <Container className="scroll-box">
      <h4 style={{paddingLeft:"20px"}}>Event categories</h4>
      <div role="list" className="scroll-box__wrapper">
        {data?.map(category => (
          <main role="listitem" key={category.title}>
            <figure>
              <Link href={`categories/${category.title}`}>
                <img style={{borderRadius:"50px"}} src="https://hapakenya.com/wp-content/uploads/2021/11/concert.jpg" alt="logo" />
              </Link>
            </figure>
            <span>Concert</span>
          </main>
        ))}
      </div>
    </Container>
  );
}
