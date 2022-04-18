import * as React from 'react';

function List<T>({ list, onRender }: IListProps<T>) {
  return (
    <div>
      {list.map(onRender)}
    </div>
  );
}

export default List;

interface IListProps<T> {
  list: T[];
  onRender: (item: T) => React.ReactNode;
}