import {
  BACKEND_URL,
  FIREBASE_API_KEY,
  FIREBASE_DB_REF,
  SITE_URL,
} from '~/constants/constants';

export const AUTH_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
export const NEW_PROJECT_URL = `${BACKEND_URL}/${FIREBASE_DB_REF}.json`;
export const EDIT_PROJECT_URL = (uniqueId: string) =>
  `${BACKEND_URL}/${FIREBASE_DB_REF}/${uniqueId}.json`;

export const PROJECT_PREVIEW_URL = (category: string, imageSource: string) =>
  `${SITE_URL}/assets/templates/html/images/portfolio/${category}/${imageSource}`;

export const PROJECT_THUMBNAIL_URL = (
  category: string,
  thumbnailSource: string
) =>
  `${SITE_URL}/assets/templates/html/images/portfolio/${category}-thumbnail/${thumbnailSource}`;
