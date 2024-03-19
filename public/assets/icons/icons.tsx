import Image from 'next/image';
import React from 'react';

interface Icon {
    width?: string;
    height?: string;
    className?: string;
}

export const Phone: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.25 2.75C1.25 1.92157 1.92157 1.25 2.75 1.25H5.20943C5.53225 1.25 5.81886 1.45657 5.92094 1.76283L7.0443 5.13291C7.16233 5.48699 7.00203 5.87398 6.6682 6.0409L4.97525 6.88737C5.80194 8.72091 7.27909 10.1981 9.11263 11.0247L9.9591 9.3318C10.126 8.99796 10.513 8.83767 10.8671 8.9557L14.2372 10.0791C14.5434 10.1811 14.75 10.4677 14.75 10.7906V13.25C14.75 14.0784 14.0784 14.75 13.25 14.75H12.5C6.2868 14.75 1.25 9.7132 1.25 3.5V2.75Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const Mail: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1.25 3L7.16795 6.9453C7.6718 7.2812 8.3282 7.2812 8.83205 6.9453L14.75 3M2.75 11.25H13.25C14.0784 11.25 14.75 10.5784 14.75 9.75V2.25C14.75 1.42157 14.0784 0.75 13.25 0.75H2.75C1.92157 0.75 1.25 1.42157 1.25 2.25V9.75C1.25 10.5784 1.92157 11.25 2.75 11.25Z" stroke="white"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />
    </svg>
);

export const Location: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
    </svg>
);

export const Twitter: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M11.6009 1.66132C11.1943 1.84204 10.7651 1.95499 10.3133 2.02276C10.7651 1.75168 11.1265 1.32247 11.2847 0.802904C10.8555 1.05139 10.3811 1.23211 9.86152 1.34506C9.4549 0.915853 8.86756 0.644775 8.23505 0.644775C7.0152 0.644775 6.02124 1.63873 6.02124 2.85858C6.02124 3.0393 6.04383 3.19743 6.08901 3.35556C4.25924 3.2652 2.61018 2.38419 1.50328 1.0288C1.32256 1.36765 1.20961 1.72909 1.20961 2.1357C1.20961 2.90376 1.59364 3.58145 2.20356 3.98807C1.84212 3.96548 1.50328 3.87512 1.18702 3.71699V3.73958C1.18702 4.82389 1.95507 5.72749 2.97162 5.9308C2.7909 5.97598 2.58759 5.99856 2.38428 5.99856C2.24874 5.99856 2.09061 5.97598 1.95507 5.95339C2.24874 6.83439 3.06198 7.48949 4.03334 7.48949C3.26528 8.07683 2.31651 8.43827 1.27738 8.43827C1.09666 8.43827 0.915941 8.43827 0.757812 8.41568C1.75177 9.04819 2.90385 9.40963 4.16888 9.40963C8.25764 9.40963 10.494 6.02115 10.494 3.08448C10.494 2.99412 10.494 2.88117 10.494 2.79081C10.9232 2.49714 11.3073 2.11311 11.6009 1.66132Z" fill="white" />

    </svg>
);

export const Facebook: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M2.50105 12.7065V7.31742H0.6875V5.21717H2.50105V3.6683C2.50105 1.87084 3.59888 0.89209 5.20233 0.89209C5.97041 0.89209 6.63052 0.949274 6.8229 0.974834V2.85328L5.71082 2.85379C4.83877 2.85379 4.66992 3.26817 4.66992 3.87625V5.21717H6.74967L6.47888 7.31742H4.66992V12.7065H2.50105Z" fill="white"/>
    </svg>
);

export const Instagram: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"
        viewBox="0,0,256,256"
    >
        <g fill="#ffffff" fillRule="nonzero"
            stroke="none" strokeWidth="1"
            strokeLinecap="butt" strokeLinejoin="miter"
            strokeMiterlimit="10" strokeDasharray=""
            strokeDashoffset="0" fontFamily="none"
            fontWeight="none" fontSize="none"
            textAnchor="none">
            <g transform="scale(8,8)">
                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
            </g>
        </g>
    </svg>
);

export const Github: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M6.70603 0.0161133C3.22139 0.0161133 0.417969 2.81954 0.417969 6.30417C0.417969 9.08139 2.22579 11.4394 4.71481 12.2778C5.02921 12.3302 5.13401 12.1468 5.13401 11.9634C5.13401 11.8062 5.13401 11.4132 5.13401 10.8892C3.3786 11.2822 3.01179 10.0508 3.01179 10.0508C2.72359 9.3172 2.30439 9.13379 2.30439 9.13379C1.72798 8.74079 2.35679 8.74079 2.35679 8.74079C2.98559 8.79319 3.3262 9.3958 3.3262 9.3958C3.8764 10.3652 4.79341 10.077 5.16021 9.9198C5.21261 9.5006 5.36981 9.2386 5.55322 9.08139C4.1646 8.92419 2.69739 8.37399 2.69739 5.96357C2.69739 5.28236 2.93319 4.70595 3.3524 4.28675C3.29999 4.12955 3.06419 3.50074 3.4048 2.60994C3.4048 2.60994 3.9288 2.45273 5.13401 3.26494C5.63182 3.13394 6.18202 3.05534 6.70603 3.05534C7.23003 3.05534 7.78024 3.13394 8.27804 3.26494C9.48325 2.45273 10.0073 2.60994 10.0073 2.60994C10.3479 3.47454 10.1383 4.10335 10.0597 4.28675C10.4527 4.73215 10.7147 5.28236 10.7147 5.96357C10.7147 8.37399 9.24745 8.89799 7.83264 9.05519C8.06844 9.2386 8.25184 9.6316 8.25184 10.208C8.25184 11.0464 8.25184 11.7276 8.25184 11.9372C8.25184 12.0944 8.35664 12.304 8.69724 12.2516C11.1863 11.4394 12.9941 9.08139 12.9941 6.30417C12.9941 2.81954 10.1907 0.0161133 6.70603 0.0161133Z" fill="white"/>
    </svg>
);

export const MainDishes: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32" version="1.1" xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#474747" stroke="#474747"
    >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <style type="text/css">  </style>
                <g id="Musik_icon"> <g> <path d="M28.5,22h-0.26c0.48-0.72,0.76-1.58,0.76-2.5c0-1.15-0.45-2.24-1.22-3.07C27.92,15.97,28,15.5,28,15 c0-1.8-0.97-3.37-2.4-4.25l5.16-6.1c0.36-0.42,0.3-1.05-0.12-1.41c-0.42-0.36-1.05-0.3-1.41,0.12l-3.97,4.7l1.7-5.77 c0.16-0.53-0.15-1.09-0.68-1.24c-0.54-0.16-1.09,0.15-1.24,0.68l-2.45,8.32c-0.25,0.02-0.5,0.05-0.74,0.1 C20.82,8.81,19.22,8,17.5,8c-2.53,0-4.65,1.67-5.29,4.01C12.14,12.01,12.07,12,12,12c-3.31,0-6,2.69-6,6c-1.65,0-3,1.35-3,3 c0,0.36,0.07,0.71,0.19,1.03C1.96,22.18,1,23.23,1,24.5C1,25.88,2.12,27,3.5,27h1.09l2.54,2.54C8.07,30.48,9.32,31,10.66,31h10.69 c1.34,0,2.59-0.52,3.54-1.46L27.41,27h1.09c1.38,0,2.5-1.12,2.5-2.5C31,23.12,29.88,22,28.5,22z M6.54,20.16c0,0,0.01,0,0.01,0.01 c0.06,0.05,0.12,0.08,0.19,0.11c0.04,0.02,0.07,0.05,0.1,0.06c0.11,0.04,0.23,0.06,0.35,0.06c0.55,0,1-0.45,1-1 c0-0.09-0.01-0.19-0.04-0.28C8.05,18.75,8,18.38,8,18c0-2.21,1.79-4,4-4c0.25,0,0.53,0.03,0.84,0.08c0.02,0,0.03,0,0.05,0 c0.02,0,0.03,0.01,0.04,0.01c0.03,0,0.06,0,0.09,0c0.04,0,0.07-0.02,0.11-0.02c0.06-0.01,0.12-0.02,0.18-0.03 c0.07-0.02,0.12-0.05,0.18-0.08c0.05-0.03,0.1-0.05,0.14-0.09c0.05-0.04,0.1-0.09,0.14-0.15c0.04-0.04,0.07-0.08,0.1-0.13 c0.04-0.06,0.06-0.13,0.08-0.2c0.01-0.04,0.04-0.08,0.05-0.12c0-0.02,0-0.03,0-0.05c0-0.02,0.01-0.03,0.01-0.04 C14.17,11.4,15.7,10,17.5,10c1.28,0,2.45,0.69,3.06,1.81c0.03,0.05,0.07,0.08,0.1,0.12c0.04,0.06,0.08,0.11,0.13,0.16 c0.05,0.04,0.1,0.07,0.16,0.1c0.06,0.03,0.11,0.07,0.17,0.09c0.06,0.02,0.13,0.02,0.19,0.03c0.06,0.01,0.12,0.02,0.18,0.02 c0.06,0,0.12-0.02,0.18-0.04l-3.45,4.07c-0.36,0.42-0.3,1.05,0.12,1.41C18.54,17.92,18.77,18,19,18c0.28,0,0.57-0.12,0.76-0.35 l0.91-1.07l-0.63,2.15c-0.16,0.53,0.15,1.09,0.68,1.24C20.81,19.99,20.91,20,21,20c0.43,0,0.83-0.28,0.96-0.72l1.91-6.49l0.42-0.5 C25.3,12.78,26,13.81,26,15c0,0.45-0.1,0.87-0.29,1.26c-0.02,0.03-0.02,0.07-0.03,0.11c-0.02,0.06-0.04,0.13-0.05,0.19 c-0.01,0.06-0.01,0.13-0.01,0.19c0,0.06,0.01,0.12,0.02,0.19c0.02,0.06,0.04,0.12,0.06,0.18c0.03,0.06,0.05,0.11,0.09,0.16 c0.04,0.06,0.08,0.1,0.14,0.15c0.03,0.03,0.04,0.06,0.08,0.08c0.62,0.46,1,1.2,1,1.99c0,1.38-1.12,2.5-2.5,2.5H6 c-0.55,0-1-0.45-1-1C5,20.25,5.89,19.74,6.54,20.16z"></path> <path d="M10.59,20.41c0.26,0,0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-0.39-1.02,0-1.41 c0.39-0.39,1.02-0.39,1.41,0c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41c-1.17-1.17-3.07-1.17-4.24,0 s-1.17,3.07,0,4.24C10.07,20.32,10.33,20.41,10.59,20.41z"></path></g> </g>
            </g>
    </svg>
);

export const Drinks: React.FC<Icon> = ({ width = '24', height = '24', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#474747"
    >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.16118 1C3.93844 1 3.00192 2.08747 3.1833 3.29668L5.75555 20.445C5.97584 21.9136 7.23738 23 8.72236 23H15.2776C16.7626 23 18.0241 21.9136 18.2444 20.445L20.8167 3.29668C20.9981 2.08747 20.0615 1 18.8388 1H5.16118ZM5.16118 3H18.8388L18.2388 7H5.76118L5.16118 3ZM6.06118 9L7.73343 20.1483C7.80686 20.6379 8.22737 21 8.72236 21H15.2776C15.7726 21 16.1931 20.6379 16.2666 20.1483L17.9388 9H6.06118Z" fill="#474747"></path>
            </g>
    </svg>   
);

export const Desserts: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 960 960" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#474747"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M355.221 180.921C338.344 138.076 305.134 105.01 265.458 82.9003C242.182 65.2233 264.863 29.5183 290.479 43.7913C335.46 73.3973 372.925 114.027 394.073 164.07C395.72 168.03 397.971 168.58 401.929 168.548C467.34 156.58 529.453 206.734 525.588 274.79C525.35 278.454 525.143 281.066 529.428 282.955C639.755 332.538 731.701 412.906 829.362 482.72C858.532 504.797 877.373 533.065 879.04 571.554C882.249 645.631 883.437 719.688 879.871 793.749C875.671 865.458 849.003 932.855 763.888 917.221C639.465 904.226 515.263 889.601 391.754 869.601C305.737 856.382 217.433 850.495 135.828 817.894C56.2411 787.446 80.625 728.326 84.424 661.911C91.658 571.949 95.1081 481.831 95.6951 391.59C95.9481 379.193 96.307 366.759 97.536 354.433C98.678 342.983 107.319 338.111 117.318 335.432C167.826 321.822 218.531 308.929 268.977 295.097C271.322 294.443 274.573 291.539 274.757 289.446C278 238.45 312.28 204.277 355.221 180.921ZM131.571 670.887C133.169 710.049 111.533 757.049 160.858 771.202C292.576 813.212 432.505 818.546 568.203 841.683C641.616 851.111 715.217 859.112 788.789 867.206C824.484 869.87 826.243 807.091 828.986 781.857C799.816 781.597 771.425 775.891 742.535 772.521C538.934 737.13 331.074 727.897 131.571 670.887ZM140.546 554.174C140.124 554.294 139.701 554.414 139.279 554.533C138.022 576.147 136.622 597.755 135.751 619.384C135.672 621.347 138.646 624.651 140.797 625.271C366.456 684.493 599.97 701.148 830.173 735.557C830.173 709.203 830.173 683.221 830.173 657.238C829.245 656.536 828.317 655.833 827.389 655.131C820.081 668.732 799.453 681.555 786.922 691.029C727.248 729.714 669.352 676.165 638.641 626.555C626.078 610.382 621.237 609.536 604.759 621.937C592.939 630.832 582.43 641.495 570.459 650.156C487.055 712.342 467.369 619.773 440.093 559.124C413.591 579.276 398.899 609.221 374.668 631.568C343.534 662.328 291.247 646.51 280.319 604.95C273.435 584.562 270.512 565.864 263.736 544.685C218.895 572.617 170.334 637.353 140.546 554.174ZM368.986 221.783C297.664 257.755 308.084 365.421 394.616 361.361C490.325 354.477 518.445 215.552 409.187 207.262C408.554 229.801 404.965 237.221 394.397 239.754C383.601 242.343 377.485 238.096 368.986 221.783Z" fill="#474747"></path> <path d="M131.572 670.887C331.071 727.896 538.937 737.131 742.535 772.522C771.433 775.893 799.798 781.595 828.986 781.858C826.473 806.934 824.164 870.074 788.791 867.208C715.217 859.113 641.616 851.111 568.204 841.678C432.504 818.546 292.58 813.212 160.858 771.208C111.471 756.912 133.182 710.228 131.572 670.887Z" fill="white"></path> <path d="M140.547 554.175C170.36 637.376 218.907 572.591 263.737 544.688C270.503 565.851 273.435 584.576 280.317 604.954C291.255 646.502 343.534 662.341 374.671 631.569C398.908 609.213 413.578 579.287 440.093 559.126C467.429 619.849 487 712.316 570.461 650.156C582.431 641.496 592.94 630.835 604.76 621.94C621.238 609.539 626.079 610.385 638.64 626.56C669.298 676.152 727.335 729.728 786.923 691.027C799.745 682.821 811.092 672.271 822.871 662.495C824.969 660.754 825.913 657.623 827.39 655.133C828.318 655.835 829.246 656.538 830.174 657.24C830.174 683.222 830.174 709.204 830.174 735.558C599.973 701.149 366.455 684.493 140.798 625.274C138.648 624.652 135.673 621.348 135.752 619.385C136.623 597.756 138.023 576.148 139.28 554.534C139.702 554.415 140.124 554.295 140.547 554.175Z" fill="white"></path> <path d="M368.982 221.782C377.481 238.096 383.597 242.342 394.393 239.754C404.961 237.22 408.549 229.801 409.183 207.262C518.458 215.558 490.296 354.499 394.609 361.363C308.067 365.397 297.663 257.756 368.982 221.782Z" fill="white"></path>
        </g>
    </svg>
);

export const Breakfast: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
    className={className}
    width={width}
    height={height}
    version="1.1" id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32" xmlSpace="preserve"
    fill="#474747" stroke="#474747"
>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <style type="text/css"> </style>
        <circle className="st0" cx="12" cy="16" r="9"></circle>
        <circle className="st0" cx="12" cy="16" r="6"></circle>
        <path className="st0" d="M23,5v5.5c0,1.7,0.4,2.9,1.1,3.7c0.9,1,1.3,2.2,1.2,3.5l-1,7.3c-0.1,1,0.7,2,1.7,2c1.1,0,1.9-0.9,1.7-2l-1-7.3 c-0.1-1.3,0.3-2.6,1.2-3.5c0.7-0.7,1.1-2,1.1-3.7V5"></path>
        <line className="st0" x1="26" y1="11" x2="26" y2="5"></line> </g>
</svg>
);


export const Clock: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6.53504 4.02349V6.53516L8.41879 8.41891M12.1863 6.53516C12.1863 9.65626 9.65614 12.1864 6.53504 12.1864C3.41394 12.1864 0.883789 9.65626 0.883789 6.53516C0.883789 3.41406 3.41394 0.883911 6.53504 0.883911C9.65614 0.883911 12.1863 3.41406 12.1863 6.53516Z"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ReceiptTax: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 11 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M3.65131 7.79099L7.41881 4.02349M3.96529 4.33745H3.97157M7.10487 7.47704H7.11115M9.93048 12.1864V2.13974C9.93048 1.44617 9.36823 0.883911 8.67465 0.883911H2.39548C1.7019 0.883911 1.13965 1.44617 1.13965 2.13974V12.1864L3.33736 10.9306L5.53506 12.1864L7.73277 10.9306L9.93048 12.1864ZM4.27923 4.33745C4.27923 4.51085 4.13867 4.65141 3.96527 4.65141C3.79188 4.65141 3.65131 4.51085 3.65131 4.33745C3.65131 4.16406 3.79188 4.02349 3.96527 4.02349C4.13867 4.02349 4.27923 4.16406 4.27923 4.33745ZM7.41881 7.47704C7.41881 7.65043 7.27825 7.79099 7.10486 7.79099C6.93146 7.79099 6.7909 7.65043 6.7909 7.47704C6.7909 7.30364 6.93146 7.16308 7.10486 7.16308C7.27825 7.16308 7.41881 7.30364 7.41881 7.47704Z"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ShoppingCart: React.FC<Icon> = ({ width = '16', height = '16', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0.883789 0.88385H2.13962L2.39079 2.13968M3.39546 7.16302H9.67462L12.1863 2.13968H2.39079M3.39546 7.16302L2.39079 2.13968M3.39546 7.16302L1.95571 8.60276C1.56014 8.99833 1.8403 9.67468 2.39971 9.67468H9.67462M9.67462 9.67468C8.98104 9.67468 8.41879 10.2369 8.41879 10.9305C8.41879 11.6241 8.98104 12.1863 9.67462 12.1863C10.3682 12.1863 10.9305 11.6241 10.9305 10.9305C10.9305 10.2369 10.3682 9.67468 9.67462 9.67468ZM4.65129 10.9305C4.65129 11.6241 4.08903 12.1863 3.39546 12.1863C2.70188 12.1863 2.13962 11.6241 2.13962 10.9305C2.13962 10.2369 2.70188 9.67468 3.39546 9.67468C4.08903 9.67468 4.65129 10.2369 4.65129 10.9305Z"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);








