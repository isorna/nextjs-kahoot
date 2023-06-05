export function generatePageMetadata (pageTitle) {
  return async function generateMetadata(
    { params, searchParams },
    parent,
  ) {
    const parentTitle = (await parent).title.absolute
    return {
      title: `${pageTitle} - ${parentTitle}`
    };
  }
}