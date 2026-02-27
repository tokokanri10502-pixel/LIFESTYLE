// 補助関数：現在の日付から相対的な日付文字列を生成 (YYYY.MM.DD)
function getRelativeDate(daysOffset = 0) {
    const d = new Date();
    d.setDate(d.getDate() + daysOffset);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}.${m}.${day}`;
}

// モックデータ：ライフスタイルトレンドニュース
const newsData = [
    {
        id: 2,
        title: "『マインドフル・ネスティング』、自宅を最高の癒やし空間にする新習慣",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: getRelativeDate(-1),
        summary: "外の世界の喧騒を断ち切り、自宅のインテリアや香りを整えることで精神的安定を図る。北欧のヒュッゲを超えた、より戦略的なセルフケアが注目される。",
        source: "Living Well",
        sourceUrl: "https://prtimes.jp/lifestyle/",
        icon: "fa-spa",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        viewCount: 1820
    },
    {
        id: 3,
        title: "生成AIによる「自分専用キャリアコーチ」が仕事の常識を変える",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: getRelativeDate(-1),
        summary: "個人のスキルと志向を学習し、最適なネクストアクションを提案するパーソナルAI。2026年は、上司よりもAIに相談するビジネスパーソンが多数派に。",
        source: "Career Weekly",
        sourceUrl: "https://xtrend.nikkei.com/",
        icon: "fa-user-tie",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
        viewCount: 2100
    },
    {
        id: 1101,
        title: "洋服の青山、全世代向け『みんなのスーツ』がヒット。軽さとコスパを両立",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: getRelativeDate(0),
        summary: "着用時の軽さと柔らかさを追求しつつ、きちんとした見た目を維持。物価高の中で圧倒的なコストパフォーマンスが全世代に支持されている。",
        source: "青山プレスリリース",
        sourceUrl: "https://www.y-aoyama.jp/news/",
        icon: "fa-user-tie",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)",
        viewCount: 3400
    },
    {
        id: 1102,
        title: "AOKI、パジャマスーツが累計販売数更新。ハイブリッドワークの定義へ",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: getRelativeDate(-1),
        summary: "「見ためスーツ、着心地パジャマ」のコンセプトが完全に定着。自宅とオフィスを行き来する現代の多様な働き方を支える一着として選ばれ続けている。",
        source: "AOKI ニュース",
        sourceUrl: "https://www.aoki-style.com/press/",
        icon: "fa-user-tie",
        gradient: "linear-gradient(135deg, #1d4ede 0%, #4ca1af 100%)",
        viewCount: 3100
    },
    {
        id: 1103,
        title: "はるやま、丸ごと洗える『完全ウォッシャブルスーツ』2026年モデル予約開始",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: getRelativeDate(-2),
        summary: "家庭用洗濯機での耐久性がさらに向上。防シワ・速乾機能に加え、360度ストレッチで「ストレスフリー」な着心地を追求した最新作。",
        source: "はるやま Online",
        sourceUrl: "https://haruyama.jp/news/",
        icon: "fa-user-tie",
        gradient: "linear-gradient(135deg, #24c6dc 0%, #514a9d 100%)",
        viewCount: 2800
    },
    {
        id: 1104,
        title: "スーツセレクト、Z世代向け『ワイドパンツスーツ』で新しいビジネス像を提案",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: getRelativeDate(0),
        summary: "従来のタイトなシルエットから一変、リラックス感のあるワイドシルエットが登場。ファッション性とフォーマルさを両立させ、若年層のニーズを開拓。",
        source: "SUIT SELECT News",
        sourceUrl: "https://www.suit-select.com/news/",
        icon: "fa-user-tie",
        gradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
        viewCount: 4200
    },
    {
        id: 1105,
        title: "『スーツスクエア』への屋号変更が全国で加速。4ブランド融合の新体験",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: getRelativeDate(-1),
        summary: "ザ・スーツカンパニーが次世代型店舗へ進化。あらゆるビジネスウェアのニーズに一拠点で対応するOMO店舗が、主要都市を中心に続々とリニューアル。",
        source: "SUIT SQUARE プレス",
        sourceUrl: "https://www.uktsc.com/info/",
        icon: "fa-user-tie",
        gradient: "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
        viewCount: 2950
    },
    {
        id: 5,
        title: "『スマートミラー』が実現する、美容のパーソナライズ化",
        category: "living",
        categoryLabel: "リビング",
        date: getRelativeDate(-2),
        summary: "鏡に映る肌の状態を分析し、その日の最適なスキンケアやメイクを提案。AIがコンシェルジュのように暮らしをサポートするデバイスの普及。",
        source: "Tech Lifestyle",
        sourceUrl: "https://prtimes.jp/technology/",
        icon: "fa-magic",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        viewCount: 1290
    },
    {
        id: 7,
        title: "睡眠を科学する『スリープテック』が第二フェーズへ",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: getRelativeDate(-3),
        summary: "単なる計測から、脳波誘導による深い眠りへの能動的な介入へ。より効率的で質の高い休息がパフォーマンスの鍵を握る。",
        source: "Health Daily",
        sourceUrl: "#",
        icon: "fa-moon",
        gradient: "linear-gradient(135deg, #302b63 0%, #24243e 100%)",
        viewCount: 1980
    },
    {
        id: 210,
        title: "アダストリア『Andemiu』、土屋巴瑞季を迎え2026春夏アンバサダー就任",
        category: "ladies",
        categoryLabel: "レディス",
        date: getRelativeDate(0),
        summary: "働く女性向けブランドAndemiuが春夏アンバサダーを公開。洗練されたトレンドLOOKとともに、オンオフ問わず活躍する新作コレクションを展開。",
        source: "アダストリア プレス",
        sourceUrl: "https://www.adastria.co.jp/news/",
        icon: "fa-gem",
        gradient: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
        viewCount: 3800
    },
    {
        id: 101,
        title: "テックウェアの進化：都市生活を最適化する高機能アウター",
        category: "mens",
        categoryLabel: "メンズ",
        date: getRelativeDate(-1),
        summary: "透湿防水性だけでなく、デバイスの収納や温度調節機能を備えたウェアが一般層にも普及。実用性とスタイルを高度に両立。",
        source: "Urban Mode",
        sourceUrl: "#",
        icon: "fa-person-rays",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
        viewCount: 1650
    },
    {
        id: 102,
        title: "サステナブルな『おさがり』プラットフォーム、キッズ市場で急成長",
        category: "kids",
        categoryLabel: "キッズ",
        date: getRelativeDate(-2),
        summary: "成長の早い子供服を、品質を維持したまま循環させる新サービス。親世代の環境意識の高まりを受け、リユースが当たり前の選択肢に。",
        source: "Family Tech",
        sourceUrl: "#",
        icon: "fa-child",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 1420
    },
    {
        id: 103,
        title: "オーガニックコットンと竹炭繊維、ベビー肌着の新基準",
        category: "baby",
        categoryLabel: "ベビー",
        date: getRelativeDate(0),
        summary: "究極の低刺激と抗菌性を求めた新素材。敏感な赤ちゃんの肌を守るだけでなく、土に還る素材としてギフト需要も独占。",
        source: "Baby Journal",
        sourceUrl: "#",
        icon: "fa-baby",
        gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
        viewCount: 1300
    },
    {
        id: 201,
        title: "ユニクロ『次世代ライフウェア』、AI分析による究極のフィット感",
        category: "mens",
        categoryLabel: "メンズ",
        date: getRelativeDate(0),
        summary: "100万人の体型データから導き出した、誰にでも似合う黄金シルエット。ベーシックの枠を超えた「機能美」の到達点。",
        source: "Uniqlo Press",
        sourceUrl: "https://www.uniqlo.com/jp/ja/news/topics/2026020601/",
        icon: "fa-shirt",
        gradient: "linear-gradient(135deg, #ff0000 0%, #cc0000 100%)",
        viewCount: 3200
    },
    {
        id: 202,
        title: "ユナイテッドアローズ別注、伝統技術とモダンデザインの融合",
        category: "mens",
        categoryLabel: "メンズ",
        date: getRelativeDate(-1),
        summary: "国内の老舗工場と連携した限定シリーズ。高価格帯ながら、本物志向の若年層から絶大な支持を集める。",
        source: "UA Style",
        sourceUrl: "https://store.united-arrows.co.jp/brand/ua/news/",
        icon: "fa-crown",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)",
        viewCount: 1800
    },
    {
        id: 203,
        title: "GU『1分で完売』、インフルエンサーとの超限定コラボが話題",
        category: "ladies",
        categoryLabel: "レディス",
        date: getRelativeDate(0),
        summary: "最新トレンドを最速で具現化。アプリ予約で即完売した新作は、リセール市場でも価格が高騰するほどの人気。",
        source: "GU News",
        sourceUrl: "https://www.gu-global.com/jp/ja/feature/cms/gu-news/",
        icon: "fa-bolt",
        gradient: "linear-gradient(135deg, #1d4ede 0%, #002691 100%)",
        viewCount: 4100
    },
    {
        id: 204,
        title: "しまむら『骨格診断』対応ライン、セルフプロデュース需要を独占",
        category: "ladies",
        categoryLabel: "レディス",
        date: getRelativeDate(-2),
        summary: "自分の骨格に合わせた「着痩せ」が叶う新シリーズ。手頃な価格でセルフプロデュースが楽しめるとSNSで爆発的に拡散。",
        source: "Shimamura Life",
        sourceUrl: "https://www.shimamura.gr.jp/shimamura/flier/",
        icon: "fa-users",
        gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5253 100%)",
        viewCount: 2900
    },
    {
        id: 205,
        title: "イオン『トップバリュ』、汚れが落ちやすい機能性通学着がヒット",
        category: "kids",
        categoryLabel: "キッズ",
        date: getRelativeDate(-1),
        summary: "泥汚れや油性ペンも洗濯で落ちやすい新素材を採用。働く親の負担を軽減する「家事ラク」アパレルとしてイオンが総力を結集。",
        source: "Aeon Living",
        sourceUrl: "https://www.topvalu.net/news/",
        icon: "fa-school",
        gradient: "linear-gradient(135deg, #8c429c 0%, #632a6f 100%)",
        viewCount: 2500
    },
    {
        id: 301,
        title: "TikTok発『10秒時短メイク』、全世代で空前のブームに",
        category: "sns",
        categoryLabel: "SNS",
        date: getRelativeDate(0),
        summary: "短時間で劇的な変化を生むテクニックがバズ。関連グッズの売上が前年比200%を記録するなど、購買行動に直結する現象。",
        source: "TikTok Trends",
        sourceUrl: "#",
        icon: "fa-brands fa-tiktok",
        gradient: "linear-gradient(135deg, #000000 0%, #25f4ee 50%, #fe2c55 100%)",
        viewCount: 5800
    },
    {
        id: 302,
        title: "Instagramで話題の『淡色カフェ』、全国各地で集客記録を更新",
        category: "sns",
        categoryLabel: "SNS",
        date: getRelativeDate(-1),
        summary: "ベージュや白を基調とした内装。写真映えだけでなく、その空間での「体験」を共有することがステータスとなるカルチャーの定着。",
        source: "Insta Vibes",
        sourceUrl: "#",
        icon: "fa-brands fa-instagram",
        gradient: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        viewCount: 4200
    },
    {
        id: 303,
        title: "Xでバズった『究極の睡眠枕』、数分で予約枠が埋まる事態に",
        category: "sns",
        categoryLabel: "SNS",
        date: getRelativeDate(0),
        summary: "一個人のレビューツイートが数万リツイートされ、一夜にして完売。リアルな口コミが既存の広告を凌駕する拡散力を見せつけた。",
        source: "X Buzz",
        sourceUrl: "#",
        icon: "fa-brands fa-x-twitter",
        gradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
        viewCount: 4900
    },
    {
        id: 401,
        title: "Nike『Air Max』最新作、再生素材を50%以上使用した環境対応モデル",
        category: "shoes",
        categoryLabel: "シューズ",
        date: getRelativeDate(0),
        summary: "圧倒的なクッション性はそのままに、製造工程を見直し環境負荷を低減。機能性と持続可能性を両立させた次世代のアイコン。",
        source: "Nike News",
        sourceUrl: "https://about.nike.com/en/newsroom/",
        icon: "fa-bolt",
        gradient: "linear-gradient(135deg, #f39c12 0%, #d35400 100%)",
        viewCount: 3500
    },
    {
        id: 402,
        title: "Adidas『Stan Smith』、天然レザーを廃止しヴィーガン素材へ完全移行",
        category: "shoes",
        categoryLabel: "シューズ",
        date: getRelativeDate(-1),
        summary: "不朽の名作が未来へと進化。ブランドを象徴する定番モデルが、環境への配慮を最優先した新しいスタンダードを提示する。",
        source: "Adidas Style",
        sourceUrl: "https://news.adidas.com/",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
        viewCount: 3100
    },
    {
        id: 403,
        title: "New Balance『990』シリーズ、快適性を極めたメイド・イン・USA新作",
        category: "shoes",
        categoryLabel: "シューズ",
        date: getRelativeDate(-2),
        summary: "「1000点満点中990点」の伝統。卓越したサポート性とクッション性が、タウンユースから本格的なウォーキングまで幅広く支持される。",
        source: "NB Journal",
        sourceUrl: "https://shop.newbalance.jp/shop/e/eEnb-news",
        icon: "fa-shoe-prints",
        gradient: "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
        viewCount: 2800
    },
    {
        id: 404,
        title: "スケッチャーズ『ハンズフリースリップインズ』、立ったまま履ける利便性が話題",
        category: "shoes",
        categoryLabel: "シューズ",
        date: getRelativeDate(0),
        summary: "靴べら不要、手を使わずに履ける。シニア層だけでなく、忙しい現役世代や子育て層からも「革命的」との口コミが殺到。",
        source: "Footwear Today",
        sourceUrl: "#",
        icon: "fa-clock",
        gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
        viewCount: 4200
    },
    {
        id: 405,
        title: "ABCマート限定『VANSコラボ』、ストリートから支持される限定カラー",
        category: "shoes",
        categoryLabel: "シューズ",
        date: getRelativeDate(-1),
        summary: "店舗に行かないと買えない希少性。地域密着型のABCマートが仕掛ける、特定ターゲットに向けた戦略的モデルが好調。",
        source: "Store Trends",
        sourceUrl: "https://www.abc-mart.net/shop/e/e-news/",
        icon: "fa-store",
        gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
        viewCount: 2600
    },
    {
        id: 501,
        title: "BEAMS『別注アークテリクス』、即完売の兆しを見せる2026春夏の新作",
        category: "mens",
        categoryLabel: "メンズ",
        date: getRelativeDate(0),
        summary: "独特のカラーパレットと都会的な機能美。BEAMSが仕掛ける「都会で着るアウトドア」が、ファッションギークのみならず幅広い層を魅了。",
        source: "BEAMS News",
        sourceUrl: "https://www.beams.co.jp/news/",
        icon: "fa-tshirt",
        gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)",
        viewCount: 3800
    },
    {
        id: 502,
        title: "JOURNAL STANDARD『テック・テーラリング』、仕事と日常をシームレスに繋ぐ新定番",
        category: "mens",
        categoryLabel: "メンズ",
        date: getRelativeDate(-1),
        summary: "高機能素材を用いたセットアップ。見た目はフォーマルだが、着心地はスポーティ。多様化する働き方に寄り添うベイクルーズ流のスタンダード提案。",
        source: "Baycrew's Group",
        sourceUrl: "https://baycrews.jp/news",
        icon: "fa-briefcase",
        gradient: "linear-gradient(135deg, #485563 0%, #29323c 100%)",
        viewCount: 2950
    },
    {
        id: 503,
        title: "IENA『フレンチシック・モダン』、春を彩るパステルツイードがレディスの主役に",
        category: "ladies",
        categoryLabel: "レディス",
        date: getRelativeDate(0),
        summary: "伝統的なツイードを現代的に再編集。上品でありながらも抜け感のあるスタイルが、都会で働く自立した女性から圧倒的な支持。",
        source: "Baycrew's Group",
        sourceUrl: "https://baycrews.jp/news",
        icon: "fa-gem",
        gradient: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
        viewCount: 3100
    },
    {
        id: 504,
        title: "ZARA『スタジオ・コレクション』、ハイブランド級のクオリティを誇る限定ラインが話題",
        category: "ladies",
        categoryLabel: "レディス",
        date: getRelativeDate(-1),
        summary: "マテリアルとシルエットに徹底的にこだわった特別ライン。手に取りやすい価格帯でハイファッションを体験できる「民主化」の最前線。",
        source: "ZARA Global",
        sourceUrl: "https://www.zara.com/jp/ja/",
        icon: "fa-shopping-bag",
        gradient: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        viewCount: 4500
    },
    {
        id: 505,
        title: "WWDJAPAN予測『クワイエット・ラグジュアリー』から『ネオ・ビンテージ』への潮流",
        category: "ladies",
        categoryLabel: "レディス",
        date: getRelativeDate(0),
        summary: "控えめな高級感から、個性を主張するアーカイブ再評価へ。業界最高峰の メディアが解き明かす、2026年後半のトレンドマップ。",
        source: "WWD JAPAN",
        sourceUrl: "https://www.wwdjapan.com/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #000000 0%, #ff0000 100%)",
        viewCount: 5200
    },
    {
        id: 601,
        title: "資生堂『SHISEIDO エッセンス スキングロウ』、美容液処方のファンデがベストコスメを席巻",
        category: "cosme",
        categoryLabel: "コスメ",
        date: getRelativeDate(0),
        summary: "メイクをしながらスキンケア。資生堂が誇る最新の皮膚科学を結集したハイブリッドファンデーションが、圧倒的な支持で上半期1位に。",
        source: "Shiseido Beauty",
        sourceUrl: "https://corp.shiseido.com/jp/releaselist/",
        icon: "fa-magic",
        gradient: "linear-gradient(135deg, #ff0000 0%, #b20000 100%)",
        viewCount: 6800
    },
    {
        id: 602,
        title: "KANEBO『ライブリースキン ウェア』、素肌化けする素肌への追求が極まる",
        category: "cosme",
        categoryLabel: "コスメ",
        date: getRelativeDate(-1),
        summary: "「絶頂肌」を継続。カネボウが提案する、生命感あふれるツヤと、肌そのものが美しくなったかのような仕上がりが話題。",
        source: "Kanebo Global",
        sourceUrl: "https://www.kanebo-global.com/jp/ja/",
        icon: "fa-heart",
        gradient: "linear-gradient(135deg, #222222 0%, #444444 100%)",
        viewCount: 4200
    },
    {
        id: 603,
        title: "コーセー『デコルテ リポソーム』、進化し続ける保湿テクノロジーの金字塔",
        category: "cosme",
        categoryLabel: "コスメ",
        date: getRelativeDate(-2),
        summary: "多重層リポソームが24時間、潤いを放ち続ける。コーセーを代表する名品が、時代を超えて愛される理由を再証明したヒット作。",
        source: "KOSE Beauty",
        sourceUrl: "https://www.kose.co.jp/company/ja/news/",
        icon: "fa-tint",
        gradient: "linear-gradient(135deg, #0e2a47 0%, #1c508a 100%)",
        viewCount: 5100
    },
    {
        id: 604,
        title: "CANMAKE『むにゅっとハイライター』、プチプラとは思えない繊細なツヤがバズり中",
        category: "cosme",
        categoryLabel: "コスメ",
        date: getRelativeDate(0),
        summary: "生レアな質感。指で塗るだけで内側から発光するようなツヤが完成。キャンメイクならではのトレンドキャッチ力が爆発。",
        source: "CANMAKE Official",
        sourceUrl: "https://www.canmake.com/news/",
        icon: "fa-star",
        gradient: "linear-gradient(135deg, #ffc0cb 0%, #ff69b4 100%)",
        viewCount: 5900
    },
    {
        id: 605,
        title: "CEZANNE『リップカラーシールド』、落ちにくさと潤いを両立した新定番が完売続出",
        category: "cosme",
        categoryLabel: "コスメ",
        date: getRelativeDate(-1),
        summary: "セザンヌから待望の耐久リップ。色持ちの良さと、とろけるような塗り心地が評価され、バラエティショップでの欠品が相次ぐ。",
        source: "CEZANNE Lab",
        sourceUrl: "https://www.cezanne.co.jp/news/",
        icon: "fa-smile",
        gradient: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
        viewCount: 3800
    },
    {
        id: 606,
        title: "最新韓国コスメ『PDRNスキンケア』、サーモン成分による肌再生ブームが日本上陸",
        category: "cosme",
        categoryLabel: "コスメ",
        date: getRelativeDate(0),
        summary: "次世代のエイジングケア。美容大国・韓国から発信された「刺さない美容液」が、透明感を求めるユーザーの間で爆発的な人気に。",
        source: "K-Beauty Trends",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 6200
    },
    {
        id: 607,
        title: "@cosme『2026上半期ベスコス』発表。リアルな口コミが選ぶ真のヒットアイテム",
        category: "cosme",
        categoryLabel: "コスメ",
        date: getRelativeDate(0),
        summary: "忖度なしの評価。アットコスメユーザーの膨大なデータから算出されたランキングが、コスメ業界の最前線を映し出す。",
        source: "@cosme Media",
        sourceUrl: "https://www.cosme.net/bestcosme/",
        icon: "fa-award",
        gradient: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
        viewCount: 7500
    },
    {
        id: 608,
        title: "PLAZA・LOFT限定『先行販売』、今しか買えない注目ブランドが店頭を彩る",
        category: "cosme",
        categoryLabel: "コスメ",
        date: getRelativeDate(-1),
        summary: "宝探しのような体験。バラエティショップならではの目利きで、アジア圏の人気ブランドやサステナブルな新作がいち早く登場。",
        source: "Variety Shop Hub",
        sourceUrl: "#",
        icon: "fa-gift",
        gradient: "linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)",
        viewCount: 4600
    },
    {
        id: 701,
        title: "西川『新生活応援キャンペーン』、睡眠を科学した高機能マットレスが話題",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: getRelativeDate(0),
        summary: "大谷翔平選手のアドバイスから着想を得たという最新の快眠寝具群。春の新生活に向け、投資効果が最も高い健康アイテムとして注目を集める。",
        source: "西川株式会社 プレス",
        sourceUrl: "https://www.nishikawa1566.com/",
        icon: "fa-bed",
        gradient: "linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)",
        viewCount: 3200
    },
    {
        id: 702,
        title: "ニトリ『AIマットレス＆スマートベッド』、最新テクノロジーで睡眠環境を自動最適化",
        category: "living",
        categoryLabel: "リビング",
        date: getRelativeDate(-1),
        summary: "睡眠中の動きを感知して角度や硬さを自動調整。近未来の寝室体験を、ニトリならではの「お、ねだん以上。」な価格設定で実現した渾身の新商品。",
        source: "ニトリ ニュースリリース",
        sourceUrl: "https://www.nitori.co.jp/",
        icon: "fa-robot",
        gradient: "linear-gradient(135deg, #0cebeb 0%, #20e3b2 50%, #29ffc6 100%)",
        viewCount: 4500
    },
    {
        id: 703,
        title: "無印良品『猫用家具』本格展開、インテリアに溶け込むペットとの新しい暮らし",
        category: "living",
        categoryLabel: "リビング",
        date: getRelativeDate(-2),
        summary: "木製シェルフやユニット家具と完全に調和する、爪とぎや隠れ家。人間もペットも心地よい、新しい「無印良品の家」のあり方を提示している。",
        source: "無印良品 公式",
        sourceUrl: "https://www.muji.com/jp/ja/store",
        icon: "fa-cat",
        gradient: "linear-gradient(135deg, #d3cce3 0%, #e9e4f0 100%)",
        viewCount: 5200
    },
    {
        id: 704,
        title: "Francfranc 2026春夏『花と蝶のモチーフ』、スペパ重視の華やかインテリア",
        category: "living",
        categoryLabel: "リビング",
        date: getRelativeDate(0),
        summary: "丸めるとブーケになるブランケットや、限られた空間を有効活用する「スペースパフォーマンス（スペパ）」アイテム。春の訪れを感じるコレクションが話題。",
        source: "Francfranc プレス",
        sourceUrl: "https://francfranc.com/",
        icon: "fa-spa",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
        viewCount: 3800
    },
    {
        id: 705,
        title: "イオン・ホームコーディ『新生活900品目』、機能と価格の両立で圧倒的存在感",
        category: "living",
        categoryLabel: "リビング",
        date: getRelativeDate(-1),
        summary: "積み重ね可能なカラーボックスや、ベッドのヘッドボードを選べるカスタマイズ性。生活者の細やかなニーズに応える商品群を一挙投入。",
        source: "イオン ホームコーディ",
        sourceUrl: "https://www.topvalu.net/homecoordy/",
        icon: "fa-couch",
        gradient: "linear-gradient(135deg, #b3ffab 0%, #12fff7 100%)",
        viewCount: 2900
    },
    // 2月アーカイブ
    id: 2001,
    title: "UNIQLO 2026春夏展示会レポート。キーワードは『究極の快適性』",
    category: "mens",
    categoryLabel: "メンズ",
    date: "2026.02.15",
    summary: "今シーズンのユニクロは、軽量で通気性の高い新素材を全ラインナップに採用。都市生活に馴染むシックなカラー展開が話題。",
    source: "Fashion Press",
    sourceUrl: "https://www.fashion-press.net/",
    icon: "fa-tshirt",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)",
    viewCount: 3100
    },
{
    id: 2002,
        title: "春の新作コスメ、トレンドは『シアー＆メタリック』の融合",
            category: "cosme",
                categoryLabel: "コスメ",
                    date: "2026.02.10",
                        summary: "内側から発光するような透明感と、ポイントで効かせるメタリックな輝き。各ブランドから発表された春の新色を独断レビュー。",
                            source: "Beauty Online",
                                sourceUrl: "https://maquia.hpplus.jp/",
                                    icon: "fa-magic",
                                        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                            viewCount: 4200
},
{
    id: 2003,
        title: "『サステナブル・ファッション・ウィーク 2026』東京で開催",
            category: "ladies",
                categoryLabel: "レディス",
                    date: "2026.02.05",
                        summary: "再利用素材や廃棄ゼロの製造プロセス。これからのファッションに求められる「責任」と「美しさ」を両立させたデザイナーたちが集結。",
                            source: "Eco Life News",
                                sourceUrl: "#",
                                    icon: "fa-leaf",
                                        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
                                            viewCount: 2800
},
// 1月アーカイブ
{
    id: 1001,
        title: "2026年、ウェルネスの新定番は『デジタル・デトックス・リトリート』",
            category: "wellness",
                categoryLabel: "ウェルネス",
                    date: "2026.01.20",
                        summary: "新年の抱負として注目される「切断」の重要性。スマホを預け、自然の中で五感を取り戻すプログラムが予約殺到中。",
                            source: "Zen Journal",
                                sourceUrl: "#",
                                    icon: "fa-mountain",
                                        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
                                            viewCount: 3540
},
{
    id: 1002,
        title: "CES 2026報告：未来の暮らしを変える『パーソナル・ヘルス・ロボット』",
            category: "living",
                categoryLabel: "暮らし",
                    date: "2026.01.12",
                        summary: "ラスベガスで開催されたCESから。家族の健康を見守り、食事のアドバイスから非常時の通報までこなすAIロボットが多数登場。",
                            source: "Tech Gadget",
                                sourceUrl: "https://wired.jp/",
                                    icon: "fa-robot",
                                        gradient: "linear-gradient(135deg, #302b63 0%, #24243e 100%)",
                                            viewCount: 5100
},
{
    id: 1003,
        title: "伝統工芸×3Dプリント。京都発の新しい『道具』が世界で高く評価",
            category: "living",
                categoryLabel: "暮らし",
                    date: "2026.01.05",
                        summary: "職人の技と最新技術の融合。伝統的な文様を3Dプリントで繊細に再現した茶道具が、海外のデザイン賞を総なめに。",
                            source: "Design Times",
                                sourceUrl: "#",
                                    icon: "fa-brush",
                                        gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                                            viewCount: 1980
}
];

// コラム用データ
const columnData = [
    {
        title: "2026年、私たちの『幸福』はどう定義されるか",
        author: "トレンドアナリスト 佐藤 氏",
        summary: "所有から体験、そして「心の平安」へ。マクロデータから読み解く、これからの価値観の変遷。",
        icon: "fa-brain",
        gradient: "linear-gradient(to right, #4b6cb7 0%, #182848 100%)"
    },
    {
        title: "AIと共創する、新しいクリエイティビティの形",
        author: "テックジャーナリスト 田中 氏",
        summary: "ツールとしてのAIを超え、パートナーとしてどう向き合うべきか。仕事の楽しみ方を再定義する。",
        icon: "fa-pencil",
        gradient: "linear-gradient(to right, #24c6dc 0%, #514a9d 100%)"
    }
];

const newsGrid = document.getElementById('news-grid');
const rankingGrid = document.getElementById('ranking-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const columnGrid = document.getElementById('column-grid');

// 他のDOM要素
const siteLogo = document.getElementById('site-logo');
const homeLink = document.getElementById('home-link');

// 状態管理
let currentCategory = 'all';
let currentSearchTerm = '';
let favoriteIds = JSON.parse(localStorage.getItem('life_trend_favorites') || '[]');
let showFavoritesOnly = false; // お気に入り表示フラグ
let showArchive = false; // アーカイブ表示フラグ

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    renderNews();
    renderRanking();
    renderColumns();
    setupFilters();
    setupSearch();
    setupMobileMenu();
    setupHomeButton();
    setupArchive();
}

// ホーム/ロゴボタンの設定
function setupHomeButton() {
    const resetView = (e) => {
        e.preventDefault();
        currentCategory = 'all';
        currentSearchTerm = '';
        showFavoritesOnly = false;
        showArchive = false;

        searchInput.value = '';
        filterBtns.forEach(b => b.classList.remove('active'));
        const allFilter = document.querySelector('.filter-btn[data-category="all"]');
        if (allFilter) allFilter.classList.add('active');

        renderNews();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (siteLogo) siteLogo.addEventListener('click', resetView);
    if (homeLink) homeLink.addEventListener('click', resetView);
}

// ニュース描画
function renderNews() {
    newsGrid.innerHTML = '';

    const filteredData = newsData.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.title.includes(currentSearchTerm) || item.summary.includes(currentSearchTerm);
        const matchesFavorites = !showFavoritesOnly || favoriteIds.includes(item.id);
        return matchesCategory && matchesSearch && matchesFavorites;
    });

    // 新着とアーカイブを分ける
    const recentNews = filteredData.filter(item => !isArchiveDate(item.date));
    const archiveNews = filteredData.filter(item => isArchiveDate(item.date));

    // 新着の描画
    recentNews.forEach(item => {
        const card = createNewsCard(item);
        newsGrid.appendChild(card);
    });

    // アーカイブ表示中かつアーカイブ記事がある場合、区切り線を入れて描画
    if (showArchive && archiveNews.length > 0) {
        const divider = document.createElement('div');
        divider.className = 'archive-divider';
        divider.innerHTML = '<span>ここから過去の記事</span>';
        newsGrid.appendChild(divider);

        // 日付の降順（新しい順）でソート
        archiveNews.sort((a, b) => b.date.localeCompare(a.date));

        let lastMonth = "";
        archiveNews.forEach(item => {
            // "YYYY.MM.DD" から "YYYY.MM" を抽出
            const currentMonth = item.date.substring(0, 7);

            if (currentMonth !== lastMonth) {
                const monthHeader = document.createElement('div');
                monthHeader.className = 'month-divider';
                const parts = currentMonth.split('.');
                monthHeader.innerText = `${parts[0]}年 ${parseInt(parts[1])}月`;
                newsGrid.appendChild(monthHeader);
                lastMonth = currentMonth;
            }

            const card = createNewsCard(item);
            newsGrid.appendChild(card);
        });
    }

    // アーカイブボタンの表示制御
    const archiveBtnAction = document.getElementById('archive-action');
    if (archiveBtnAction) {
        if (archiveNews.length > 0 && !showArchive) {
            archiveBtnAction.style.display = 'flex';
        } else {
            archiveBtnAction.style.display = 'none';
        }
    }
}

// カテゴリに応じた色を返す
function getCategoryColor(category) {
    switch (category) {
        case 'wellness': return '#27ae60';
        case 'work': return '#2c3e50';
        case 'living': return '#f39c12';
        case 'ladies': return '#e84393';
        case 'mens': return '#3498db';
        case 'kids': return '#f1c40f';
        case 'baby': return '#9b59b6';
        case 'sns': return '#e056fd';
        case 'shoes': return '#d35400';
        case 'cosme': return '#ff4d6d';
        default: return '#333';
    }
}

// お気に入りの切り替え
function toggleFavorite(id, event) {
    if (event) {
        event.stopPropagation();
    }

    const index = favoriteIds.indexOf(id);
    if (index === -1) {
        favoriteIds.push(id);
    } else {
        favoriteIds.splice(index, 1);
    }

    localStorage.setItem('life_trend_favorites', JSON.stringify(favoriteIds));

    // 全ての該当カードのUI更新
    const btns = document.querySelectorAll(`.favorite-btn[data-id="${id}"]`);
    btns.forEach(btn => {
        btn.classList.toggle('active');
        const icon = btn.querySelector('i');
        if (icon.classList.contains('fa-solid')) {
            icon.classList.replace('fa-solid', 'fa-regular');
        } else {
            icon.classList.replace('fa-regular', 'fa-solid');
        }
    });

    if (showFavoritesOnly) {
        renderNews();
    }
}

// ニュース記事へのスクロール
function scrollToArticle(articleId) {
    const article = newsData.find(item => item.id === articleId);
    if (!article) return;

    currentSearchTerm = '';
    currentCategory = 'all';
    showFavoritesOnly = false;

    // もし記事がアーカイブなら、アーカイブを広げる
    if (isArchiveDate(article.date)) {
        showArchive = true;
    }

    searchInput.value = '';
    filterBtns.forEach(b => b.classList.remove('active'));
    const allFilter = document.querySelector('.filter-btn[data-category="all"]');
    if (allFilter) allFilter.classList.add('active');

    renderNews();

    setTimeout(() => {
        const targetCard = newsGrid.querySelector(`.news-card[data-id="${articleId}"]`);
        if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetCard.style.transition = 'background-color 0.5s';
            const originalBg = targetCard.style.backgroundColor;
            targetCard.style.backgroundColor = '#fff9c4';
            setTimeout(() => {
                targetCard.style.backgroundColor = originalBg;
            }, 1000);
        }
    }, 100);
}

// アーカイブの設定
function setupArchive() {
    const archiveBtn = document.getElementById('load-archive-btn');
    const navArchiveLink = document.getElementById('nav-archive');

    const expandArchive = () => {
        showArchive = true;
        renderNews();

        // 少し遅らせて描画を待ってからスクロール
        setTimeout(() => {
            const divider = document.querySelector('.archive-divider');
            if (divider) {
                divider.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    if (archiveBtn) {
        archiveBtn.addEventListener('click', expandArchive);
    }

    if (navArchiveLink) {
        navArchiveLink.addEventListener('click', (e) => {
            e.preventDefault();
            // お気に入り表示中の場合は解除
            if (showFavoritesOnly) {
                showFavoritesOnly = false;
            }
            expandArchive();
        });
    }
}

// アーカイブ判定 (7日以上前)
function isArchiveDate(dateStr) {
    // getRelativeDateから渡されるようなフォーマット "YYYY.MM.DD" を想定
    // ただしlife-trend-monitorの初期データはJS内部で生成されている
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const parts = dateStr.split('.');
    if (parts.length !== 3) return false;
    const itemDate = new Date(parts[0], parts[1] - 1, parts[2]);

    const diffTime = today - itemDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 7;
}

// トレンドスコアの計算
function calculateTrendScore(item) {
    const base = item.viewCount || 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const parts = item.date.split('.');
    const articleDate = new Date(parts[0], parts[1] - 1, parts[2]);
    const ageDays = Math.max(0, Math.floor((today - articleDate) / (1000 * 60 * 60 * 24)));
    const recencyBoost = Math.max(1.0, 2.0 - ageDays * (1.0 / 7));

    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const dateSeed = Number(`${y}${m}${d}`);

    const seed = (dateSeed * 31 + item.id * 1000003) % 2147483647;
    const lcg = ((seed * 1664525 + 1013904223) & 0xffffffff) >>> 0;
    const dailyFactor = 0.5 + (lcg / 0xffffffff);

    return base * recencyBoost * dailyFactor;
}

// ニュースカード作成
function createNewsCard(item, isRanking = false, rank = 0) {
    const card = document.createElement('div');
    card.setAttribute('data-id', item.id);

    const isFavorite = favoriteIds.includes(item.id);
    const favIconClass = isFavorite ? 'fa-solid' : 'fa-regular';
    const favActiveClass = isFavorite ? 'active' : '';

    if (isRanking) {
        card.className = 'ranking-card';
        card.style.cursor = 'pointer';
        card.onclick = () => scrollToArticle(item.id);

        const rankClass = rank <= 3 ? `rank-${rank}` : '';
        const icon = rank === 1 ? '<i class="fa-solid fa-crown"></i>' : rank;
        const badgeHtml = `<div class="rank-badge ${rankClass}">${icon}</div>`;

        const sourceHtml = item.sourceUrl && item.sourceUrl !== '#'
            ? `<a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link" onclick="event.stopPropagation()"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${item.source}</a>`
            : `<i class="fa-solid fa-link"></i> ${item.source}`;

        card.innerHTML = `
            ${badgeHtml}
            <div class="ranking-card-content">
                <h3>${item.title}</h3>
                <div class="ranking-meta">
                    <span class="news-category" style="background-color: ${getCategoryColor(item.category)}; position: static; padding: 2px 8px; font-size: 0.7rem;">${item.categoryLabel}</span>
                    <span class="news-source">${sourceHtml}</span>
                </div>
            </div>
            <button class="favorite-btn ${favActiveClass}" data-id="${item.id}" onclick="toggleFavorite(${item.id}, event)">
                <i class="${favIconClass} fa-heart"></i>
            </button>
        `;
    } else {
        const sourceHtml = item.sourceUrl && item.sourceUrl !== '#'
            ? `<a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link" onclick="event.stopPropagation()"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${item.source}</a>`
            : `<i class="fa-solid fa-link"></i> ${item.source}`;

        card.className = 'news-card';
        card.innerHTML = `
            <div class="news-image" style="background: ${item.gradient}">
                <div class="img-content">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <span class="news-category" style="background-color: ${getCategoryColor(item.category)}">${item.categoryLabel}</span>
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-source">${sourceHtml}</span>
                    <span class="news-date">${item.date}</span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
                <button class="favorite-btn ${favActiveClass}" data-id="${item.id}" onclick="toggleFavorite(${item.id}, event)">
                    <i class="${favIconClass} fa-heart"></i>
                </button>
            </div>
        `;
    }

    return card;
}

// ランキング描写 (Top 3)
function renderRanking() {
    rankingGrid.innerHTML = '';

    // スコア計算とフィルタリング
    const rankingData = newsData
        .filter(item => item.viewCount && !isArchiveDate(item.date))
        .sort((a, b) => calculateTrendScore(b) - calculateTrendScore(a))
        .slice(0, 3);

    rankingData.forEach((item, index) => {
        const card = createNewsCard(item, true, index + 1);
        rankingGrid.appendChild(card);
    });
}

// コラム描画
function renderColumns() {
    columnGrid.innerHTML = '';
    columnData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card'; // 同じスタイルを流用
        card.innerHTML = `
            <div class="news-image" style="background: ${item.gradient}">
                <div class="img-content">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-source">${item.author}</span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
            </div>
        `;
        columnGrid.appendChild(card);
    });
}

// フィルター設定
function setupFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderNews();
        });
    });
}

// 検索設定
function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        renderNews();
    });
}

// モバイルメニュー
function setupMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
    }
}
