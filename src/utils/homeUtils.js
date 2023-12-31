import men from "../assets/men.png"
import women from "../assets/women.png"
import electronics from "../assets/electronics.png"
import jewelries from "../assets/jewelry.png"
import hero1 from "../assets/hero-1.png"
import hero2 from "../assets/hero-2.png"
import hero3 from "../assets/hero-3.png"
import hero4 from "../assets/hero-4.png"

const CategoryData = [
    {
        id: "0",
        type: "MEN",
        link: "men's clothing",
        image: men
    },
    {
        id: "1",
        type: "WOMEN",
        link: "women's clothing",
        image: women
    },
    {
        id: "2",
        type: "ELECTRONICS",
        link: "electronics",
        image: electronics
    },
    {
        id: "3",
        type: "JEWELRIES",
        link: "jewelry",
        image: jewelries
    }
]

const heroData = [
    {
        image: hero1,
        type: "WOMEN",
        desc: "Unleash your inner diva with our curated collection of women's clothing. From chic dresses to trendy ensembles, embrace your individuality and make a statement",
        link: "women"
    },
    {
        image: `${hero2}`,
        type: "MEN",
        desc: "Elevate your style with confidence. Discover impeccable men's fashion that combines sophistication and comfort for the modern gentleman",
        link: "men"
    },
    {
        image: `${hero3}`,
        type: "ELETRONICS",
        desc: "Embrace the future with cutting-edge technology. Explore our innovative range of electronics designed to enhance your daily life",
        link: "eletronics"
    },
    {
        image: `${hero4}`,
        type: "JEWELRIES",
        desc: "Indulge in timeless elegance and sparkle with our exquisite jewelry collection. Each piece is a testament to craftsmanship and adds a touch of sophistication to any occasion",
        link: "jewelries"
    }
]

const featuredData = [
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description: "Rayon Modal Fabric / Imported / Pull On closure / Do Not Bleach / Tumble Dry Low",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: {
        rate: 3.9,
        count: 350
      }
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500
      }
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400
      }
    },
    {
      id: 14,
      title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMUXEN)",
      price: 999.99,
      description: "49 inch super ultrawide 32:9 curved gaming monitor with dual 27 inch screen side by side. Quantum Dot (QLED) technology, HDR support and factory calibration provides stunningly realistic and accurate color and contrast",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 350
      }
    }
  ];
   

export { heroData, CategoryData, featuredData }