import { useState, useEffect } from "react";
import documentConfig from '../../../config/DocumentConfig.json';
import { getBookmarks } from '../utils/Document';


type InitialisationProps = unknown

const Document: React.FC<InitialisationProps> = () => {

    const [data, setData] = useState(0)

    const bookmarkMapper = documentConfig.bookmarkMapper;

    useEffect(() => {
        getBookmarks(bookmarkMapper).then(result => {
            setData(result.length);
        });
    });

  return (
      <div>Found {data} bookmarks</div>
  );
};

export default Document;
