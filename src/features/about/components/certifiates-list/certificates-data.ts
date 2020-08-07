import { i18nMark } from '@lingui/react';

import reactUdemyCourse from 'assets/images/sertificates/react-udemy-course.jpg';
import javaScriptUdemyCourse from 'assets/images/sertificates/java-script-udemy-course.jpg';
import typeScriptUdemyCourse from 'assets/images/sertificates/type-script-udemy-course.jpg';
import spokenIntermediateOneCourseCertificate from 'assets/images/sertificates/spoken-intermediate-one-course-lagunovsky.png';
import businessEnglishThreeCourseCertificate from 'assets/images/sertificates/business-english-three-course-lagunovsky.png';

interface Certificate {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    src: reactUdemyCourse,
    alt: i18nMark('react course certificate'),
    title: i18nMark(
      '"React - The Complete Guide (incl Hooks, React Router, Redux)"'
    ),
    description: i18nMark(
      '"React - The Complete Guide (incl Hooks, React Router, Redux)" certificate, "UDEMY"'
    ),
  },
  {
    src: javaScriptUdemyCourse,
    alt: i18nMark('java-script course certificate'),
    title: i18nMark(
      '"JavaScript - The Complete Guide 2020 (Beginner + Advanced)"'
    ),
    description: i18nMark(
      '"JavaScript - The Complete Guide 2020 certificate, "UDEMY"'
    ),
  },
  {
    src: typeScriptUdemyCourse,
    alt: i18nMark('type-script course certificate'),
    title: i18nMark('"Understanding TypeScript - 2020 Edition"'),
    description: i18nMark(
      '"Understanding TypeScript - 2020 Edition" certificate, "UDEMY"'
    ),
  },
  {
    src: spokenIntermediateOneCourseCertificate,
    alt: i18nMark('spoken intermediate one english course certificate'),
    title: i18nMark('"Spoken intermediate english course"'),
    description: i18nMark(
      '"Spoken intermediate one course" certificate, Itransition'
    ),
  },
  {
    src: businessEnglishThreeCourseCertificate,
    alt: i18nMark('business english three english course certificate'),
    title: i18nMark('"Business english three english course"'),
    description: i18nMark(
      '"Business english three course" certificate, Itransition'
    ),
  },
];
