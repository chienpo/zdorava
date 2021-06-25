import * as env from '~/env';

export const AUTH_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${env.FIREBASE_API_KEY}`;
export const PROJECTS_URL = `${env.BACKEND_URL}/${env.FIREBASE_DB_REF}.json`;
export const PROJECT_EDIT_URL = (uniqueId: string) =>
  `${env.BACKEND_URL}/${env.FIREBASE_DB_REF}/${uniqueId}.json`;
export const PROJECT_PREVIEW_URL = (category: string, imageSource: string) =>
  `${env.SITE_URL}${env.PORTFOLIO_PATH}${category}/${imageSource}`;
export const PROJECT_THUMBNAIL_URL = (
  category: string,
  thumbnailSource: string
) =>
  `${env.SITE_URL}${env.PORTFOLIO_PATH}${category}-thumbnail/${thumbnailSource}`;
