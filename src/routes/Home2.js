import React from "react";
import "./styles.css";
import styled from "styled-components";

const Home2 = ({ userObj }) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22 , 23, 24, 25];
  return (
    <div style={{
      backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/adventcalendar-d50fc.appspot.com/o/bg.png?alt=media&token=23928557-6512-4d86-a70d-d15ef19f953f")`,
      width: "350px",
      backgroundRepeat: "no-repeat",
      
      }}>
      <div
        style={{
          margin: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
          gridColumnGap: "0px",
          gridRowGap: "0px"
        }}
      >
        {items.map((item, key) => (
          <div
            key={key}
            className={`div${item}`}
          >
            {item == 24 ? 
            <>
            <svg width="46" height="86" viewBox="0 0 46 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.0177 24.3712C39.0177 25.716 38.9005 26.6855 38.6957 27.3657C38.4918 28.043 38.2167 28.3842 37.9331 28.5542C37.6479 28.7252 37.2621 28.7782 36.7194 28.6828C36.1742 28.5869 35.5281 28.3512 34.7742 28.0142C34.1449 27.7328 33.4652 27.3926 32.7291 27.0241C32.586 26.9524 32.4408 26.8798 32.2934 26.8062C31.3933 26.3571 30.4213 25.8814 29.3955 25.4479C27.3461 24.5819 25.0533 23.8712 22.6258 23.8712C20.1982 23.8712 17.9055 24.5819 15.8561 25.4479C14.8303 25.8814 13.8583 26.3571 12.9581 26.8062C12.8107 26.8798 12.6655 26.9525 12.5224 27.0241C11.7863 27.3926 11.1067 27.7328 10.4774 28.0142C9.72343 28.3512 9.07732 28.5869 8.53217 28.6828C7.98944 28.7782 7.60367 28.7252 7.31842 28.5542C7.03488 28.3842 6.75977 28.043 6.55584 27.3657C6.35102 26.6855 6.23389 25.716 6.23389 24.3712C6.23389 13.6384 13.6442 5.07764 22.6258 5.07764C31.6074 5.07764 39.0177 13.6384 39.0177 24.3712Z" fill="white" stroke="black"/>
              <rect x="6.23389" y="24.2158" width="32.7838" height="60.8714" fill="white"/>
              <rect x="6.23389" y="24.2158" width="32.7838" height="60.8714" stroke="black"/>
              <rect x="6.23389" y="24.2158" width="32.7838" height="60.8714" stroke="white" stroke-opacity="0.2"/>
              <path d="M22.8607 83.5129L7.07935 61.4654L22.8608 40.8103L38.178 61.4653L22.8607 83.5129Z" fill="white" stroke="#BAB8B5"/>
              <path d="M21.3478 10.5143L19.8343 1.14502H25.0342L23.8323 10.5143H21.3478Z" fill="white" stroke="black"/>
              <rect x="6" width="34" height="86" fill="black" fill-opacity="0.3"/>
              <path d="M22.3782 40.8732L23.3598 40.8499C24.0705 36.6265 25.2128 33.4372 26.5087 31.207C27.8112 28.9654 29.2366 27.7446 30.4881 27.3513C31.1061 27.1571 31.6834 27.1628 32.2045 27.3414C32.7275 27.5207 33.2261 27.8855 33.6637 28.461C34.5464 29.6219 35.1563 31.6128 35.1563 34.4439C35.1563 40.1181 33.1865 46.4564 30.6047 51.8692C28.1415 57.0333 25.1613 61.2723 22.8919 63.2594C20.7093 61.0691 17.7178 56.8091 15.2247 51.6995C12.6095 46.3395 10.5771 40.1139 10.5771 34.4439C10.5771 31.6049 11.1411 29.6287 11.9665 28.4895C12.3747 27.9262 12.838 27.5784 13.3225 27.4123C13.8048 27.2469 14.3473 27.2481 14.9416 27.4489C16.1498 27.8569 17.5548 29.0891 18.8981 31.3266C20.2332 33.5506 21.4729 36.7126 22.3782 40.8732Z" stroke="#BAB8B5"/>
              <line x1="23.0255" y1="63.0862" x2="30.2649" y2="72.7387" stroke="#BAB8B5"/>
              <line x1="22.995" y1="63.7185" x2="15.294" y2="73.3508" stroke="#BAB8B5"/>
            </svg>

            </> :
            item == 25 ?
            <>
              <svg width="59" height="43" viewBox="0 0 59 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.05655 31.5501L29.1084 0.811376L53.1603 31.5501H5.05655Z" fill="white" stroke="black"/>
                <rect x="4.54883" y="25.0005" width="49.1188" height="6.97691" fill="white" stroke="black"/>
                <path d="M16.731 24.5705L27.4891 10.0607L27.489 24.5705H16.731Z" fill="white" stroke="black"/>
                <path d="M30.1706 10.0607L40.9287 24.5705L30.1706 24.5704L30.1706 10.0607Z" fill="white" stroke="black"/>
                <path d="M21.2508 25.2124H28.1508V24.0424H25.1058C24.5508 24.0424 23.8908 24.0874 23.3058 24.1474C25.9008 21.7024 27.6258 19.4674 27.6258 17.2624C27.6258 15.2974 26.3958 14.0224 24.4308 14.0224C23.0358 14.0224 22.0758 14.6674 21.1758 15.6424L21.9708 16.4074C22.5858 15.6874 23.3658 15.1324 24.2658 15.1324C25.6308 15.1324 26.2758 16.0624 26.2758 17.3224C26.2758 19.1974 24.7008 21.4024 21.2508 24.4174V25.2124ZM32.8261 25.4224C34.6711 25.4224 36.4261 24.0424 36.4261 21.6424C36.4261 19.2124 34.9411 18.1324 33.1111 18.1324C32.4511 18.1324 31.9561 18.2974 31.4611 18.5674L31.7461 15.3874H35.9011V14.2174H30.5461L30.2011 19.3624L30.9361 19.8274C31.5661 19.4074 32.0311 19.1674 32.7661 19.1674C34.1311 19.1674 35.0311 20.1124 35.0311 21.6874C35.0311 23.2774 33.9961 24.2824 32.6911 24.2824C31.4311 24.2824 30.6211 23.6974 30.0061 23.0524L29.3161 23.9524C30.0661 24.7024 31.1161 25.4224 32.8261 25.4224Z" fill="#DADADA"/>
                <path d="M29.5 0L54.1817 32.25H4.81828L29.5 0Z" fill="black" fill-opacity="0.3"/>
              </svg>

            </> :
            <>
            <svg width="34" height="55" viewBox="0 0 34 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.2838 15.1359C33.2838 15.9705 33.1693 16.5414 32.9884 16.9247C32.816 17.2899 32.5794 17.4956 32.2777 17.6109C31.9561 17.7339 31.524 17.7675 30.9547 17.7037C30.3888 17.6402 29.7288 17.4857 28.9734 17.2702C28.3568 17.0944 27.6825 16.8788 26.9586 16.6474C24.1779 15.7584 20.6666 14.6359 16.8919 14.6359C13.1172 14.6359 9.60588 15.7584 6.82516 16.6474C6.10132 16.8788 5.42699 17.0944 4.8104 17.2702C4.05497 17.4857 3.39496 17.6402 2.82913 17.7037C2.25976 17.7675 1.82765 17.7339 1.50605 17.6109C1.20438 17.4956 0.96774 17.2899 0.795345 16.9247C0.614444 16.5414 0.5 15.9705 0.5 15.1359C0.5 11.8424 2.28469 8.82198 5.24689 6.60766C8.20918 4.39327 12.3247 3.00879 16.8919 3.00879C21.4591 3.00879 25.5746 4.39327 28.5369 6.60766C31.4991 8.82198 33.2838 11.8424 33.2838 15.1359Z" fill="white" stroke="black"/>
                <path d="M30.6079 17.9748C30.6079 19.6987 30.2083 20.2697 29.7895 20.4611C29.5525 20.5694 29.2223 20.6047 28.7608 20.5429C28.3015 20.4813 27.7597 20.3304 27.1299 20.1158C26.6219 19.9427 26.0635 19.7293 25.4621 19.4995C23.1351 18.6102 20.164 17.4748 16.9756 17.4748C13.7872 17.4748 10.8161 18.6102 8.48908 19.4995C7.88766 19.7293 7.32926 19.9427 6.82126 20.1158C6.19152 20.3304 5.64965 20.4813 5.19042 20.5429C4.72885 20.6047 4.39866 20.5694 4.16166 20.4611C3.74286 20.2697 3.34326 19.6987 3.34326 17.9748C3.34326 11.3312 9.39206 5.85205 16.9756 5.85205C24.5591 5.85205 30.6079 11.3312 30.6079 17.9748Z" fill="white" stroke="black"/>
                <rect x="0.5" y="15.2178" width="32.7838" height="38.4702" fill="white" stroke="black"/>
                <rect x="3.17578" y="18.228" width="27.4319" height="32.4493" fill="white" stroke="black"/>
                <line x1="21.3667" y1="33.4922" x2="30.9409" y2="33.4922" stroke="black"/>
                <line x1="16.4331" y1="29.436" x2="16.4331" y2="17.7278" stroke="black"/>
                <line x1="16.5591" y1="51.0103" x2="16.5591" y2="38.4668" stroke="black"/>
                <line x1="2.67578" y1="33.6182" x2="12.3761" y2="33.6182" stroke="black"/>
                <rect x="12.9161" y="33.9985" width="5.68986" height="5.68986" transform="rotate(-45 12.9161 33.9985)" fill="white" stroke="black"/>
                <path d="M15.8151 9.86928L14.3016 0.5H19.5015L18.2996 9.86928H15.8151Z" fill="white" stroke="black"/>
                <rect y="0.467285" width="34" height="54" fill="black" fill-opacity="0.3"/>
            </svg>
            </>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home2;