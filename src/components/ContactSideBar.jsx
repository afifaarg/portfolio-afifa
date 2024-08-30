import React from 'react';

const ContactSideBar = () => {
  return (
    <div className='flex flex-col items-center fixed text-white left-8 bottom-0'>
      <ul className='space-y-4 mb-4'>
        <li>
          <a href="#">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.75em"
              width="1.75em"
              className='transition-colors duration-300 hover:fill-[#6EFFE1]'
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 01-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 01.676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 01.63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0112 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 01.616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 01-.012 2.716 1 1 0 01-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 01-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 01-.833.135A9.626 9.626 0 0012 5.315c-.89 0-1.772.119-2.592.35a1 1 0 01-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 01-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 01-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.75em"
              width="1.75em"
              className='transition-colors duration-300 hover:fill-[#6EFFE1]'
            >
              <path d="M7.5 9h-4a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5zM7 21H4V10h3v11zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V16a1.5 1.5 0 113 0v5.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V14a5.006 5.006 0 00-5-5zm4 12h-3v-5a2.5 2.5 0 10-5 0v5h-3V10h3v1.203a.5.5 0 00.89.313A3.983 3.983 0 0122 14v7zM5.868 2.002A2.73 2.73 0 005.515 2a2.74 2.74 0 00-2.926 2.729 2.71 2.71 0 002.869 2.728h.028a2.734 2.734 0 10.382-5.455zM5.833 6.46c-.115.01-.231.01-.347-.003h-.028A1.736 1.736 0 115.515 3a1.737 1.737 0 01.318 3.46z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.75em"
              width="1.75em"
              className='transition-colors duration-300 hover:fill-[#6EFFE1]'
            >
              <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.75em"
                    width="1.75em"
                    className='transition-colors duration-300 hover:fill-[#6EFFE1]'
                >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.5 13.202L13 15.535v3.596L19.197 15 16.5 13.202zM14.697 12L12 10.202 9.303 12 12 13.798 14.697 12zM20 10.869L18.303 12 20 13.131V10.87zM19.197 9L13 4.869v3.596l3.5 2.333L19.197 9zM7.5 10.798L11 8.465V4.869L4.803 9 7.5 10.798zM4.803 15L11 19.131v-3.596l-3.5-2.333L4.803 15zM4 13.131L5.697 12 4 10.869v2.262zM2 9a1 1 0 01.445-.832l9-6a1 1 0 011.11 0l9 6A1 1 0 0122 9v6a1 1 0 01-.445.832l-9 6a1 1 0 01-1.11 0l-9-6A1 1 0 012 15V9z" />
            </svg>
          </a>
        </li>
      </ul>
      <div className='w-[1px] bg-white h-28' />
    </div>
  );
};

export default ContactSideBar;
