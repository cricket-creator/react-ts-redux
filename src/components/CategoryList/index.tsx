import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategories } from '../../store/gallery/selector';
import { CategoryType, IPhoto } from '../../interfaces';
import List from '../List';

function CategoryList() {
  const categories = useSelector(selectCategories);
  const { id } = useParams();
  const navigate = useNavigate();

  const photos = React.useMemo(() => {
    const category = categories.filter((item: CategoryType) => item[0] === Number(id));
    return category[0][1] || [];
  }, [categories, id]);

  const handleRender = React.useCallback((item: IPhoto): React.ReactNode => {
    return (
      <figure key={item.id}>
        <img src={item.url} alt={`category-${id}`} />
        <figcaption>{item.title}</figcaption>
      </figure>
    );
  }, [id]);

  return (
    <div>
      <h2>Category {id}</h2>
      <button onClick={() => navigate(-1)}>Go back</button>
      <List list={photos} onRender={handleRender} />
    </div>
  );
}

export default CategoryList;