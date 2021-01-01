import React from 'react';

const Reload = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props?.size} height={props?.size} viewBox="0 0 48 48" {...props}>
        <g fill={props?.bgColor} fillRule="evenodd">
            {/* <circle cx="23.694" cy="23.694" r="23.694" fill="#FB6E00"/> */}
            <g fill="#FFF" fillRule="nonzero">
                <path d="M23 11.777L20.957 0l-2.906 2.988c-1.806-1.105-3.907-1.73-6.125-1.73-3.02 0-5.904 1.161-8.121 3.267C1.6 6.62.25 9.46 0 12.525L5.51 13c.134-1.646.86-3.173 2.047-4.3 1.193-1.133 2.744-1.757 4.37-1.757.683 0 1.345.11 1.969.316l-2.352 2.418L23 11.777zM0 16.222L2.043 28l2.906-2.988c1.806 1.105 3.907 1.73 6.125 1.73 3.02 0 5.904-1.161 8.121-3.267 2.204-2.094 3.555-4.935 3.805-8L17.49 15c-.134 1.646-.86 3.173-2.047 4.3-1.193 1.133-2.744 1.757-4.37 1.757-.683 0-1.345-.11-1.969-.316l2.352-2.418L0 16.223z" transform="translate(12.5 10)"/>
            </g>
        </g>
    </svg>
)

export default Reload;