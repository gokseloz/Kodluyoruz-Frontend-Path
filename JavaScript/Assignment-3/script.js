const menu = [{
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

const categoryAll = menu.map(item => item.category) // returns an array but DUPLICATED
const categories = ["ALL", ...new Set(categoryAll)] // remove duplication with spread syntax(...) and create a new array

const categoryBtnCont = document.querySelector(".btn-container");
const categoryBtns = categories
    .map(category => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");
categoryBtnCont.innerHTML = categoryBtns;


const section = document.querySelector(".section-center");
const buttons = document.querySelectorAll(".btn-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const getMenu = menu.filter(item => {       // get related menu when clicking related button
            if (item.category === btn.dataset.id) {
                return item
            }
        })
        console.log(getMenu)

        if (btn.dataset.id === "ALL") {
            renderMenu(menu)
        } else {
            renderMenu(getMenu)
        }
    })
})

const renderMenu = (arg) => {           // render the menu according to the argument which comes from button clicking
    let showMenu = arg.map(item => {
        return `<div class="menu-items col-lg-6 col-sm-12">
                <img src=${item.img} alt=${item.title} class="photo"/>
                    <div class="menu-info">
                        <div class="menu-title">
                            <h4>${item.title}</h4>
                            <span class="price">${item.price}</span>
                        </div>
                        <p class="menu-text">${item.desc}</p>
                    </div>
                </div>
                `
    })
    showMenu = showMenu.join("")
    section.innerHTML = showMenu
}

renderMenu(menu)

// ------------------------------
// Below is what I wrote at first to show the menus when clicking buttons. Yeeeeaah I know it is a "double spaghetti" code :)
// ------------------------------
// if (btnDataId === "ALL") {
//     const allMenu = menu.map(item => {
//         return `<div class="menu-items col-lg-6 col-sm-12">
//                 <img src=${item.img} alt=${item.title} class="photo" />
//                      <div class="menu-info">
//                         <div class="menu-title">
//                            <h4>${item.title}</h4>
//                            <span class="price">${item.price}</span>
//                          </div>
//                          <p class="menu-text">${item.desc}</p>
//                        </div>
//                     </div>
//                 `
//     })

//     section.innerHTML = allMenu
// }

// if (btnDataId === "Korea") {
//     const koreaMenuFilt = menu.filter(item => item.category === "Korea")
//     const koreaMenu = koreaMenuFilt.map(item => {
//         return `<div class="menu-items col-lg-6 col-sm-12">
//                 <img src=${item.img} alt=${item.title} class="photo" />
//                      <div class="menu-info">
//                         <div class="menu-title">
//                            <h4>${item.title}</h4>
//                            <span class="price">${item.price}</span>
//                          </div>
//                          <p class="menu-text">${item.desc}</p>
//                        </div>
//                     </div>
//                  `
//     })
//     section.innerHTML = koreaMenu
// }
// if (btnDataId === "Japan") {
//     const JapanMenuFilt = menu.filter(item => item.category === "Japan")
//     const JapanMenu = JapanMenuFilt.map(item => {
//         return `<div class="menu-items col-lg-6 col-sm-12">
//                 <img src=${item.img} alt=${item.title} class="photo" />
//                      <div class="menu-info">
//                         <div class="menu-title">
//                            <h4>${item.title}</h4>
//                            <span class="price">${item.price}</span>
//                          </div>
//                          <p class="menu-text">${item.desc}</p>
//                        </div>
//                     </div>
//                 `
//     })
//     section.innerHTML = JapanMenu
// }
// if (btnDataId === "China") {
//     const ChinaMenuFilt = menu.filter(item => item.category === "China")
//     const ChinaMenu = ChinaMenuFilt.map(item => {
//         return `<div class="menu-items col-lg-6 col-sm-12">
//                 <img src=${item.img} alt=${item.title} class="photo" />
//                      <div class="menu-info">
//                         <div class="menu-title">
//                            <h4>${item.title}</h4>
//                            <span class="price">${item.price}</span>
//                          </div>
//                          <p class="menu-text">${item.desc}</p>
//                        </div>
//                     </div>
//                  `
//     })
//     section.innerHTML = ChinaMenu
// }