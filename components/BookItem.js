import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function BookItem(props) {
  const { bookData, bookIsFound, searchButtonIsClicked } =
    useContext(AppContext);
  return bookIsFound ? (
    <div className="grid grid-cols-3">
      <div className="">
        <img src={bookData?.cover ?? ""} alt="" className="w-[100px] h-[150px] bg-gray-100" />
      </div>
      <div className="w-96 flex flex-col items-stretch col-span-2">
        <p className="mb-1 font-bold">{bookData.genre}</p>
        <p className="mb-4 text-3xl font-bold">{bookData.title}</p>
        <p className="mb-1">
          {bookData.year} • {bookData.author}
        </p>
        <p className="mb-1">{bookData.publisher}</p>
      </div>
    </div>
  ) : searchButtonIsClicked ? (
    <svg
      width={201}
      height={24}
      viewBox="0 0 201 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.884 2.532C12.538 1.878 11.462 1.878 11.116 2.532L2.116 19.532C2.03498 19.6844 1.99482 19.8551 1.99942 20.0276C2.00402 20.2001 2.05323 20.3685 2.14225 20.5164C2.23128 20.6642 2.35708 20.7864 2.5074 20.8712C2.65772 20.956 2.82743 21.0003 3 21H21C21.1725 21.0004 21.3421 20.956 21.4923 20.8713C21.6425 20.7866 21.7682 20.6644 21.8571 20.5167C21.9461 20.3689 21.9952 20.2006 21.9997 20.0282C22.0043 19.8559 21.964 19.6852 21.883 19.533L12.884 2.532ZM13 18H11V16H13V18ZM11 14V9H13L13.001 14H11Z"
        fill="#DC2626"
      />
      <path
        d="M33.4091 18V6.36364H37.4773C38.2879 6.36364 38.9564 6.50379 39.483 6.78409C40.0095 7.06061 40.4015 7.43371 40.6591 7.90341C40.9167 8.36932 41.0455 8.88636 41.0455 9.45455C41.0455 9.95455 40.9564 10.3674 40.7784 10.6932C40.6042 11.0189 40.3731 11.2765 40.0852 11.4659C39.8011 11.6553 39.4924 11.7955 39.1591 11.8864V12C39.5152 12.0227 39.8731 12.1477 40.233 12.375C40.5928 12.6023 40.8939 12.928 41.1364 13.3523C41.3788 13.7765 41.5 14.2955 41.5 14.9091C41.5 15.4924 41.3674 16.017 41.1023 16.483C40.8371 16.9489 40.4186 17.3182 39.8466 17.5909C39.2746 17.8636 38.5303 18 37.6136 18H33.4091ZM34.8182 16.75H37.6136C38.5341 16.75 39.1875 16.572 39.5739 16.2159C39.964 15.8561 40.1591 15.4205 40.1591 14.9091C40.1591 14.5152 40.0587 14.1515 39.858 13.8182C39.6572 13.4811 39.3712 13.2121 39 13.0114C38.6288 12.8068 38.1894 12.7045 37.6818 12.7045H34.8182V16.75ZM34.8182 11.4773H37.4318C37.8561 11.4773 38.2386 11.3939 38.5795 11.2273C38.9242 11.0606 39.197 10.8258 39.3977 10.5227C39.6023 10.2197 39.7045 9.86364 39.7045 9.45455C39.7045 8.94318 39.5265 8.50947 39.1705 8.15341C38.8144 7.79356 38.25 7.61364 37.4773 7.61364H34.8182V11.4773ZM49.1335 14.4318V9.27273H50.4744V18H49.1335V16.5227H49.0426C48.8381 16.9659 48.5199 17.3428 48.0881 17.6534C47.6563 17.9602 47.1108 18.1136 46.4517 18.1136C45.9062 18.1136 45.4214 17.9943 44.9972 17.7557C44.5729 17.5133 44.2396 17.1496 43.9972 16.6648C43.7547 16.1761 43.6335 15.5606 43.6335 14.8182V9.27273H44.9744V14.7273C44.9744 15.3636 45.1525 15.8712 45.5085 16.25C45.8684 16.6288 46.3267 16.8182 46.8835 16.8182C47.2169 16.8182 47.5559 16.733 47.9006 16.5625C48.2491 16.392 48.5407 16.1307 48.7756 15.7784C49.0142 15.4261 49.1335 14.9773 49.1335 14.4318ZM54.1804 14.8182L54.1577 13.1591H54.4304L58.2486 9.27273H59.9077L55.8395 13.3864H55.7259L54.1804 14.8182ZM52.9304 18V6.36364H54.2713V18H52.9304ZM58.4759 18L55.0668 13.6818L56.0213 12.75L60.1804 18H58.4759ZM67.1335 14.4318V9.27273H68.4744V18H67.1335V16.5227H67.0426C66.8381 16.9659 66.5199 17.3428 66.0881 17.6534C65.6563 17.9602 65.1108 18.1136 64.4517 18.1136C63.9062 18.1136 63.4214 17.9943 62.9972 17.7557C62.5729 17.5133 62.2396 17.1496 61.9972 16.6648C61.7547 16.1761 61.6335 15.5606 61.6335 14.8182V9.27273H62.9744V14.7273C62.9744 15.3636 63.1525 15.8712 63.5085 16.25C63.8684 16.6288 64.3267 16.8182 64.8835 16.8182C65.2169 16.8182 65.5559 16.733 65.9006 16.5625C66.2491 16.392 66.5407 16.1307 66.7756 15.7784C67.0142 15.4261 67.1335 14.9773 67.1335 14.4318ZM79.2259 9.27273V10.4091H74.7031V9.27273H79.2259ZM76.0213 7.18182H77.3622V15.5C77.3622 15.8788 77.4171 16.1629 77.527 16.3523C77.6406 16.5379 77.7846 16.6629 77.9588 16.7273C78.1368 16.7879 78.3243 16.8182 78.5213 16.8182C78.669 16.8182 78.7902 16.8106 78.8849 16.7955C78.9796 16.7765 79.0554 16.7614 79.1122 16.75L79.3849 17.9545C79.294 17.9886 79.1671 18.0227 79.0043 18.0568C78.8414 18.0947 78.6349 18.1136 78.3849 18.1136C78.0062 18.1136 77.6349 18.0322 77.2713 17.8693C76.9115 17.7064 76.6122 17.4583 76.3736 17.125C76.1387 16.7917 76.0213 16.3712 76.0213 15.8636V7.18182ZM81.2429 18V9.27273H82.5838V18H81.2429ZM81.9247 7.81818C81.6634 7.81818 81.438 7.72917 81.2486 7.55114C81.063 7.37311 80.9702 7.15909 80.9702 6.90909C80.9702 6.65909 81.063 6.44508 81.2486 6.26705C81.438 6.08902 81.6634 6 81.9247 6C82.1861 6 82.4096 6.08902 82.5952 6.26705C82.7846 6.44508 82.8793 6.65909 82.8793 6.90909C82.8793 7.15909 82.7846 7.37311 82.5952 7.55114C82.4096 7.72917 82.1861 7.81818 81.9247 7.81818ZM88.3352 18.1818C87.608 18.1818 86.9659 17.9981 86.4091 17.6307C85.8523 17.2595 85.4167 16.7367 85.1023 16.0625C84.7879 15.3845 84.6307 14.5833 84.6307 13.6591C84.6307 12.7424 84.7879 11.947 85.1023 11.2727C85.4167 10.5985 85.8542 10.0777 86.4148 9.71023C86.9754 9.3428 87.6231 9.15909 88.358 9.15909C88.9261 9.15909 89.375 9.25379 89.7045 9.44318C90.0379 9.62879 90.2917 9.84091 90.4659 10.0795C90.6439 10.3144 90.7822 10.5076 90.8807 10.6591H90.9943V6.36364H92.3352V18H91.0398V16.6591H90.8807C90.7822 16.8182 90.642 17.0189 90.4602 17.2614C90.2784 17.5 90.0189 17.714 89.6818 17.9034C89.3447 18.089 88.8958 18.1818 88.3352 18.1818ZM88.517 16.9773C89.0549 16.9773 89.5095 16.8371 89.8807 16.5568C90.2519 16.2727 90.5341 15.8807 90.7273 15.3807C90.9205 14.8769 91.017 14.2955 91.017 13.6364C91.017 12.9848 90.9223 12.4148 90.733 11.9261C90.5436 11.4337 90.2633 11.0511 89.892 10.7784C89.5208 10.5019 89.0625 10.3636 88.517 10.3636C87.9489 10.3636 87.4754 10.5095 87.0966 10.8011C86.7216 11.089 86.4394 11.4811 86.25 11.9773C86.0644 12.4697 85.9716 13.0227 85.9716 13.6364C85.9716 14.2576 86.0663 14.822 86.2557 15.3295C86.4489 15.8333 86.733 16.2348 87.108 16.5341C87.4867 16.8295 87.9564 16.9773 88.517 16.9773ZM97.5455 18.2045C96.9924 18.2045 96.4905 18.1004 96.0398 17.892C95.589 17.6799 95.2311 17.375 94.9659 16.9773C94.7008 16.5758 94.5682 16.0909 94.5682 15.5227C94.5682 15.0227 94.6667 14.6174 94.8636 14.3068C95.0606 13.9924 95.3239 13.7462 95.6534 13.5682C95.983 13.3902 96.3466 13.2576 96.7443 13.1705C97.1458 13.0795 97.5492 13.0076 97.9545 12.9545C98.4848 12.8864 98.9148 12.8352 99.2443 12.8011C99.5777 12.7633 99.8201 12.7008 99.9716 12.6136C100.127 12.5265 100.205 12.375 100.205 12.1591V12.1136C100.205 11.553 100.051 11.1174 99.7443 10.8068C99.4413 10.4962 98.9811 10.3409 98.3636 10.3409C97.7235 10.3409 97.2216 10.4811 96.858 10.7614C96.4943 11.0417 96.2386 11.3409 96.0909 11.6591L94.8182 11.2045C95.0455 10.6742 95.3485 10.2614 95.7273 9.96591C96.1098 9.66667 96.5265 9.45833 96.9773 9.34091C97.4318 9.2197 97.8788 9.15909 98.3182 9.15909C98.5985 9.15909 98.9205 9.19318 99.2841 9.26136C99.6515 9.32576 100.006 9.46023 100.347 9.66477C100.691 9.86932 100.977 10.178 101.205 10.5909C101.432 11.0038 101.545 11.5568 101.545 12.25V18H100.205V16.8182H100.136C100.045 17.0076 99.8939 17.2102 99.6818 17.4261C99.4697 17.642 99.1875 17.8258 98.8352 17.9773C98.483 18.1288 98.053 18.2045 97.5455 18.2045ZM97.75 17C98.2803 17 98.7273 16.8958 99.0909 16.6875C99.4583 16.4792 99.7348 16.2102 99.9205 15.8807C100.11 15.5511 100.205 15.2045 100.205 14.8409V13.6136C100.148 13.6818 100.023 13.7443 99.8295 13.8011C99.6402 13.8542 99.4205 13.9015 99.1705 13.9432C98.9242 13.9811 98.6837 14.0152 98.4489 14.0455C98.2178 14.072 98.0303 14.0947 97.8864 14.1136C97.5379 14.1591 97.2121 14.233 96.9091 14.3352C96.6098 14.4337 96.3674 14.5833 96.1818 14.7841C96 14.9811 95.9091 15.25 95.9091 15.5909C95.9091 16.0568 96.0814 16.4091 96.4261 16.6477C96.7746 16.8826 97.2159 17 97.75 17ZM105.243 14.8182L105.22 13.1591H105.493L109.311 9.27273H110.97L106.902 13.3864H106.788L105.243 14.8182ZM103.993 18V6.36364H105.334V18H103.993ZM109.538 18L106.129 13.6818L107.084 12.75L111.243 18H109.538ZM120.491 18.1818C119.764 18.1818 119.122 17.9981 118.565 17.6307C118.009 17.2595 117.573 16.7367 117.259 16.0625C116.944 15.3845 116.787 14.5833 116.787 13.6591C116.787 12.7424 116.944 11.947 117.259 11.2727C117.573 10.5985 118.01 10.0777 118.571 9.71023C119.132 9.3428 119.779 9.15909 120.514 9.15909C121.082 9.15909 121.531 9.25379 121.861 9.44318C122.194 9.62879 122.448 9.84091 122.622 10.0795C122.8 10.3144 122.938 10.5076 123.037 10.6591H123.151V6.36364H124.491V18H123.196V16.6591H123.037C122.938 16.8182 122.798 17.0189 122.616 17.2614C122.435 17.5 122.175 17.714 121.838 17.9034C121.501 18.089 121.052 18.1818 120.491 18.1818ZM120.673 16.9773C121.211 16.9773 121.666 16.8371 122.037 16.5568C122.408 16.2727 122.69 15.8807 122.884 15.3807C123.077 14.8769 123.173 14.2955 123.173 13.6364C123.173 12.9848 123.079 12.4148 122.889 11.9261C122.7 11.4337 122.42 11.0511 122.048 10.7784C121.677 10.5019 121.219 10.3636 120.673 10.3636C120.105 10.3636 119.632 10.5095 119.253 10.8011C118.878 11.089 118.596 11.4811 118.406 11.9773C118.221 12.4697 118.128 13.0227 118.128 13.6364C118.128 14.2576 118.223 14.822 118.412 15.3295C118.605 15.8333 118.889 16.2348 119.264 16.5341C119.643 16.8295 120.113 16.9773 120.673 16.9773ZM127.134 18V9.27273H128.474V18H127.134ZM127.815 7.81818C127.554 7.81818 127.329 7.72917 127.139 7.55114C126.954 7.37311 126.861 7.15909 126.861 6.90909C126.861 6.65909 126.954 6.44508 127.139 6.26705C127.329 6.08902 127.554 6 127.815 6C128.077 6 128.3 6.08902 128.486 6.26705C128.675 6.44508 128.77 6.65909 128.77 6.90909C128.77 7.15909 128.675 7.37311 128.486 7.55114C128.3 7.72917 128.077 7.81818 127.815 7.81818ZM134.726 9.27273V10.4091H130.203V9.27273H134.726ZM131.521 7.18182H132.862V15.5C132.862 15.8788 132.917 16.1629 133.027 16.3523C133.141 16.5379 133.285 16.6629 133.459 16.7273C133.637 16.7879 133.824 16.8182 134.021 16.8182C134.169 16.8182 134.29 16.8106 134.385 16.7955C134.48 16.7765 134.555 16.7614 134.612 16.75L134.885 17.9545C134.794 17.9886 134.667 18.0227 134.504 18.0568C134.341 18.0947 134.135 18.1136 133.885 18.1136C133.506 18.1136 133.135 18.0322 132.771 17.8693C132.411 17.7064 132.112 17.4583 131.874 17.125C131.639 16.7917 131.521 16.3712 131.521 15.8636V7.18182ZM140.308 18.1818C139.467 18.1818 138.742 17.9962 138.132 17.625C137.526 17.25 137.058 16.7273 136.729 16.0568C136.403 15.3826 136.24 14.5985 136.24 13.7045C136.24 12.8106 136.403 12.0227 136.729 11.3409C137.058 10.6553 137.517 10.1212 138.104 9.73864C138.695 9.35227 139.384 9.15909 140.172 9.15909C140.626 9.15909 141.075 9.23485 141.518 9.38636C141.962 9.53788 142.365 9.78409 142.729 10.125C143.092 10.4621 143.382 10.9091 143.598 11.4659C143.814 12.0227 143.922 12.7083 143.922 13.5227V14.0909H137.195V12.9318H142.558C142.558 12.4394 142.46 12 142.263 11.6136C142.07 11.2273 141.793 10.9223 141.433 10.6989C141.077 10.4754 140.657 10.3636 140.172 10.3636C139.638 10.3636 139.176 10.4962 138.786 10.7614C138.399 11.0227 138.102 11.3636 137.893 11.7841C137.685 12.2045 137.581 12.6553 137.581 13.1364V13.9091C137.581 14.5682 137.695 15.1269 137.922 15.5852C138.153 16.0398 138.473 16.3864 138.882 16.625C139.291 16.8598 139.767 16.9773 140.308 16.9773C140.661 16.9773 140.979 16.928 141.263 16.8295C141.551 16.7273 141.799 16.5758 142.007 16.375C142.215 16.1705 142.376 15.9167 142.49 15.6136L143.786 15.9773C143.649 16.4167 143.42 16.803 143.098 17.1364C142.776 17.4659 142.378 17.7235 141.905 17.9091C141.431 18.0909 140.899 18.1818 140.308 18.1818ZM145.962 18V9.27273H147.257V10.6364H147.371C147.553 10.1705 147.846 9.80871 148.251 9.55114C148.657 9.28977 149.143 9.15909 149.712 9.15909C150.287 9.15909 150.767 9.28977 151.149 9.55114C151.536 9.80871 151.837 10.1705 152.053 10.6364H152.143C152.367 10.1856 152.702 9.82765 153.149 9.5625C153.596 9.29356 154.132 9.15909 154.757 9.15909C155.537 9.15909 156.176 9.40341 156.672 9.89205C157.168 10.3769 157.416 11.1326 157.416 12.1591V18H156.075V12.1591C156.075 11.5152 155.899 11.0549 155.547 10.7784C155.195 10.5019 154.78 10.3636 154.303 10.3636C153.689 10.3636 153.214 10.5492 152.876 10.9205C152.539 11.2879 152.371 11.7538 152.371 12.3182V18H151.007V12.0227C151.007 11.5265 150.846 11.1269 150.524 10.8239C150.202 10.517 149.787 10.3636 149.28 10.3636C148.931 10.3636 148.606 10.4564 148.303 10.642C148.003 10.8277 147.761 11.0852 147.575 11.4148C147.393 11.7405 147.303 12.1174 147.303 12.5455V18H145.962ZM165.368 14.4318V9.27273H166.709V18H165.368V16.5227H165.277C165.072 16.9659 164.754 17.3428 164.322 17.6534C163.891 17.9602 163.345 18.1136 162.686 18.1136C162.141 18.1136 161.656 17.9943 161.232 17.7557C160.807 17.5133 160.474 17.1496 160.232 16.6648C159.989 16.1761 159.868 15.5606 159.868 14.8182V9.27273H161.209V14.7273C161.209 15.3636 161.387 15.8712 161.743 16.25C162.103 16.6288 162.561 16.8182 163.118 16.8182C163.451 16.8182 163.79 16.733 164.135 16.5625C164.483 16.392 164.775 16.1307 165.01 15.7784C165.249 15.4261 165.368 14.9773 165.368 14.4318ZM170.415 14.8182L170.392 13.1591H170.665L174.483 9.27273H176.142L172.074 13.3864H171.96L170.415 14.8182ZM169.165 18V6.36364H170.506V18H169.165ZM174.71 18L171.301 13.6818L172.256 12.75L176.415 18H174.71ZM180.436 18.2045C179.883 18.2045 179.381 18.1004 178.93 17.892C178.48 17.6799 178.122 17.375 177.857 16.9773C177.591 16.5758 177.459 16.0909 177.459 15.5227C177.459 15.0227 177.557 14.6174 177.754 14.3068C177.951 13.9924 178.214 13.7462 178.544 13.5682C178.874 13.3902 179.237 13.2576 179.635 13.1705C180.036 13.0795 180.44 13.0076 180.845 12.9545C181.375 12.8864 181.805 12.8352 182.135 12.8011C182.468 12.7633 182.711 12.7008 182.862 12.6136C183.018 12.5265 183.095 12.375 183.095 12.1591V12.1136C183.095 11.553 182.942 11.1174 182.635 10.8068C182.332 10.4962 181.872 10.3409 181.254 10.3409C180.614 10.3409 180.112 10.4811 179.749 10.7614C179.385 11.0417 179.129 11.3409 178.982 11.6591L177.709 11.2045C177.936 10.6742 178.239 10.2614 178.618 9.96591C179 9.66667 179.417 9.45833 179.868 9.34091C180.322 9.2197 180.769 9.15909 181.209 9.15909C181.489 9.15909 181.811 9.19318 182.175 9.26136C182.542 9.32576 182.896 9.46023 183.237 9.66477C183.582 9.86932 183.868 10.178 184.095 10.5909C184.322 11.0038 184.436 11.5568 184.436 12.25V18H183.095V16.8182H183.027C182.936 17.0076 182.785 17.2102 182.572 17.4261C182.36 17.642 182.078 17.8258 181.726 17.9773C181.374 18.1288 180.944 18.2045 180.436 18.2045ZM180.641 17C181.171 17 181.618 16.8958 181.982 16.6875C182.349 16.4792 182.625 16.2102 182.811 15.8807C183 15.5511 183.095 15.2045 183.095 14.8409V13.6136C183.038 13.6818 182.913 13.7443 182.72 13.8011C182.531 13.8542 182.311 13.9015 182.061 13.9432C181.815 13.9811 181.574 14.0152 181.339 14.0455C181.108 14.072 180.921 14.0947 180.777 14.1136C180.429 14.1591 180.103 14.233 179.8 14.3352C179.5 14.4337 179.258 14.5833 179.072 14.7841C178.891 14.9811 178.8 15.25 178.8 15.5909C178.8 16.0568 178.972 16.4091 179.317 16.6477C179.665 16.8826 180.107 17 180.641 17ZM188.224 12.75V18H186.884V9.27273H188.179V10.6364H188.293C188.497 10.1932 188.808 9.83712 189.224 9.56818C189.641 9.29545 190.179 9.15909 190.838 9.15909C191.429 9.15909 191.946 9.2803 192.389 9.52273C192.832 9.76136 193.177 10.125 193.423 10.6136C193.67 11.0985 193.793 11.7121 193.793 12.4545V18H192.452V12.5455C192.452 11.8598 192.274 11.3258 191.918 10.9432C191.562 10.5568 191.073 10.3636 190.452 10.3636C190.024 10.3636 189.641 10.4564 189.304 10.642C188.971 10.8277 188.707 11.0985 188.514 11.4545C188.321 11.8106 188.224 12.2424 188.224 12.75Z"
        fill="#DC2626"
      />
    </svg>
  ) : (
    <></>
  );
}
export default BookItem;
