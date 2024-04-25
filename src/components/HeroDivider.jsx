import * as React from 'react';
const HeroDivider = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={1600}
        {...props}
    >
        <path
            fill="currentColor"
            d="m623 1600 22.3-38.2c22.4-38.1 67-114.5 66.2-190.6-.8-76.2-47.2-152.2-60.3-228.4-13.2-76.1 6.8-152.5 35.3-228.6C715 838 752 762 753.7 685.8c1.6-76.1-32-152.5-36-228.6-4-76.2 21.6-152.2 18.5-228.4C733 152.7 701 76.3 685 38.2L669 0h131v1600Z"
        />
    </svg>
);
export default HeroDivider;
