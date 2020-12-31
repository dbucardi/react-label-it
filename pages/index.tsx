import Head from 'next/head';
import LabelIt, { Retangle } from '../src/LabelIt';

const markings = [
  { id: 1, x: 150, y: 150, width: 50, height: 50 },
  { id: 2, x: 300, y: 150, width: 50, height: 50, label: 'Olho do gato' },
  { id: 3, x: 380, y: 150, width: 50, height: 50, label: 'Rabo' },
  { id: 4, x: 440, y: 150, width: 50, height: 50 },
  { id: 5, x: 540, y: 150, width: 50, height: 50 },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to React Label It</h1>
        <LabelIt src={'https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg'}>
          {markings.map(({ id, ...markingProps }) => (
            <Retangle key={id} {...markingProps} />
          ))}
        </LabelIt>
      </main>
    </div>
  );
}
