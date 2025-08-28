import React from 'react';

export const MenuIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
);

export const XIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);

export const DownloadIcon: React.FC = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

export const ArrowUpRightIcon: React.FC = () => (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6v4m0-4l12 12" /></svg>
);

export const ArrowDownIcon: React.FC = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
);

export const SendIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2L15 22l-4-9-9-4 22-2z" />
  </svg>
);

export const MailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const ArrowUpIcon: React.FC = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7" /></svg>
);

export const ArrowLeftIcon: React.FC = () => (
    <svg className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

export const BriefcaseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="currentColor" viewBox="0 0 256 256">
      <path d="M232,72H192V64a40,40,0,0,0-40-40H104A40,40,0,0,0,64,64v8H24A16,16,0,0,0,8,88V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V88A16,16,0,0,0,232,72ZM80,64a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8H80Z"></path>
    </svg>
);

export const AcademicCapIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="currentColor" viewBox="0 0 256 256">
      <path d="M244,98.35,132.3,158.8a8,8,0,0,1-8.6,0L12,98.35A8,8,0,0,1,8.3,84.11L128,24,247.7,84.11a8,8,0,0,1-3.7,14.24ZM128,172.68l91.63-55.22L128,62.24,36.37,117.46ZM232,130a12,12,0,0,0-12,12v40.51l-84,49.88-84-49.88V142a12,12,0,0,0-24,0v48a12,12,0,0,0,6,10.39l96,57a12,12,0,0,0,12,0l96-57A12,12,0,0,0,244,190V142A12,12,0,0,0,232,130Z"></path>
    </svg>
);

export const GitHubIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
);

export const LinkedInIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

export const DribbbleIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.21 0 .42-.01.62-.03-.02-.12-.03-.25-.04-.38-.2-.11-.4-.22-.58-.35-.55-.38-1.05-.83-1.48-1.34-.4-.48-.75-.99-1.03-1.53-.29-.54-.5-1.12-.62-1.72-.12-.6-.17-1.21-.13-1.82.03-.61.16-1.21.38-1.79.22-.58.53-1.13.91-1.64.38-.51.84-1 1.36-1.42.52-.42 1.1-.78 1.72-1.06.63-.28 1.29-.48 1.98-.59.69-.11 1.39-.12 2.08-.04.69.08 1.37.26 2.02.52.65.26 1.26.6 1.83 1.02.57.42 1.08.9 1.53 1.45.45.55.83 1.15 1.13 1.8.3.65.51 1.34.62 2.05.11.71.12 1.42.04 2.13-.08.71-.26 1.4-.52 2.06-.26.66-.6 1.28-1.02 1.85-.42.57-.9 1.08-1.45 1.53-.55.45-1.15.83-1.8 1.13-.65.3-1.34.51-2.05.62-.71.11-1.42.12-2.13.04-.71-.08-1.4-.26-2.06-.52-.66-.26-1.28-.6-1.85-1.02-.57-.42-1.08-.9-1.53-1.45a9.89 9.89 0 01-1.48-6.1c0-2.65 1.04-5.18 2.93-7.07C9.82 5.04 12.35 4 15 4c.53 0 1.05.07 1.55.2.3.08.59.18.88.3.26.11.52.24.76.38.25.14.48.3.71.47.23.17.44.35.65.55.21.2.4.41.59.63.19.22.36.45.52.69.16.24.31.49.45.75.14.26.26.52.38.8.12.28.22.56.31.85.09.29.17.58.23.88.06.3.11.6.14.91.03.31.05.62.05.93 0 2.65-1.04 5.18-2.93 7.07-1.89 1.89-4.42 2.93-7.07 2.93-.31 0-.62-.02-.93-.05-.3-.03-.6-.08-.9-.14-.29-.06-.57-.14-.85-.23-.28-.09-.56-.2-.84-.31-.28-.11-.55-.24-.8-.38-.26-.14-.52-.3-.76-.45-.25-.15-.49-.32-.72-.5-.23-.18-.45-.37-.66-.57-.21-.2-.41-.41-.6-.62-.19-.21-.37-.44-.54-.67-.17-.23-.33-.48-.48-.73zm8.38-7.06c-.28.12-.56.25-.84.39-.28.14-.55.29-.82.45-.27.16-.53.33-.79.51-.26.18-.51.37-.76.57-.25.2-.49.41-.72.63-.23.22-.45.45-.66.69-.21.24-.41.49-.6.75-.19.26-.37.53-.54.81-.17.28-.33.56-.47.85-.14.29-.27.59-.39.89-.12.3-.23.6-.32.91-.09.31-.17.62-.23.94-.06.32-.11.64-.14.96-.03.32-.05.65-.05.97 0 1.83.72 3.58 2.02 4.88 1.3 1.3 3.05 2.02 4.88 2.02.32 0 .64-.02.96-.05.31-.03.62-.08.93-.14.31-.06.62-.14.92-.23.3-.09.6-.2-.89-.32.29-.12.58-.25.86-.39.28-.14.56-.29.82-.45.27-.16.53-.33.79-.51.26-.18.51.37.76-.57.25-.2.49.41.72-.63.23-.22.45.45.66-.69.21-.24.41.49.6-.75.19-.26-.37.53.54-.81.17.28-.33.56.47.85.14.29.27.59.39.89.12-.3.23.6.32.91.09-.31.17.62.23.94.06.32.11.64.14-.96.03-.32.05-.65.05-.97 0-1.83-.72-3.58-2.02-4.88-1.3-1.3-3.05-2.02-4.88-2.02-.32 0-.64.02-.96.05-.31.03-.62-.08-.93-.14-.31-.06-.62-.14-.92-.23-.3-.09-.6-.2-.89-.32z" clipRule="evenodd"/></svg>
);

export const BehanceIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.41,12.22c-0.12-0.6-0.34-1.2-0.54-1.66c-0.18-0.39-0.42-0.8-0.69-1.15c-0.27-0.34-0.6-0.69-0.96-0.95 c-0.35-0.26-0.78-0.52-1.22-0.7c-0.44-0.18-0.97-0.34-1.52-0.42c-0.55-0.09-1.17-0.13-1.8-0.13H5v14h7.19 c0.67,0,1.3-0.04,1.87-0.13c0.57-0.09,1.08-0.2,1.52-0.36c0.44-0.16,0.83-0.36,1.16-0.6c0.33-0.24,0.6-0.5,0.82-0.79 c0.22-0.29,0.39-0.6,0.5-0.93c0.12-0.33,0.19-0.68,0.22-1.04c0.03-0.36,0.04-0.72,0.04-1.08C22.45,13,22.44,12.61,22.41,12.22z M8,8.22h4.52c0.44,0,0.84,0.02,1.2,0.07c0.36,0.05,0.66,0.12,0.92,0.23c0.26,0.11,0.46,0.24,0.61,0.41c0.15,0.17,0.23,0.36,0.23,0.58 c0,0.25-0.09,0.48-0.28,0.68c-0.19,0.2-0.46,0.36-0.82,0.49C14.05,10.8,13.5,10.87,12.7,10.87H8V8.22z M8,17.78v-4.63h4.94 c0.8,0,1.38,0.08,1.72,0.25c0.34,0.17,0.6,0.39,0.76,0.68c0.16,0.29,0.25,0.6,0.25,0.94c0,0.3-0.08,0.59-0.25,0.86 c-0.17,0.27-0.4,0.5-0.7,0.68c-0.3,0.18-0.68,0.31-1.14,0.39C13.1,17.07,12.39,17.12,11.3,17.12H8V17.78z M17,8.22h-3v1h3V8.22z" /></svg>
);

export const CodeBracketIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
);
  
export const GlobeAltIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
  
export const ShieldCheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);
  
export const PaintBrushIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.43 2.43a2.25 2.25 0 01-2.43-2.43c0-1.062.38-2.036 1.028-2.817l.02-.021a3 3 0 004.242 0l4.242-4.242a3 3 0 000-4.242 3 3 0 00-4.242 0l-.022.022a2.25 2.25 0 01-2.87-2.035 2.25 2.25 0 012.43-2.43c.816 0 1.573.293 2.186.78l1.06.706a3 3 0 004.242 0l4.242-4.242a3 3 0 00-4.242-4.242l-4.242 4.242a3 3 0 000 4.242l-1.06.706a3 3 0 00-2.186.78z" />
    </svg>
);
  

export const Html5Icon: React.FC = () => (
  <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.23.002.626 7.002h8.25l-.346 3.868-2.929.814-2.956-.813-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414H3.41z" /></svg>
);

export const Css3Icon: React.FC = () => (
  <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.23.002.626 7.002h8.25l-.346 3.868-2.929.814-2.956-.813-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414H3.41z" /></svg>
);

export const JavascriptIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.262c.42.639.633 1.233.633 1.782 0 .745-.333 1.325-.996 1.734-.665.41-1.53.613-2.595.613-1.12 0-2.13-.243-3.03-.728-.9-.485-1.575-1.13-2.025-1.935l1.328-1.026c.3.57.735 1.026 1.305 1.368.57.342 1.215.513 1.935.513.57 0 1.034-.12 1.395-.357.363-.238.546-.573.546-1.005 0-.39-.143-.732-.426-1.026-.285-.294-.78-.6-1.485-.918-1.05-.45-1.83-.87-2.34-1.26-.51-.39-.765-.855-.765-1.395 0-.57.243-1.065.728-1.485.485-.42 1.14-.63 1.965-.63.81 0 1.545.203 2.205.608.66.405 1.14.933 1.44 1.583l-1.35.855c-.21-.48-.54-.848-.99-.1103-.45-.255-.945-.383-1.485-.383-.48 0-.855.12-1.125.357s-.405.54-.405.915c0 .33.12.615.357.855.238.24.66.495 1.275.765.99.42 1.74.81 2.25 1.17.51.36.765.81.765 1.35zM8.033 22.493c-1.32 0-2.43-.248-3.33-.743s-1.575-1.178-2.025-2.055l1.328-1.026c.54.99 1.29 1.485 2.25 1.485.45 0 .81-.075 1.08-.225.27-.15.405-.39.405-.72 0-.21-.06-.405-.18-.585-.12-.18-.33-.36-.63-.54-.3-.18-.675-.36-.1125-.54-.45-.18-.87-.39-1.26-.63-.39-.24-.705-.54-1.05-.915-.345-.375-.515-.84-.515-1.395 0-.6.22-1.14.66-1.62.44-.48 1.05-.72 1.83-.72.69 0 1.305.158 1.845.473.54.315.96.72 1.26 1.215l-1.2.9c-.21-.36-.48-.63-.81-.81-.33-.18-.705-.27-1.125-.27-.39 0-.69.09-.9.27s-.315.42-.315.72c0 .24.075.45.225.63.15.18.39.345.72.525.33.18.72.36 1.17.54s.87.39 1.26.63c.39.24.705.525.945.855.24.33.36.72.36 1.17 0 .66-.24 1.245-.72 1.755-.48.51-1.14.765-1.98.765z" /></svg>
);

export const ReactIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l1.41-1.41L12 16.17l4.09-4.08L17.5 13.5 12 19 6.5 13.5z" /></svg>
);

export const NodejsIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
);

export const MernStackIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const MongodbIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const MysqlIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const WordpressIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const PythonIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const GitIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const PostmanIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const EthicalHackingIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const NetworkSecurityIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);

export const VscodeIcon: React.FC = () => (
    <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" /></svg>
);


export const FacebookIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);

export const TwitterIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);

export const YouTubeIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.418 4.814a2.504 2.504 0 01-1.768 1.768C18.219 19 12 19 12 19s-6.219 0-7.812-1.418a2.504 2.504 0 01-1.768-1.768C2 15.22 2 12 2 12s0-3.22.418-4.814a2.504 2.504 0 011.768-1.768C5.781 5 12 5 12 5s6.219 0 7.812.418zM9.545 15.568V8.432L15.568 12 9.545 15.568z" clipRule="evenodd" /></svg>
);

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-12 h-12 text-gray-900"} aria-label="AJ Logo">
        <path d="M22 75L40 25L58 75H48L40 50L32 75H22Z M62 75V25H82V35H72V65C72 75 65 75 62 70V75Z" fill="currentColor" />
    </svg>
);