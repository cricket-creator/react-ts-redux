import * as React from 'react';

function List<T>({ list, onRender }: IListProps<T>) {
  return (
    <>
      {list.map(onRender)}
    </>
  );
}

export default List;

interface IListProps<T> {
  list: any[];
  onRender: (item: T) => React.ReactNode;
}