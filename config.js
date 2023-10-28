// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Tuổi mới...",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Hãy cứ vui tươi nhé :>",  // 同上...
        "Tôi mong....",
        "Cta sẽ có nhiều buổi đi chơi hơn nữa...",
        "...tôi thích đi chơi",
        "nhất là khi do chị chủ trì :>",
        "Thế nên là",
        "cũm cảm ơn chị rất nhiều :>>>",
        "Nhiều tiền...",
        "Và xinh đẹppp nhé !",
        "That's all, quit!!!! ",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Hãy cứ vui tươi nhé :>": "./imgs/z4827156304276_8d37e3b4b203466821e9cadd9bf8b742.jpg",
        "Nhiều tiền...": "./imgs/z4827157031230_13ad38f6f0b7f8cebbcc3fe20ba40408.jpg",
        "Và xinh đẹppp nhé !": "./imgs/80571150_744150922661364_6038997444383997952_n.jpg",
        "Cta sẽ có nhiều buổi đi chơi hơn nữa...": "./imgs/z4640416679512_be57aa49ed0aee98cf39a0d8c2c12ca8.jpg",
        "That's all, quit!!!! ": "./imgs/anh-meo-cute-trai-tim-9.jpg",

    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Click here!",
        play: "Hãy cứ chill nhé chị :v",
        bannar_coming: ">.<",
        balloons_flying: "Chúc mừng sinh nhật thảo nhé :>",
        cake_fadein: "Tôi chuẩn bị cho chị một cái bánh khổng lồ đey.",
        light_candle: "Hãy nhắm mắt lại và nghĩ đến những mong ước nhé？",
        wish_message: "phùuuuuuuuuuuuuuu... :>",
        story: "A MESSAGE FOR YOU",
    }
};
