import React, { useState } from 'react';
import { shortenURL } from '../utils/helpers';

const URLShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    const short = shortenURL(originalUrl);
    setShortUrl(short);
  };

  return (
    <div>
      <input value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} placeholder="Enter URL" />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && <p>Short URL: {shortUrl}</p>}
    </div>
  );
};

export default URLShortener;