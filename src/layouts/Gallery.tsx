import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { galleryFetch } from '../store/gallery/action';
import { selectError, selectLoading } from '../store/gallery/selector';
import Loader from '../components/Loader';
import { IRootReducer } from '../store';

function Gallery() {
  const loading = useSelector(selectLoading);
  const error = useSelector<IRootReducer, string | null>(selectError);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(galleryFetch());
  }, [dispatch]);

  React.useEffect(() => {
    error?.length && alert(error);
  }, [error]);

  return (
    <div>
      <h1>Gallery page</h1>
      <button onClick={() => dispatch(galleryFetch())}>Fetch</button>
      {loading && <Loader />}
      {loading && <Loader />}
    </div>

  );
}

export default Gallery;