const ulEl = document.querySelector("ul#categories");
const ulNumberOfChildren = ulEl.children.length;
console.log('Number of categories:', ulNumberOfChildren);


const liEl = ulEl.children;
    for (let i = 0; i < liEl.length; i++) {
        const childrenOfLi = liEl[i].children;
    
        console.log('Category:', childrenOfLi[0].textContent);
        console.log('Elements', childrenOfLi[1].children.length);
};
