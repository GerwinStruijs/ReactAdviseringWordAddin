import * as React from "react";
import { useState } from "react";
import { useStyles } from "../../styles/Body.Styles"
import { Button, Field, Textarea } from "@fluentui/react-components";

import { getBookmarks } from '../../utils/Document';
type InitialisationProps = unknown

const Document: React.FC<InitialisationProps> = () => {

    const bookmarks = getBookmarks();

  return (
    <div></div>
  );
};

export default Document;
