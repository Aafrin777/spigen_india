// SlidesAPI.js
import GalaxyZFold5 from '../assets/GalaxyZFold5.webp';
import galaxyzflip5 from '../assets/galaxyzflip5.avif';
import galaxy_zflip4 from '../assets/galaxy_zflip4.avif';
import s23ultra from '../assets/s23ultra.avif';
import s23plus from '../assets/s23plus.avif';
import device_s23 from '../assets/device_s23.avif';
import galaxy_s22_ultra from '../assets/galaxy_s22_ultra.avif';
import galaxy_s22_plus from '../assets/galaxy_s22_plus.avif';
import galaxy_z_fold4 from '../assets/galaxy_z_fold4.avif';
import GalaxyZFlip3 from '../assets/GalaxyZFlip3.avif';

import pixel_fold from '../assets/pixel_fold.avif';
import pixel_6a from '../assets/pixel_6a.avif';
import pixel7a from '../assets/pixel7a.avif';
import pixel7pro from '../assets/pixel7pro.avif';

import ip14promax from '../assets/ip14promax.avif';
import ip14pro from '../assets/ip14pro.avif';
import ip14plus from '../assets/ip14plus.avif';
import ip13_mini from '../assets/ip13_mini.avif';
import ip13_pro_max from '../assets/ip13_pro_max.avif';
import ip13_pro from '../assets/ip13_pro.avif';
import ip13 from '../assets/ip13.avif';


import aw_ultra from '../assets/aw_ultra.avif';
import Apple_Watch from '../assets/Apple_Watch.avif';
import apple_watch7 from '../assets/apple_watch7.avif';
import iPad_Pro from '../assets/iPad_Pro.avif';

export const modelsByCategory = () => {
  return [
    { name: "Galaxy Z Fold 5", image: GalaxyZFold5},
    { name: "Galaxy Z Flip 5", image: galaxyzflip5 },
    { name: "Galaxy Z Flip 4", image: galaxy_zflip4 },
    { name: "Galaxy S23 Ultra", image: s23ultra },
    { name: "Galaxy S23 Plus", image:s23plus },
    { name: "Galaxy S23", image: device_s23},
    { name: "Galaxy S22 Ultra", image: galaxy_s22_ultra },
    { name: "Galaxy S22 Plus", image: galaxy_s22_plus },
    { name: "Galaxy Z Fold 4", image: galaxy_z_fold4 },
    { name: "Galaxy Z Flip 3", image:GalaxyZFlip3 },

    { name: "Pixel Fold", image: pixel_fold },
    { name: "Pixel 6a", image: pixel_6a },
    { name: "Pixel 7a", image: pixel7a},
    { name: "Pixel 6 Pro", image: pixel7pro },
    { name: "Pixel 7 Series", image: pixel7pro },

    {  name: "iPhone 14 Pro Max", image: ip14promax },
    {  name: "iPhone 14 Pro", image: ip14pro },
    {  name: "iPhone 14 Plus", image: ip14plus},
    {  name: "iPhone 14", image: ip14promax },
    { name: "iPhone 13 Pro Max", image: ip13_pro_max },
    { name: "iPhone 13 Pro", image: ip13_pro },
    { name: "iPhone 13", image: ip13 },
    { name: "iPhone 13 Mini", image:ip13_mini },

    { name: "Apple Watch Ultra", image: aw_ultra },
    { name: "Apple Watch 7", image: apple_watch7 },
    { name: "Apple Watch", image: Apple_Watch },
    { name: "iPad", image: iPad_Pro },
  ];
};

