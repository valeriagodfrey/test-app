import React from "react";

interface Props {
  type: React.HTMLInputTypeAttribute | undefined;
}
export const EyeIcon = ({ type }: Props) => {
  return (
    <div>
      {type === "password" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5621 8.54687C15.9442 7.24503 15.2088 6.18331 14.356 5.36171L13.4617 6.25609C14.191 6.95306 14.8262 7.86484 15.3756 9.00038C13.9131 12.0273 11.8371 13.4652 8.99998 13.4652C8.14838 13.4652 7.36398 13.3341 6.6468 13.0718L5.67771 14.0409C6.67381 14.5009 7.78123 14.7309 8.99998 14.7309C12.3785 14.7309 14.8992 12.9713 16.5621 9.45214C16.6289 9.31061 16.6636 9.15603 16.6636 8.99951C16.6636 8.84298 16.6289 8.6884 16.5621 8.54687ZM15.4446 2.91062L14.6953 2.16038C14.6822 2.14731 14.6667 2.13694 14.6496 2.12986C14.6326 2.12278 14.6143 2.11914 14.5958 2.11914C14.5773 2.11914 14.559 2.12278 14.5419 2.12986C14.5249 2.13694 14.5094 2.14731 14.4963 2.16038L12.5738 4.08202C11.5138 3.54062 10.3226 3.26992 8.99998 3.26992C5.62146 3.26992 3.10076 5.02949 1.43787 8.54863C1.37103 8.69016 1.33636 8.84474 1.33636 9.00126C1.33636 9.15779 1.37103 9.31237 1.43787 9.4539C2.10221 10.8531 2.90201 11.9747 3.83728 12.8185L1.97717 14.6781C1.95081 14.7045 1.93601 14.7402 1.93601 14.7775C1.93601 14.8148 1.95081 14.8506 1.97717 14.8769L2.72758 15.6273C2.75395 15.6537 2.7897 15.6685 2.82698 15.6685C2.86426 15.6685 2.90002 15.6537 2.92639 15.6273L15.4446 3.1096C15.4577 3.09654 15.4681 3.08103 15.4752 3.06396C15.4822 3.04689 15.4859 3.02859 15.4859 3.01011C15.4859 2.99163 15.4822 2.97333 15.4752 2.95626C15.4681 2.93919 15.4577 2.92368 15.4446 2.91062ZM2.62439 9.00038C4.08865 5.97343 6.16463 4.53554 8.99998 4.53554C9.95869 4.53554 10.8304 4.70007 11.6212 5.03458L10.3855 6.27033C9.80025 5.95807 9.13016 5.84219 8.47405 5.93976C7.81794 6.03734 7.21057 6.3432 6.74153 6.81224C6.27249 7.28129 5.96662 7.88866 5.86904 8.54477C5.77147 9.20088 5.88736 9.87097 6.19961 10.4562L4.73324 11.9226C3.92166 11.2063 3.22205 10.2358 2.62439 9.00038ZM6.96092 9.00038C6.96122 8.69042 7.03464 8.3849 7.17521 8.10864C7.31578 7.83238 7.51953 7.59318 7.76992 7.41046C8.0203 7.22774 8.31026 7.10666 8.61622 7.05706C8.92219 7.00745 9.23555 7.03072 9.53084 7.12497L7.05426 9.60156C6.99218 9.40721 6.96069 9.2044 6.96092 9.00038Z"
            fill="#595959"
          />
          <path
            d="M8.92957 10.969C8.86875 10.969 8.80881 10.9662 8.7494 10.9607L7.82092 11.8892C8.37936 12.1031 8.98779 12.1506 9.57267 12.026C10.1575 11.9015 10.6938 11.6102 11.1167 11.1873C11.5395 10.7645 11.8308 10.2282 11.9554 9.64335C12.0799 9.05847 12.0324 8.45004 11.8185 7.8916L10.8901 8.82008C10.8955 8.87949 10.8983 8.93943 10.8983 9.00025C10.8985 9.25883 10.8476 9.5149 10.7487 9.75382C10.6498 9.99274 10.5048 10.2098 10.322 10.3927C10.1392 10.5755 9.92206 10.7205 9.68314 10.8194C9.44422 10.9183 9.18815 10.9691 8.92957 10.969Z"
            fill="#595959"
          />
        </svg>
      ) : (
        ""
      )}
    </div>
  );
};
