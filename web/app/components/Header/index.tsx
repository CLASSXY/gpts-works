"use client";

import { BsGithub, BsTwitter } from "react-icons/bs";

import { usePathname } from "next/navigation";

export default () => {
  const pathname = usePathname();
  return (
    <header className="mx-auto w-full max-w-7xl px-4 md:px-10 mt-8 md:mt-12">
      <div className="flex items-center">
        <p className="text-lg md:text-3xl font-medium ">
          <a
            className="bg-cover bg-center px-3 py-3 md:px-4 md:py-4 m text-white cursor-pointer"
            href="/"
            style={{
              backgroundImage: "url('/brand.svg')",
            }}
          >
            GPTs Works
          </a>
        </p>

        <div className="flex-1">
          <ul className="md:flex float-right flex text-lg text-slate-700 mr-4 items-center">
            <li className="mx-4 hidden md:block">
              <a
                href="/extension"
                target="_self"
                className={
                  pathname === "/extension"
                    ? "text-[#2752f4]"
                    : "hover:text-[#2752f4]"
                }
              >
                Extension
              </a>
            </li>
            <li className="mx-4 hidden md:block">
              <a
                href="https://chat.openai.com/g/g-EBKM6RsBl-gpts-works"
                target="_blank"
                className="hover:text-[#2752f4]"
              >
                GPTs
              </a>
            </li>
            <li className="mx-4">
              <a
                href="https://github.com/all-in-aigc/gpts-works"
                target="_blank"
                className="hover:text-[#2752f4]"
              >
                <BsGithub className="text-xl" />
              </a>
            </li>
            <li className="mx-4">
              <a
                href="https://x.com/idoubicc"
                target="_blank"
                className="hover:text-[#2752f4]"
              >
                <BsTwitter className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
        <a
          className="hidden md:block"
          href="https://www.buymeacoffee.com/idoubi"
          target="_blank"
        >
          <svg
            width="27"
            height="39"
            viewBox="0 0 27 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-current"
          >
            <path
              d="M14.3206 17.9122C12.9282 18.5083 11.3481 19.1842 9.30013 19.1842C8.44341 19.1824 7.59085 19.0649 6.76562 18.8347L8.18203 33.3768C8.23216 33.9847 8.50906 34.5514 8.95772 34.9645C9.40638 35.3776 9.994 35.6069 10.6039 35.6068C10.6039 35.6068 12.6122 35.7111 13.2823 35.7111C14.0036 35.7111 16.1662 35.6068 16.1662 35.6068C16.776 35.6068 17.3635 35.3774 17.8121 34.9643C18.2606 34.5512 18.5374 33.9846 18.5876 33.3768L20.1046 17.3073C19.4267 17.0757 18.7425 16.9219 17.9712 16.9219C16.6372 16.9214 15.5623 17.3808 14.3206 17.9122Z"
              fill="#FFDD00"
            ></path>
            <path
              d="M26.6584 10.3609L26.4451 9.28509C26.2537 8.31979 25.8193 7.40768 24.8285 7.05879C24.5109 6.94719 24.1505 6.89922 23.907 6.66819C23.6634 6.43716 23.5915 6.07837 23.5351 5.74565C23.4308 5.13497 23.3328 4.52377 23.2259 3.91413C23.1336 3.39002 23.0606 2.80125 22.8202 2.32042C22.5073 1.6748 21.858 1.29723 21.2124 1.04743C20.8815 0.923938 20.5439 0.819467 20.2012 0.734533C18.5882 0.308987 16.8922 0.152536 15.2328 0.0633591C13.241 -0.046547 11.244 -0.0134338 9.25692 0.162444C7.77794 0.296992 6.22021 0.459701 4.81476 0.971295C4.30108 1.15851 3.77175 1.38328 3.38115 1.78015C2.90189 2.26775 2.74544 3.02184 3.09537 3.62991C3.34412 4.06172 3.7655 4.3668 4.21242 4.56862C4.79457 4.82867 5.40253 5.02654 6.02621 5.15896C7.76282 5.54279 9.56148 5.6935 11.3356 5.75765C13.302 5.83701 15.2716 5.77269 17.2286 5.56521C17.7126 5.51202 18.1956 5.44822 18.6779 5.37382C19.2458 5.28673 19.6103 4.54411 19.4429 4.02678C19.2427 3.40828 18.7045 3.16839 18.0959 3.26173C18.0062 3.27581 17.917 3.28885 17.8273 3.30189L17.7626 3.31128C17.5565 3.33735 17.3503 3.36169 17.1441 3.38429C16.7182 3.43018 16.2913 3.46773 15.8633 3.49693C14.9048 3.56368 13.9437 3.59445 12.9831 3.59602C12.0391 3.59602 11.0947 3.56942 10.1529 3.50736C9.72314 3.4792 9.29447 3.44339 8.86684 3.39993C8.67232 3.37959 8.47832 3.35821 8.28432 3.33422L8.0997 3.31076L8.05955 3.30502L7.86816 3.27738C7.47703 3.21845 7.0859 3.15066 6.69895 3.06878C6.6599 3.06012 6.62498 3.03839 6.59994 3.0072C6.57491 2.976 6.56127 2.9372 6.56127 2.8972C6.56127 2.85721 6.57491 2.81841 6.59994 2.78721C6.62498 2.75602 6.6599 2.73429 6.69895 2.72563H6.70625C7.04158 2.65418 7.37951 2.59317 7.71849 2.53997C7.83148 2.52224 7.94482 2.50486 8.05851 2.48782H8.06164C8.27389 2.47374 8.48718 2.43567 8.69839 2.41064C10.536 2.2195 12.3845 2.15434 14.231 2.2156C15.1275 2.24168 16.0234 2.29435 16.9157 2.38509C17.1076 2.40491 17.2985 2.42577 17.4894 2.44923C17.5624 2.4581 17.6359 2.46853 17.7094 2.47739L17.8575 2.49878C18.2893 2.56309 18.7189 2.64115 19.1462 2.73293C19.7793 2.87061 20.5923 2.91546 20.8739 3.60906C20.9636 3.82913 21.0043 4.07371 21.0538 4.30474L21.1169 4.59939C21.1186 4.60467 21.1198 4.61008 21.1206 4.61555C21.2697 5.31089 21.4191 6.00623 21.5686 6.70157C21.5795 6.75293 21.5798 6.80601 21.5693 6.85748C21.5589 6.90895 21.5379 6.95771 21.5078 7.00072C21.4776 7.04373 21.4389 7.08007 21.3941 7.10747C21.3493 7.13487 21.2993 7.15274 21.2473 7.15997H21.2431L21.1519 7.17248L21.0617 7.18448C20.7759 7.22168 20.4897 7.25644 20.2033 7.28878C19.639 7.3531 19.0739 7.40872 18.5079 7.45566C17.3831 7.54918 16.2562 7.61055 15.127 7.63975C14.5516 7.65505 13.9763 7.66217 13.4013 7.66113C11.1124 7.65933 8.82553 7.5263 6.55188 7.2627C6.30574 7.2335 6.05959 7.20221 5.81344 7.1704C6.00431 7.19491 5.67472 7.15162 5.60797 7.14224C5.45152 7.12033 5.29506 7.09756 5.13861 7.07392C4.61346 6.99517 4.09144 6.89817 3.56733 6.81317C2.9337 6.70887 2.32771 6.76102 1.75458 7.07392C1.28413 7.33136 0.903361 7.72614 0.663078 8.20558C0.415886 8.71665 0.342354 9.2731 0.231796 9.82224C0.121237 10.3714 -0.0508594 10.9622 0.0143284 11.526C0.154613 12.7427 1.00518 13.7314 2.22863 13.9525C3.37959 14.1611 4.5368 14.3301 5.69714 14.474C10.2552 15.0323 14.8601 15.0991 19.4325 14.6733C19.8048 14.6385 20.1767 14.6006 20.548 14.5596C20.6639 14.5468 20.7813 14.5602 20.8914 14.5987C21.0016 14.6372 21.1017 14.6998 21.1845 14.782C21.2673 14.8642 21.3307 14.9639 21.37 15.0737C21.4093 15.1836 21.4235 15.3009 21.4116 15.4169L21.2958 16.5423C21.0625 18.8164 20.8292 21.0903 20.596 23.3641C20.3526 25.7519 20.1077 28.1395 19.8612 30.5269C19.7916 31.1993 19.7221 31.8715 19.6526 32.5436C19.5858 33.2054 19.5764 33.888 19.4507 34.542C19.2526 35.5704 18.5564 36.2019 17.5405 36.433C16.6098 36.6448 15.659 36.756 14.7045 36.7646C13.6464 36.7704 12.5888 36.7234 11.5307 36.7292C10.4011 36.7354 9.01755 36.6311 8.1456 35.7905C7.37951 35.052 7.27365 33.8958 7.16935 32.8961C7.03028 31.5725 6.89243 30.2491 6.75579 28.9259L5.98918 21.568L5.49324 16.8072C5.48489 16.7285 5.47655 16.6508 5.46873 16.5715C5.40927 16.0036 5.0072 15.4477 4.37357 15.4764C3.83121 15.5004 3.21479 15.9614 3.27841 16.5715L3.64607 20.1011L4.40642 27.4021C4.62302 29.4759 4.8391 31.5501 5.05465 33.6247C5.09637 34.022 5.13548 34.4205 5.17929 34.8179C5.41762 36.9894 7.07599 38.1596 9.12967 38.4892C10.3291 38.6822 11.5578 38.7218 12.775 38.7416C14.3353 38.7667 15.9113 38.8267 17.4461 38.544C19.7203 38.1268 21.4267 36.6082 21.6702 34.2526C21.7398 33.5725 21.8093 32.8923 21.8788 32.2119C22.11 29.9618 22.3409 27.7115 22.5714 25.4611L23.3255 18.1079L23.6713 14.7379C23.6885 14.5708 23.759 14.4137 23.8725 14.2898C23.986 14.1659 24.1363 14.0819 24.3012 14.0501C24.9515 13.9233 25.5732 13.7069 26.0357 13.212C26.7721 12.424 26.9187 11.3967 26.6584 10.3609ZM2.19525 11.0879C2.20516 11.0832 2.18691 11.1682 2.17909 11.2079C2.17752 11.1479 2.18065 11.0947 2.19525 11.0879ZM2.25836 11.5761C2.26357 11.5724 2.27921 11.5933 2.29538 11.6183C2.27087 11.5953 2.25523 11.5781 2.25783 11.5761H2.25836ZM2.32041 11.6579C2.34284 11.696 2.35483 11.72 2.32041 11.6579V11.6579ZM2.44505 11.7591H2.44818C2.44818 11.7627 2.45392 11.7664 2.456 11.7701C2.45255 11.766 2.4487 11.7624 2.44453 11.7591H2.44505ZM24.271 11.6079C24.0373 11.83 23.6853 11.9333 23.3375 11.9849C19.4366 12.5638 15.479 12.8569 11.5354 12.7275C8.71299 12.6311 5.92035 12.3176 3.12613 11.9229C2.85234 11.8843 2.55561 11.8342 2.36735 11.6324C2.01273 11.2517 2.18691 10.4851 2.27921 10.0251C2.3637 9.60373 2.52536 9.04207 3.02653 8.9821C3.80878 8.89031 4.71724 9.22042 5.49115 9.33776C6.4229 9.47996 7.35813 9.59382 8.29683 9.67935C12.303 10.0444 16.3765 9.98755 20.3649 9.45354C21.0919 9.35584 21.8163 9.24233 22.538 9.11299C23.181 8.99774 23.8939 8.78132 24.2825 9.44728C24.5489 9.90098 24.5844 10.508 24.5432 11.0207C24.5305 11.244 24.4329 11.4541 24.2705 11.6079H24.271Z"
              fill="#0D0C22"
            ></path>
          </svg>
        </a>

        <div className="ml:0 md:ml-8">
          <a href="/dashboard/my-gpts">Dashboard</a>
        </div>
      </div>
    </header>
  );
};
