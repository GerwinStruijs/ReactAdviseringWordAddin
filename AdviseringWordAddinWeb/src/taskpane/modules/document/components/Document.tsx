import * as React from "react";
import documentConfig from '../../../config/DocumentConfig.json';
import { getBookmarks } from '../utils/Document';


type InitialisationProps = unknown

const Document: React.FC<InitialisationProps> = () => {

    //useEffect

    const bookmarkMapper = documentConfig.bookmarkMapper;

    let bookmarkLengt: number = 0;

    getBookmarks(bookmarkMapper).then(bookmarks => {
        bookmarkLengt = bookmarks.length;
    });

  return (
      <div>Found {bookmarkLengt} bookmarks</div>
  );
};

export default Document;
