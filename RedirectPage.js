import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOriginalURL } from '../utils/helpers';

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const url = getOriginalURL(shortcode);
    if (url) window.location.href = url;
    else alert('Invalid short URL');
  }, [shortcode]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;