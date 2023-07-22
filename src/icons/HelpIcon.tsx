import React from 'react';

interface HelpIconProps {
  className?: string;
}

const HelpIcon: React.FC<HelpIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1209 7.84638 17.2635 5.78216 15.7407 4.25932C14.2178 2.73648 12.1536 1.87913 10 1.875ZM10 15C9.81458 15 9.63333 14.945 9.47916 14.842C9.32499 14.739 9.20482 14.5926 9.13387 14.4213C9.06291 14.25 9.04434 14.0615 9.08052 13.8796C9.11669 13.6977 9.20598 13.5307 9.33709 13.3996C9.4682 13.2685 9.63525 13.1792 9.81711 13.143C9.99896 13.1068 10.1875 13.1254 10.3588 13.1964C10.5301 13.2673 10.6765 13.3875 10.7795 13.5417C10.8825 13.6958 10.9375 13.8771 10.9375 14.0625C10.9375 14.3111 10.8387 14.5496 10.6629 14.7254C10.4871 14.9012 10.2486 15 10 15ZM10.625 11.1797V11.25C10.625 11.4158 10.5592 11.5747 10.4419 11.6919C10.3247 11.8092 10.1658 11.875 10 11.875C9.83424 11.875 9.67527 11.8092 9.55806 11.6919C9.44085 11.5747 9.375 11.4158 9.375 11.25V10.625C9.375 10.4592 9.44085 10.3003 9.55806 10.1831C9.67527 10.0658 9.83424 10 10 10C10.309 10 10.6111 9.90836 10.8681 9.73667C11.125 9.56498 11.3253 9.32095 11.4436 9.03544C11.5618 8.74993 11.5928 8.43577 11.5325 8.13267C11.4722 7.82958 11.3234 7.55117 11.1049 7.33265C10.8863 7.11413 10.6079 6.96531 10.3048 6.90502C10.0017 6.84473 9.68757 6.87568 9.40206 6.99394C9.11655 7.1122 8.87252 7.31247 8.70083 7.56942C8.52914 7.82637 8.4375 8.12847 8.4375 8.4375C8.4375 8.60326 8.37166 8.76223 8.25445 8.87944C8.13724 8.99665 7.97826 9.0625 7.8125 9.0625C7.64674 9.0625 7.48777 8.99665 7.37056 8.87944C7.25335 8.76223 7.1875 8.60326 7.1875 8.4375C7.18751 7.90805 7.33695 7.38936 7.61865 6.94107C7.90036 6.49279 8.30287 6.13312 8.77991 5.90344C9.25694 5.67376 9.78912 5.58339 10.3152 5.64273C10.8413 5.70207 11.34 5.90871 11.7539 6.23888C12.1678 6.56905 12.4801 7.00934 12.6549 7.50911C12.8296 8.00888 12.8598 8.54784 12.7418 9.06398C12.6239 9.58013 12.3627 10.0525 11.9882 10.4268C11.6137 10.8011 11.1412 11.062 10.625 11.1797Z"
        fill="#474747"
      />
    </svg>
  );
};

export default HelpIcon;
