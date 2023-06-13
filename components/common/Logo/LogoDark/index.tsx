import ReactProps from "@/interfaces/ReactProps";
import { getClasses, getStyles } from "@/libs/utils/get/getProps";
import React from "react";

const LogoDark: React.FC<ReactProps> = ({ className, style }) => {
  return (
    <div className={getClasses(className)} style={getStyles(style)}>
      <svg viewBox="0 0 658 232" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="86.5"
          cy="104.5"
          r="80"
          stroke="url(#paint0_dark_linear_57_31)"
          strokeWidth="13"
        />
        <g clipPath="url(#clip0_dark_57_31)">
          <path
            d="M0 104H658V172H68C30.4447 172 0 141.555 0 104V104Z"
            fill="#F9F9F9"
          />
          <path
            d="M29.44 124.904V130.792L9.6 139.496L29.44 148.264V154.28L5.12 143.08V136.36L29.44 124.904ZM647.469 139.496L627.245 130.792V124.904L651.565 136.36V143.08L627.245 154.28V148.264L647.469 139.496Z"
            fill="#1F2B37"
          />
        </g>
        <path
          d="M41.2383 169.135C41.6484 169.076 43.9922 169.047 48.2695 169.047C55.5938 169.047 60.9844 168.49 64.4414 167.377C67.957 166.264 70.4766 165.238 72 164.301C69.832 165.941 67.8398 167.465 66.0234 168.871C62.0977 171.918 58.9336 174.115 56.5312 175.463C54.1875 176.811 51.8438 177.865 49.5 178.627C47.1562 179.33 44.7539 179.857 42.293 180.209C38.6602 180.736 33.709 181 27.4395 181H24.0117C24.0703 180.941 24.1289 180.883 24.1875 180.824C24.1875 180.766 24.5977 180.297 25.418 179.418C26.1797 178.539 27.3223 177.279 28.8457 175.639C30.3691 173.939 32.3906 171.42 34.9102 168.08C37.4297 164.74 40.1543 160.434 43.084 155.16C46.0723 149.887 48.8262 144.525 51.3457 139.076C53.9238 133.568 56.3848 128.002 58.7285 122.377C61.0723 116.752 63.4746 111.127 65.9355 105.502C68.4551 99.8184 71.0039 94.1055 73.582 88.3633C76.1602 82.5625 78.0938 78.0215 79.3828 74.7402C80.7305 71.459 81.4922 69.4082 81.668 68.5879C81.9023 67.7676 82.2539 67.0645 82.7227 66.4785H76.043C65.1445 66.4785 56.6777 67.709 50.6426 70.1699C58.7285 63.1387 65.4961 58.7148 70.9453 56.8984C75.9258 55.3164 84.0117 54.5254 95.2031 54.5254H99.8613C102.381 62.9043 104.9 71.4004 107.42 80.0137C109.998 88.627 112.576 97.2402 115.154 105.854C120.779 124.604 124.998 138.197 127.811 146.635C130.682 155.072 132.352 160.111 132.82 161.752C133.348 163.334 133.992 164.77 134.754 166.059C136.453 168.871 139.178 170.277 142.928 170.277C144.979 170.277 147.117 169.809 149.344 168.871C151.629 167.934 153.387 167.084 154.617 166.322C152.508 167.904 150.633 169.34 148.992 170.629C144.773 173.852 142.078 175.844 140.906 176.605C139.734 177.309 138.562 178.012 137.391 178.715C136.219 179.418 134.988 180.062 133.699 180.648C125.496 184.281 119.959 182.904 117.088 176.518C115.037 172.006 112.576 164.799 109.705 154.896C106.834 144.936 104.285 136.469 102.059 129.496C97.1367 133.012 86.4141 134.652 69.8906 134.418C67.7812 134.418 65.9648 134.418 64.4414 134.418C57.8203 147.66 51.375 157.768 45.1055 164.74C44.5781 165.326 44.0508 165.941 43.5234 166.586C42 168.344 41.2383 169.193 41.2383 169.135ZM71.2969 122.201L88.6992 122.553C92.332 122.553 96.0234 122.436 99.7734 122.201C97.0781 113.646 93.0645 100.551 87.7324 82.9141C81.9316 96.2148 76.043 109.398 70.0664 122.465C70.7695 122.289 71.1797 122.201 71.2969 122.201ZM235.652 95.5703C228.562 106 219.979 111.215 209.9 111.215C208.26 111.215 206.15 110.57 203.572 109.281C198.65 106.82 195.311 105.59 193.553 105.59C191.854 105.59 190.477 106.146 189.422 107.26C188.367 108.373 187.488 109.926 186.785 111.918C185.203 116.254 184.412 121.879 184.412 128.793V162.455C184.412 166.205 185.555 168.754 187.84 170.102C188.66 170.629 189.686 170.893 190.916 170.893C192.146 170.893 193.436 170.6 194.783 170.014C193.611 171.068 192.469 172.328 191.355 173.793C190.242 175.199 188.982 176.576 187.576 177.924C184.236 181.146 180.281 182.758 175.711 182.758C173.367 182.758 171.375 182.025 169.734 180.561C168.094 179.037 167.273 177.191 167.273 175.023V124.398C167.273 122.348 167.303 120.297 167.361 118.246C167.42 116.195 167.215 114.32 166.746 112.621C165.633 108.93 162.439 107.084 157.166 107.084C154.646 107.084 152.127 107.553 149.607 108.49C151.131 107.963 153.094 106.586 155.496 104.359C160.184 100.141 163.436 97.6797 165.252 96.9766C169.002 95.6289 172.02 94.9551 174.305 94.9551C176.648 94.9551 178.436 95.3066 179.666 96.0098C180.955 96.6543 181.951 97.5625 182.654 98.7344C183.826 100.668 184.412 103.656 184.412 107.699C186.111 106.41 187.957 104.975 189.949 103.393C192 101.752 194.109 100.199 196.277 98.7344C201.492 95.2773 206.033 93.5488 209.9 93.5488C212.186 93.5488 214.588 94.1934 217.107 95.4824C219.627 96.7715 221.502 97.709 222.732 98.2949C223.963 98.8809 225.105 99.1738 226.16 99.1738C228.504 99.1738 231.668 97.9727 235.652 95.5703ZM244.793 175.023L244.881 118.51C244.881 114.584 244.354 111.947 243.299 110.6C241.482 108.256 238.963 107.084 235.74 107.084C232.518 107.084 229.646 107.553 227.127 108.49C228.65 107.904 230.643 106.527 233.104 104.359C237.615 100.199 240.809 97.7676 242.684 97.0645C246.199 95.6582 249.275 94.9551 251.912 94.9551C254.607 94.9551 256.6 95.3945 257.889 96.2734C259.236 97.1523 260.203 98.3242 260.789 99.7891C261.551 101.605 261.932 105.062 261.932 110.16C272.889 100.492 283.143 95.6582 292.693 95.6582C297.908 95.6582 302.449 97.2988 306.316 100.58C310.359 104.096 312.381 108.373 312.381 113.412V156.83C312.381 161.166 312.85 164.154 313.787 165.795C315.545 168.9 318.475 170.453 322.576 170.453C324.92 170.453 327.146 170.014 329.256 169.135C324.041 173.646 320.438 176.547 318.445 177.836C313.875 180.824 309.861 182.318 306.404 182.318C303.006 182.318 300.574 181.703 299.109 180.473C297.703 179.242 296.707 177.689 296.121 175.814C295.477 173.764 295.154 169.574 295.154 163.246V130.375C295.154 119.887 291.727 112.973 284.871 109.633C282.41 108.461 279.451 107.875 275.994 107.875C267.498 107.875 262.898 114.174 262.195 126.771C262.02 129.936 261.932 132.777 261.932 135.297V162.455C261.932 166.205 263.074 168.754 265.359 170.102C266.18 170.629 267.205 170.893 268.436 170.893C269.666 170.893 270.955 170.6 272.303 170.014C271.072 171.068 269.607 172.328 267.908 173.793C266.209 175.258 264.422 176.664 262.547 178.012C257.918 181.176 254.227 182.758 251.473 182.758C247.02 182.758 244.793 180.18 244.793 175.023ZM409.676 105.062C412.664 108.461 414.979 112.357 416.619 116.752C418.318 121.088 419.168 125.453 419.168 129.848C419.168 134.242 418.523 138.549 417.234 142.768C415.945 146.928 414.129 150.941 411.785 154.809C409.5 158.676 406.775 162.309 403.611 165.707C400.506 169.047 397.078 171.977 393.328 174.496C385.359 179.828 377.303 182.494 369.158 182.494C359.607 182.494 351.492 178.773 344.812 171.332C338.309 164.184 335.057 155.805 335.057 146.195C335.057 137.992 337.547 129.76 342.527 121.498C349.969 108.959 360.105 100.492 372.938 96.0977C377.039 94.6328 381.375 93.9004 385.945 93.9004C390.516 93.9004 394.852 94.9258 398.953 96.9766C403.113 98.9688 406.688 101.664 409.676 105.062ZM368.104 105.678C362.244 105.678 357.967 108.52 355.271 114.203C353.162 118.656 352.107 123.695 352.107 129.32C352.107 134.945 352.84 140.189 354.305 145.053C355.828 149.857 358.055 154.164 360.984 157.973C367.488 166.527 375.867 170.805 386.121 170.805C392.098 170.805 396.434 167.816 399.129 161.84C401.062 157.387 402.029 152.26 402.029 146.459C402.029 135.15 398.865 125.541 392.537 117.631C386.268 109.662 378.123 105.678 368.104 105.678ZM474.363 170.102C472.43 171.625 470.584 173.148 468.826 174.672C467.068 176.195 465.252 177.543 463.377 178.715C459.217 181.41 454.91 182.758 450.457 182.758C444.012 182.758 440.496 178.305 439.91 169.398C439.793 166.996 439.734 164.652 439.734 162.367V68.3242C439.734 60.2969 437.918 55.082 434.285 52.6797C432.762 51.625 431.297 51.0977 429.891 51.0977C428.016 51.0977 426.756 51.1563 426.111 51.2734C425.467 51.332 424.91 51.3906 424.441 51.4492C432.879 45.5898 438.211 42.0742 440.438 40.9023C443.367 39.3203 446.385 37.7676 449.49 36.2441C452.654 34.6621 455.086 33.4316 456.785 32.5527V153.842C456.785 156.244 456.785 158.471 456.785 160.521C456.844 162.572 457.195 164.359 457.84 165.883C459.305 169.047 462.996 170.629 468.914 170.629C470.789 170.629 472.605 170.453 474.363 170.102ZM506.707 31.8496L507.234 41.8691V46.4395C507.234 49.252 506.883 50.9805 506.18 51.625C505.477 52.2109 504.715 52.7969 503.895 53.3828C500.613 55.7266 495.867 58.8906 489.656 62.875C489.949 57.0156 490.096 53.998 490.096 53.8223C490.096 53.5879 489.949 50.248 489.656 43.8027L506.707 31.8496ZM525.076 170.189C523.318 171.596 521.59 173.031 519.891 174.496C518.25 175.961 516.521 177.309 514.705 178.539C510.486 181.293 506.443 182.67 502.576 182.67C498.943 182.67 496.395 182.113 494.93 181C491.941 178.773 490.447 174.672 490.447 168.695V127.035C490.447 120.707 489.305 116.605 487.02 114.73C485.965 113.852 484.822 113.412 483.592 113.412C482.361 113.412 481.307 113.5 480.428 113.676C479.607 113.793 478.758 113.939 477.879 114.115C477 114.291 476.092 114.467 475.154 114.643C478.084 112.357 480.809 110.307 483.328 108.49C485.906 106.674 488.104 105.15 489.92 103.92C491.736 102.689 494.256 100.961 497.479 98.7344C500.701 96.4492 504.041 94.3984 507.498 92.582V154.633C507.498 160.609 507.879 164.389 508.641 165.971C510.281 169.193 513.914 170.805 519.539 170.805C521.062 170.805 522.908 170.6 525.076 170.189ZM605.848 105.062C608.836 108.461 611.15 112.357 612.791 116.752C614.49 121.088 615.34 125.453 615.34 129.848C615.34 134.242 614.695 138.549 613.406 142.768C612.117 146.928 610.301 150.941 607.957 154.809C605.672 158.676 602.947 162.309 599.783 165.707C596.678 169.047 593.25 171.977 589.5 174.496C581.531 179.828 573.475 182.494 565.33 182.494C555.779 182.494 547.664 178.773 540.984 171.332C534.48 164.184 531.229 155.805 531.229 146.195C531.229 137.992 533.719 129.76 538.699 121.498C546.141 108.959 556.277 100.492 569.109 96.0977C573.211 94.6328 577.547 93.9004 582.117 93.9004C586.688 93.9004 591.023 94.9258 595.125 96.9766C599.285 98.9688 602.859 101.664 605.848 105.062ZM564.275 105.678C558.416 105.678 554.139 108.52 551.443 114.203C549.334 118.656 548.279 123.695 548.279 129.32C548.279 134.945 549.012 140.189 550.477 145.053C552 149.857 554.227 154.164 557.156 157.973C563.66 166.527 572.039 170.805 582.293 170.805C588.27 170.805 592.605 167.816 595.301 161.84C597.234 157.387 598.201 152.26 598.201 146.459C598.201 135.15 595.037 125.541 588.709 117.631C582.439 109.662 574.295 105.678 564.275 105.678Z"
          fill="url(#paint1_dark_linear_57_31)"
        />
        <defs>
          <linearGradient
            id="paint0_dark_linear_57_31"
            x1="86.5"
            y1="18"
            x2="86.5"
            y2="191"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9F9F9" />
            <stop offset="0.890405" stopColor="#F9F9F9" />
            <stop offset="0.890505" stopColor="#F9F9F9" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_dark_linear_57_31"
            x1="324.5"
            y1="0"
            x2="324.5"
            y2="249"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.417681" stopColor="#F9F9F9" />
            <stop offset="0.417781" stopColor="#1F2B37" />
            <stop offset="0.690763" stopColor="#1F2B37" />
            <stop offset="0.690856" stopColor="#F9F9F9" />
          </linearGradient>
          <clipPath id="clip0_dark_57_31">
            <path
              d="M0 104H658V172H68C30.4447 172 0 141.555 0 104V104Z"
              fill="white"
            />
          </clipPath>
        </defs>
        <defs></defs>
      </svg>
    </div>
  );
};

export default LogoDark;
