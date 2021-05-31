import { i18nMark } from '@lingui/react';

import reactUdemyCourse from '~/assets/images/sertificates/react-udemy-course.jpg';
import javaScriptUdemyCourse from '~/assets/images/sertificates/java-script-udemy-course.jpg';
import typeScriptUdemyCourse from '~/assets/images/sertificates/type-script-udemy-course.jpg';
import spokenIntermediateOneCourseCertificate from '~/assets/images/sertificates/spoken-intermediate-one-course-lagunovsky.png';
import businessEnglishThreeCourseCertificate from '~/assets/images/sertificates/business-english-three-course-lagunovsky.png';
import avaScriptAlgorithmsTheFundamentalsCourseCertificate from '~/assets/images/sertificates/certificate-of-completion-for-javascript-algorithms-the-fundamentals-course-lagunovsky.png';
import javaScriptDataStructuresTheFundamentalsCourseCertificate from '~/assets/images/sertificates/certificate-of-completion-for-javascript-data-structures-the-fundamentals-course-lagunovsky.png';
import gitAndGitHubThePracticalGuideCourseCertificate from '~/assets/images/sertificates/git-and-github-the-practical-guide-course-lagunovsky.png';

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
  {
    src: avaScriptAlgorithmsTheFundamentalsCourseCertificate,
    alt: i18nMark('java script algorithms - the fundamentals" certificate'),
    title: i18nMark('"JavaScript Algorithms - The Fundamentals"'),
    description: i18nMark(
      '"JavaScript Algorithms - The Fundamentals" certificate, "ACADEMIND"'
    ),
  },
  {
    src: javaScriptDataStructuresTheFundamentalsCourseCertificate,
    alt: i18nMark(
      'java script data structures - the fundamentals" certificate'
    ),
    title: i18nMark('"JavaScript Data Structures - The Fundamentals"'),
    description: i18nMark(
      '"JavaScript Data Structures - The Fundamentals" certificate, "ACADEMIND"'
    ),
  },
  {
    src: gitAndGitHubThePracticalGuideCourseCertificate,
    alt: i18nMark('git and github - the practical guide" certificate'),
    title: i18nMark('"Git & GitHub - The Practical Guide"'),
    description: i18nMark(
      '"Git & GitHub - The Practical Guide" certificate, "ACADEMIND"'
    ),
  },
];
