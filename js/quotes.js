const quotes = [
    {
        quote: "Your pain only makes you stronger.",
        author: "Black Widow",
    },
    {
        quote: "I can do this all day.",
        author: "Captain America",
    },
    {
        quote: "I have nothing to prove to you.",
        author: "Captain Marvel",
    },
    {
        quote: "Greater powers carry great responsibilities.",
        author: "Spiderman",
    },
    {
        quote: "Success is not given for free. You have to be able to do anything for your goals.",
        author: "Coco",
    },
    {
        quote: "Higher, further, faster, baby.",
        author: "Captain Marvel",
    },
    {
        quote: "わかったフリで 常識ぶって 繋がれてた鎖を 壊す時だ (아는 척하고 상식적인 척 연결되어 있던 쇠사슬을 부술 때야)",
        author: "翼モラトリアム - ALKALOID",
    },
    {
        quote: "飛び立つ時間だ (날아오를 시간이야)",
        author: "翼モラトリアム - ALKALOID",
    },
    {
        quote: "자신은 조연이라며 그렇게 간단하게 승부를 포기하면 영원히 이길 수 없어",
        author: "You're Speculation - ALKALOID",
    },
    {
        quote: "지금껏 살아온 그 마음이야 말로 Speculation이잖아?",
        author: "You're Speculation - ALKALOID",
    },
    {
        quote: "비웃음 당할 정도로 대담한 꿈이 없으면 눈길도 주지 않아.",
        author: "You're Speculation - ALKALOID",
    },
    {
        quote: "지금껏 살아온 그 마음이야 말로 Speculation이잖아?",
        author: "You're Speculation - ALKALOID",
    },
    {
        quote: "Spade Of AceをShow Down!",
        author: "You're Speculation - ALKALOID",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;