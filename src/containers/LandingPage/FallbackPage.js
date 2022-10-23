import React from 'react';

import PageBuilder from '../PageBuilder/PageBuilder';

// Create fallback content (array of sections) in page asset format:
export const fallbackSections = {
  sections: [
    {
      sectionType: 'features',
      sectionId: 'maintenance-mode',
      title: {
        type: 'heading1',
        content: 'HTTP 500 Internal Server Error',
      },
      ingress: {
        type: 'paragraph',
        content:
          'Something went wrong and the browser is unable to show the page. Try refreshing the page or try again later.',
      },
    },
  ],
};

// This is the fallback page, in case there's no Privacy Policy asset defined in Console.
const FallbackPage = props => {
  const { title, description, schema, contentType } = props;
  return (
    <PageBuilder
      pageAssetsData={fallbackSections}
      title={title}
      description={description}
      schema={schema}
      contentType={contentType}
    />
  );
};

export default FallbackPage;
