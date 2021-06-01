export const AUTH_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
export const PROJECTS_URL = `${process.env.BACKEND_URL}/${process.env.FIREBASE_DB_REF}.json`;
export const PROJECT_EDIT_URL = (uniqueId: string) =>
  `${process.env.BACKEND_URL}/${process.env.FIREBASE_DB_REF}/${uniqueId}.json`;
export const PROJECT_PREVIEW_URL = (category: string, imageSource: string) =>
  `${process.env.SITE_URL}${process.env.PORTFOLIO_PATH}${category}/${imageSource}`;
export const PROJECT_THUMBNAIL_URL = (
  category: string,
  thumbnailSource: string
) =>
  `${process.env.SITE_URL}${process.env.PORTFOLIO_PATH}${category}-thumbnail/${thumbnailSource}`;
