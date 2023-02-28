export interface Product {
  id: number;
  name: string;
  image: string,
  images:string[],
  price: number;
  description: string;
  rating: number,
  link: string,
  category: string;
  IsShown: boolean;
  likeCount: number;
}

export const products = [
  { 
    id: 1, 
    name: 'Smartphone Xiaomi Redmi Note 10 Pro 8GB/256GB Grey', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/he1/64487159201822/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hfc/64487160578078/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0e/h5b/64487161561118/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-4.jpg'],
    price: 9311, 
    description: 'nFC Technology: Yes,color: grey,screen Type: Color AMOLED, Touch,diagonal: 6.67 inch,rAM size: 8 GB',
    rating: 5, 
    link:'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' ,
    category: 'Smartphones',
    IsShown: false,
    likeCount: 0,
  }, 
  { 
    id: 2, 
    name: 'Apple MacBook Air 13 MGN93', 
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/h58/33271773593630/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/hf2/49803337465886/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-2-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/h44/49803337695262/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-3-Container.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h27/49803337924638/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-4-Container.jpg'],
    price: 494990, 
    description: 'Screen diagonal: 13.3 inch, processor: Apple M1, Graphics card: Apple M1, RAM size: 8 GB, Hard disk type: SSD, total storage capacity: 256 GB', 
    rating:5, 
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' ,
    category: "Laptops",
    IsShown: false,
    likeCount: 0,
  }, 
  { 
    id: 3, 
    name: 'Apple iPad 2021 10.2 64Gb Wi-Fi', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/hb6/48110926626846/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h12/48110926856222/apple-ipad-2021-wi-fi-64gb-seryj-102301598-2-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd5/50600403566622/apple-ipad-2021-10-2-64gb-wi-fi-seryj-102301598-5.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h0b/50600403107870/apple-ipad-2021-10-2-64gb-wi-fi-seryj-102301598-4.jpg'],
    price: 159990, 
    description: 'diagonal: 10.2 inch, screen resolution: 2160x1620, Screen manufacturing technology: TFT IPS, RAM size: 3 GB, Internal memory size: 64 GB, Battery capacity: 8686 match, Color: grey', 
    rating:5, 
    link:'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' ,
    category: "Tablets",
    IsShown: false,
    likeCount: 0,
  }, 
  { 
    id: 4, 
    name: 'Simple Shop Laptop TableT 8', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hc9/46524335816734/simpleshop-laptop-table-42h26h45-102568472-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/hd0/50605473890334/simpleshop-laptop-table-t8-cernyj-102568472-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/ha6/50605474119710/simpleshop-laptop-table-t8-cernyj-102568472-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/hbf/50605474578462/simpleshop-laptop-table-t8-cernyj-102568472-5.jpg'],
    price: 8288, 
    description: 'Type: active cooling, laptop diagonal: 15.6, number of fans: 2, backlight: No', 
    rating: 4.6, 
    link:'https://kaspi.kz/shop/p/simpleshop-laptop-table-t8-102568472/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' ,
    category: "Laptops",
    IsShown: false,
    likeCount: 0,
  },
  { 
    id: 5, 
    name: 'Apple AirPods 3', 
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/ha0/46719094226974/apple-airpods-3-belyj-102667744-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/h00/46719106744350/apple-airpods-3-belyj-102667744-4.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h77/hca/46719107104798/apple-airpods-3-belyj-102667744-6.jpg'],
    price: 96900, 
    description: 'Color: White, Type: Headset, Type: Intra-channel,Connection: Wireless,Type of acoustic design: open,Mounting type: Without mounting, Active noise reduction system: No, Microphone: Yes', 
    rating: 5, 
    link:'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item',
    category: "Smartphones",
    IsShown: false,
    likeCount: 0,

  },
  { 
    id: 6, 
    name: 'Smartphone Apple iPhone 13 128Gb white', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h07/46392664424478/apple-iphone-13-128gb-belyj-102298420-2-Container.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h49/46392664621086/apple-iphone-13-128gb-belyj-102298420-3-Container.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h44/46392664817694/apple-iphone-13-128gb-belyj-102298420-4-Container.jpg'],
    price: 19900, 
    description: 'nFC Technology: Yes,color: white,screen Type: OLED, Super Retina XDR,diagonal: 6.1 inch,rAM size: 4 GB', 
    rating: 4.5, 
    category: "Smartphones",
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' ,
    IsShown: false,
    likeCount: 0,
  }, 
  { 
    id: 7, 
    name: 'Smartphone Apple iPhone 14 128Gb black',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h7c/63072540360734/apple-iphone-14-128gb-cernyj-106363023-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/hfd/63075491479582/apple-iphone-14-128gb-cernyj-106363023-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h96/63075491708958/apple-iphone-14-128gb-cernyj-106363023-4.jpg'],
    price: 19778, 
    description: 'nFC Technology: Yes color: Black screen Type: OLED, Super Retina XDR display diagonal: 6.1 inch rAM size: 6 GB', 
    rating: 5, 
    category: "Smartphones",
    link:'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item', 
    IsShown: false,
    likeCount: 0,
  }, 
  { 
    id: 8, 
    name: 'Smartphone Samsung Galaxy A13 4GB/128GB Black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h78/49613712195614/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h9f/49613712424990/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/h9a/49613712654366/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-4.jpg'],
    price: 211535, 
    description: 'nFC Technology: Yes color: Black screen Type: PLS TFT LCD Touch, Multi-touch diagonal: 6.6 inch rAM size: 4 GB', 
    rating: 5, 
    category: "Smartphones",
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' ,
    IsShown: false,
    likeCount: 0,
  }, 
  { 
    id: 10, 
    name: 'Notebook ASUS Laptop 15 F515EA-BQ2187W 90NB0TY1-M01AZ0 grey', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hcf/68083562315806/asus-f515ea-bq2187w-90nb0ty1-m01az0-seryi-108527163-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/h81/68083563102238/asus-laptop-15-f515ea-bq2187w-90nb0ty1-m01az0-seryi-108527163-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/hd6/68083563626526/asus-laptop-15-f515ea-bq2187w-90nb0ty1-m01az0-seryi-108527163-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h49/68083564150814/asus-laptop-15-f515ea-bq2187w-90nb0ty1-m01az0-seryi-108527163-4.jpg'],
    price: 34999, 
    description: 'display diagonal: 15.6 inch processor: Intel Pentium Gold 7505 graphics: Intel UHD Graphics rAM size: 4 GB hard Drive Type: SSD storage Capacity: 128 GB', 
    rating: 5, 
    category: "Laptops",
    link:'https://kaspi.kz/shop/p/asus-laptop-15-f515ea-bq2187w-90nb0ty1-m01az0-seryi-108527163/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {  id: 11, 
    name: 'Notebook Lenovo IdeaPad 1 14IGL05 81VU00H3RU grey', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h79/67940462264350/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h27/67940462788638/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h32/h60/67940463312926/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-4.jpg'],
    price: 34999, 
    description: 'display diagonal: 14 inch rocessor: Intel Celeron N4020 graphics: Intel UHD Graphics 600 rAM size: 4 G hard Drive Type: SSD storage Capacity: 128 GB', 
    rating: 5, 
    category: "Laptops",
    link:'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 12, 
    name: 'Notebook ASUS TUF Gaming A15 FA506ICB-HN105 90NR0667-M00BL0 black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/h2a/66995169755166/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hf0/66995170410526/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h5c/66995171065886/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hf0/66995170410526/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-2.jpg'],

    price: 34999, 
    description: 'display diagonal: 15.6 inch processor: AMD Ryzen 5 4600H graphics: NVIDIA GeForce RTX 3050 rAM size: 8 GB hard Drive Type: SSD',  rating: 0, 
    category: "Laptops",
    link:'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 13, 
    name: 'Samsung Galaxy Tab A8 SM-X205N 10.5 inch 4GB/128GB Silver Tablet PC', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/h0e/48290729885726/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-128-gb-serebristyj-103450846-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/h9f/48290730344478/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-128-gb-serebristyj-103450846-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h10/50427763523614/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-128-gb-serebristyj-103450846-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h97/48290731261982/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-128-gb-serebristyj-103450846-4.jpg'],
    price: 34999, 
    description: 'diagonal: 10.5 inch screen resolution: 1920x1200 screen Technology: TFT IPS rAM size: 4 GB',
    rating: 0, 
    category: "Tablets",
    link:'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-128-gb-serebristyi-103450846/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 14, 
    name: 'Samsung Galaxy Tab A7 Lite SM-T225 Tablet PC 8.7 inch 3GB/32GB Silver', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbd/h7a/51043808215070/samsung-galaxy-tab-a7-lite-sm-t225-serebristyj-101785769-1-Container.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h28/51043808739358/samsung-galaxy-tab-a7-lite-sm-t225-8-7-dujm-3-gb-32-gb-serebristyj-101785769-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/hb4/51043809263646/samsung-galaxy-tab-a7-lite-sm-t225-8-7-dujm-3-gb-32-gb-serebristyj-101785769-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h5f/51043809787934/samsung-galaxy-tab-a7-lite-sm-t225-8-7-dujm-3-gb-32-gb-serebristyj-101785769-4.jpg'],
    price: 34999, 
    description: 'diagonal: 8.7 inch screen resolution: 1340x800 screen Technology: AMOLED rAM size: 3 GB internal memory size: 32 GB', 
     rating: 0, 
    category: "Tablets",
    link:'https://kaspi.kz/shop/p/samsung-galaxy-tab-a7-lite-sm-t225-8-7-djuim-3-gb-32-gb-serebristyi-101785769/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 15, 
    name: 'Notebook ASUS TUF Gaming A15 FA506ICB-HN105 90NR0667-M00BL0 black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/h2a/66995169755166/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hf0/66995170410526/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h5c/66995171065886/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hf0/66995170410526/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-2.jpg'],

    price: 34999, 
    description: 'display diagonal: 15.6 inch processor: AMD Ryzen 5 4600H graphics: NVIDIA GeForce RTX 3050 rAM size: 8 GB hard Drive Type: SSD',  rating: 0, 
    category: "Tablets",
    link:'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 16, 
    name: 'Apple iPad Pro 2022 Tablet 11 128GB Wi-Fi Grey', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/hca/64895798050846/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/hca/64895798050846/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/hca/64895798050846/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/hca/64895798050846/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg'],

    price: 34999, 
    description: 'diagonal: 11 inch screen resolution: 2388x1668 screen Technology: Liquid Retina rAM size: 8 GB',  
    rating: 0, 
    category: "Tablets",
    link:'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 17, 
    name: 'TV Samsung UE43T5300AUXCE 109 cm black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hb2/49319748927518/samsung-ue43t5300au-chernyi-100182013-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/hcb/49319749156894/samsung-ue43t5300au-chernyi-100182013-4.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h69/49319749615646/samsung-ue43t5300au-chernyi-100182013-5.jpg'],

    price: 34999, 
    description: 'type: LED TV diagonal: 43 inch resolution: 1920x1080 hD Support: 1080p Full HD smart TV Technology: Yes wi-Fi: Yes',
      rating: 0, 
    category: "TV",
    link:'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 18, 
    name: 'TV SSMART 43F20 109 cm black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h62/51432017985566/ssmart-43f20-chernyi-105159159-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h1f/51432018214942/ssmart-43f20-chernyi-105159159-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/he6/51432018444318/ssmart-43f20-chernyi-105159159-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9d/hb9/51432018673694/ssmart-43f20-chernyi-105159159-4.jpg'],
    price: 34999, 
    description: 'type: LED TV diagonal: 43 inch resolution: 1920x1080 hD Support: 1080p Full HD smart TV Technology: Yes wi-Fi: Yes',
    rating: 0, 
    category: "TV",
    link:'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 19, 
    name: 'TV Xiaomi TV P1 32 L32M6-6ARG 81 cm black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h9f/49320434466846/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hb7/49320434237470/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb4/h4d/49320434925598/xiaomi-l32m6-6arg-cernyj-103039169-4.jpg'],
    price: 34999, 
    description: 'type: LED TV diagonal: 32 inch resolution: 1366x768 hd Support: 720p HD smart TV Technology: Yes wi-Fi: Yes',
    rating: 0, 
    category: "TV",
    link:'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  },
  {id: 20, 
    name: 'TV Yasin 32G7 81 cm black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/hc5/61768877965342/yasin-g7-cernyj-103489358-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h98/61768878194718/yasin-g7-cernyj-103489358-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h3b/61768878424094/yasin-g7-cernyj-103489358-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/hc5/61768877965342/yasin-g7-cernyj-103489358-1.jpg'],
    price: 34999, 
    description: 'type: LED TV diagonal: 43 inch resolution: 1920x1080 hD Support: 1080p Full HD smart TV Technology: Yes wi-Fi: Yes',
      rating: 0, 
    category: "TV",
    link:'https://kaspi.kz/shop/p/yasin-32g7-81-sm-chernyi-103489358/?c=750000000#!/item', 
    IsShown: false,
    likeCount: 0,
  }
];


// /*
// Copyright Google LLC. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at https://angular.io/license
// */