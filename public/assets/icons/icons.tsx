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
        // viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"  viewBox="0,0,256,256"
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








