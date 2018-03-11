var countClick = 0;
var locationChoose = [{
        name: "Ho Chi Minh",
        img: "img/hcm-location.jpg",
    },
    {
        name: "Ha Noi",
        img: "img/hn-location.jpg",

    },
    {
        name: "Da Nang",
        img: "img/dn-location.jpg",
    },
];

var foodChooseHCM = [
    {
        name: "Bún chả",
        img: "img/bun-cha.jpg",
    },
    {
        name: "Bánh mì",
        img: "img/banh-mi.jpg",
    },
    {
        name: "Bún riêu",
        img: "img/bun-rieu.jpg",
    },
    {
        name: "Mì quảng",
        img: "img/mi-quang.jpg",
    },
    {
        name: "Bánh canh cua",
        img: "img/banh-canh-cua.jpg",
    },
    {
        name: "Beef Steak",
        img: "img/beefsteak.jpg",
    },
    {
        name: "Các Món Ốc",
        img: "img/cac-mon-oc.jpg",
    },
    {
        name: "Phá lấu",
        img: "img/pha-lau.jpg",
    },
    {
        name: "Mì cay",
        img: "img/mi-cay.jpg",
    },
    {
        name: "Bún đậu mắm tôm",
        img: "img/bun-dau-mam-tom.jpg",
    },
    {
        name: "Cơm tấm",
        img: "img/com-tam.jpg",
    },
    {
        name: "Lẩu & Nướng",
        img: "img/lau-va-nuong.jpg",
    },
    {
        name: "Hủ tiếu",
        img: "img/hu-tieu.jpg",
    },
    {
        name: "Cơm gà",
        img: "img/com-ga.jpg",
    },
    {
        name: "Bánh xèo",
        img: "img/banh-xeo.jpg",
    },
    {
        name: "Nem nướng",
        img: "img/nem-nuong.jpg",
    },
    {
        name: "Bún thịt nướng",
        img: "img/bun-thit-nuong.jpg",
    },
    {
        name: "Bò né",
        img: "img/bo-ne.jpg",
    },
];
var foodChooseHN = [
    {
        name: "Phở",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bún chả",
        img: "img/hn-location.jpg",
    },
    {
        name: "Chả cá Lã Vọng",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bún ốc",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bánh cuốn thanh trì",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bánh tôm Hồ Tây",
        img: "img/hn-location.jpg",
    },
    {
        name: "Xôi chè/Xôi xéo",
        img: "img/hn-location.jpg",
    },
    {
        name: "Phở cuốn",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bún ngan",
        img: "img/hn-location.jpg",
    },
    {
        name: "Vịt om sấu",
        img: "img/hn-location.jpg",
    },
    {
        name: "Nộm gà chua ngọt",
        img: "img/hn-location.jpg",
    },
    {
        name: "Nem chua rán",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bún thang",
        img: "img/hn-location.jpg",
    },
    {
        name: "Chả rươi Hà Nội",
        img: "img/hn-location.jpg",
    },
    {
        name: "Vịt cỏ Vân Đình",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bánh đúc",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bánh đa trộn",
        img: "img/hn-location.jpg",
    },
    {
        name: "Bò nhúng me",
        img: "img/hn-location.jpg",
    },
];
var foodChooseDN = [
    {
        name: "Bánh canh ruộng",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bún mắm",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bún thịt nướng miền trung",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bánh xèo",
        img: "img/dn-location.jpg",
    },
    {
        name: "Mì quảng",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bún bò Huế",
        img: "img/dn-location.jpg",
    },
    {
        name: "Cơm hến",
        img: "img/dn-location.jpg",
    },
    {
        name: "Cao Lầu",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bánh Huế",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bánh căn",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bánh cănh cá lóc",
        img: "img/dn-location.jpg",
    },
    {
        name: "Cơm gà tam kỳ",
        img: "img/dn-location.jpg",
    },
    {
        name: "Hải sản tươi sống",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bún chả cá Quy Nhơn",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bánh mì chảo",
        img: "img/dn-location.jpg",
    },
    {
        name: "Chả lụi",
        img: "img/dn-location.jpg",
    },
    {
        name: "Mì quảng ếch",
        img: "img/dn-location.jpg",
    },
    {
        name: "Bánh tráng cuốn thịt heo",
        img: "img/dn-location.jpg",
    },
];
function callDisplayLocation(nameNeedList) {
    display(nameNeedList,locationChoose);
}
function callDisplayFoodHCM() {
    displayFood("listFood",foodChooseHCM);
}
function callDisplayFoodHN() {
    displayFood("listFood",foodChooseHN);
}
function callDisplayFoodDN() {
    displayFood("listFood",foodChooseDN);
}
function show() {
    var nameNeedList = document.getElementById('listFood');
    var tag_img = window.event.target;
    var nameImg = tag_img.src;
    var pos = searchProduct(nameImg,locationChoose);
    var back = document.getElementById("btnBack");
    var another = document.getElementById("another");
    countClick = 0;
    if (pos == 0) {
        chooseFood("Ho Chi Minh");
        clickTrans(2);
        displayFood('listFood',foodChooseHCM);
        another.addEventListener("click", callDisplayFoodHCM);
    } else if (pos == 1) {
        chooseFood("Ha Noi");
        clickTrans(2);
        displayFood('listFood', foodChooseHN)
        another.addEventListener("click", callDisplayFoodHN);        
    } else if (pos == 2) {
        chooseFood("Da Nang");
        clickTrans(2);
        displayFood('listFood', foodChooseDN)
        another.addEventListener("click", callDisplayFoodDN);   
    }
}

function chooseFood(nameCity) {
    titleLocation = document.getElementById("nameCity");
    titleLocation.innerHTML = "Choose food in " + nameCity + " city"; 
}

function searchProduct(nameImg, arrayName) {
    var arr = arrayName;
    var j = nameImg.lastIndexOf("/");
    var name = nameImg.substring(j + 1);
    for (var index = 0; index < arr.length; index++) {
        if (arr[index].img == "img/" + name)
            return index;
    }
    return -1;
}


function display(nameList, arrayName) {
    
    var arr = arrayName;
    var div = document.getElementById(nameList);
    div.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var tag_img = document.createElement("img");
        tag_img.src = arr[i].img;
        tag_img.addEventListener("click", show);
        var the_p = document.createElement("p");
        the_p.innerHTML = arr[i].name;
        var div_child = document.createElement("div");
        div_child.appendChild(tag_img);
        div_child.appendChild(the_p);
        div_child.style.borderRadius = "5px";
        div.appendChild(div_child);
    }
}
function displayFood(nameList, arrayName) {
    
    if(countClick >= arrayName.length)
    {
        countClick = 0;
    }
    var arr = arrayName;
    var div = document.getElementById(nameList);
    div.innerHTML = "";
    for (var i = countClick; i < countClick + 3; i++) {
        var tag_img = document.createElement("img");
        tag_img.src = arr[i].img;
        tag_img.addEventListener("click", mapDiv);
        var the_p = document.createElement("p");
        the_p.innerHTML = arr[i].name;
        var div_child = document.createElement("div");
        div_child.appendChild(tag_img);
        div_child.appendChild(the_p);
        div_child.style.borderRadius = "5px";
        div.appendChild(div_child);
    }
    if (countClick < arrayName.length) {
        countClick += 3;
    } else countClick = 0;
   
    
}
function mapDiv(){
    clickTrans(3);
}
function init() {
    var container = document.getElementById("container");
    container.style.width = 100 + "%";
    container.style.height = 960 + "px";

    var section = document.getElementById("section");
    section.style.width = 400 + "%";
    section.style.height =  960 + "px";

    var arr = section.getElementsByClassName("divContent");
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.width = 25 + "%";
        arr[i].style.height = 960 + "px";
       
    }
}

function clickTrans(pos) {
    var kc = pos * window.screen.availWidth;
    var section = document.getElementById("section");
    section.style.transform = "translateX(-" + kc + "px)";
}