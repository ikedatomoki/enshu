const imgs=["./images/jasper.jpg",
"./images/k4sen.jpg",
"./images/seki.jpg",
"./images/shaka.jpg",
"./images/jun.jpg",
"./images/daruma.jpg",
"./images/spygea.jpg"];

const names=["Jasper7se",
"k4sen",
"関優太",
"Shaka",
"加藤純一",
"だるまいずごっど",
"SPYGEA"];

const teams=["げまげま",
"ZETA DIVISION",
"ZETA DIVISION",
"個人",
"MURASH",
"Crazy Raccoon",
"Fnatic"];

const intro=["元OverWatch日本代表のFPS Player。VALORANT,League of Legendsでは最高ランクに到達しており、その実力は本物。配信者界隈では年齢は若く、今後の人気に期待できる。",
"Call of Dutyの実況で人気のある配信者。今では様々なゲームでも注目を集め、ここ最近で最も力をつけている配信者である。",
"配信者界隈の重鎮。Twicthの王といってもよいほどの人気を持つ配信者。30歳を超えても人気は変わらず、伸び続けている。",
"伝説的戦地之王釈迦。古のタイトルAVAの日本代表。配信での雑談と30歳を超えても衰えないFPS力は数々の視聴者からの人気を得ている。",
"別名うんこちゃん。ニコニコ生放送では知らない人がいない大物。結婚式配信では億を超えるチアーを受け取り話題に。そのほかでも多くもことで話題となる配信者である。",
"毛の一本すら公開したことのない謎に包まれた配信者。YouTube登録者100万人を達成しており、その人気はグッズが即完売するほど。Crazy Raccoonによって作られたAIといういじりもある。",
"世界を射抜くイケメンスナイパー。海外に拠点を持つ大チームFnaticに所属しており、身長は190cmを超える。30歳を過ぎるが独身であり、常にマイペースな配信をしている。"];

const twitter=["https://twitter.com/Jasper7se",
"https://twitter.com/k4sen",
"https://twitter.com/stylishnoob",
"https://twitter.com/avashaka",
"https://twitter.com/unkochan1234567",
"https://twitter.com/darumaisgod",
"https://twitter.com/spygea_jp"
];

const youtube=["https://www.youtube.com/@user-it2vu7wq1p",
"https://www.youtube.com/@zzxk4sen",
"https://www.youtube.com/@StylishNoob4",
"https://www.youtube.com/@SHAKAch",
"https://www.youtube.com/@junchannel",
"https://www.youtube.com/@darumaisgod",
"https://www.youtube.com/@spygea"];

const twitch=["https://www.twitch.tv/jasper7se",
"https://www.twitch.tv/k4sen",
"https://www.twitch.tv/stylishnoob4",
"https://www.twitch.tv/fps_shaka",
"https://www.twitch.tv/kato_junichi0817",
"https://www.twitch.tv/darumaisgod",
"https://www.twitch.tv/spygea"];

const btn=document.getElementById("stream-button");
const nam=document.getElementById("stream-name");
const dis=document.getElementById("stream-display");
const twi=document.getElementById("stream-twitter");
const tem=document.getElementById("stream-team");
const int=document.getElementById("stream-introduce");
const inyo=document.getElementById("stream-inyo");

btn.addEventListener("click",function(){
    const num=Math.floor(Math.random()*imgs.length);
    nam.innerHTML=names[num];
    tem.innerHTML="所属:"+teams[num];
    int.innerHTML=intro[num];
    inyo.innerHTML="アイコン引用:"+twitter[num];
    dis.innerHTML='<img src="'+imgs[num]+'">';

    let btnyoutube=document.getElementById('btnyoutube');
    btnyoutube.addEventListener('click',function(){
    location.assign(youtube[num]);
    });

    let btntwitter=document.getElementById('btntwitter');
    btntwitter.addEventListener('click',function(){
    location.assign(twitter[num]);
    });

    let btntwitch=document.getElementById('btntwitch');
    btntwitch.addEventListener('click',function(){
    location.assign(twitch[num]);
    });
});
