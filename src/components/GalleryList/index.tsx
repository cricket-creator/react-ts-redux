import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategories, selectError, selectLoading } from '../../store/gallery/selector';
import { IRootReducer } from '../../store';
import { CategoryType, IPhoto } from '../../interfaces';
import { galleryFetch } from '../../store/gallery/action';
import Loader from '../Loader';
import List from '../List';
import styles from './gallery-list.module.scss';

function GalleryList() {
  const categories = useSelector<IRootReducer, CategoryType[]>(selectCategories);
  const loading = useSelector<IRootReducer, boolean>(selectLoading);
  const error = useSelector<IRootReducer, string | null>(selectError);
  const dispatch = useDispatch();

  const handleRender = React.useCallback((item: [number, IPhoto[]]): React.ReactNode => {
    const [categoryId, categoryPics] = item;
    return (
      <article key={categoryId} className={styles.category}>
        <Link to={`/category/${categoryId}`}>
          <img src={categoryPics[0].url} alt="category" className="img-fluid" />
        </Link>
      </article>
    );
  }, []);

  const handleFetch = () => dispatch(galleryFetch());

  React.useEffect(() => {
    !categories.length && dispatch(galleryFetch());
  }, [categories, dispatch]);

  React.useEffect(() => {
    error?.length && alert(error);
  }, [error]);

  return (
    <div>
      <h1>Gallery</h1>
      <button type="button" onClick={handleFetch}>Fetch</button>
      <section className={styles.categories}>
        {loading ?
          <Loader /> :
          <List list={categories} onRender={handleRender} />
        }
      </section>
    </div>
  );
}

export default GalleryList;