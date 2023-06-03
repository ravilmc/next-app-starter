import Document from 'next/document';
import { withDocumentEmotionCache } from 'styles';

//You can also pass your custom document if you have one.
withDocumentEmotionCache(Document);

export default Document;
