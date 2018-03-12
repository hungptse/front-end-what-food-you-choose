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

var foodChooseHCM = [{
        name: "Bún chả",
        img: "img/bun-cha.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5860412084135!2d106.68952101538353!3d10.766352292328385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f16486f0589%3A0x58a4d7e0b57ca2fe!2sBun+Cha+145!5e0!3m2!1sen!2s!4v1520783538744",
    },
    {
        name: "Bánh mì",
        img: "img/banh-mi.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5347457484568!2d106.67954611538354!3d10.770294892325664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f218f22cc1d%3A0x5989fc3cc9f4d5b7!2sBanh+Mi+Hoa+Ma!5e0!3m2!1sen!2s!4v1520783646904",
    },
    {
        name: "Bún riêu",
        img: "img/bun-rieu.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.509490627182!2d106.6836287153836!3d10.77223549232442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f230d4d1893%3A0x745212aa155029c7!2zQsO6biBSacOqdQ!5e0!3m2!1sen!2s!4v1520783701777",
    },
    {
        name: "Mì quảng",
        img: "img/mi-quang.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4693654859734!2d106.68392131538353!3d10.775317992322282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f24ec04c6af%3A0x530e4cc9cb646234!2zTcOsIFF14bqjbmcgMyBBbmggRW0!5e0!3m2!1sen!2s!4v1520783912095",
    },
    {
        name: "Bánh canh cua",
        img: "img/banh-canh-cua.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.86765122903!2d106.68207626977535!3d10.794691999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cdd39f178d%3A0xc35ed6755afc1d62!2sB%C3%A1nh+Canh+Cua!5e0!3m2!1sen!2s!4v1520783937407",
    },
    {
        name: "Beef Steak",
        img: "img/beefsteak.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.867664068033!2d106.68207626842197!3d10.794691753890923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f468e44b037%3A0x4f9273b6cda79bca!2sMoo+Beefsteak!5e0!3m2!1sen!2s!4v1520783979789",
    },
    {
        name: "Các Món Ốc",
        img: "img/cac-mon-oc.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.8283600469!2d106.67074976977537!3d10.814595800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e0fef25635%3A0xe53f3116fde5d9dd!2zUXXDoW4g4buQYyBOZ29u!5e0!3m2!1sen!2s!4v1520784024766",
    },
    {
        name: "Phá lấu",
        img: "img/pha-lau.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.828372931923!2d106.67074976842207!3d10.814595553458895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ce5d088247%3A0x6dbbedfadc93e869!2zUGjDoSBM4bqldSBMw6w!5e0!3m2!1sen!2s!4v1520784052735",
    },
    {
        name: "Mì cay",
        img: "img/mi-cay.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.61492066015!2d106.64191571538393!3d10.84075269227787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299c76f7b6b5%3A0x1ab370638846663d!2sM%C3%AC+cay+Hana!5e0!3m2!1sen!2s!4v1520784124832",
    },
    {
        name: "Bún đậu mắm tôm",
        img: "img/bun-dau-mam-tom.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.207664231444!2d106.62260346977538!3d10.826465700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297d233f130b%3A0xaccb9b4100439e0f!2zQsO6biDEkOG6rXUgTeG6r20gVMO0bSBDaGluc29v!5e0!3m2!1sen!2s!4v1520784081734",
    },
    {
        name: "Cơm tấm",
        img: "img/com-tam.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2200677440983!2d106.66716561538371!3d10.794450092309297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292c69332e71%3A0x61ef5afaf16ac2b8!2zQ8ahbSB04bqlbSBCYSBHaGnhu4Fu!5e0!3m2!1sen!2s!4v1520784147792",
    },
    {
        name: "Lẩu & Nướng",
        img: "img/lau-va-nuong.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.254364746339!2d106.65863181538369!3d10.791819992311058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529332e2a93cd%3A0x439d39b30de9f857!2zTsaw4bubbmcgJiBM4bqpdSAxMzMx!5e0!3m2!1sen!2s!4v1520784201624",
    },
    {
        name: "Hủ tiếu",
        img: "img/hu-tieu.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5865264139265!2d106.6856933153835!3d10.766314992328368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f18206d62cb%3A0x98d2d4568a7a4d36!2zSOG7pyBUaeG6v3UgTmFtIFZhbmcgUXXhu7NuaA!5e0!3m2!1sen!2s!4v1520784225935",
    },
    {
        name: "Cơm gà",
        img: "img/com-ga.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5568946116177!2d106.69512741538357!3d10.768592692326804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3fb7e505d9%3A0x74645d49e4727a7c!2zQ8ahbSBHw6AgSOG6o2kgTmFt!5e0!3m2!1sen!2s!4v1520784255351",
    },
    {
        name: "Bánh xèo",
        img: "img/banh-xeo.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.567812928329!2d106.68641551538364!3d10.76775349232746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f17fc992fa7%3A0x452628a444d6893d!2zQsOhbmggWMOobyBNxrDhu51pIFhp4buBbQ!5e0!3m2!1sen!2s!4v1520784275528",
    },
    {
        name: "Nem nướng",
        img: "img/nem-nuong.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6102773389266!2d106.6856232153835!3d10.764488992329603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f19d9a1c407%3A0x5512688b316b4c99!2zTmVtIE7GsMahzIFuZyBPYW5oIFZ5!5e0!3m2!1sen!2s!4v1520784304026",
    },
    {
        name: "Bún thịt nướng",
        img: "img/bun-thit-nuong.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6102773389266!2d106.6856232153835!3d10.764488992329603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2382e0de63%3A0x13bb879122b017de!2zQsO6biBUaOG7i3QgTsaw4bubbmcgQ8O0IEJh!5e0!3m2!1sen!2s!4v1520784324770",
    },
    {
        name: "Bò né",
        img: "img/bo-ne.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.380744107414!2d106.66542291538359!3d10.782122992317689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed0f836f9b7%3A0x7dff4fb232505ba7!2zQsOyIE7DqSAzIE5nb24!5e0!3m2!1sen!2s!4v1520784347558",
    },
];
var foodChooseHN = [{
        name: "Phở",
        img: "img/pho.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56240.784931704366!2d105.81584801746169!3d21.030097011739645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac1bb2240b6f%3A0x5f998d4db3c25716!2zUGjhu58gw5RuZyBIw7luZw!5e0!3m2!1sen!2s!4v1520785827481",
    },
    {
        name: "Bún chả",
        img: "img/bun-cha.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59585.03776613665!2d105.81584799913011!3d21.030090624549544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf2a4ba685d%3A0x7e67963f30fa90e7!2zQsO6biBDaOG6oyBIxrDGoW5nIExpw6pu!5e0!3m2!1sen!2s!4v1520785889693",
    },
    {
        name: "Chả cá Lã Vọng",
        img: "img/cha-ca-la-vong.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59585.03776613665!2d105.81584799913011!3d21.030090624549544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbed0b8ef07%3A0x303575ffea4280af!2sCha+Ca+La+Vong+Restaurant!5e0!3m2!1sen!2s!4v1520785911485",
    },
    {
        name: "Bún ốc",
        img: "img/bun-oc.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.88034973721!2d105.84550541548668!3d21.037472985993737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb945ef9427%3A0xf91a57ab1c87520f!2zQsO6biDhu5FjIEPDtCBUaMOqbQ!5e0!3m2!1sen!2s!4v1520785931982",
    },
    {
        name: "Bánh cuốn thanh trì",
        img: "img/banh-cuon-thanh-tri.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8538207173456!2d105.88492611548605!3d20.99849598601488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aeadfc98268d%3A0xaba447d919ce277!2zQsOhbmggQ3Xhu5FuIFRoYW5oIFRyw6wgVmnhu4d0IEzDvQ!5e0!3m2!1sen!2s!4v1520785954382",
    },
    {
        name: "Bánh tôm Hồ Tây",
        img: "img/banh-tom-ho-tay.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6346757437955!2d105.83538581548667!3d21.04729868598824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abaef44c9315%3A0x39c140561ef44424!2sWest+Lake+Shrimp+Cake!5e0!3m2!1sen!2s!4v1520785976380",
    },
    {
        name: "Xôi chè/Xôi xéo",
        img: "img/xoi-xeo.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.962315874356!2d105.84989401548643!3d21.034193785995406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbf64bdf013%3A0xd086773408d3540!2zWMO0aSBYw6lv!5e0!3m2!1sen!2s!4v1520785993133",
    },
    {
        name: "Phở cuốn",
        img: "img/pho-cuon.jpg",
        loc : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14895.849287299508!2d105.84332793842586!3d21.034193547916576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb1d2c5239f%3A0x8b6ebc5193434fe7!2zUGjhu58gQ3Xhu5FuIEjGsMahbmcgTWFp!5e0!3m2!1sen!2s!4v1520786016709",
    },
    {
        name: "Bún ngan",
        img: "img/bun-ngan-mang-kho.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14894.664149401966!2d105.84137316126679!3d21.046044626364306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbe8f82a3eb%3A0x7e721bda093ca150!2zQsO6biBuZ2FuIGLDoCBUaMO0bmc!5e0!3m2!1sen!2s!4v1520786045085",
    },
    {
        name: "Vịt om sấu",
        img: "img/vit-om-sau.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3223105332586!2d105.77019591548574!3d20.979713386024983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134532fda2838bd%3A0x4084f359a2a28c84!2zVMO0IFRo4bupYyBRdcOhbg!5e0!3m2!1sen!2s!4v1520786151205",
    },
    {
        name: "Nộm gà chua ngọt",
        img: "img/nom-ga-chua-ngot.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.036150439829!2d105.8463572154864!3d21.031239485997027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbe2411298d%3A0x809563e68888afcb!2zTuG7mW0gZ8Og!5e0!3m2!1sen!2s!4v1520786180396",
    },
    {
        name: "Nem chua rán",
        img: "img/nem-chua-ran.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.036150439829!2d105.8463572154864!3d21.031239485997027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbe1fcbc1dd%3A0x123f6ee5a398065d!2sNem+Chua+Ran+Store+-+36+Tam+Thuong!5e0!3m2!1sen!2s!4v1520786198901",
    },
    {
        name: "Bún thang",
        img: "img/bun-thang.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0433576705063!2d105.84575771548647!3d21.03095108599727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc076a972d7%3A0x1541dd7516e38886!2zQsO6biBUaGFuZyBCw6AgxJDhu6lj!5e0!3m2!1sen!2s!4v1520786220975",
    },
    {
        name: "Chả rươi Hà Nội",
        img: "img/cha-ruoi-ha-noi.jpg",
        loc : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.011271774024!2d105.85066521548639!3d21.032234985996446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb8a67121e3%3A0xd34b7910a7d85708!2zQ-G7rWEgSMOgbmcgQ2jhuqMgUsawxqFpIEjGsG5nIFRo4buLbmg!5e0!3m2!1sen!2s!4v1520786238450",
    },
    {
        name: "Vịt cỏ Vân Đình",
        img: "img/vit-co-van-dinh.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1378592415444!2d105.80362411548587!3d20.98711028602087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aceaa1c2d17d%3A0xaf46fdc44ce2d799!2zVuG7i3QgQ-G7jyBWw6JuIMSQw6xuaCBfIFRoYW5oIFTDuW5n!5e0!3m2!1sen!2s!4v1520786259757",
    },
    {
        name: "Bánh đúc",
        img: "img/banh-duc.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5969575763265!2d105.83166961548619!3d21.008787286009234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7f593bd44d%3A0x60801262831c86c7!2zQsOhbmggxJDDumMgTsOzbmcgVHJ1bmcgVOG7sQ!5e0!3m2!1sen!2s!4v1520786276806",
    },
    {
        name: "Bánh đa trộn",
        img: "img/banh-da-tron.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.417339353797!2d105.79252481548629!3d21.015980886005295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab59cdd3770f%3A0xbfaf4813df988515!2sPancake+surface+surface!5e0!3m2!1sen!2s!4v1520786297214",
    },
    {
        name: "Bò nhúng me",
        img: "img/bo-nhung-me.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.442289562513!2d105.79941341548631!3d21.014981786005904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5ecbff85e1%3A0x137147b03658043c!2zQsOyIE5ow7puZyBE4bqlbSA1NTU!5e0!3m2!1sen!2s!4v1520786327031",
    },
];
var foodChooseDN = [{
        name: "Bánh canh ruộng",
        img: "img/banh-canh-ruong.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7893.051951185163!2d108.23356399968064!3d16.05635065399933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d46ae983db%3A0xaf6e056f31e66869!2zQsOhbmggQ2FuaCBSdeG7mW5nIFBoxrDGoW5n!5e0!3m2!1sen!2s!4v1520786348485",
    },
    {
        name: "Bún mắm",
        img: "img/bun-mam.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.998387176118!2d108.23927981542859!3d16.06557348888323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217811ae03d07%3A0x38ac06f2ef5a69eb!2zQsO6biBt4bqvbSBCw6kgSMOg!5e0!3m2!1sen!2s!4v1520786374166",
    },
    {
        name: "Bún thịt nướng miền trung",
        img: "img/bun-thit-nuong.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.998387176118!2d108.23927981542859!3d16.06557348888323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421832ef8895e5%3A0x2a6622b0e022cf25!2zQsO6biB0aOG7i3Qgbsaw4bubbmcgTmdh!5e0!3m2!1sen!2s!4v1520786393787",
    },
    {
        name: "Bánh xèo",
        img: "img/banh-xeo.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1280103738895!2d108.21386961542862!3d16.058845688887388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ca278828ad%3A0xe50ace1cbe8f6f9f!2zQsOhbmggWMOobyBCw6AgRMaw4buhbmc!5e0!3m2!1sen!2s!4v1520786412869",
    },
    {
        name: "Mì quảng",
        img: "img/mi-quang.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.203367430242!2d108.21808401542857!3d16.054933188889844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219cf3208540d%3A0xe811531c39e9c5b5!2zTcOsIFF14bqjbmcgQsOgIE11YQ!5e0!3m2!1sen!2s!4v1520786440726",
    },
    {
        name: "Bún bò Huế",
        img: "img/bun-bo-hue.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.203367430242!2d108.21808401542857!3d16.054933188889844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421832fca39fb5%3A0xc23c71936418aa7!2zQsO6biBCw7IgSHXhur8gQsOgIFRoxrDGoW5n!5e0!3m2!1sen!2s!4v1520786457286",
    },
    {
        name: "Cơm hến",
        img: "img/com-hen.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0349647752055!2d108.21120171542866!3d16.06367528888441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b55b604b1b%3A0x8c13403ae95be9be!2sCom+Hen+Hue!5e0!3m2!1sen!2s!4v1520786493148",
    },
    {
        name: "Cao Lầu",
        img: "img/cao-lau.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9523942487845!2d108.19050041542847!3d16.067959988881725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218551865b053%3A0xca2eac82696bdd05!2sRestaurant+Cao+Lau+Hoi+An!5e0!3m2!1sen!2s!4v1520786510141",
    },
    {
        name: "Bánh Huế",
        img: "img/banh-hue.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9523942487845!2d108.19050041542847!3d16.067959988881725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421847052ae52b%3A0x4cf08b31c10c3785!2zQsOhbmggSHXhur8gNTQ!5e0!3m2!1sen!2s!4v1520786531852",
    },
    {
        name: "Bánh căn",
        img: "img/banh-can.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.6166282472736!2d108.32895311542663!3d15.876734189000038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420e7f0b282103%3A0x89e54d70b7587821!2zQsOhbmggQ8SDbiBDw7QgVHXhuqV0!5e0!3m2!1sen!2s!4v1520786571076",
    },
    {
        name: "Bánh canh cá lóc",
        img: "img/banh-canh-ca-loc.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.963243127613!2d108.21555031542866!3d16.06739708888203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183459d81a23%3A0x4f039019246c7ce8!2zQsOhbmggY2FuaCBjw6EgTMOzYyDDgW5o!5e0!3m2!1sen!2s!4v1520786593148",
    },
    {
        name: "Cơm gà tam kỳ",
        img: "img/com-ga-tam-ky.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.775938665472!2d108.20997531542865!3d16.077112788876093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421847c40ad691%3A0xa133272e9600aca0!2zY8ahbSBnYcyAIFRhbSBLeSBOZ3V5w6puIFRpzIFu!5e0!3m2!1sen!2s!4v1520786613629",
    },
    {
        name: "Hải sản tươi sống",
        img: "img/hai-san-tuoi-song.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.370008024796!2d108.25131491542889!3d16.098149288863034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217e44c3f7c93%3A0x8882bfadf33afdd6!2zSOG6o2kgc-G6o24gVMawxqFpIHPhu5FuZyBDw7QgTmjGoW4!5e0!3m2!1sen!2s!4v1520786632773",
    },
    {
        name: "Bún chả cá Quy Nhơn",
        img: "img/bun-cha-ca-quy-nhon.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.02781992958!2d108.21802801542857!3d16.064046088884073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ccab0e9e99%3A0xe5fa1ad25b72c57c!2zQsO6biBDaOG6oyBDw6EgQsOgIFBoaeG6v24!5e0!3m2!1sen!2s!4v1520786677387",
    },
    {
        name: "Bánh mì chảo",
        img: "img/banh-mi-chao.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70885.37358138623!2d108.23239732040665!3d16.033400136560658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218314568b2d9%3A0x5052e8a472f73cc!2zQsOhbmggbcOsIMSQ4buHIE5o4bqldA!5e0!3m2!1sen!2s!4v1520786715964",
    },
    {
        name: "Chả lụi",
        img: "img/cha-lui.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12927851.782374326!2d103.92825827523275!3d14.463162037623672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8f68fb96c255946!2zQsO6biB0aOG7i3Qgbsaw4bubbmcgQsOgIFRyYWk!5e0!3m2!1sen!2s!4v1520786783901",
    },
    {
        name: "Mì quảng ếch",
        img: "img/mi-quang-ech.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0296138635836!2d108.22060831542865!3d16.063952988884164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218332b4861cb%3A0x97b2b5a5b8205bf7!2zTcOsIFF14bqjbmcg4bq-Y2ggLSBC4bq_cCBUcmFuZw!5e0!3m2!1sen!2s!4v1520786803462",
    },
    {
        name: "Bánh tráng cuốn thịt heo",
        img: "img/banh-trang-cuon-thit-heo.jpg",
        loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0296138635836!2d108.22060831542865!3d16.063952988884164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219cb3bb29bfb%3A0x53754b77dfd04574!2zxJDhurdjIHPhuqNuIEhvw6BuZyBUw61u!5e0!3m2!1sen!2s!4v1520786819405",
    },
];

function callDisplayLocation(nameNeedList) {
    display(nameNeedList, locationChoose);
}

function callDisplayFoodHCM() {
    displayFood("listFood", foodChooseHCM);
}

function callDisplayFoodHN() {
    displayFood("listFood", foodChooseHN);
}

function callDisplayFoodDN() {
    displayFood("listFood", foodChooseDN);
}

function show() {
    var nameNeedList = document.getElementById('listFood');
    var tag_img = window.event.target;
    var nameImg = tag_img.src;
    var pos = searchProduct(nameImg, locationChoose);
    var another = document.getElementById("another");
    countClick = 0;
    if (pos == 0) {
        chooseFood("Ho Chi Minh");
        clickTrans(2);
        displayFood('listFood', foodChooseHCM);
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

    if (countClick >= arrayName.length) {
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


function mapDiv() {
    clickTrans(3);
    var maptitle = document.getElementById("titleMap");
    var tag_img = window.event.target;
    var nameImg = tag_img.src;
    var nameFood;
    var srcFood;
    var pos = 0;
    pos = searchProduct(nameImg, foodChooseHCM);
    if (pos >= 0) {
        nameFood = foodChooseHCM[pos].name;
        srcFood = foodChooseHCM[pos].loc;
    }
    pos = searchProduct(nameImg, foodChooseHN);
    if (pos >= 0) {
        nameFood = foodChooseHN[pos].name;
        srcFood = foodChooseHN[pos].loc;
    }
    pos = searchProduct(nameImg, foodChooseDN);
    if (pos >= 0) {
        nameFood = foodChooseDN[pos].name;
        srcFood = foodChooseDN[pos].loc;        
    }
    maptitle.innerHTML = "Here is your location of " + nameFood + " <3. Enjoy your meal ;)";
    var locationFood = document.getElementById("locationFood");
    locationFood.innerHTML = "";
    var frame = document.createElement("iframe");
    frame.src = srcFood;
    frame.height = "600px";
    frame.width = "1200px";
    locationFood.appendChild(frame);
}

function init() {
    var container = document.getElementById("container");
    container.style.width = 100 + "%";
    container.style.height = 960 + "px";

    var section = document.getElementById("section");
    section.style.width = 400 + "%";
    section.style.height = 960 + "px";

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