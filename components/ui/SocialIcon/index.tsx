type IconProps = {
  className?: string
}

const defaultSize = 'w-8 h-8'

export const GoogleIcon = ({ className = defaultSize }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 128 128"
    xmlSpace="preserve"
    className={className}
  >
    <g>
      <g fillRule="evenodd" clipRule="evenodd">
        <path fill="none" d="M0 0H128V128H0z"></path>
        <path
          fill="#FBBC05"
          d="M27.585 64c0-4.157.69-8.143 1.923-11.881L7.938 35.648C3.734 44.183 1.366 53.801 1.366 64c0 10.191 2.366 19.802 6.563 28.332l21.558-16.503A37.86 37.86 0 0127.585 64"
        ></path>
        <path
          fill="#EA4335"
          d="M65.457 26.182c9.031 0 17.188 3.2 23.597 8.436L107.698 16C96.337 6.109 81.771 0 65.457 0 40.129 0 18.361 14.484 7.938 35.648l21.569 16.471a37.77 37.77 0 0135.95-25.937"
        ></path>
        <path
          fill="#34A853"
          d="M65.457 101.818a37.77 37.77 0 01-35.949-25.937L7.938 92.349C18.361 113.516 40.129 128 65.457 128c15.632 0 30.557-5.551 41.758-15.951L86.741 96.221c-5.777 3.639-13.052 5.597-21.284 5.597"
        ></path>
        <path
          fill="#4285F4"
          d="M126.634 64c0-3.782-.583-7.855-1.457-11.636h-59.72v24.727h34.376c-1.719 8.431-6.397 14.912-13.092 19.13l20.474 15.828c11.766-10.92 19.419-27.188 19.419-48.049"
        ></path>
      </g>
    </g>
  </svg>
)

export const TwitterIcon = ({ className = defaultSize }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 48 48"
    xmlSpace="preserve"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#1CB7EB"></circle>
    <path
      fill="#FFF"
      d="M36.8 15.4c-.9.5-2 .8-3 .9 1.1-.7 1.9-1.8 2.3-3.1-1 .6-2.1 1.1-3.4 1.4-1-1.1-2.3-1.8-3.8-1.8-2.9 0-5.3 2.5-5.3 5.7 0 .4 0 .9.1 1.3-4.4-.2-8.3-2.5-10.9-5.9-.5.8-.7 1.8-.7 2.9 0 2 .9 3.7 2.3 4.7-.9 0-1.7-.3-2.4-.7v.1c0 2.7 1.8 5 4.2 5.6-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.3 2.6 3.9 4.9 3.9-1.8 1.5-4.1 2.4-6.5 2.4-.4 0-.8 0-1.3-.1 2.3 1.6 5.1 2.6 8.1 2.6 9.7 0 15-8.6 15-16.1v-.7c1.2-1 2.1-2 2.8-3.2z"
    ></path>
  </svg>
)

export const FacebookIcon = ({ className = defaultSize }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    clipRule="evenodd"
    viewBox="0 0 512 512"
    className={className}
  >
    <g fillRule="nonzero">
      <path
        fill="#1877f2"
        d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 127.777 93.616 233.685 216 252.89V330h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281C305.918 168 296 187.733 296 207.978V256h71l-11.35 74H296v178.89C418.385 489.685 512 383.777 512 256z"
      ></path>
      <path
        fill="#fff"
        d="M355.65 330L367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0040 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65z"
      ></path>
    </g>
  </svg>
)
