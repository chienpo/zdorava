import reactUdemyCourse from '../../assets/images/sertificates/react-udemy-course.jpg';
import typescriptUdemyCourse from '../../assets/images/sertificates/type-script-udemy-course.jpg';
import spokenIntermediateOneCourseCertificate from '../../assets/images/sertificates/spoken-intermediate-one-course-lagunovsky.png';
import businessEnglishThreeCourseCertificate from '../../assets/images/sertificates/business-english-three-course-lagunovsky.png';

interface Certificate {
  src: string;
  alt: string;
  itemName: string;
  itemDescription: string;
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    src: reactUdemyCourse,
    alt: 'udemy react course certificate',
    itemName: 'asd',
    itemDescription: 'asd',
  },
  {
    src: typescriptUdemyCourse,
    alt: 'udemy type script course certificate',
    itemName: 'asd',
    itemDescription: 'asd',
  },
  {
    src: spokenIntermediateOneCourseCertificate,
    alt: 'spoken intermediate one course certificate lagunovsky',
    itemName: 'asd',
    itemDescription: 'asd',
  },
  {
    src: businessEnglishThreeCourseCertificate,
    alt: 'business english three course certificate lagunovsky',
    itemName: 'asd',
    itemDescription: 'asd',
  },
];
