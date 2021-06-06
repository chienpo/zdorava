import { t } from '@lingui/macro';

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
    alt: t`react course certificate`,
    title: t`
      "React - The Complete Guide (incl Hooks, React Router, Redux)"
    `,
    description: t`
      "React - The Complete Guide (incl Hooks, React Router, Redux)" certificate, "UDEMY"
    `,
  },
  {
    src: javaScriptUdemyCourse,
    alt: t`java-script course certificate`,
    title: t`
      "JavaScript - The Complete Guide 2020 (Beginner + Advanced)"
    `,
    description: t`
      "JavaScript - The Complete Guide 2020 certificate, "UDEMY"
    `,
  },
  {
    src: typeScriptUdemyCourse,
    alt: t`type-script course certificate`,
    title: t`"Understanding TypeScript - 2020 Edition"`,
    description: t`
      "Understanding TypeScript - 2020 Edition" certificate, "UDEMY"
    `,
  },
  {
    src: spokenIntermediateOneCourseCertificate,
    alt: t`spoken intermediate one english course certificate`,
    title: t`"Spoken intermediate english course"`,
    description: t`
      "Spoken intermediate one course" certificate, Itransition
    `,
  },
  {
    src: businessEnglishThreeCourseCertificate,
    alt: t`business english three english course certificate`,
    title: t`"Business english three english course"`,
    description: t`
      "Business english three course" certificate, Itransition
    `,
  },
  {
    src: avaScriptAlgorithmsTheFundamentalsCourseCertificate,
    alt: t`
      java script algorithms - the fundamentals" certificate
    `,
    title: t`"JavaScript Algorithms - The Fundamentals"`,
    description: t`
      "JavaScript Algorithms - The Fundamentals" certificate, "ACADEMIND"
    `,
  },
  {
    src: javaScriptDataStructuresTheFundamentalsCourseCertificate,
    alt: t`
      java script data structures - the fundamentals" certificate
    `,
    title: t`"JavaScript Data Structures - The Fundamentals"`,
    description: t`
      "JavaScript Data Structures - The Fundamentals" certificate, "ACADEMIND"
    `,
  },
  {
    src: gitAndGitHubThePracticalGuideCourseCertificate,
    alt: t`git and github - the practical guide" certificate`,
    title: t`"Git & GitHub - The Practical Guide"`,
    description: t`
      "Git & GitHub - The Practical Guide" certificate, "ACADEMIND"
    `,
  },
];
