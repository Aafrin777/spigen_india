import layer2 from '../assets/layer2.webp';

// Example categories
export const getCategories = () => [
  "PHONE",
  "WATCH & AUDIO",
  "TABLET & LAPTOP",
  "POWER BANKS",
  "POWER",
  "ACCESSORIES",
  "LIFESTYLE",
];

// Returns a list of brands for a given category
export const getBrandsForCategory = (category) => {
  const brandsByCategory = {
    PHONE: ["APPLE", "SAMSUNG", "GOOGLE", "OTHER"],
    "WATCH & AUDIO": ["APPLE", "SAMSUNG", "OTHER"],
    "TABLET & LAPTOP": ["APPLE", "SAMSUNG", "OTHER"],
    "POWER BANKS": ["UNIVERSAL POWER BANK"],
    ACCESSORIES: ["ACCESSORIES", "APPLE"],
    LIFESTYLE: ["CASES", "BAGS"],
  };
  return brandsByCategory[category.toUpperCase()] || [];
};

// Returns a list of models for a given brand and category
export const getModelsForBrandAndCategory = (brand, category) => {
  const modelsByCategory = {
    PHONE: {
      APPLE: [
        {
          id: 1,
          name: "iPhone 15 Pro Max",
          image: "/path/to/image1.jpg",
          realPrice: 1199,
          discountPrice: 1099,
          colors: [
            { name: "Silver", image: layer2 },
            { name: "Space Gray", image: "/path/to/iphone15-spacegray.jpg" },
            { name: "Gold", image: "/path/to/iphone15-gold.jpg" },
          ],
        },
        // ...other Apple phone models
       
          {
             id: 2,
           name: "iPhone 15 Pro",
           image: "/path/to/image1.jpg",
           realPrice: 999,
           discountPrice: 899,
    
           colors: [
             { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
             { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
             { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
           ],
         },
    
    
          { id: 3,
             name: "iPhone 15 Plus" ,
             image: "/path/to/image1.jpg",
             realPrice: 999,
           discountPrice: 899,
    
           colors: [
             { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
             { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
             { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
           ],
         },
    
    
          { id: 4,
             name: "iPhone 15",
             image: "/path/to/image1.jpg",
             realPrice: 999,
           discountPrice: 899,
    
           colors: [
             { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
             { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
             { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
           ],
         },
         
    
    
          { id: 5,
             name: "iPhone 14 Pro Max",
             image: "/path/to/image1.jpg",
             realPrice: 999,
             discountPrice: 899,
      
             colors: [
               { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
               { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
               { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
             ],
           },
    
    
          { id: 6,
             name: "iPhone 14 Pro",
             image: "/path/to/image1.jpg",
             realPrice: 999,
           discountPrice: 899,
    
           colors: [
             { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
             { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
             { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
           ],
         },
    
    
          { id: 7,
             name: "iPhone 14 Plus",
             image: "/path/to/image1.jpg",
             realPrice: 999,
           discountPrice: 899,
    
           colors: [
             { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
             { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
             { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
           ],
         },
    
    
          { id: 8,
             name: "iPhone 14" ,
             image: "/path/to/image1.jpg",
             realPrice: 999,
             discountPrice: 899,
      
             colors: [
               { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
               { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
               { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
             ],
           },
    
          { id: 9,
             name: "iPhone 13 Pro Max" ,
             image: "/path/to/image1.jpg",
             realPrice: 999,
           discountPrice: 899,
    
           colors: [
             { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
             { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
             { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
           ],
         },
    
          { id: 10,
             name: "iPhone 13 Pro",
             image: "/path/to/image1.jpg",
             realPrice: 999,
           discountPrice: 899,
    
           colors: [
             { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
             { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
             { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
           ],
         },
    
          { id: 11,
             name: "iPhone 13" ,
             image: "/path/to/image1.jpg",
             realPrice: 999,
           discountPrice: 899,
    
           colors: [
             { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
             { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
             { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
           ],
         },
    
          { id: 12,
             name: "iPhone 13 Mini",
             image: "/path/to/image1.jpg",
             realPrice: 999,
             discountPrice: 899,
      
             colors: [
               { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
               { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
               { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
             ],
           },
         // ...other Apple phone models

        
      ],

      SAMSUNG: [
        {
          id: 13,
          name: "Galaxy Z Fold 6",
          image: "/path/to/image1.jpg",
          realPrice: 999,
          discountPrice: 899,
          colors: [
            { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
            { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
            { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
          ],
        },

        
      { id: 14,
        name: "Galaxy Z Flip 6",
        image: "/path/to/image1.jpg",
        realPrice: 999,
        discountPrice: 899,
 
        colors: [
          { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
          { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
          { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
        ],
      },

     { id: 15,
        name: "Galaxy S24",
        image: "/path/to/image1.jpg",
        realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },

     { id: 16,
        name: "Galaxy S24 Plus" ,
        image: "/path/to/image1.jpg",
        realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },,

     { id: 17, name: "Galaxy S24 Ultra" ,
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },,

     { id: 18,
       name: "Galaxy S23" ,
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },
     
     { id: 19,
       name: "Galaxy S23 Plus" ,
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },

     { id: 20, name: "Galaxy S23 Ultra",
       
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },
     
     
      { id: 21,
       name: "Galaxy S23 FE",
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },
     
     { id: 22,
       name: "Galaxy S22",
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },
     
     { id: 23,
       name: "Galaxy S22 Plus",
       
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },
     
     { id: 24,
       name: "Galaxy S22 Ultra",
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },
     
     { id: 26,
     name: "Galaxy Z Flip",
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },

     { id: 26, name: "Galaxy Z Fold" ,

       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },

     { id: 27, name: "Galaxy FE Series",

       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },

     { id: 28, name: "Galaxy A Series",
       image: "/path/to/image1.jpg",
       realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },

     { id: 29, name: "Other Galaxy Series",

       image: "/path/to/image1.jpg",
       realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },

      { id: 30, name: "Galaxy Z Fold 5",
       
       image: "/path/to/image1.jpg",
       realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },


     { id: 31, name: "Galaxy Z Flip 5",
       
       image: "/path/to/image1.jpg",
       realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },

     { id: 32, name: "Galaxy Z Flip 4",
       
       image: "/path/to/image1.jpg",
        realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },

     { id: 33, name: "Galaxy Z Fold 4",
       
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },

     { id: 34, name: "Galaxy Z Flip 3",
       
       image: "/path/to/image1.jpg",
       realPrice: 999,
      discountPrice: 899,

      colors: [
        { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
        { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
        { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
      ],
    },

        // ...other Samsung phone models
      ],


    GOOGLE: [
      { id: 35, name: "Pixel 6 Series",
        image: "/path/to/image1.jpg",
        realPrice: 999,
        discountPrice: 899,
 
        colors: [
          { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
          { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
          { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
        ],
      },

      { id: 36, name: "Pixel 7 Series",
        image: "/path/to/image1.jpg",
        realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },

      
      { id: 37, name: "Pixel 8 Series",
        image: "/path/to/image1.jpg",
        realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },

      
      { id: 38, name: "Pixel 8A Series" ,
        image: "/path/to/image1.jpg",
        realPrice: 999,
        discountPrice: 899,
 
        colors: [
          { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
          { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
          { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
        ],
      },
      
      { id: 39, name: "Pixel Fold Series",
        image: "/path/to/image1.jpg",
        realPrice: 999,
        discountPrice: 899,
 
        colors: [
          { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
          { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
          { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
        ],
      },

      { id: 40, name: "Pixel Fold Series",
        image: "/path/to/image1.jpg",
        realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },

      { id: 41, name: "Pixel Fold", 
        image: "/path/to/image1.jpg",
        realPrice: 999,
        discountPrice: 899,
 
        colors: [
          { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
          { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
          { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
        ],
      },

      { id: 42, name: "Pixel 6a", 
        image: "/path/to/image1.jpg",
        realPrice: 999,
        discountPrice: 899,
 
        colors: [
          { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
          { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
          { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
        ],
      },

      { id: 43, name: "Pixel 7a",
        image: "/path/to/image1.jpg",
        realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },

      { id: 44, name: "Pixel 6 Pro",
        image: "/path/to/image1.jpg",
        realPrice: 999,
       discountPrice: 899,

       colors: [
         { name: "Silver", image: "/path/to/iphone15pro-silver.jpg" },
         { name: "Graphite", image: "/path/to/iphone15pro-graphite.jpg" },
         { name: "Gold", image: "/path/to/iphone15pro-gold.jpg" }
       ],
     },
      ],
    
    OTHERS: [
      { id: 45, name: "OnePlus",
      image: "/path/to/image1.jpg",
      "realPrice": 699,
      "discountPrice": 599,
      "colors": [
        { name: "Obsidian", image: "/path/to/pixel6-obsidian.jpg" },
        { name: "Sorta Seafoam", image: "/path/to/pixel6-seafoam.jpg" },
        { name: "Kinda Coral", image: "/path/to/pixel6-coral.jpg" }
      ],
     },
    ],

      // ...other phone brands and their models
    },


          // Add more other brand models.........................................
    // Models for "WATCH & AUDIO"
    "WATCH & AUDIO": {
      APPLE: [
        {
          id: 46,
          name: "Apple Watch Cases",
          image: "/path/to/apple-watch-series8.jpg",
          realPrice: 399,
          discountPrice: 349,
          colors: [
            { name: "Black", image: "/path/to/apple-watch-series8-black.jpg" },
            { name: "Silver", image: "/path/to/apple-watch-series8-silver.jpg" },
            { name: "Gold", image: "/path/to/apple-watch-series8-gold.jpg" },
          ],
        },

        {
          id: 47,
          name: "Apple Watch Ultra",
          image: "/path/to/apple-watch-series8.jpg",
          realPrice: 399,
          discountPrice: 349,
          colors: [
            { name: "Black", image: "/path/to/apple-watch-series8-black.jpg" },
            { name: "Silver", image: "/path/to/apple-watch-series8-silver.jpg" },
            { name: "Gold", image: "/path/to/apple-watch-series8-gold.jpg" },
          ],
        },

        {
          id: 48,
          name: "Apple Watch 7",
          image: "/path/to/apple-watch-series8.jpg",
          realPrice: 399,
          discountPrice: 349,
          colors: [
            { name: "Black", image: "/path/to/apple-watch-series8-black.jpg" },
            { name: "Silver", image: "/path/to/apple-watch-series8-silver.jpg" },
            { name: "Gold", image: "/path/to/apple-watch-series8-gold.jpg" },
          ],
        },
        
        {
          id: 49,
          name: "Apple Watch",
          image: "/path/to/apple-watch-series8.jpg",
          realPrice: 399,
          discountPrice: 349,
          colors: [
            { name: "Black", image: "/path/to/apple-watch-series8-black.jpg" },
            { name: "Silver", image: "/path/to/apple-watch-series8-silver.jpg" },
            { name: "Gold", image: "/path/to/apple-watch-series8-gold.jpg" },
          ],
        },
        
        {
          id: 50,
          name: "Apple Watch",
          image: "/path/to/apple-watch-series8.jpg",
          realPrice: 399,
          discountPrice: 349,
          colors: [
            { name: "Black", image: "/path/to/apple-watch-series8-black.jpg" },
            { name: "Silver", image: "/path/to/apple-watch-series8-silver.jpg" },
            { name: "Gold", image: "/path/to/apple-watch-series8-gold.jpg" },
          ],
        },
        {
          id: 51,
          name: "Apple Watch Bands",
          image: "/path/to/apple-watch-series8.jpg",
          realPrice: 399,
          discountPrice: 349,
          colors: [
            { name: "Black", image: "/path/to/apple-watch-series8-black.jpg" },
            { name: "Silver", image: "/path/to/apple-watch-series8-silver.jpg" },
            { name: "Gold", image: "/path/to/apple-watch-series8-gold.jpg" },
          ],
        },

        

        {
          id: 52,
          name: "Apple Watch Cases & Bands",
          image: "/path/to/apple-watch-series8.jpg",
          realPrice: 399,
          discountPrice: 349,
          colors: [
            { name: "Black", image: "/path/to/apple-watch-series8-black.jpg" },
            { name: "Silver", image: "/path/to/apple-watch-series8-silver.jpg" },
            { name: "Gold", image: "/path/to/apple-watch-series8-gold.jpg" },
          ],
        },

        {
          id: 53,
          name: "Apple AirPods Cases & Accessories",
          image: "/path/to/apple-watch-series8.jpg",
          realPrice: 399,
          discountPrice: 349,
          colors: [
            { name: "Black", image: "/path/to/apple-watch-series8-black.jpg" },
            { name: "Silver", image: "/path/to/apple-watch-series8-silver.jpg" },
            { name: "Gold", image: "/path/to/apple-watch-series8-gold.jpg" },
          ],
        },


        // ...other Apple watch models
      ],


      SAMSUNG: [
      
        {
          id: 54,
          name: "Galaxy Watch Cases",
          image: "/path/to/galaxy-watch6.jpg",
          realPrice: 299,
          discountPrice: 249,
          colors: [
            { name: "Black", image: "/path/to/galaxy-watch6-black.jpg" },
            { name: "Silver", image: "/path/to/galaxy-watch6-silver.jpg" },
          ],
        },
        {
          id: 55,
          name: "Galaxy Watch Bands",
          image: "/path/to/galaxy-buds-pro.jpg",
          realPrice: 199,
          discountPrice: 149,
          colors: [
            { name: "Black", image: "/path/to/galaxy-buds-pro-black.jpg" },
            { name: "Silver", image: "/path/to/galaxy-buds-pro-silver.jpg" },
          ],
        },
        {
          id: 56,
          name: "Galaxy Watch Bands",
          image: "/path/to/galaxy-buds-pro.jpg",
          realPrice: 199,
          discountPrice: 149,
          colors: [
            { name: "Black", image: "/path/to/galaxy-buds-pro-black.jpg" },
            { name: "Silver", image: "/path/to/galaxy-buds-pro-silver.jpg" },
          ],
        },
        {
          id: 57,
          name: "Galaxy Watch Bands",
          image: "/path/to/galaxy-buds-pro.jpg",
          realPrice: 199,
          discountPrice: 149,
          colors: [
            { name: "Black", image: "/path/to/galaxy-buds-pro-black.jpg" },
            { name: "Silver", image: "/path/to/galaxy-buds-pro-silver.jpg" },
          ],
        },
        {
          id: 58,
          name: "Galaxy Watch Screen Protectors",
          image: "/path/to/galaxy-buds-pro.jpg",
          realPrice: 199,
          discountPrice: 149,
          colors: [
            { name: "Black", image: "/path/to/galaxy-buds-pro-black.jpg" },
            { name: "Silver", image: "/path/to/galaxy-buds-pro-silver.jpg" },
          ],
        },
        {
          id: 59,
          name: "Galaxy Watch Cases & Bands",
          image: "/path/to/galaxy-buds-pro.jpg",
          realPrice: 199,
          discountPrice: 149,
          colors: [
            { name: "Black", image: "/path/to/galaxy-buds-pro-black.jpg" },
            { name: "Silver", image: "/path/to/galaxy-buds-pro-silver.jpg" },
          ],
        },
        {
          id: 60,
          name: "Galaxy Watch Accessories",
          image: "/path/to/galaxy-buds-pro.jpg",
          realPrice: 199,
          discountPrice: 149,
          colors: [
            { name: "Black", image: "/path/to/galaxy-buds-pro-black.jpg" },
            { name: "Silver", image: "/path/to/galaxy-buds-pro-silver.jpg" },
          ],
        },
        // ...other Samsung watch models

      ],

      OTHER: [
        {
          id: 61,
          name: "Fitbit",
          image: "/path/to/fitbit-versa4.jpg",
          realPrice: 229,
          discountPrice: 179,
          colors: [
            { name: "Pink", image: "/path/to/fitbit-versa4-pink.jpg" },
            { name: "Black", image: "/path/to/fitbit-versa4-black.jpg" },
          ],
        },
      ],
      // ...other watch brands and their models
    },

    "TABLET & LAPTOP": {
      APPLE: [
        {
          id: 62,
          name: "MacBook Air",
          image: "/path/to/ipad-pro-11.jpg",
          realPrice: 799,
          discountPrice: 749,
          colors: [
            { name: "Silver", image: "/path/to/ipad-pro-11-silver.jpg" },
            { name: "Space Gray", image: "/path/to/ipad-pro-11-spacegray.jpg" },
          ],
        },

        {
          id: 63,
          name: "iPad", 
          image: "/path/to/ipad-pro-11.jpg",
          realPrice: 799,
          discountPrice: 749,
          colors: [
            { name: "Silver", image: "/path/to/ipad-pro-11-silver.jpg" },
            { name: "Space Gray", image: "/path/to/ipad-pro-11-spacegray.jpg" },
          ],
        },
        {
          id: 64,
          name: "MacBook Pro",
          image: "/path/to/macbook-air-m2.jpg",
          realPrice: 1199,
          discountPrice: 1099,
          colors: [
            { name: "Gold", image: "/path/to/macbook-air-m2-gold.jpg" },
            { name: "Space Gray", image: "/path/to/macbook-air-m2-spacegray.jpg" },
          ],
        },
      ],

      SAMSUNG: [
        {
          id: 57,
          name: "Galaxy Tab S8",
          image: "/path/to/galaxy-tab-s8.jpg",
          realPrice: 649,
          discountPrice: 599,
          colors: [
            { name: "Silver", image: "/path/to/galaxy-tab-s8-silver.jpg" },
            { name: "Black", image: "/path/to/galaxy-tab-s8-black.jpg" },
          ],
        },
        {
          id: 58,
          name: "Galaxy Book Pro",
          image: "/path/to/galaxy-book-pro.jpg",
          realPrice: 999,
          discountPrice: 899,
          colors: [
            { name: "Silver", image: "/path/to/galaxy-book-pro-silver.jpg" },
            { name: "Blue", image: "/path/to/galaxy-book-pro-blue.jpg" },
          ],
        },
//mmore samsung model
      ],
    },


    
    // Add similar structure for TABLET & LAPTOP, POWER BANKS, ACCESSORIES, and LIFESTYLE
  };

  return modelsByCategory[category.toUpperCase()]?.[brand.toUpperCase()] || [];
};

// Example function to find a model by name across all brands
export const findModelByName = (modelName) => {
  const categories = getCategories();
  for (const category of categories) {
    const brands = getBrandsForCategory(category);
    for (const brand of brands) {
      const models = getModelsForBrandAndCategory(brand, category);
      const model = models.find(model => model.name === modelName);
      if (model) return model;
    }
  }
  return null; // Model not found
};