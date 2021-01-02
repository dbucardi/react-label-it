import React, { useState } from 'react';
import Head from 'next/head';
import LabelIt, { Retangle } from '../src/LabelIt';
import { RectArea } from '../src/LabelIt/shared/interfaces/shapes';

const initialLabels = [
  { id: 1, xMin: 150, yMin: 150, xMax: 200, yMax: 200 },
  { id: 2, xMin: 300, yMin: 150, xMax: 350, yMax: 200, label: 'Olho do gato' },
  { id: 3, xMin: 380, yMin: 150, xMax: 430, yMax: 200, label: 'Rabo' },
  { id: 4, xMin: 440, yMin: 150, xMax: 490, yMax: 200 },
  { id: 5, xMin: 540, yMin: 150, xMax: 590, yMax: 200 },
];

export default function Home() {
  const [labels, setLabels] = useState<RectArea[]>(initialLabels);

  const handleAdd = (newLabel: RectArea) => {
    setLabels((oldLabels) => {
      const newLabels = [...oldLabels];
      newLabels.push(newLabel);
      return newLabels;
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to React Label It</h1>
        <LabelIt src={'https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg'} onAdd={handleAdd}>
          {labels.map(({ id, ...markingProps }, index) => (
            <Retangle key={`${id}_${index}`} {...markingProps} />
          ))}
        </LabelIt>
      </main>
    </div>
  );
}
