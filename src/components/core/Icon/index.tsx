import React, { FunctionComponent } from "react";

export type IconType =
  | "activity"
  | "arrow-right"
  | "bell"
  | "building"
  | "book"
  | "book-open"
  | "briefcase"
  | "chat"
  | "check"
  | "check-circle"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "dollar"
  | "facebook"
  | "filter"
  | "forward"
  | "fund"
  | "gift"
  | "globe"
  | "headphones"
  | "linkedin"
  | "lock"
  | "log-out"
  | "mail"
  | "message-circle"
  | "mobile-apps"
  | "plus"
  | "star"
  | "star-with-lights"
  | "rocket"
  | "settings"
  | "shapes"
  | "shopify"
  | "thumbs-up"
  | "thumbs-up-filled"
  | "trending-up"
  | "twitter"
  | "user"
  | "users"
  | "website"
  | "webinars"
  | "wordpress"
  | "x";

/** The props of the `Icon` component */
export interface IconProps {
  type: IconType;
  fill?: string;
  size: number;
}

const Icon: FunctionComponent<IconProps> = (props) => {
  switch (props.type) {
    case "activity":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      );
    case "chat":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 730 735"
          version="1.1"
        >
          <g
            id="Icon"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <ellipse
              id="Oval-4"
              cx="419"
              cy="403.5"
              rx="276"
              ry="268.5"
            ></ellipse>
            <g id="Rectangle-6" fill={props.fill}>
              <path
                d="M365,0 C566.583934,0 730,161.793098 730,361.374998 C730,560.956899 566.583934,722.749996 365,722.749996 C313.853919,722.749996 265.16487,712.33467 220.978547,693.529395 L220.954413,693.532174 C-108.234356,800.478802 118.657464,683.137164 47.2499658,539.273196 L47.2196757,539.277015 C45.0591741,535.502187 42.9653065,531.685059 40.9396555,527.827199 L40.9545617,527.826524 C40.1758551,526.538714 39.3718834,525.249226 38.5420496,523.958199 L37.703573,522.666664 L38.7973288,523.681876 C13.9767207,474.879413 0,419.743214 0,361.374998 C0,161.793098 163.416066,0 365,0 Z M432.935953,431.065258 L257.115159,431.065258 C238.959826,431.065258 224.242021,445.783063 224.242021,463.938396 C224.242021,481.912175 238.666942,496.516833 256.571541,496.807129 L257.115159,496.811533 L432.935953,496.811533 C451.091285,496.811533 465.80909,482.093728 465.80909,463.938396 C465.80909,445.783063 451.091285,431.065258 432.935953,431.065258 Z M469.207285,335.770096 L293.38649,335.770096 C275.231158,335.770096 260.513353,350.487901 260.513353,368.643234 C260.513353,386.798566 275.231158,401.516371 293.38649,401.516371 L293.38649,401.516371 L469.207285,401.516371 C487.362617,401.516371 502.080422,386.798566 502.080422,368.643234 C502.080422,350.487901 487.362617,335.770096 469.207285,335.770096 L469.207285,335.770096 Z M432.935953,240.474934 L257.115159,240.474934 C238.959826,240.474934 224.242021,255.192739 224.242021,273.348071 C224.242021,291.32185 238.666942,305.926509 256.571541,306.216805 L257.115159,306.221209 L432.935953,306.221209 C451.091285,306.221209 465.80909,291.503404 465.80909,273.348071 C465.80909,255.192739 451.091285,240.474934 432.935953,240.474934 Z"
                id="Mask"
              ></path>
            </g>
          </g>
        </svg>
      );
    case "message-circle":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case "settings":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "book":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      );
    case "thumbs-up":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      );
    case "thumbs-up-filled":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 39 38"
          fill={props.fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2623 14.3489L21.6983 6.08008C21.6983 6.08008 24.3345 6.71531 24.3345 9.13781C24.3345 10.0745 22.3134 15.3825 22.3134 15.3825H30.7494C32.2048 15.3825 33.5614 16.7122 33.5614 18.1387V19.4307C33.5614 19.996 33.4406 20.5505 33.2099 21.0673L28.9919 30.3697C28.569 31.3064 27.6189 31.9201 26.5753 31.9201H15.1077C13.6522 31.9201 12.4714 30.7627 12.4714 29.3361V16.2007C12.4714 15.5171 12.768 14.8334 13.2623 14.3489ZM5.44141 31.9201V15.3825H9.65941V31.9201H5.44141Z"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case "trending-up":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      );
    case "filter":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      );
    case "mail":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
    case "shapes":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 25"
          fill={props.fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6.5L2 6.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 10L5.5 3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="17.5" cy="18.5" r="3.5" strokeWidth="2" />
          <rect
            x="2"
            y="15"
            width="7"
            height="7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.4689 9.25L17.5 4L20.5311 9.25H14.4689Z"
            strokeWidth="2"
          />
        </svg>
      );
    case "log-out":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      );
    case "user":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      );
    case "book-open":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      );
    case "briefcase":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      );
    case "gift":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 12 20 22 4 22 4 12"></polyline>
          <rect x="2" y="7" width="20" height="5"></rect>
          <line x1="12" y1="22" x2="12" y2="7"></line>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </svg>
      );
    case "headphones":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      );
    case "globe":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      );
    case "forward":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.86396 5L16.7279 11.864L9.86396 18.7279" />
        </svg>
      );
    case "plus":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      );
    case "x":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      );
    case "check":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke={props.fill}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      );
    case "lock":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      );
    case "chevron-left":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      );
    case "chevron-right":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline
            points="9 18 15 12 9 6"
            style={{ color: props.fill }}
          ></polyline>
        </svg>
      );
    case "chevron-up":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      );
    case "chevron-down":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      );
    case "bell":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      );
    case "rocket":
      return (
        <svg
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m23.508.003c-4.685-.084-10.028 2.365-13.41 6.164-3.232.061-6.379 1.386-8.696 3.703-.135.133-.183.332-.124.512.06.181.216.312.404.339l3.854.552-.476.533c-.177.198-.168.499.02.687l6.427 6.427c.097.097.225.146.354.146.119 0 .238-.042.333-.127l.533-.476.552 3.854c.027.188.175.326.354.386.046.015.094.022.143.022.142 0 .287-.062.387-.161 2.285-2.285 3.61-5.432 3.671-8.664 3.803-3.389 6.272-8.73 6.163-13.409-.007-.266-.222-.481-.489-.488zm-4.608 8.632c-.487.487-1.127.731-1.768.731s-1.281-.244-1.768-.731c-.974-.975-.974-2.561 0-3.536.975-.975 2.561-.975 3.536 0s.975 2.562 0 3.536z" />
          <path d="m2.724 16.905c-1.07 1.07-2.539 5.904-2.703 6.451-.053.176-.004.367.125.497.096.096.223.147.354.147.048 0 .096-.007.144-.021.547-.164 5.381-1.633 6.451-2.703 1.205-1.205 1.205-3.166 0-4.371-1.206-1.205-3.166-1.204-4.371 0z" />
        </svg>
      );
    case "wordpress":
      return (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="wordpress"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={props.size}
          height={props.size}
        >
          <path
            fill="currentColor"
            d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"
            className=""
          ></path>
        </svg>
      );
    case "shopify":
      return (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="shopify"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={props.size}
          height={props.size}
        >
          <path
            fill="currentColor"
            d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
            className=""
          ></path>
        </svg>
      );
    case "arrow-right":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke="currentColor"
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      );
    case "dollar":
      return (
        <svg
          version="1.1"
          width={props.size}
          height={props.size}
          viewBox="0 0 235.517 235.517"
          fill={props.fill}
        >
          <g>
            <path
              d="M118.1,235.517c7.898,0,14.31-6.032,14.31-13.483c0-7.441,0-13.473,0-13.473
		c39.069-3.579,64.932-24.215,64.932-57.785v-0.549c0-34.119-22.012-49.8-65.758-59.977V58.334c6.298,1.539,12.82,3.72,19.194,6.549
		c10.258,4.547,22.724,1.697,28.952-8.485c6.233-10.176,2.866-24.47-8.681-29.654c-11.498-5.156-24.117-8.708-38.095-10.236V8.251
		c0-4.552-6.402-8.251-14.305-8.251c-7.903,0-14.31,3.514-14.31,7.832c0,4.335,0,7.843,0,7.843
		c-42.104,3.03-65.764,25.591-65.764,58.057v0.555c0,34.114,22.561,49.256,66.862,59.427v33.021
		c-10.628-1.713-21.033-5.243-31.623-10.65c-11.281-5.755-25.101-3.72-31.938,6.385c-6.842,10.1-4.079,24.449,7.294,30.029
		c16.709,8.208,35.593,13.57,54.614,15.518v13.755C103.79,229.36,110.197,235.517,118.1,235.517z M131.301,138.12
		c14.316,4.123,18.438,8.257,18.438,15.681v0.555c0,7.979-5.776,12.651-18.438,14.033V138.12z M86.999,70.153v-0.549
		c0-7.152,5.232-12.657,18.71-13.755v29.719C90.856,81.439,86.999,77.305,86.999,70.153z"
            />
          </g>
        </svg>
      );
    case "check-circle":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 73 72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.992188 36C0.992188 16.1177 17.1099 0 36.9922 0V0C56.8744 0 72.9922 16.1177 72.9922 36V36C72.9922 55.8823 56.8744 72 36.9922 72V72C17.1099 72 0.992188 55.8823 0.992188 36V36Z"
            fill={props.fill}
          />
          <path
            d="M34.8042 48.937C33.9756 48.9406 33.172 48.6534 32.5333 48.1254L20.3258 37.628C20.0617 37.3983 19.8971 37.075 19.8665 36.7263C19.8359 36.3776 19.9418 36.0307 20.1618 35.7584L22.9963 32.2889C23.11 32.1495 23.2505 32.0344 23.4095 31.9503C23.5685 31.8663 23.7428 31.815 23.922 31.7995C24.1012 31.7841 24.2817 31.8048 24.4527 31.8604C24.6238 31.9159 24.7819 32.0053 24.9178 32.1231L34.4459 40.3953L49.7647 23.5796C50.003 23.3174 50.3352 23.1599 50.689 23.1415C51.0429 23.123 51.3897 23.2451 51.654 23.481L54.9936 26.4785C55.1254 26.5967 55.2326 26.7398 55.3089 26.8995C55.3853 27.0593 55.4293 27.2326 55.4384 27.4094C55.4476 27.5862 55.4217 27.7631 55.3623 27.9299C55.3029 28.0967 55.2111 28.25 55.0922 28.3812L37.4738 47.7483C37.136 48.1212 36.7241 48.4195 36.2644 48.6242C35.8047 48.8289 35.3074 48.9355 34.8042 48.937Z"
            fill="white"
          />
        </svg>
      );
    case "webinars":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 7L16 12L23 17V7Z"
            fill="#0B0D17"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "building":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M15.3885 0H8.61032C7.53112 0 6.60468 0.664828 6.21777 1.60627H17.7812C17.3943 0.664828 16.4677 0 15.3885 0Z"
              fill="black"
            />
            <path
              d="M18.4018 3.01251H5.5987C4.17276 3.01251 3.0127 4.17257 3.0127 5.59847V23.2969C3.0127 23.6852 3.32755 24 3.71582 24H8.28459V20.661C8.28459 19.2351 9.44465 18.075 10.8706 18.075H13.1299C14.5559 18.075 15.7158 19.2351 15.7158 20.661V24H20.2846C20.6729 24 20.9877 23.6852 20.9877 23.2969V5.59847C20.9877 4.17257 19.8277 3.01251 18.4018 3.01251V3.01251ZM7.97868 16.2628C7.84795 16.3936 7.66659 16.4686 7.48138 16.4686C7.29674 16.4686 7.11524 16.3936 6.98451 16.2628C6.85321 16.132 6.77826 15.9506 6.77826 15.7655C6.77826 15.5808 6.85326 15.3994 6.98451 15.2686C7.11524 15.1378 7.29623 15.0624 7.48138 15.0624C7.66659 15.0624 7.84795 15.1378 7.97868 15.2686C8.10951 15.3994 8.18451 15.5803 8.18451 15.7655C8.18451 15.9506 8.10951 16.132 7.97868 16.2628ZM7.97868 13.2502C7.84795 13.3814 7.66659 13.4564 7.48138 13.4564C7.29674 13.4564 7.11524 13.3814 6.98451 13.2502C6.85321 13.1194 6.77826 12.938 6.77826 12.7532C6.77826 12.5681 6.85326 12.3867 6.98451 12.2559C7.11524 12.1252 7.29623 12.0501 7.48138 12.0501C7.66659 12.0501 7.84795 12.1252 7.97868 12.2559C8.10951 12.3867 8.18451 12.5681 8.18451 12.7532C8.18451 12.938 8.10951 13.1194 7.97868 13.2502ZM7.97868 10.2379C7.84748 10.3687 7.66659 10.4437 7.48138 10.4437C7.29674 10.4437 7.11524 10.3687 6.98451 10.2379C6.85321 10.1072 6.77826 9.92578 6.77826 9.74062C6.77826 9.55547 6.85326 9.37406 6.98451 9.24328C7.11524 9.1125 7.2967 9.0375 7.48138 9.0375C7.66659 9.0375 7.84752 9.1125 7.97868 9.24328C8.10951 9.37406 8.18451 9.55547 8.18451 9.74062C8.18451 9.92578 8.10951 10.1072 7.97868 10.2379ZM7.97868 7.22531C7.84795 7.35609 7.66659 7.43109 7.48138 7.43109C7.29674 7.43109 7.11524 7.35609 6.98409 7.22531C6.85326 7.09453 6.77826 6.91312 6.77826 6.72797C6.77826 6.54286 6.85326 6.36187 6.98409 6.23109C7.11529 6.09984 7.29627 6.02484 7.48138 6.02484C7.66659 6.02484 7.84795 6.09989 7.97868 6.23109C8.10951 6.36187 8.18451 6.54281 8.18451 6.72797C8.18451 6.91312 8.10951 7.09453 7.97868 7.22531V7.22531ZM10.991 16.2628C10.8601 16.3936 10.6788 16.4686 10.494 16.4686C10.3089 16.4686 10.1275 16.3936 9.9967 16.2628C9.86596 16.132 9.79087 15.9506 9.79087 15.7655C9.79087 15.5804 9.86596 15.3994 9.9967 15.2686C10.1275 15.1378 10.3089 15.0624 10.494 15.0624C10.6792 15.0624 10.8601 15.1378 10.991 15.2686C11.1222 15.3994 11.1971 15.5803 11.1971 15.7655C11.1971 15.9506 11.1222 16.132 10.991 16.2628ZM10.9914 13.2502C10.8601 13.3814 10.6792 13.4564 10.494 13.4564C10.3089 13.4564 10.128 13.3814 9.99674 13.2502C9.86601 13.1194 9.79091 12.938 9.79091 12.7532C9.79091 12.5681 9.86601 12.3867 9.99674 12.2559C10.128 12.1252 10.3089 12.0501 10.494 12.0501C10.6792 12.0501 10.8602 12.1252 10.9914 12.2559C11.1222 12.3867 11.1972 12.5681 11.1972 12.7532C11.1971 12.9384 11.1222 13.1194 10.9914 13.2502ZM10.9914 10.2379C10.8601 10.3687 10.6792 10.4437 10.494 10.4437C10.3089 10.4437 10.128 10.3687 9.99674 10.2379C9.86601 10.1072 9.79091 9.92578 9.79091 9.74062C9.79091 9.55547 9.86601 9.37406 9.99674 9.24328C10.128 9.1125 10.3089 9.0375 10.494 9.0375C10.6788 9.0375 10.8602 9.1125 10.9914 9.24328C11.1222 9.37406 11.1972 9.55547 11.1972 9.74062C11.1971 9.92578 11.1222 10.1072 10.9914 10.2379ZM10.9914 7.22531C10.8601 7.35609 10.6792 7.43109 10.494 7.43109C10.3089 7.43109 10.1276 7.35609 9.99674 7.22531C9.86601 7.09453 9.79091 6.91312 9.79091 6.72797C9.79091 6.54286 9.86601 6.36187 9.99674 6.23109C10.1276 6.09984 10.3089 6.02484 10.494 6.02484C10.6792 6.02484 10.8606 6.09989 10.9914 6.23109C11.1222 6.36187 11.1972 6.54328 11.1972 6.72797C11.1971 6.91312 11.1222 7.09406 10.9914 7.22531V7.22531ZM14.0036 16.2628C13.8727 16.3936 13.6914 16.4686 13.5062 16.4686C13.3215 16.4686 13.1401 16.3936 13.0093 16.2628C12.8786 16.132 12.8036 15.9506 12.8036 15.7655C12.8036 15.5804 12.8786 15.3994 13.0093 15.2686C13.1401 15.1378 13.3215 15.0624 13.5062 15.0624C13.6914 15.0624 13.8727 15.1378 14.0036 15.2686C14.1348 15.3994 14.2098 15.5808 14.2098 15.7655C14.2099 15.9506 14.1348 16.132 14.0036 16.2628ZM14.0036 13.2502C13.8727 13.3814 13.6914 13.4564 13.5062 13.4564C13.3215 13.4564 13.1401 13.3814 13.0093 13.2502C12.8786 13.1194 12.8036 12.938 12.8036 12.7532C12.8036 12.5681 12.8786 12.3867 13.0093 12.2559C13.1401 12.1252 13.3215 12.0501 13.5062 12.0501C13.6914 12.0501 13.8727 12.1252 14.0036 12.2559C14.1348 12.3867 14.2098 12.5681 14.2098 12.7532C14.2099 12.938 14.1348 13.1194 14.0036 13.2502ZM12.8036 9.74062C12.8036 9.55547 12.8786 9.37406 13.0094 9.24328C13.1402 9.1125 13.3215 9.0375 13.5067 9.0375C13.6914 9.0375 13.8728 9.1125 14.0036 9.24328C14.1344 9.37406 14.2094 9.55547 14.2094 9.74062C14.2094 9.92578 14.1344 10.1072 14.0036 10.2379C13.8728 10.3687 13.6914 10.4437 13.5067 10.4437C13.3215 10.4437 13.1402 10.3687 13.0094 10.2379C12.8786 10.1072 12.8036 9.92578 12.8036 9.74062ZM14.0036 7.22531C13.8727 7.35609 13.6919 7.43109 13.5067 7.43109C13.3215 7.43109 13.1401 7.35609 13.0093 7.22531C12.8786 7.09453 12.8036 6.91312 12.8036 6.72797C12.8036 6.54286 12.8786 6.36187 13.0093 6.23109C13.1401 6.09984 13.3215 6.02484 13.5067 6.02484C13.6918 6.02484 13.8727 6.09989 14.0036 6.23109C14.1343 6.36187 14.2098 6.54281 14.2098 6.72797C14.2099 6.91312 14.1343 7.09453 14.0036 7.22531V7.22531ZM17.0162 16.2628C16.8855 16.3936 16.704 16.4686 16.5189 16.4686C16.3342 16.4686 16.1528 16.3936 16.0221 16.2628C15.8908 16.132 15.8158 15.9506 15.8158 15.7655C15.8158 15.5808 15.8908 15.3994 16.0221 15.2686C16.1528 15.1378 16.3337 15.0624 16.5189 15.0624C16.704 15.0624 16.8855 15.1378 17.0162 15.2686C17.1471 15.3994 17.2221 15.5803 17.2221 15.7655C17.222 15.9506 17.1471 16.132 17.0162 16.2628ZM17.0162 13.2502C16.8855 13.3814 16.704 13.4564 16.5189 13.4564C16.3337 13.4564 16.1528 13.3814 16.0221 13.2502C15.8908 13.1194 15.8158 12.938 15.8158 12.7532C15.8158 12.5681 15.8908 12.3867 16.0221 12.2559C16.1528 12.1252 16.3337 12.0501 16.5189 12.0501C16.704 12.0501 16.8855 12.1252 17.0162 12.2559C17.1471 12.3867 17.2221 12.5681 17.2221 12.7532C17.222 12.938 17.1471 13.1194 17.0162 13.2502ZM17.0162 10.2379C16.8849 10.3687 16.704 10.4437 16.5189 10.4437C16.3342 10.4437 16.1528 10.3687 16.0221 10.2379C15.8908 10.1072 15.8158 9.92578 15.8158 9.74062C15.8158 9.55547 15.8908 9.37406 16.0221 9.24328C16.1528 9.1125 16.3341 9.0375 16.5189 9.0375C16.704 9.0375 16.885 9.1125 17.0162 9.24328C17.1471 9.37406 17.2221 9.55547 17.2221 9.74062C17.222 9.92578 17.1471 10.1072 17.0162 10.2379ZM17.0162 7.22531C16.8849 7.35609 16.704 7.43109 16.5189 7.43109C16.3337 7.43109 16.1528 7.35609 16.0221 7.22531C15.8908 7.09453 15.8158 6.91312 15.8158 6.72797C15.8158 6.54286 15.8908 6.36187 16.0221 6.23109C16.1528 6.09984 16.3337 6.02484 16.5189 6.02484C16.704 6.02484 16.8855 6.09989 17.0162 6.23109C17.1471 6.36187 17.2221 6.54281 17.2221 6.72797C17.222 6.91312 17.1471 7.09453 17.0162 7.22531V7.22531Z"
              fill="black"
            />
            <path
              d="M13.1297 19.4813H12.7031V24H14.3093V20.661C14.3093 20.0105 13.7802 19.4813 13.1297 19.4813Z"
              fill="black"
            />
            <path
              d="M9.69043 20.661V24H11.2967V19.4813H10.8702C10.2197 19.4813 9.69043 20.0105 9.69043 20.661V20.661Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "fund":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M21.25 1H9.75C8.785 1 8 1.785 8 2.75V9.25C8 10.215 8.785 11 9.75 11H21.25C22.215 11 23 10.215 23 9.25V2.75C23 1.785 22.215 1 21.25 1ZM11.25 6.75H10.75C10.336 6.75 10 6.414 10 6C10 5.586 10.336 5.25 10.75 5.25H11.25C11.664 5.25 12 5.586 12 6C12 6.414 11.664 6.75 11.25 6.75ZM15.5 8C14.397 8 13.5 7.103 13.5 6C13.5 4.897 14.397 4 15.5 4C16.603 4 17.5 4.897 17.5 6C17.5 7.103 16.603 8 15.5 8ZM20.25 6.75H19.75C19.336 6.75 19 6.414 19 6C19 5.586 19.336 5.25 19.75 5.25H20.25C20.664 5.25 21 5.586 21 6C21 6.414 20.664 6.75 20.25 6.75Z"
              fill="black"
            />
            <path
              d="M0.491 12.002C0.219 12.007 0 12.229 0 12.502V21.5C0 21.776 0.224 22 0.5 22H2.622C2.846 22 3.042 21.852 3.103 21.637L5.316 13.839C5.459 13.335 5.189 12.805 4.696 12.626C3.79 12.296 2.4 11.97 0.491 12.002V12.002Z"
              fill="black"
            />
            <path
              d="M22 17.5C20 17.5 16 20.031 14 20.031C12 20.031 9.74998 18.5 9.74998 18.5C9.74998 18.5 12.444 19 14 19C15.556 19 16 18.469 16 17.75C16 16 13.028 15.728 11.524 15.499C10.048 14.677 9.28098 14.027 6.83598 13.82C6.82198 13.963 6.79998 14.105 6.75998 14.246L4.75098 21.326C7.02598 22.361 10.944 24 13 24C16 24 24 20 24 19C24 18 23 17.5 22 17.5Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "star":
      return (
        <svg
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          stroke={props.fill}
          strokeWidth="2"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    case "star-with-lights":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L14.781 7.59516L21 8.4979L16.5 12.8507L17.562 19L12 16.0952L6.438 19L7.5 12.8507L3 8.4979L9.219 7.59516L12 2Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="18"
            y1="4.58579"
            x2="18.7071"
            y2="3.87868"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="12"
            y1="22"
            x2="12"
            y2="21"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="4.41421"
            y1="3.17157"
            x2="5.12132"
            y2="3.87868"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="1"
            y1="-1"
            x2="2"
            y2="-1"
            transform="matrix(0.685994 0.727607 0.685994 -0.727607 20 13)"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="1"
            y1="-1"
            x2="2"
            y2="-1"
            transform="matrix(0.685994 -0.727607 -0.685994 -0.727607 1 16)"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "website":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      );
    case "mobile-apps":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={props.size}
          height={props.size}
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      );
    case "facebook":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke={props.fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke={props.fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029V3.00029Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
          fill={props.fill}
          stroke={props.fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" />
          <path d="M6 9H2V21H6V9Z" />
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
        </svg>
      );
  }
};

Icon.defaultProps = {
  fill: "none",
};

export default Icon;
