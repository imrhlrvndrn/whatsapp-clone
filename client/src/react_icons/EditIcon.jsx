export const EditIcon = ({ color = 'currentColor', size = 26 }) => {
    return (
        <svg
            stroke={color}
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height={size}
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
    );
};
