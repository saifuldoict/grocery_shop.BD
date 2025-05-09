import Banana from './Banana.jpg'
import banner_img from './banner_img.jpg'
import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import blog_1 from './blog_1.jpg'
import blog_2 from './blog_2.jpg'
import blog_3 from './blog_3.jpg'
import carrot from './carrot.png'
import cart_img_1 from './cart_img_1.png'
import cart_img_2 from './cart_img_2.png'
import cart_img_3 from './cart_img_3.png'
import cat_1 from './cat_1.png'
import cat_2 from './cat_2.png'
import cat_3 from './cat_3.png'
import cat_4 from './cat_4.png'
import cauliflower from './cauliflower.jpg'
import coriander from './coriander.jpg'
import creditCard from './creditCard.png'
import eggplant from './eggplant.jpg'
import favicon from './favicon.png'
import feature_img_2 from './feature_img_2.png'
import feature_img_3 from './feature_img_3.png'
import ff from './ff.png'
import freshDairy from './freshDairy.jpg'
import freshFruits from './freshFruits.png'
import fruit from './fruit.png'
import mixedFruits from './mixedFruits.jpg'
import garlik from './garlik.jpg'
import healthy from './healthy.jpg'
import kiwi from './kiwi.jpg'
import vegtables_1 from './vegtables_1.jpg'
import vegtables from './vegtables.jpg'
import Leadyfinger from './Leadyfinger.jpg'
import Lemon from './Lemon.jpg'
import Milk from './Milk.png'
import Pappaya from './Pappaya.jpg'
import payment from './payment.png'
import Pea from './Pea.jpg'
import pic_1 from './pic_1.png'
import pic_2 from './pic_2.png'
import pic_3 from './pic_3.png'
import pic_4 from './pic_4.png'
import pineapple from './pineapple.jpg'
import product_1 from './product_1.png'
import product_2 from './product_2.png'
import product_3 from './product_3.png'
import product_4 from './product_4.png'
import product_6 from './product_6.png'
import product_7 from './product_7.png'
import product_8 from './product_8.png'
import Strawberry from './Strawberry.jpg'
import Tomato from './Tomato.png'
import delivery_truck from './delivery_truck.svg'
import leaf_icon from './leaf_icon.svg'
import coin_icon from './coin_icon.svg'
import trust_icon from './trust_icon.svg'
import potato_1 from './potato_1.png'
import potato_2 from './potato_2.png'
import potato_3 from './potato_3.png'
import potato_4 from './potato_4.png'
import tomato_1 from './tomato_1.png'
import tomato_2 from './tomato_2.png'
import carrot_2 from './carrot_2.png'
import product_5 from './product_5.jpg'
import star from './star.svg'
import plus from './plus.png'
import minus from './minus.png'
import whiteStar from './whiteStar.png'
import cart from './cart.png'
import cross from './cross.png'
import rightArrow from './rightArrow.png'
export const assets ={
    Banana,
    banner_img,
    bg1,
    bg2,
    blog_1,
    blog_2,
    blog_3,
    carrot,
    cart_img_1,
    cart_img_2,
    cart_img_3,
    cat_1,
    cat_2,
    cat_3,
    cat_4,
    cauliflower,
    coriander,
    creditCard,
    eggplant,
    favicon,
    feature_img_2,
    feature_img_3,
    ff,
    freshDairy,
    freshFruits,
    fruit,
    mixedFruits,
    garlik,
    healthy,
    kiwi,
    vegtables,
    vegtables_1,
    Leadyfinger,
    Lemon,
    Milk,
    Pappaya,
    payment,
    Pea,
    pic_1,
    pic_2,
    pic_3,
    pic_4,
    pineapple,
    product_1,
    product_2,
    product_3,
    product_4,
    
    product_6,
    product_7,
    product_8,
    Strawberry,
    Tomato,
    delivery_truck,
    coin_icon,
    leaf_icon,
    trust_icon,
    potato_1,
    potato_2,
    potato_3,
    potato_4,
    tomato_1,
    tomato_2,
    carrot_2,
    star,
    plus,
    minus,
    whiteStar,
    cart,
    cross,
    rightArrow


}

export const categories = [
    {
        text:"Organic veggies",
        path:"Vegetables",
        image:product_1,
        bgColor: "#FEF6DA"
    },
    {
        text:"Fresh Fruits",
        path:"Fruits",
        image:product_2,
        bgColor: "#FEE0E0"
    },
    {
        text:"Instant Food",
        path:"Food",
        image:product_3,
        bgColor: "#F0F5DE"
    },
    {
        text:"Dairy Products",
        path:"Dairy",
        image:product_4,
        bgColor: "#FEE6CD"
    },
    {
        text:"Bakery & Breads",
        path:"Bakery",
        image:product_5,
        bgColor: "#E0F6FF"
    },
    {
        text:"Gains & Gereals",
        path:"Grains",
        image:product_6,
        bgColor: "#FEF6DA"
    }
]


export const footerLinks =[
    {
        title: "Quick Links",
        links:[
            {text: "Home", url:"#"},
            {text: "Best Sellers", url:"#"},
            {text: "Offers & Deals", url:"#"},
            {text: "Contact Us", url:"#"},
            {text: "FAQs", url:"#"},
        ],
    },
    {
        title: "Need helps",
        links:[
            {text: "Delivery Information", url:"#"},
            {text: "Return & Refund Policy", url:"#"},
            {text: "Payment Methods", url:"#"},
            {text: "Truck your Order", url:"#"},
            {text: "Contact Us", url:"#"},
        ],
    },
    {
        title: "Follow Us",
        links:[
            {text: "Instagram", url:"#"},
            {text: "Twitter", url:"#"},
            {text: "Facebook", url:"#"},
            {text: "Youtube", url:"#"},
           
        ],
    },
];

export const features = [
    {
        icon: delivery_truck,
        title: "Faster Delivery",
        description: 'Groceries delivered in under 30 minutes.'
    },
    {
        icon: leaf_icon,
        title: "Fresh Guaranteed",
        description: 'Fresh produce straight from the source'
    },
    {
        icon: coin_icon,
        title: "Trusted by Thousands",
        description: 'Loved by 20,000+ happy customers.'
    }
]

export const dummyProducts = [
    //vegetables
    {
        _id: "veg_1",
        name: 'Potato 500g',
        category: "Bakery & Breads",
        price: 25,
        offerPrice: 20,
        image: [potato_1, potato_2, potato_3,potato_4],
        description:[
            "Fresh and organic",
            "Rich i carbohydrates",
            "Ideal for curries and fries"
        ],
        createdAt: '2025-03-25T07:17:46.018z',
        updatedAt: '2025-03-25T07:18:13.103z',
        inStock:true
    },
    {
        _id: "veg_2",
        name: 'tomato',
        category: "Vegetables",
        price: 40,
        offerPrice: 30,
        image: [tomato_1, tomato_2],
        description:[
            "Juicy and ripe",
            "Rich in Vitamin C",
            "Perfect for salads and sauces"
        ],
        createdAt: '2025-03-25T07:17:46.018z',
        updatedAt: '2025-03-25T07:18:13.103z',
        inStock:true
    },
    {
        _id: "veg_3",
        name: 'carrot',
        category: "Vegetables",
        price: 35,
        offerPrice: 30,
        image: [carrot_2],
        description:[
            "Sweet and crunchy",
            "Rich i carbohydrates",
            "Ideal for curries and fries"
        ],
        createdAt: '2025-03-25T07:17:46.018z',
        updatedAt: '2025-03-25T07:18:13.103z',
        inStock:true
    },
    {
        _id: "Meet_1",
        name: 'Meet',
        category: "Fruits",
        price: 755,
        offerPrice: 730,
        image: [cart_img_3, cat_4],
        description:[
            "Fresh and organic",
            
        ],
        createdAt: '2025-03-25T07:17:46.018z',
        updatedAt: '2025-03-25T07:18:13.103z',
        inStock:true
    },
    {
        _id: "Meet_1",
        name: 'Meet',
        category: "Meet",
        price: 755,
        offerPrice: 730,
        image: [cart_img_3, cat_4],
        description:[
            "Fresh and organic",
            
        ],
        createdAt: '2025-03-25T07:17:46.018z',
        updatedAt: '2025-03-25T07:18:13.103z',
        inStock:true
    },
    {
        _id: "Meet_1",
        name: 'Meet',
        category: "Meet",
        price: 755,
        offerPrice: 730,
        image: [cart_img_3, cat_4],
        description:[
            "Fresh and organic",
            
        ],
        createdAt: '2025-03-25T07:17:46.018z',
        updatedAt: '2025-03-25T07:18:13.103z',
        inStock:true
    },
    {
        _id: "veg_1",
        name: 'Potato 500g',
        category: "Vegetables",
        price: 25,
        offerPrice: 20,
        image: [potato_1, potato_2, potato_3,potato_4],
        description:[
            "Fresh and organic",
            "Rich i carbohydrates",
            "Ideal for curries and fries"
        ],
        createdAt: '2025-03-25T07:17:46.018z',
        updatedAt: '2025-03-25T07:18:13.103z',
        inStock:true
    },
    {
        _id: "Meet_1",
        name: 'Meet',
        category: "Food",
        price: 755,
        offerPrice: 730,
        image: [cart_img_3, cat_4],
        description:[
            "Fresh and organic",
            
        ],
        createdAt: '2025-03-25T07:17:46.018z',
        updatedAt: '2025-03-25T07:18:13.103z',
        inStock:true
    },

]

export const dummyAddress =[
    
]