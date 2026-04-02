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
    // ── 2026年3月14日（土） ──
    {
        id: 7141,
        title: "「春のデトックス」習慣が注目。白湯＋生姜ルーティンが美容感度高い層に浸透",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.03.14",
        summary: "朝一番の白湯とスライス生姜の組み合わせが腸活・デトックス効果として再評価。SNSで「春のリセット習慣」として拡散され、ドラッグストアでの生姜関連商品が前年比150%の伸びを記録。",
        source: "Wellness Today",
        sourceUrl: "#",
        icon: "fa-mug-hot",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 3400
    },
    {
        id: 7142,
        title: "春コレクション最速レポート：Sacaiが放つ「ハイブリッドウェア」の衝撃",
        category: "ladies",
        categoryLabel: "レディス",
        date: "2026.03.14",
        summary: "デニムとオーガンザを融合させた新発想のレイヤードウェアが世界中のバイヤーを圧倒。「着る彫刻」とも評される立体的なシルエットが2026年春の最大のトピックに。",
        source: "Fashion Press",
        sourceUrl: "#",
        icon: "fa-shirt",
        gradient: "linear-gradient(135deg, #485563 0%, #29323c 100%)",
        viewCount: 4100
    },
    {
        id: 7143,
        title: "「ながら運動」に使えるスマートシューズ、センサーで歩き方を改善",
        category: "shoes",
        categoryLabel: "シューズ",
        date: "2026.03.14",
        summary: "インソールに埋め込まれた圧力センサーが歩行バランスをリアルタイム分析。専用アプリで姿勢改善のフィードバックを受けながら、日常の移動時間をトレーニングに転換できる。",
        source: "Tech Shoes Lab",
        sourceUrl: "#",
        icon: "fa-shoe-prints",
        gradient: "linear-gradient(135deg, #001e62 0%, #3498db 100%)",
        viewCount: 2800
    },
    // ── 2026年3月13日（金） ──
    {
        id: 7131,
        title: "美容医療「ハイフ」の家庭用デバイスが普及期へ。月1回で素肌が変わる",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.13",
        summary: "クリニック専売だった高周波エネルギー照射型の美肌デバイスが一般向けに普及。月1〜2回の使用でリフトアップ効果を実感できるとSNSで評判、需要が急増している。",
        source: "Beauty Digital",
        sourceUrl: "#",
        icon: "fa-spa",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 4800
    },
    {
        id: 7132,
        title: "春ニットの「チョコレートブラウン」旋風 ─ 各ブランドが競い合う新定番色",
        category: "color",
        categoryLabel: "カラー",
        date: "2026.03.13",
        summary: "深みのある濃褐色「チョコレートブラウン」が今春のキーカラーとして急浮上。温もりを感じさせながらも洗練された印象を与えるとして、ファッション各誌の表紙を席巻している。",
        source: "Color Forecast",
        sourceUrl: "#",
        icon: "fa-fill-drip",
        gradient: "linear-gradient(135deg, #3e2723 0%, #a1887f 100%)",
        viewCount: 3600
    },
    {
        id: 7133,
        title: "「仕事の合間に5分瞑想」デスクワーカーのメンタルリセット術が常識化",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: "2026.03.13",
        summary: "大手IT各社が就業中の「マインドフルネス休憩」を推奨し始めた。5分間の呼吸瞑想でafter-集中力が23%向上するというデータが内部調査で確認され、制度化の動きが加速。",
        source: "Work Style Lab",
        sourceUrl: "#",
        icon: "fa-user-tie",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
        viewCount: 3100
    },
    // ── 2026年3月12日（木） ──
    {
        id: 7121,
        title: "TikTok「#春コーデ」投稿が1億件突破。Z世代が牽引するトレンドの最前線",
        category: "sns",
        categoryLabel: "SNS",
        date: "2026.03.12",
        summary: "春の新作コーデをTikTokで披露する「#春コーデ」が累計1億投稿に到達。AIレコメンドとの相乗効果で、「自分スタイル探し」の場としてSNSが機能し始めている。",
        source: "SNS Trend Watch",
        sourceUrl: "#",
        icon: "fa-hashtag",
        gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
        viewCount: 5200
    },
    {
        id: 7122,
        title: "「グリーン系インテリア」需要が急増。バイオフィリックデザインでリラックス空間",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.12",
        summary: "観葉植物を部屋のデザインに組み込む「バイオフィリックデザイン」が住宅雑誌の特集テーマを独占。植物のグリーンと自然素材の組み合わせが、ストレス社会に対するアンチテーゼとして支持を広げている。",
        source: "Interior Plus",
        sourceUrl: "#",
        icon: "fa-seedling",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        viewCount: 3700
    },
    {
        id: 7123,
        title: "限定コラボシューズが発売初日に完売。スポーツ×ラグジュアリーの融合が加速",
        category: "shoes",
        categoryLabel: "シューズ",
        date: "2026.03.12",
        summary: "スポーツとラグジュアリーの融合を究極まで高めた限定モデルが世界同時発売。抽選倍率は200倍を超え、フリマアプリでは定価の数倍でのやり取りが横行している。",
        source: "Sneaker News JP",
        sourceUrl: "#",
        icon: "fa-bolt",
        gradient: "linear-gradient(135deg, #f39c12 0%, #d35400 100%)",
        viewCount: 6100
    },
    // ── 2026年3月11日（水） ──
    {
        id: 7111,
        title: "腸活×美肌の新常識「ポストバイオティクス」、スキンケアに配合する新製品が続々",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.11",
        summary: "生きた菌（プロバイオティクス）ではなく、菌の代謝産物「ポストバイオティクス」をスキンケアに活用する動きが加速。肌のバリア機能を強化する効果が注目を集めている。",
        source: "Skin Science",
        sourceUrl: "#",
        icon: "fa-droplet",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 4300
    },
    {
        id: 7112,
        title: "「ジェンダーレスファッション」が小売市場を本格席巻、大手ブランドも専用ライン",
        category: "mens",
        categoryLabel: "メンズ",
        date: "2026.03.11",
        summary: "性別を意識させないシルエットとカラーで構成されたコレクションが、幅広い年代に支持されている。国内外の大手ブランドが初のジェンダーフリーラインを相次ぎ発表し、市場への本格参入を宣言。",
        source: "Fashion Wire",
        sourceUrl: "#",
        icon: "fa-shirt",
        gradient: "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
        viewCount: 3900
    },
    {
        id: 7113,
        title: "「働く親」を支援するミールキット、定期購読数が前年比200%に急増",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: "2026.03.11",
        summary: "調理時間を平均20分に抑えた時短ミールキットが共働き家庭を直撃。栄養バランスの管理まで行ってくれるサービスが、子育て世代の強い味方として定着しつつある。",
        source: "Meal Delivery Report",
        sourceUrl: "#",
        icon: "fa-utensils",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 2900
    },
    // ── 2026年3月10日（月） ──
    {
        id: 7101,
        title: "カーボンフットプリントを「可視化」するショッピングアプリが続々登場",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.10",
        summary: "商品スキャンで一瞬にしてCO₂排出量を算出。環境意識の高い消費者向けに、購入のたびにエコポイントを付与する仕組みが購買行動を変えつつある。",
        source: "Eco Consumer",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 3300
    },
    {
        id: 7102,
        title: "「プロテインスイーツ」市場が3年で3倍成長。パティシエ監修で本格化",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.03.10",
        summary: "罪悪感ゼロでスイーツ欲を満たせるプロテイン入り菓子が歯止めなく多様化。有名パティシエが監修したレシピでクオリティが向上し、ジムユーザー以外にも支持層が広がっている。",
        source: "Health Food Report",
        sourceUrl: "#",
        icon: "fa-heart-pulse",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 4000
    },
    {
        id: 7103,
        title: "「美の基準」がSNSで移行中、上品・高貴な「ロワイアルコア」が急上昇",
        category: "sns",
        categoryLabel: "SNS",
        date: "2026.03.10",
        summary: "コレクションから着想を得た高貴・上品なスタイルを指す「ロワイアルコア」がInstagramで急上昇。深みのある色彩と繊細なレース使いが注目を集めている。",
        source: "SNS Trend Watch",
        sourceUrl: "#",
        icon: "fa-hashtag",
        gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        viewCount: 5500
    },
    // ── 2026年3月9日（日） ──
    {
        id: 7091,
        title: "春靴トレンド2026：バレエシューズの「超フラット」回帰がファッションを席巻",
        category: "shoes",
        categoryLabel: "シューズ",
        date: "2026.03.09",
        summary: "ヒールゼロのフラットバレエシューズが、スカートからパンツまで今季最もコーデしやすいシューズとして台頭。素材のバリエーションが増え、カジュアルからドレスシーンまで活躍する。",
        source: "Shoes Trend Now",
        sourceUrl: "#",
        icon: "fa-shoe-prints",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 3800
    },
    {
        id: 7092,
        title: "「ヴィンテージデニム」ブームが第3波。古着屋への行列が全国規模に",
        category: "ladies",
        categoryLabel: "レディス",
        date: "2026.03.09",
        summary: "90年代ハイウエストデニムを中心としたヴィンテージ古着への熱狂が再燃。週末の古着市は1000人規模の来場者を記録し、若い世代がサステナブルな消費の最前線を走っている。",
        source: "Vintage Fashion Report",
        sourceUrl: "#",
        icon: "fa-recycle",
        gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
        viewCount: 4600
    },
    {
        id: 7093,
        title: "「森林浴アロマ」がリモートワーカーのデスクを席巻。生産性向上効果も実証",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.03.09",
        summary: "ヒノキや杉などの天然木成分を配合したアロマディフューザーが在宅ワーカーに人気爆発。森林浴の「フィトンチッド」効果をオフィスで再現できるとして、集中力維持に活用するケースが増加。",
        source: "Work From Home Magazine",
        sourceUrl: "#",
        icon: "fa-campground",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 3200
    },
    // ── 2026年3月8日（土） ──
    {
        id: 7081,
        title: "「ラベンダー」と「ミントグリーン」が2026年春モードの2大カラーに浮上",
        category: "color",
        categoryLabel: "カラー",
        date: "2026.03.08",
        summary: "パリコレとミラノコレを席巻した柔らかな紫とクールな緑。互いにリラクゼーションを連想させるこのコンビが、ファッションからインテリア・コスメまで春の色彩シーンをリードする。",
        source: "Color Forecast 2026",
        sourceUrl: "#",
        icon: "fa-fill-drip",
        gradient: "linear-gradient(135deg, #d7aefb 0%, #a8d8a8 100%)",
        viewCount: 4200
    },
    {
        id: 7082,
        title: "ユニクロ・春限定カラーが即完売。定番品のカラー戦略が加速",
        category: "ladies",
        categoryLabel: "レディス",
        date: "2026.03.08",
        summary: "毎年完売を記録するシリーズが春限定カラーを拡充。コーラルピンクとセージグリーンが登場初日に完売し、早期予約枠の導入を検討する声が上がっている。",
        source: "UNIQLO Press",
        sourceUrl: "#",
        icon: "fa-shirt",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 5100
    },
    {
        id: 7083,
        title: "キッズシューズに「成長対応」機能。サイズアジャスター内蔵で廃棄ロスを削減",
        category: "kids",
        categoryLabel: "キッズ",
        date: "2026.03.08",
        summary: "足の成長に合わせてフィット感を調整できる子供靴が登場。廃棄ロスを減らしながら経済的な負担も軽減する、新しいサステナブルシューズが注目を集める。",
        source: "Kids Fashion News",
        sourceUrl: "#",
        icon: "fa-child",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 2900
    },
    // ── ここから既存データ ──
    {
        id: 6001,
        title: "「肌悩み」をAIが10秒診断、大手ドラッグストアが新サービス開始",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.07",
        summary: "カメラで肌を撮影するだけで、AIが現在のコンディションを分析。最適なスキンケア商品をその場で提案する次世代型什器が主要都市に導入される。",
        source: "日経MJ",
        sourceUrl: "#",
        icon: "fa-camera",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 4200
    },
    {
        id: 6002,
        title: "スリープテック最前線：脳波誘導で「最短5分」で深い眠りへ",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.03.07",
        summary: "特殊な周波数を用いたサウンド療法が注目。2026年モデルのイヤホン型デバイスは、入眠を劇的に早める効果が臨床データで実証され、予約が殺到している。",
        source: "Wellness Tech",
        sourceUrl: "#",
        icon: "fa-moon",
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        viewCount: 3800
    },
    {
        id: 6003,
        title: "2026年春、メンズコスメ市場が前年比150%。Z世代の『土台作り』が鍵",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.06",
        summary: "メイクよりも「素肌の綺麗さ」を求める男性が急増。美容医療の低価格化も重なり、20代男性のスキンケアへの月間支出額が過去最高を更新した。",
        source: "Fashion Press",
        sourceUrl: "#",
        icon: "fa-user-tie",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
        viewCount: 3100
    },
    {
        id: 6004,
        title: "東京・渋谷に『デジタルデトックス・カフェ』。スマホ預かりでコーヒー割引",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.06",
        summary: "デジタル疲れを感じる若年層の間で、あえてオフラインを楽しむ空間がブームに。入店時にデバイスを預けることで割引されるユニークな仕組みが話題。",
        source: "渋谷経済新聞",
        sourceUrl: "#",
        icon: "fa-coffee",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 4500
    },
    {
        id: 6005,
        title: "「インドア・アウトドア」家具が30代を中心にヒット。自宅でキャンプ気分",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.05",
        summary: "ベランダや室内でも本格的な焚き火気分を味わえる照明や、キャンプ用素材を用いたソファが人気。日常の中に非日常を求める層のニーズを掴んでいる。",
        source: "PR TIMES",
        sourceUrl: "#",
        icon: "fa-campground",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 2900
    },
    {
        id: 6006,
        title: "無印良品、100%リサイクル素材の「次世代型収納ボックス」を発売",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.05",
        summary: "海洋プラスチックを再利用した、耐久性とデザイン性を両立する新シリーズ。不要になった際の回収・再資源化ルートも確立し、循環型ライフスタイルを提案。",
        source: "無印良品 ニュース",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        viewCount: 3500
    },
    {
        id: 5002,
        title: "1日8時間働けない「虚弱な私」 告白本に共感の連鎖",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.02.28",
        summary: "身体の不調を抱える女性のエッセー本「虚弱に生きる」が話題。努力しても体力がつかない著者の葛藤に、同様の悩みを持つ読者から「Me too」の連鎖が起きている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/article/DGXZQOUC307NH0Q6A130C2000000/",
        icon: "fa-book-open",
        gradient: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
        viewCount: 4200
    },
    {
        id: 5003,
        title: "美容支出、メークよりスキンケアへ 美の「土台作り」を重視",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.02.28",
        summary: "美容医療の普及に伴い、対症療法的なメークよりもスキンケアへの関心が急上昇。2019年比で美容支出が増えた人の多くが「土台作り」への投資を惜しまない傾向に。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/article/DGXZQOUC172VG0X10C26A2000000/",
        icon: "fa-spa",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 3800
    },
    {
        id: 5004,
        title: "サンスター文具「カセットテープメジャー」 レトロな外観でヒット",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.02.28",
        summary: "カセットテープを忠実に再現したメジャーが、販売計画の2.5倍を記録するヒット。レトロ・エモな外観と文具としての実用性が、若年層から大人まで幅広く支持されている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/article/DGXZQOUC30B0M0Q6A130C2000000/",
        icon: "fa-tape",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 2900
    },
    {
        id: 5005,
        title: "ペット多頭飼い専用マンションが登場 頭数制限なしで入居待ち",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.02.27",
        summary: "ペットの頭数・種類制限なしで入居できる複合施設が東京郊外に誕生。家賃は相場より3割高いものの、動植物との共生を求める層から入居待ちが出るほどの人気に。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/article/DGXZQOCD136RS0T10C26A1000000/",
        icon: "fa-paw",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 3500
    },
    {
        id: 3001,
        title: "アットコスメショッピングの「クレンジング」売れ筋ランキング発表",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.04",
        summary: "今実際に売れているクレンジング製品の最新ランキング情報。ユーザーのリアルな支持が集まるアイテムが明らかに。",
        source: "@cosmeRanking",
        sourceUrl: "https://www.cosme.net/ranking/",
        icon: "fa-award",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 5200
    },
    {
        id: 3002,
        title: "Dior「フォーエヴァー」から進化した新ファンデーションが登場",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.04",
        summary: "すべてが進化したフォーエヴァーの新ファンデ。圧倒的な素肌感と持続力を両立した、Diorの自信作が遂に発売。",
        source: "@cosmeBrand",
        sourceUrl: "https://www.cosme.net/brands/46/tieup/00046202602-01/page.html",
        icon: "fa-magic",
        gradient: "linear-gradient(135deg, #222222 0%, #444444 100%)",
        viewCount: 4800
    },
    {
        id: 3003,
        title: "NARS「毛穴レスで透明感続く」新ファンデ体験キャンペーン開始",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.04",
        summary: "NARSの新作ファンデーションを体験できる500名様プレゼントキャンペーン。理想の肌を叶える技術をいち早く体験。",
        source: "@cosmeCampaign",
        sourceUrl: "https://www.cosme.net/brands/2213/tieup/02213202602-02/page.html",
        icon: "fa-gift",
        gradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
        viewCount: 3900
    },
    {
        id: 3004,
        title: "dejavu「究極に美しいまつげ」を体験。500名様にプレゼント",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.04",
        summary: "dejavuの新しいまつげ製品の魅力を体験できるプレゼントキャンペーンがスタート。究極の仕上がりをその手に。",
        source: "@cosmeEvent",
        sourceUrl: "https://www.cosme.net/brands/353/tieup/00353202602-02/page.html",
        icon: "fa-eye",
        gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5253 100%)",
        viewCount: 3500
    },
    {
        id: 3005,
        title: "佐賀で体験型アート展「魔法の美術館」開催。巨大な本に迷い込む体験",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.03",
        summary: "光を奏でる噴水や影と遊ぶ digital art を楽しめる体験型イベント。家族や友人と楽しめる不思議な美術館が登場。",
        source: "Fashion Press",
        sourceUrl: "https://www.fashionpress.net/news/131018",
        icon: "fa-palette",
        gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        viewCount: 2800
    },
    {
        id: 3006,
        title: "「トムとジェリー」生誕85周年記念カフェが東京・大阪・名古屋にオープン",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.03",
        summary: "生誕85周年を記念した“穴あきチーズ”バーガーなどの限定メニューが楽しめるコラボカフェ。作品の世界観を満喫。",
        source: "Fashion Press",
        sourceUrl: "https://www.fashionpress.net/news/130985",
        icon: "fa-utensils",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 4200
    },
    {
        id: 3007,
        title: "マルニの新作バッグ「パピエ」登場。折り紙から着想を得た造形美",
        category: "ladies",
        categoryLabel: "レディス",
        date: "2026.03.03",
        summary: "バイカラーやレオパード柄のスタイリッシュな新作トートバッグ。折り紙のような構造が、日常に芸術的な彩りを添える。",
        source: "Fashion Press",
        sourceUrl: "https://www.fashionpress.net/news/131010",
        icon: "fa-shopping-bag",
        gradient: "linear-gradient(135deg, #485563 0%, #29323c 100%)",
        viewCount: 3100
    },
    {
        id: 3008,
        title: "川崎チッタデッラで「ミモザの祭典」2025開催。春を彩る黄色い街並み",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.03",
        summary: "約100本のミモザと黄色をテーマにした特別メニューが楽しめる。イタリアの春の訪れを祝う伝統的な催しが日本でも。",
        source: "Fashion Press",
        sourceUrl: "https://www.fashionpress.net/news/130972",
        icon: "fa-sun",
        gradient: "linear-gradient(135deg, #fff700 0%, #ffcc00 100%)",
        viewCount: 2600
    },
    {
        id: 3009,
        title: "イケア初、日本の家での暮らしから生まれた「JAPAN コレクション」",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.04",
        summary: "日本の限られた住環境に合わせて開発された、IKEA初の日本限定コレクション。省スペースでも豊かに暮らすヒントが満載。",
        source: "PR TIMES",
        sourceUrl: "https://prtimes.jp/main/html/rd/p/000000457.000000190.html",
        icon: "fa-couch",
        gradient: "linear-gradient(135deg, #0051ba 0%, #ffda1a 100%)",
        viewCount: 5500
    },
    {
        id: 3010,
        title: "脳波から集中度を測定「JINS MEME」の法人向けサービスが進化",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.03.04",
        summary: "ウェアラブルデバイスで従業員の集中度を可視化し、生産性向上を支援。データに基づいた、これからの働き方のスタンダード。",
        source: "PR TIMES",
        sourceUrl: "https://prtimes.jp/main/html/rd/p/000000010.000155000.html",
        icon: "fa-glasses",
        gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
        viewCount: 3200
    },
    {
        id: 3011,
        title: "ダイソン、最新技術を駆使したヘアケア製品「Dyson Chitosan」日本上陸",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.04",
        summary: "ダイソンがヘアケアの固定観念を覆す。キトサンに着目した最新ラインが日本に初上陸、テクノロジーで理想のスタイリングへ。",
        source: "PR TIMES",
        sourceUrl: "https://prtimes.jp/main/html/rd/p/000000143.000042335.html",
        icon: "fa-wind",
        gradient: "linear-gradient(135deg, #ff00cc 0%, #3333ff 100%)",
        viewCount: 4500
    },
    {
        id: 3012,
        title: "睡眠の質を向上させる「Sleep & Health Summit 2026」オンライン開催",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.03.04",
        summary: "睡眠の最新知見を共有し、健康寿命の延伸を目指す大規模サミット。最新テクノロジーと専門家のアドバイスが交差する。",
        source: "PR TIMES",
        sourceUrl: "https://prtimes.jp/main/html/rd/p/000000109.000030580.html",
        icon: "fa-moon",
        gradient: "linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)",
        viewCount: 3800
    },
    {
        id: 1206,
        title: "2026年のトレンドカラー発表、静寂を象徴する『クラウドダンサー』が選出",
        category: "color",
        categoryLabel: "カラー",
        date: "2026.03.03",
        summary: "PANTONE社が発表した2026年の色は、柔らかな白色『Cloud Dancer』。情報過多なデジタル社会における「心の再起動」と「静けさ」を象徴する色が、ファッションからインテリアまで席巻する。",
        source: "Design News",
        sourceUrl: "#",
        icon: "fa-palette",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        viewCount: 5200
    },
    {
        id: 1207,
        title: "JAFCA、2026年のメッセージカラーに『ハートフェルト・ピンク』を決定",
        category: "color",
        categoryLabel: "カラー",
        date: "2026.03.03",
        summary: "日本流行色協会が選んだのは、活力を感じさせる明るいピンク。停滞から変化へ、実体験の価値を呼び覚ますようなポジティブなエネルギーが、ライフスタイルのあらゆる場面で取り入れられる。",
        source: "Color Institute",
        sourceUrl: "#",
        icon: "fa-fill-drip",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 4800
    },
    {
        id: 1201,
        title: "ZOZOTOWN、『AIサイズ推論』がさらに進化。試着不要の精度99%へ",
        category: "ladies",
        categoryLabel: "レディス",
        date: "2026.03.03",
        summary: "数枚の写真から全身のミリ単位の数値を計測。AIがブランドごとの個体差まで計算し、購入後の「サイズ不一致」をゼロにする新サービスを開始。",
        source: "ZOZO プレス",
        sourceUrl: "https://corp.zozo.com/news/",
        icon: "fa-camera",
        gradient: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        viewCount: 4500
    },
    {
        id: 1202,
        title: "IKEA、日本の狭小住宅に特化した『トランスフォーマー家具』を発表",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.03.03",
        summary: "日中はデスク、夜はベッドへ。AIが居住者の生活リズムを学習し、自動で家具の配置や形状を最適化する次世代の居住体験を提案。",
        source: "IKEA Japan News",
        sourceUrl: "https://www.ikea.com/jp/ja/newsroom/",
        icon: "fa-couch",
        gradient: "linear-gradient(135deg, #0051ba 0%, #ffda1a 100%)",
        viewCount: 3800
    },
    {
        id: 1203,
        title: "アシックス、疲労回復を加速させる『次世代リカバリーシューズ』発売",
        category: "shoes",
        categoryLabel: "シューズ",
        date: "2026.03.02",
        summary: "歩くたびに足裏をマッサージし、血流を促進する特殊素材を採用。ビジネスシーンでも違和感のないデザインで、働きながら回復を図る。",
        source: "ASICS ニュース",
        sourceUrl: "https://corp.asics.com/jp/press/",
        icon: "fa-shoe-prints",
        gradient: "linear-gradient(135deg, #001e62 0%, #3498db 100%)",
        viewCount: 3200
    },
    {
        id: 2,
        title: "『マインドフル・ネスティング』、自宅を最高の癒やし空間にする新習慣",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.02.28",
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
        date: "2026.02.28",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.02.27",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.02.27",
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
        date: "2026.02.26",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.02.27",
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
        date: "2026.03.01",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.03.01",
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
        date: "2026.02.27",
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
        date: "2026.02.28",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.03.01",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.02.27",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.03.01",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.02.27",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.03.01",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
        summary: "宝探しのような体験。バラエティショップならではの目利きで、アジア圏の人気ブランドやサステナブルな新作がいち早く登場。",
        source: "Variety Shop Hub",
        sourceUrl: "#",
        icon: "fa-gift",
        gradient: "linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)",
        viewCount: 4600
    },
    {
        id: 609,
        title: "2026年春の『透け感マット』リップ、指塗りで仕上げる新しい血色感",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.04",
        summary: "マットなのに透けるような新感覚のテクスチャーが春メイクの主役に。VOCEが提案する、指でポンポンと馴染ませる抜け感リップの最新トレンドを徹底解説。",
        source: "VOCE Make-up",
        sourceUrl: "https://i-voce.jp/make-up/",
        icon: "fa-magic",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 4500
    },
    {
        id: 610,
        title: "大人の肌を救う『ナイアシンアミド』進化系、最新スキンケアの選び方",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.04",
        summary: "シワ改善と美白を同時に叶える成分として定着したナイアシンアミドがさらに進化。VOCE厳選の最新成分と組み合わせた相乗効果で、揺らぎやすい春の肌を根本から立て直す方法。",
        source: "VOCE Skincare",
        sourceUrl: "https://i-voce.jp/skincare/",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 5200
    },
    {
        id: 611,
        title: "美的.com発『骨格別ハイライト』で小顔効果アップ。光と影を操るベースメイク術",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.03.04",
        summary: "顔の骨格に合わせてハイライトとシェーディングの位置を変えるだけで、驚くほどの小顔効果を実感。美的がプロのメイクアップアーティストと考案した最新ベースメイク理論。",
        source: "美的.com",
        sourceUrl: "https://www.biteki.com",
        icon: "fa-star",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 4800
    },
    {
        id: 701,
        title: "西川『新生活応援キャンペーン』、睡眠を科学した高機能マットレスが話題",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.03.01",
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
        date: "2026.02.28",
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
        date: "2026.02.27",
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
        date: "2026.03.01",
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
        date: "2026.02.28",
        summary: "積み重ね可能なカラーボックスや、ベッドのヘッドボードを選べるカスタマイズ性。生活者の細やかなニーズに応える商品群を一挙投入。",
        source: "イオン ホームコーディ",
        sourceUrl: "https://www.topvalu.net/homecoordy/",
        icon: "fa-couch",
        gradient: "linear-gradient(135deg, #b3ffab 0%, #12fff7 100%)",
        viewCount: 2900
    },
    {
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
    {
        id: 7001,
        title: "2026年春の気温予測。平年よりも高めで桜の開花も記録的な早さに",
        category: "temperature",
        categoryLabel: "気温予測",
        date: "2026.03.05",
        summary: "気象庁の発表によると、今年の春は全国的に平年より気温が高くなる見込み。本格的な春服への衣替えも早期化が予想される。",
        source: "Weather News",
        sourceUrl: "#",
        icon: "fa-sun",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 4500
    },
    {
        id: 7002,
        title: "2026年夏の長期予報。猛暑日日数は昨年に引き続き高水準か",
        category: "temperature",
        categoryLabel: "気温予測",
        date: "2026.03.05",
        summary: "太平洋高気圧の張り出しが強く、例年以上の厳しい暑さが予想される。熱中症対策グッズやひんやり系コスメの需要が早くも高まっている。",
        source: "Weather News",
        sourceUrl: "#",
        icon: "fa-temperature-high",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 3900
    },
    {
        id: 7003,
        title: "2026年秋の傾向。残暑が厳しく、紅葉シーズンは後ろ倒しに",
        category: "temperature",
        categoryLabel: "気温予測",
        date: "2026.03.05",
        summary: "夏からの高い気温が長引き、秋の訪れは遅れる見通し。9月・10月も半袖アイテムが活躍するなど、秋服のセールススケジュールにも影響が。",
        source: "Weather News",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 2200
    },
    {
        id: 7004,
        title: "2026年冬の寒波予測。暖冬傾向なるか、それとも急激な冷え込みか",
        category: "temperature",
        categoryLabel: "気温予測",
        date: "2026.03.05",
        summary: "エルニーニョ現象の影響で暖冬の傾向があるものの、一時的な強い寒気の南下による大雪のリスクも。防寒具だけでなく、調温アイテムが人気。",
        source: "Weather News",
        sourceUrl: "#",
        icon: "fa-snowflake",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 1800
    },
    // 2月の追加アーカイブ
    {
        id: 4001,
        title: "ワークマン、『超撥水・防汚オフィスシューズ』がビジネスパーソンに激刺さり",
        category: "shoes",
        categoryLabel: "シューズ",
        date: "2026.02.20",
        summary: "雨の日の通勤も怖くない。圧倒的な撥水性能と疲れにくいソールを3000円台で実現。SNSで「実用性最強」と拡散され、品薄状態に。",
        source: "Workman Press",
        sourceUrl: "https://www.workman.co.jp/news",
        icon: "fa-shoe-prints",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)",
        viewCount: 3800
    },
    {
        id: 4002,
        title: "『自宅サウナ』が一般家庭へ。10万円台の省スペースモデルがヒット中",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.02.18",
        summary: "サウナブームは「通う」から「自宅でも」へ。コンセント一つで設置できる小型ボックス型が、新築やリフォームの注目設備として急浮上。",
        source: "Sauna Life",
        sourceUrl: "#",
        icon: "fa-fire",
        gradient: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)",
        viewCount: 2900
    },
    {
        id: 4003,
        title: "ソニー、居住者の情緒を読み取る『AIエモーショナル・リビング』を発表",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.02.12",
        summary: "カメラとセンサーで家族の「表情」や「声のトーン」を分析。落ち込んでいる時にはリラックス効果のある音楽と照明に自動で切り替える未来型システム。",
        source: "Sony Global News",
        sourceUrl: "https://www.sony.com/ja/SonyInfo/News/",
        icon: "fa-brain",
        gradient: "linear-gradient(135deg, #21d4fd 0%, #b721ff 100%)",
        viewCount: 4100
    },
    {
        id: 4004,
        title: "2026年春の新作コスメ『美容液リップ』が予約分で完売続出",
        category: "cosme",
        categoryLabel: "コスメ",
        date: "2026.02.01",
        summary: "カラーを楽しみながら、唇の微細な荒れを24時間ケア。各ブランドから発表された「インナーケア発想」の新作が、マスクオフの時代に爆発的な支持。",
        source: "Beauty Online",
        sourceUrl: "https://www.cosme.net/",
        icon: "fa-magic",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 3500
    },
    // 1月の追加アーカイブ
    {
        id: 4005,
        title: "『メタバース出社』が当たり前に。大手企業の3割が仮想空間オフィスを導入",
        category: "work",
        categoryLabel: "ワークスタイル",
        date: "2026.01.28",
        summary: "アバターによる偶発的な会話が「孤独感」を解消。従来のZoom会議よりもチームの一体感が高まると、リモートワークの課題解決策として定着。",
        source: "Tech Career",
        sourceUrl: "#",
        icon: "fa-vr-cardboard",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        viewCount: 5200
    },
    {
        id: 4006,
        title: "パステルカラーの『フェムテック・ウェア』、春を先取りする機能服が流行",
        category: "ladies",
        categoryLabel: "レディス",
        date: "2026.01.25",
        summary: "女性特有の悩みに寄り添う構造と、春らしい明るいカラーを両立。都市生活に馴染む「機能性フェミニン」がファッション界の新たな主役に。",
        source: "Style Media",
        sourceUrl: "#",
        icon: "fa-gem",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 2800
    },
    {
        id: 4007,
        title: "子どもの感性を育てる『知育VR絵本』、教育現場での導入が加速",
        category: "kids",
        categoryLabel: "キッズ",
        date: "2026.01.18",
        summary: "物語の主人公として中に入れる体験。歴史や宇宙を「体験」として学習することで、理解度と探求心が飛躍的に向上すると話題に。",
        source: "Education Today",
        sourceUrl: "#",
        icon: "fa-book-open",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 3100
    },
    {
        id: 4008,
        title: "Instagramで話題の『究極の朝食セット』、産直ECの売上が前年比2倍",
        category: "sns",
        categoryLabel: "SNS",
        date: "2026.01.15",
        summary: "「丁寧な暮らし」の再評価。地方の農家から直接届く土付き野菜や卵をSNSに投稿し、その背景にある「ストーリー」を味わう消費が一般化。",
        source: "SNS Report",
        sourceUrl: "#",
        icon: "fa-camera-retro",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        viewCount: 4500
    },
    {
        id: 4009,
        title: "『スマートベビーカー』登場。自動ブレーキと温度調整機能を搭載",
        category: "baby",
        categoryLabel: "ベビー",
        date: "2026.01.08",
        summary: "AIが坂道を検知し出力をアシスト。急な手放しには自動ブレーキが作動。赤ちゃんが寝付く最適な温度をシート内部で保つなど、親の不安に寄り添う。",
        source: "Family News",
        sourceUrl: "#",
        icon: "fa-baby-carriage",
        gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
        viewCount: 2300
    },
    {
        id: 4010,
        title: "新年の抱負第1位は『睡眠改善』。1月の寝具売上が過去最高を記録",
        category: "wellness",
        categoryLabel: "ウェルネス",
        date: "2026.01.02",
        summary: "「パフォーマンス向上のための休息」が共通認識に。パーソナライズ枕や高級マットレスへの投資が、20代〜30代の間でも一般的となった1月の商戦。",
        source: "Store Trends",
        sourceUrl: "#",
        icon: "fa-bed",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 3900
    },
    {
        id: 4011,
        title: "2026年、暮らしのキーワードは『自分回帰』。パーソナライズ化が加速",
        category: "living",
        categoryLabel: "リビング",
        date: "2026.01.01",
        summary: "年初のトレンド予測。他人の評価より「自分に合うかどうか」。インドア、健康、キャリア、あらゆる面で自分基準の選択をする傾向が強まる1年に。",
        source: "Trend Forecast",
        sourceUrl: "#",
        icon: "fa-compass",
        gradient: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
        viewCount: 5800
    },
    // 既存アーカイブ
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
].filter(item => {
    // Fashion PressとPR TIMESの情報はコスメとレディスのみにする
    if (item.source === 'Fashion Press' || item.source === 'PR TIMES') {
        return item.category === 'cosme' || item.category === 'ladies';
    }
    return true;
});


// ========================================
// コラム統一プール
// 鮮度の高い順に自動選出され、期限切れは自動的に非表示になる
// 新しいコラムを追加するだけで古いものと自動的に入れ替わる
// ========================================
const columnPool = [
    // --- 最新コラム（2026年3月〜） ---
    {
        id: 7,
        tag: "住まい",
        title: "『マイクロリビング』が都市の住み方を再定義する",
        body: `20平米以下の超小型住居が、都市部の若年層を中心に急速に支持を広げています。背景にあるのは、住居費の高騰だけではありません。

        「本当に必要なモノだけと暮らす」というミニマリズムの深化です。AIが収納を最適化し、家具は多機能で変形可能。限られたスペースが逆に創造性を刺激するという声も。

        さらに共有スペースの充実により、個室は「眠る・集中する」場所、共有部は「繋がる・楽しむ」場所という分離が確立しつつあります。所有面積ではなく、体験の密度で住まいの価値を測る時代が到来しています。`,
        author: { name: "藤田 陽子", title: "都市住居デザイナー", initials: "藤", color: "#2c3e50" },
        readTime: 6,
        headerColor: "linear-gradient(to right, #2c3e50, #4ca1af)",
        publishedDate: "2026.03.25",
        expiresInDays: 90
    },
    {
        id: 8,
        tag: "教育",
        title: "『リスキリング・サブスク』が変える、学び直しの民主化",
        body: `月額制で専門スキルを学び放題のプラットフォームが、社会人の学び直しを劇的に加速させています。特に40〜50代の利用率が前年比3倍に急増。

        従来の「資格取得型」の学習から、実務に直結する「プロジェクト型」の学習へとパラダイムが変化。AIメンターが個人の経験やスキルギャップを分析し、最適なカリキュラムを自動生成する仕組みが支持されています。

        「学び」が一部のエリートの特権ではなく、誰もがいつでもキャリアを再構築できる社会インフラとなりつつあります。`,
        author: { name: "山本 太一", title: "人材開発コンサルタント", initials: "山", color: "#8e44ad" },
        readTime: 5,
        headerColor: "linear-gradient(to right, #8e44ad, #3498db)",
        publishedDate: "2026.03.20",
        expiresInDays: 90
    },
    {
        id: 9,
        tag: "家計・マネー",
        title: "『見えない支出』を可視化する——サブスク断捨離の最前線",
        body: `平均的な世帯が契約するサブスクリプションは月12件、合計月額1.8万円に達するという調査結果が話題を呼んでいます。多くの人が「使っていないのに払い続けている」状態に気づいていません。

        この問題に対し、AIが銀行口座やクレジットカードの明細を自動分析し、利用頻度の低いサブスクを特定・解約提案するサービスが急成長。「断捨離」の概念が、モノから定額支出へと拡張されています。

        家計の最適化は、単なる節約ではなく「自分が本当に価値を感じるものに集中投資する」行為。この意識変革が、消費行動全体に波及しつつあります。`,
        author: { name: "吉田 奈々", title: "家計見直しアドバイザー", initials: "吉", color: "#e67e22" },
        readTime: 6,
        headerColor: "linear-gradient(to right, #f39c12, #e74c3c)",
        publishedDate: "2026.03.15",
        expiresInDays: 90
    },
    {
        id: 10,
        tag: "フィットネス",
        title: "『ゼロジム』時代——器具なし・場所なしで完結するフィットネス革命",
        body: `ジムに通わず、自宅でも公園でも、身一つで高強度トレーニングを完結させる「ゼロジム」スタイルが世界的に拡大しています。

        ARグラスがパーソナルトレーナーの動きをリアルタイムで投影し、AIがフォームを補正。場所や器具の制約を完全に取り払ったフィットネスが、忙しい現代人の運動習慣を根本から変えています。

        この流れは従来のフィットネス産業に大きなインパクトを与えています。ジムの価値は「設備」から「コミュニティと体験」へとシフトし、生き残りをかけた業態転換が始まっています。`,
        author: { name: "高橋 翔", title: "フィットネス・イノベーター", initials: "高", color: "#e74c3c" },
        readTime: 5,
        headerColor: "linear-gradient(to right, #eb3349, #f45c43)",
        publishedDate: "2026.03.10",
        expiresInDays: 90
    },
    // --- 2026年3月上旬〜2月 ---
    {
        id: 1,
        tag: "市場分析",
        title: "2026年、暮らしのキーワードは『自分回帰』",
        body: `物価高や技術の進化が加速する中、消費者の関心は「他人の評価」から「自分自身の心地よさ」へと明確にシフトしています。

        かつての「映え」を追求する消費から、自分の体調や精神状態に合わせたパーソナライズされた体験への投資。この『自分回帰』の流れは、住居、ワークスタイル、ウェルネスのあらゆる場面で顕在化しています。

        特に「家」は単なる居住スペースを超え、AIが健康管理をサポートし、心身を整えるリトリートの場としての役割を深めています。このパラダイムシフトが、2026年のビジネスとライフスタイルのあり方を根本から変えていくでしょう。`,
        author: { name: "佐藤 健二", title: "トレンドリサーチ所長", initials: "佐", color: "#34495e" },
        readTime: 6,
        headerColor: "linear-gradient(to right, #4b6cb7, #182848)",
        publishedDate: "2026.03.01",
        expiresInDays: 90
    },
    {
        id: 2,
        tag: "テクノロジー",
        title: "AIと共創する、新しい『余白』の楽しみ方",
        body: `AIが日々のルーチンワークを代替することで生まれる、私たち自身の「余白」。2026年は、この時間をどう使うかが幸福度の鍵を握ります。

        単なる時短ではなく、AIをクリエイティブなパートナーとして活用し、人間特有の五感を刺激する活動に没頭する。例えば、AIが提案する栄養バランスを元に、あえて時間をかけて手料理を楽しむといった「不便さの再定義」が注目されています。

        効率を追求するテクノロジーの影で、私たちが人間らしさを取り戻すための新しいライフスタイルが芽吹いています。`,
        author: { name: "田中 雅也", title: "テックライフ・ジャーナリスト", initials: "田", color: "#3498db" },
        readTime: 5,
        headerColor: "linear-gradient(to right, #24c6dc, #514a9d)",
        publishedDate: "2026.02.15",
        expiresInDays: 90
    },
    {
        id: 3,
        tag: "ワークスタイル",
        title: "『ノマド・バン』が変える、場所を選ばない働き方の終着点",
        body: `高速衛星通信と高容量バッテリーの普及により、真の意味で場所の制約がなくなりました。今、注目されているのは、居住と仕事、そして旅を完全に融合させた「ノマド・バン」によるライフスタイルです。

        都市の利便性を享受しながら、時には大自然の真ん中で重要な会議を開く。この柔軟性が、個人の生産性と精神的充足感を最大化させています。

        「定住」という従来の概念が揺らぎ、地図そのものが自分自身のオフィスであり家となる。そんな自由な働き方が、2026年の新しいスタンダードになりつつあります。`,
        author: { name: "鈴木 直樹", title: "ライフスタイル・デザイナー", initials: "鈴", color: "#27ae60" },
        readTime: 7,
        headerColor: "linear-gradient(to right, #43e97b, #38f9d7)",
        publishedDate: "2026.02.01",
        expiresInDays: 90
    },
    // --- 2026年1月 ---
    {
        id: 4,
        tag: "ウェルネス",
        title: "『スリープテック』が解き明かす、究極の休息の科学",
        body: `2026年のウェルネス市場において、最も革新的な進化を遂げたのは「睡眠」です。単なる計測を超え、脳波誘導や環境の自動調整により、短時間で深い眠りを実現する技術が一般的になりました。

        しかし、技術以上に重要なのは「休息を投資と捉える」意識の変容です。パフォーマンス向上のために戦略的に眠る。この合理的なアプローチが、現代人のメンタルヘルスと創造性を根底から支えています。

        科学に基づいた休息術が、私たちのポテンシャルをどこまで引き出せるのか。最新の研究事例を紐解きます。`,
        author: { name: "小林 恵", title: "ウェルネス研究家", initials: "小", color: "#e84393" },
        readTime: 8,
        headerColor: "linear-gradient(to right, #f093fb, #f5576c)",
        publishedDate: "2026.01.15",
        expiresInDays: 90
    },
    // --- 2025年12月以前（古いコラム） ---
    {
        id: 5,
        tag: "サステナブル",
        title: "『循環型クローゼット』——捨てるから循環するアパレルへ",
        body: `ファッションの価値は「所有」から「循環」へと大きく舵を切りました。2026年の最先端は、AIが自分のワードローブを把握し、最適なタイミングで中古市場やアップサイクルへ誘導する仕組みです。

        新品を買うことが悪ではなく、それをいかに美しく使い切り、次へと繋ぐか。この意識がZ世代を中心に広がり、中古品のステータスが新品を凌駕する場面も増えています。

        クローゼットそのものが生きているように呼吸し、常に自分に最適な形で循環し続ける。そんな新しいお洒落の形を紹介します。`,
        author: { name: "中村 美咲", title: "サステナブル衣生活アドバイザー", initials: "中", color: "#16a085" },
        readTime: 6,
        headerColor: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        publishedDate: "2025.12.10",
        expiresInDays: 90
    },
    {
        id: 6,
        tag: "SNS文化",
        title: "『スロー・ソーシャル』——繋がりすぎをあえて断つ豊かさ",
        body: `常に誰かと繋がっている状態に、人々が疲れを感じ始めています。2026年のSNSトレンドは、あえて返信を求めない、あるいは限られた親しい人だけと静かに時間を共有する「スロー・ソーシャル」です。

        「いいね」の数に一喜一憂するのではなく、自分の感じたことを丁寧に記録し、残す。この日記のような活用法が、メンタルヘルスの安定に繋がると評価されています。

        デジタルな繋がりの中に、自分だけの静かな場所を確保する。そんな新しいメディアとの付き合い方を提案します。`,
        author: { name: "渡辺 裕太", title: "メディア文化論研究者", initials: "渡", color: "#f39c12" },
        readTime: 5,
        headerColor: "linear-gradient(to right, #ff9a9e, #fecfef)",
        publishedDate: "2025.11.20",
        expiresInDays: 90
    }
];

// ========================================
// コラム鮮度判定
// ========================================
function getColumnFreshness(column) {
    const now = new Date();
    const published = new Date(column.publishedDate.replace(/\./g, '-'));
    const expiresInDays = column.expiresInDays || 90;
    const daysSincePublished = Math.floor((now - published) / (1000 * 60 * 60 * 24));
    const daysUntilExpiry = expiresInDays - daysSincePublished;

    if (daysSincePublished < 0) return { status: 'fresh', label: 'NEW', daysInfo: '公開前' };
    if (daysSincePublished <= 30) return { status: 'fresh', label: 'NEW', daysInfo: `公開${daysSincePublished}日目` };
    if (daysUntilExpiry > 30) return { status: 'active', label: '', daysInfo: `残り${daysUntilExpiry}日` };
    if (daysUntilExpiry > 0) return { status: 'aging', label: '更新推奨', daysInfo: `残り${daysUntilExpiry}日` };
    return { status: 'expired', label: '要差替', daysInfo: `${Math.abs(daysUntilExpiry)}日超過` };
}

// ========================================
// コラムカードのレンダリング
// ========================================
function renderColumns() {
    if (!columnGrid) return;
    columnGrid.innerHTML = '';

    // プールから期限切れを除外し、鮮度順（公開日の新しい順）にソートして6件選出
    const DISPLAY_COUNT = 6;
    const freshPool = columnPool
        .filter(col => getColumnFreshness(col).status !== 'expired')
        .sort((a, b) => {
            const dateA = new Date(a.publishedDate.replace(/\./g, '-'));
            const dateB = new Date(b.publishedDate.replace(/\./g, '-'));
            return dateB - dateA;
        });

    // 期限切れコラムはバックフィルしない（空きスロットで改廃を促進）
    const displayColumns = freshPool.slice(0, DISPLAY_COUNT);
    const emptySlots = DISPLAY_COUNT - displayColumns.length;

    // 鮮度サマリーを計算（プール全体が対象）
    let agingCount = 0;
    let expiredCount = 0;
    columnPool.forEach(col => {
        const f = getColumnFreshness(col);
        if (f.status === 'aging') agingCount++;
        if (f.status === 'expired') expiredCount++;
    });

    const summaryEl = document.getElementById('column-freshness-summary');
    if (summaryEl) {
        if (agingCount === 0 && expiredCount === 0) {
            summaryEl.innerHTML = '<span class="freshness-summary-ok"><i class="fa-solid fa-circle-check"></i> すべてのコラムは最新です</span>';
        } else {
            let parts = [];
            if (agingCount > 0) parts.push(`<span class="freshness-summary-aging"><i class="fa-solid fa-triangle-exclamation"></i> 更新推奨: ${agingCount}件</span>`);
            if (expiredCount > 0) parts.push(`<span class="freshness-summary-expired"><i class="fa-solid fa-circle-xmark"></i> 要差替: ${expiredCount}件</span>`);
            summaryEl.innerHTML = parts.join('<span class="freshness-summary-divider"> / </span>');
        }
    }

    displayColumns.forEach(item => {
        const freshness = getColumnFreshness(item);
        const card = document.createElement('article');
        card.className = `column-card${freshness.status === 'expired' ? ' column-expired' : ''}`;

        // 改行を処理
        const formattedBody = item.body.replace(/\n\s+/g, '<br>');

        // 鮮度バッジHTML
        let badgeHtml = '';
        if (freshness.status === 'fresh') {
            badgeHtml = `<span class="column-freshness-badge badge-fresh"><i class="fa-solid fa-sparkles"></i> ${freshness.label}</span>`;
        } else if (freshness.status === 'aging') {
            badgeHtml = `<span class="column-freshness-badge badge-aging"><i class="fa-solid fa-triangle-exclamation"></i> ${freshness.label}</span>`;
        } else if (freshness.status === 'expired') {
            badgeHtml = `<span class="column-freshness-badge badge-expired"><i class="fa-solid fa-circle-xmark"></i> ${freshness.label}</span>`;
        }

        // 期限切れ警告メッセージ
        const expiredMsg = freshness.status === 'expired'
            ? `<div class="column-expired-notice"><i class="fa-solid fa-rotate"></i> このコラムは掲載期限を過ぎています（${freshness.daysInfo}）</div>`
            : '';

        card.innerHTML = `
            <div class="column-card-header" style="background: ${item.headerColor};">
                ${badgeHtml}
            </div>
            <div class="column-card-body">
                <div class="column-tag-row">
                    <span class="column-tag"># ${item.tag}</span>
                    <span class="column-pub-date"><i class="fa-regular fa-calendar"></i> ${item.publishedDate}</span>
                </div>
                <h3>${item.title}</h3>
                <p class="column-text-content">${formattedBody}</p>

                <div class="column-action">
                    <button class="btn-column-toggle">
                        <span class="btn-label">全文を詳しく読む</span> <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>

                ${expiredMsg}

                <div class="column-card-footer">
                    <div class="column-author">
                        <div class="author-avatar" style="background-color: ${item.author.color};">${item.author.initials}</div>
                        <div class="author-info">
                            <span class="author-name">${item.author.name}</span>
                            <span class="author-title">${item.author.title}</span>
                        </div>
                    </div>
                    <span class="column-read-time">
                        <i class="fa-regular fa-clock"></i> 約${item.readTime}分
                    </span>
                </div>
            </div>
        `;

        // 展開・格納イベント
        const toggleBtn = card.querySelector('.btn-column-toggle');
        toggleBtn.addEventListener('click', () => {
            const isExpanded = card.classList.toggle('expanded');
            const icon = toggleBtn.querySelector('i');
            const label = toggleBtn.querySelector('.btn-label');

            if (isExpanded) {
                label.textContent = '内容を閉じる';
                icon.className = 'fa-solid fa-chevron-up';
            } else {
                label.textContent = '全文を詳しく読む';
                icon.className = 'fa-solid fa-chevron-down';
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        columnGrid.appendChild(card);
    });

    // 空きスロットにプレースホルダーを表示（改廃を促進）
    for (let i = 0; i < emptySlots; i++) {
        const placeholder = document.createElement('article');
        placeholder.className = 'column-card column-placeholder';
        placeholder.innerHTML = `
            <div class="column-card-header" style="background: linear-gradient(135deg, #dfe6e9, #b2bec3);">
            </div>
            <div class="column-card-body" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:200px;text-align:center;color:#636e72;">
                <i class="fa-solid fa-pen-to-square" style="font-size:2.5rem;margin-bottom:12px;color:#b2bec3;"></i>
                <h3 style="color:#636e72;font-size:1rem;">新しいコラムを募集中</h3>
                <p style="font-size:0.85rem;margin-top:8px;color:#95a5a6;">期限切れコラムが差し替えられました。<br>新しい専門家コラムの寄稿をお待ちしています。</p>
            </div>
        `;
        columnGrid.appendChild(placeholder);
    }
}

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
    injectDailyArticle(); // デイリー記事を追加（最初に行う）
    renderNews();
    renderRanking();
    renderColumns();
    setupFilters();
    setupSearch();
    setupMobileMenu();
    setupHomeButton();
    setupArchive();
    setupFavoritesNav();
    checkDailyUpdate(); // 朝7時の更新チェック
    setupMonthlyReport();
    checkMonthlyReport();
}

// ホーム/ロゴボタンの設定
function setupHomeButton() {
    const resetView = (e) => {
        e.preventDefault();
        currentCategory = 'all';
        currentSearchTerm = '';
        showFavoritesOnly = false;
        showArchive = false;

        if (searchInput) searchInput.value = '';
        filterBtns.forEach(b => b.classList.remove('active'));
        const allFilter = document.querySelector('.filter-btn[data-category="all"]');
        if (allFilter) allFilter.classList.add('active');

        // ナビゲーションのactive状態をリセット
        if (homeLink) homeLink.classList.add('active');
        const navArchiveLink = document.getElementById('nav-archive');
        if (navArchiveLink) navArchiveLink.classList.remove('active');

        updateFavoritesUI(); // UI表示をリセット
        renderNews();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (siteLogo) siteLogo.addEventListener('click', resetView);
    if (homeLink) homeLink.addEventListener('click', resetView);
}

// ニュース描画
function renderNews() {
    newsGrid.innerHTML = '';

    // フィルタリング
    let filteredData = newsData.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            item.summary.toLowerCase().includes(currentSearchTerm.toLowerCase());
        const matchesFavorites = !showFavoritesOnly || favoriteIds.includes(item.id);
        return matchesCategory && matchesSearch && matchesFavorites;
    });

    // ★ タイトル重複を表示直前に排除（同じタイトルは最新日付のものを優先）
    // 完全一致＋類似タイトル（先頭15文字が同じ）も排除する
    filteredData.sort((a, b) => b.date.localeCompare(a.date)); // まず日付降順で並べ
    const seenTitles = new Set();
    const seenPrefixes = new Set();
    filteredData = filteredData.filter(item => {
        const t = item.title.trim();
        const prefix = t.substring(0, 15); // 類似判定用の先頭15文字
        if (seenTitles.has(t) || seenPrefixes.has(prefix)) return false;
        seenTitles.add(t);
        seenPrefixes.add(prefix);
        return true;
    });

    // 日付の降順（新しい順）でソート（重複排除後に再ソート）
    filteredData.sort((a, b) => b.date.localeCompare(a.date));

    // 新着とアーカイブを分ける (isArchiveDateは7日前かどうかで判定)
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
        // アーカイブ記事があり、かつ現在は表示していない場合にボタンを出す
        if (archiveNews.length > 0 && !showArchive) {
            archiveBtnAction.style.display = 'flex';
        } else {
            archiveBtnAction.style.display = 'none';
        }
    }

    // 検索結果がない場合の表示
    if (filteredData.length === 0) {
        newsGrid.innerHTML = '<p style="text-align:center; width:100%; color:#666; padding: 40px 0;">該当する記事が見見つかりませんでした。</p>';
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
        case 'color': return '#ff6b81'; // ハートフェルト・ピンク
        case 'temperature': return '#1abc9c';
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

        // 描画完了を待ってから、アーカイブ開始地点までスクロール
        setTimeout(() => {
            const divider = document.querySelector('.archive-divider');
            if (divider) {
                // CSSのscroll-margin-topと連携して、最適な位置に表示
                divider.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
    };

    if (archiveBtn) {
        archiveBtn.addEventListener('click', expandArchive);
    }

    if (navArchiveLink) {
        navArchiveLink.addEventListener('click', (e) => {
            e.preventDefault();

            // フィルター状態を完全にリセットしてからアーカイブを表示
            currentCategory = 'all';
            currentSearchTerm = '';
            if (searchInput) searchInput.value = '';
            showFavoritesOnly = false;

            // UI表示のリセット
            filterBtns.forEach(b => b.classList.remove('active'));
            const allFilter = document.querySelector('.filter-btn[data-category="all"]');
            if (allFilter) allFilter.classList.add('active');

            // ナビゲーションのactive状態を更新
            if (homeLink) homeLink.classList.remove('active');
            updateFavoritesUI(); // お気に入り表示をリセット
            navArchiveLink.classList.add('active');

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

    // スコア計算とフィルタリング（同一タイトルの重複排除）
    const sorted = newsData
        .filter(item => item.viewCount && !isArchiveDate(item.date))
        .sort((a, b) => calculateTrendScore(b) - calculateTrendScore(a));

    const seenTitles = new Set();
    const rankingData = [];
    for (const item of sorted) {
        if (seenTitles.has(item.title)) continue;
        seenTitles.add(item.title);
        rankingData.push(item);
        if (rankingData.length >= 3) break;
    }

    rankingData.forEach((item, index) => {
        const card = createNewsCard(item, true, index + 1);
        rankingGrid.appendChild(card);
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

// 検索機能の設定
function setupSearch() {
    if (!searchInput) return;
    const handleSearch = () => {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        renderNews();
    };
    searchInput.addEventListener('input', handleSearch);
}

// お気に入りナビの設定
function setupFavoritesNav() {
    const favoritesBtn = document.getElementById('view-favorites');
    const favoritesOnlyBtn = document.getElementById('filter-favorites-only');
    const showAllBtn = document.getElementById('filter-show-all');

    if (!favoritesBtn) return;

    // 「お気に入りのみ」を選択
    if (favoritesOnlyBtn) {
        favoritesOnlyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showFavoritesOnly = true;
            showArchive = false;
            updateFavoritesUI();
            renderNews();

            // フィルターのリセット
            resetOtherFilters();
        });
    }

    // 「すべて表示」を選択
    if (showAllBtn) {
        showAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showFavoritesOnly = false;
            updateFavoritesUI();
            renderNews();
        });
    }

    // 親ボタン自体のクリック（トグル動作）
    favoritesBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // 従来のトグル動作（表示内容の切り替え）も継続
        showFavoritesOnly = !showFavoritesOnly;
        showArchive = false;
        updateFavoritesUI();
        renderNews();
        if (showFavoritesOnly) resetOtherFilters();
    });
}

// モバイルメニューの設定
function setupMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = toggle.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // メニューリンククリック時に閉じる
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const icon = toggle.querySelector('i');
            if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
        });
    });
}

// お気に入り関連のUI表示更新
function updateFavoritesUI() {
    const favoritesBtn = document.getElementById('view-favorites');
    const favoritesOnlyBtn = document.getElementById('filter-favorites-only');
    const showAllBtn = document.getElementById('filter-show-all');
    const archiveLoadBtn = document.getElementById('load-archive-btn');

    if (showFavoritesOnly) {
        if (favoritesBtn) favoritesBtn.classList.add('active');
        if (favoritesOnlyBtn) favoritesOnlyBtn.classList.add('active');
        if (showAllBtn) showAllBtn.classList.remove('active');
        if (archiveLoadBtn) archiveLoadBtn.classList.remove('active');
    } else {
        if (favoritesBtn) favoritesBtn.classList.remove('active');
        if (favoritesOnlyBtn) favoritesOnlyBtn.classList.remove('active');
        if (showAllBtn) showAllBtn.classList.add('active');
    }
}

// お気に入り表示時の他フィルターリセット
function resetOtherFilters() {
    currentCategory = 'all';
    currentSearchTerm = '';
    if (searchInput) searchInput.value = '';
    filterBtns.forEach(b => b.classList.remove('active'));
    const allFilter = document.querySelector('.filter-btn[data-category="all"]');
    if (allFilter) allFilter.classList.add('active');
}

// ========================================
// デイリー記事プール（ライフスタイル・トレンド）
// 毎日1件ずつローテーションで選択される
// ========================================
const dailyArticlePool = [
    {
        id: 3001,
        title: "睡眠を最適化する『AIスマートアイマスク』、脳波に合わせて音響調整",
        category: "wellness",
        categoryLabel: "ウェルネス",
        summary: "リアルタイムで脳波を測定し、深い眠りへ誘うホワイトノイズや高周波を自動調整。起床時には最もスッキリ目覚められるタイミングで光を放つ最新デバイス。",
        source: "Tech Health",
        sourceUrl: "#",
        icon: "fa-moon",
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        viewCount: 2800
    },
    {
        id: 3003,
        title: "自宅で収穫『全自動インドア菜園』、水耕栽培とAIが植物を管理",
        category: "living",
        categoryLabel: "リビング",
        summary: "室内に置くだけでハーブや野菜が育つ。水分や栄養、LED光量をAIが24時間管理。初心者でも失敗せず、常に新鮮な食材をキッチンに提供できる。",
        source: "Green Life",
        sourceUrl: "#",
        icon: "fa-seedling",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        viewCount: 2200
    },
    {
        id: 3006,
        title: "『エコ・モジュラーキッチン』、廃棄ロスを減らす新しい調理空間の提案",
        category: "living",
        categoryLabel: "リビング",
        summary: "ライフスタイルの変化に合わせてパーツを組み替え可能。リサイクル素材を使用し、エネルギー消費を最小限に抑えるスマート家電が統合された次世代のキッチン。",
        source: "Interior Design",
        sourceUrl: "#",
        icon: "fa-utensils",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 1980
    },
    {
        id: 3009,
        title: "洗浄不要？『サステナブル・セルフクリーニングボトル』がエコ民に大ヒット",
        category: "living",
        categoryLabel: "リビング",
        summary: "内蔵されたUV-C LEDが数分おきに自動点滅し、水とボトル内を殺菌。常に清潔を保てるため、洗う手間を減らしつつペットボトルの消費を削減できる。",
        source: "Sustainable Goods",
        sourceUrl: "#",
        icon: "fa-bottle-water",
        gradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
        viewCount: 3800
    },
    {
        id: 3010,
        title: "パーソナライズ美容液『スキン・マエストロ』、自宅でAIが当日配合",
        category: "cosme",
        categoryLabel: "コスメ",
        summary: "その日の気温、湿度、肌のコンディションに合わせて有効成分の配合比をAIが決定。専用デバイスがその場で1回分の美容液を精製する、究極の個別最適化ケア。",
        source: "Cosme Tech Now",
        sourceUrl: "#",
        icon: "fa-droplet",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 3100
    },
    {
        id: 3011,
        title: "次世代UVケア『透明ヴェール・フィルム』、塗るのではなく「纏う」日焼け止め",
        category: "cosme",
        categoryLabel: "コスメ",
        summary: "超微細繊維を肌に吹き付け、目に見えない薄膜を形成。従来の塗るタイプと異なり、擦れに強く、石鹸で簡単にオフできる画期的なUV遮断技術が注目を集める。",
        source: "Skincare Journal",
        sourceUrl: "#",
        icon: "fa-shield-halved",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 2900
    },
    {
        id: 3012,
        title: "ヴィーガン・マスカラ『プラント・パワー』、植物由来成分100%でボリューム実現",
        category: "cosme",
        categoryLabel: "コスメ",
        summary: "石油系成分を一切排除し、お米のワックスと炭の成分だけで驚異のロング・ボリューム効果を実現。目元への優しさと環境配慮を両立した新世代マスカラ。",
        source: "Eco Beauty",
        sourceUrl: "#",
        icon: "fa-eye",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        viewCount: 2450
    },
    {
        id: 3013,
        title: "『ナイトリペア・リップバーム』、ハチミツと発酵成分で翌朝の唇が劇変",
        category: "cosme",
        categoryLabel: "コスメ",
        summary: "寝ている間に集中的に角質層まで浸透。古くなった角質を優しく整え、翌朝には「縦じわが目立たない」プルプルな状態へ導く。SNSでの口コミから即完売が続く。",
        source: "Lip Trend",
        sourceUrl: "#",
        icon: "fa-face-kiss",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 4100
    },
    {
        id: 3107,
        title: "TikTok発『#今日のコーデ』、10億再生超えで街のファッションを変える",
        category: "sns",
        categoryLabel: "SNS",
        summary: "毎朝の着こなしを15秒動画でシェアするトレンドが爆発的拡散。ハイブランドとプチプラの組み合わせが評価される「民主化ファッション」の象徴となっている。",
        source: "TikTok Trends",
        sourceUrl: "#",
        icon: "fa-brands fa-tiktok",
        gradient: "linear-gradient(135deg, #010101 0%, #69c9d0 50%, #ee1d52 100%)",
        viewCount: 5100
    },
    {
        id: 3108,
        title: "X（旧Twitter）で急拡散『スキンケアルーティン』、専門家解説が100万RT",
        category: "sns",
        categoryLabel: "SNS",
        summary: "皮膚科医によるシンプルケア解説スレッドが爆発的に拡散。「引き算スキンケア」への支持が高まり、多機能コスメより単機能アイテムの売上を押し上げている。",
        source: "X Trend Watch",
        sourceUrl: "#",
        icon: "fa-brands fa-x-twitter",
        gradient: "linear-gradient(135deg, #141414 0%, #434343 100%)",
        viewCount: 4600
    },
    {
        id: 3109,
        title: "Pinterest急上昇『クワイエットラグジュアリー』、シンプル上質が検索1位に",
        category: "sns",
        categoryLabel: "SNS",
        summary: "ロゴ・装飾を排した上質素材コーデが国内外で急増。過剰なトレンド消費からの反動として「長く着られる一枚」への関心が高まり、購買行動にも変化が生まれている。",
        source: "Pinterest Japan",
        sourceUrl: "#",
        icon: "fa-brands fa-pinterest",
        gradient: "linear-gradient(135deg, #e60023 0%, #ad081b 100%)",
        viewCount: 3900
    },
    {
        id: 3110,
        title: "YouTubeで人気急上昇『プチプラ＆ハイブランドMIXコーデ』術",
        category: "sns",
        categoryLabel: "SNS",
        summary: "1万円以下アイテムとブランドバッグを組み合わせる「リアルクローゼット」動画が急増。視聴者の共感を呼び、紹介商品がその日のうちに売り切れる現象が続く。",
        source: "YouTube Fashion",
        sourceUrl: "#",
        icon: "fa-brands fa-youtube",
        gradient: "linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%)",
        viewCount: 4300
    },
    {
        id: 3111,
        title: "2026春夏注目トレンド『ボタニカルプリント』、花柄が新世代へアップデート",
        category: "ladies",
        categoryLabel: "レディス",
        summary: "デジタル加工でリアルな質感を持つ植物柄が登場。淡いトーンのワンピースやシャツへの展開が相次ぎ、オフィス〜カジュアルまで幅広いシーンで採用されている。",
        source: "Vogue Japan",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        viewCount: 3600
    },
    {
        id: 3112,
        title: "『バレエコアスタイル』がSNSから路上へ、リボン＆チュールが主役",
        category: "ladies",
        categoryLabel: "レディス",
        summary: "バレエシューズ、チュールスカート、リボンアクセサリーを取り入れたガーリーなスタイルが若年層を中心に急拡散。フェミニンの再解釈として各ブランドが続々展開。",
        source: "ELLE Japan",
        sourceUrl: "#",
        icon: "fa-star",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #f7a8d2 100%)",
        viewCount: 4000
    },
    {
        id: 3113,
        title: "大人女性に人気『ニュートラルベーシック』、色を引き算するコーデ術",
        category: "ladies",
        categoryLabel: "レディス",
        summary: "ベージュ・アイボリー・グレージュのワントーンコーデが30〜40代に支持拡大。アクセサリー1点だけで印象を変える「シンプル×上質」スタイルがSNSで共感を集める。",
        source: "Oggi Style",
        sourceUrl: "#",
        icon: "fa-circle-half-stroke",
        gradient: "linear-gradient(135deg, #e0e0e0 0%, #c9b99a 100%)",
        viewCount: 3300
    },
    {
        id: 3114,
        title: "メンズに広がる『スキンケアファースト』、グルーミング市場が過去最高を更新",
        category: "mens",
        categoryLabel: "メンズ",
        summary: "洗顔・美容液・日焼け止めを毎日のルーティンに取り入れる男性が急増。コンビニでも男性向けスキンケアコーナーが拡大し、セルフケアへの意識変化が数字に表れている。",
        source: "Men's Beauty",
        sourceUrl: "#",
        icon: "fa-spa",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        viewCount: 3700
    },
    {
        id: 3115,
        title: "『Y2Kメンズファッション』復活、低腰デニム＆ロゴTが20代を席巻",
        category: "mens",
        categoryLabel: "メンズ",
        summary: "2000年代初頭のストリートスタイルが現代解釈で再登場。ビンテージ感のあるロゴTシャツ、バギーシルエット、チェーンアクセサリーがZ世代男性の定番スタイルに。",
        source: "Street Snap",
        sourceUrl: "#",
        icon: "fa-denim",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        viewCount: 3400
    },
    {
        id: 3201,
        title: "『脳疲労ケア』の重要性が浸透。デジタルデトックス・アイマスクがヒット",
        category: "wellness",
        categoryLabel: "ウェルネス",
        summary: "情報過多による脳の疲れを癒やす専用アイマスクが登場。微弱な振動と温熱効果で、視覚情報から解放される「静寂の10分間」を提案する新習慣がビジネス層に支持。",
        source: "Health Tech Japan",
        sourceUrl: "#",
        icon: "fa-brain",
        gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        viewCount: 4100
    },
    {
        id: 3202,
        title: "ビーガンネイル『植物由来80%』、爪に優しい美しさが新基準に",
        category: "cosme",
        categoryLabel: "コスメ",
        summary: "トウモロコシやジャガイモなどの植物成分を主原料としたネイルカラーが急増。ツンとした臭いがなく、セルフネイル派の間で「罪悪感のない美容」として定着。",
        source: "Beauty Eco",
        sourceUrl: "#",
        icon: "fa-hand-sparkles",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 3200
    },
    {
        id: 3203,
        title: "Threads発の『#深夜の考察』がトレンド。長文テキスト文化が再燃",
        category: "sns",
        categoryLabel: "SNS",
        summary: "映像よりもテキスト。Threadsで夜な夜な繰り広げられる深い考察投稿が、若年層の間で「静かなSNS」として人気。短尺動画疲れの反動が起きている。",
        source: "Social Reporter",
        sourceUrl: "#",
        icon: "fa-brands fa-threads",
        gradient: "linear-gradient(135deg, #000000 0%, #ffffff 100%)",
        viewCount: 5200
    },
    {
        id: 3204,
        title: "『防災インテリア』が普及。家具と避難グッズが融合した新スタイル",
        category: "living",
        categoryLabel: "リビング",
        summary: "一見お洒落なクッションがそのまま防災頭巾に。普段はスツールとして使い、緊急時は簡易トイレに。日常に溶け込む防災思想が、都市部マンション層に浸透。",
        source: "Interior Plus",
        sourceUrl: "#",
        icon: "fa-house-shield",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 3800
    },
    {
        id: 3205,
        title: "『AI副業』マッチングサービスが登場。スキルアップと実益を両立",
        category: "work",
        categoryLabel: "ワークスタイル",
        summary: "AIツールを駆使した文章作成や画像生成の案件をAIが自動提案。本業の傍らでAIリテラシーを高めたい層が急増し、既存のクラウドソーシングを凌駕する勢い。",
        source: "New Work Era",
        sourceUrl: "#",
        icon: "fa-laptop-code",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)",
        viewCount: 4500
    },
    {
        id: 3206,
        title: "キッズ向け『AI学習トイ』、子どもの興味に合わせて物語が変化",
        category: "kids",
        categoryLabel: "キッズ",
        summary: "子どもが話しかける内容によって、絵本の結末や学習クイズの難易度がAIで変動。強制的な学習ではなく「好奇心の拡張」を目的とした次世代教育玩具が話題。",
        source: "EduTech Kids",
        sourceUrl: "#",
        icon: "fa-puzzle-piece",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 2900
    },
    {
        id: 3207,
        title: "『週末断食リトリート』、スマホを取り上げられるデジタルデトックス付き",
        category: "wellness",
        categoryLabel: "ウェルネス",
        summary: "都心から1時間の古民家で行われる週末断食。入室時にスマホを預けることで、完全に自分自身の内面と向き合う。2ヶ月先まで予約が埋まるほどの人気を見せている。",
        source: "Wellness Guide",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 3400
    },
    {
        id: 3208,
        title: "『パーソナルカラーAI』対応コスメ什器、ドラッグストアに一斉導入",
        category: "cosme",
        categoryLabel: "コスメ",
        summary: "鏡の前に立つだけでAIが似合うアイシャドウやリップを瞬時に提案。その場でテスターを使わずにシミュレーションできる衛生的な購入体験が、若年層の心を掴んでいる。",
        source: "Cosme Stats",
        sourceUrl: "#",
        icon: "fa-wand-magic-sparkles",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 6200
    },
    {
        id: 3209,
        title: "TikTok発『#手ぶら散歩』が海外でも流行。極小ミニポーチが完売",
        category: "sns",
        categoryLabel: "SNS",
        summary: "スマホ1台と鍵だけで外出するミニマリストな散歩動画が流行。アクセサリー感覚で身に付ける極小ポーチが、有名ブランドから続々と発表され、モード界のトレンドへ。",
        source: "Global Viral News",
        sourceUrl: "#",
        icon: "fa-person-walking",
        gradient: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
        viewCount: 4800
    },
    {
        id: 3210,
        title: "音響家具『サウンドソファ』、座るだけで身体全体で音楽を体感",
        category: "living",
        categoryLabel: "リビング",
        summary: "ソファ内部に専用スピーカーと振動ユニットを内蔵。映画鑑賞やゲーム時に、まるで映画館のような臨場感を自宅で味わえる。ホームシアターの新しい形として注目。",
        source: "Sound Life",
        sourceUrl: "#",
        icon: "fa-couch",
        gradient: "linear-gradient(135deg, #485563 0%, #29323c 100%)",
        viewCount: 3100
    },
    {
        id: 3211,
        title: "『デジタル名刺』がビジネスの新常識。QRコード1つで全てのSNSを共有",
        category: "work",
        categoryLabel: "ワークスタイル",
        summary: "名刺を渡すのではなく、スマホ同士をかざすだけ。経歴、ポートフォリオ、SNSを瞬時に同期。紙の削減だけでなく、その後のコンタクト漏れを防ぐツールとして普及。",
        source: "Biz Tech JP",
        sourceUrl: "#",
        icon: "fa-address-card",
        gradient: "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
        viewCount: 2700
    },
    {
        id: 3212,
        title: "『スマートプランター』が植物の「声」をLINEで通知。枯れない園芸へ",
        category: "living",
        categoryLabel: "リビング",
        summary: "「お腹空いた（肥料不足）」「喉乾いた（水不足）」などの植物の状態を擬人化してスマホに通知。初心者でも愛着を持って育てられる仕組みが、在宅勤務層の間で大ヒット。",
        source: "Green Living",
        sourceUrl: "#",
        icon: "fa-seedling",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        viewCount: 2500
    },
    {
        id: 3213,
        title: "『サウナ飯』専門アプリが登場。ととのった後の最高の一杯を提案",
        category: "wellness",
        categoryLabel: "ウェルネス",
        summary: "サウナの場所、水風呂の温度に合わせて、近隣の至高のサ飯をAIがレコメンド。サウナ愛好家（サウナー）同士のコミュニティ機能も搭載し、新しい食文化を形成中。",
        source: "Sauna Digest",
        sourceUrl: "#",
        icon: "fa-utensils",
        gradient: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)",
        viewCount: 3900
    },
    {
        id: 3214,
        title: "『バーチャルメイク』の精度が極まる。肌の凹凸までリアルに再現",
        category: "cosme",
        categoryLabel: "コスメ",
        summary: "カメラ越しの顔に一瞬でメイクを施すAR技術が進化。従来よりもリアルな質感を再現し、リモート会議の「身だしなみツール」として、もはや欠かせない存在に。",
        source: "AR Beauty Hub",
        sourceUrl: "#",
        icon: "fa-video",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 4300
    },
    {
        id: 3215,
        title: "『ショート動画編集』を習い事にするZ世代。自己表現スキルの必須化",
        category: "sns",
        categoryLabel: "SNS",
        summary: "英会話やピアノと同じ感覚で、動画編集を学ぶ若者が急増。個人の発信力がキャリアに直結する時代、より高度な演出とストーリーテリングを求めるニーズが爆発している。",
        source: "Creator Economy",
        sourceUrl: "#",
        icon: "fa-film",
        gradient: "linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%)",
        viewCount: 5500
    },
    {
        id: 3301,
        title: "ダイソー・セリアが「高品質路線」にシフト。100円を超えても売れる新常識",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "100円ショップ大手が300円・500円帯の上位商品を積極展開し、客単価が上昇。素材感やデザイン性にこだわったアイテムがSNSで拡散し、若い世代の「プチプラ上等」意識を変えつつある。",
        source: "暮らしの雑貨通信",
        sourceUrl: "#",
        icon: "fa-basket-shopping",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 3200
    },
    {
        id: 3302,
        title: "北欧デザイン雑貨が再燃。IKEAとスウェーデンブランドが牽引するナチュラル空間",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "シンプルで機能的な北欧スタイルのインテリア小物が再び人気を集めている。フィンランドやデンマーク発のブランドが日本市場で存在感を高め、「整った暮らし」への憧れを刺激している。",
        source: "モノマガジン",
        sourceUrl: "#",
        icon: "fa-house",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 2800
    },
    {
        id: 3303,
        title: "キャンプ雑貨が「室内」に進出。アウトドアギアがリビングを席巻するトレンド",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "焚き火台や折りたたみチェアをインテリアとして飾る「インドアキャンプ」スタイルが浸透中。機能性と見た目の両立を追求したキャンプ系小物が、都市生活者の支持を集めている。",
        source: "暮らしの雑貨通信",
        sourceUrl: "#",
        icon: "fa-fire",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        viewCount: 3500
    },
    {
        id: 3304,
        title: "「買うなら地球に優しいもの」。エコ雑貨・サステナブルグッズ市場が急成長",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "竹製品やオーガニックコットン素材、生分解性プラスチックを使った雑貨が一般層にも普及。環境負荷を減らしながらおしゃれを楽しむ「エシカル消費」が日常購買行動に組み込まれつつある。",
        source: "日経デザイン",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        viewCount: 2600
    },
    {
        id: 3305,
        title: "インセンス・アロマキャンドルブームが継続。「香りの空間演出」が暮らしの必需品に",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "巣ごもり期に広がったアロマ習慣が定着し、インセンスホルダーやアロマキャンドルの種類が激増。海外ブランドと国産ブランドが競い合い、香りによるメンタルケア需要を取り込んでいる。",
        source: "クロワッサン",
        sourceUrl: "#",
        icon: "fa-fire",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 4200
    },
    {
        id: 3306,
        title: "テーブルウェアが「映え」から「質感」へ。高付加価値食器の需要が拡大",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "家での食事をより豊かにしたいという意識の高まりから、陶芸家の一点物や有名窯元のブランド食器への需要が増加。「毎日使うものだから良いものを」という価値観が、食器市場を底上げしている。",
        source: "ESSE",
        sourceUrl: "#",
        icon: "fa-mug-hot",
        gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        viewCount: 1900
    },
    {
        id: 3307,
        title: "整理収納グッズに「見せる」発想。SNS映えと機能性を両立した収納トレンド",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "クローゼット内をSNSに投稿する文化が広がり、統一感のある収納ボックスやラベルデザインへのこだわりが急増。片付けを「ライフスタイル演出」として楽しむ層が収納市場を変えている。",
        source: "暮らしの雑貨通信",
        sourceUrl: "#",
        icon: "fa-house",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        viewCount: 3800
    },
    {
        id: 3308,
        title: "K-living旋風が到来。韓国雑貨のデザイン力が日本の若者を虜にする",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "K-POPやK-ドラマの影響を受けた韓国インテリア雑貨が、10〜20代女性を中心に爆発的人気。パステルカラーと実用性を兼ね備えたアイテムが、ECサイトやポップアップショップで即完売の事態が続いている。",
        source: "モノマガジン",
        sourceUrl: "#",
        icon: "fa-heart",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 4500
    },
    {
        id: 3309,
        title: "高機能文具の沼にはまる大人たち。こだわりステーショナリーが趣味化",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "万年筆や手帳、マスキングテープなど文房具の世界に深くはまる「文具沼」愛好家が増加。コレクション性と実用性を両立したアイテムへの支出を惜しまない層が市場を支えている。",
        source: "ハンズ通信",
        sourceUrl: "#",
        icon: "fa-pen",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 2300
    },
    {
        id: 3310,
        title: "ペット用品の高級化が止まらない。愛犬・愛猫への「投資」は惜しまない時代",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "デザイン性の高いペット用食器やおしゃれなキャリーバッグ、オーダーメイドベッドなど、ペット雑貨の単価が急上昇。ペットを家族の一員として扱う意識が、市場のプレミアム化を後押ししている。",
        source: "暮らしの雑貨通信",
        sourceUrl: "#",
        icon: "fa-dog",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 3100
    },
    {
        id: 3311,
        title: "スピリチュアル雑貨ブームが爆発。クリスタルや占いグッズが「自分軸」ケアに",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "天然石やタロットカード、ペンデュラムなどスピリチュアルグッズへの関心が若い世代で急拡大。「科学的根拠より直感を大切に」という価値観の浸透が、占い雑貨市場を牽引している。",
        source: "クロワッサン",
        sourceUrl: "#",
        icon: "fa-star",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 4100
    },
    {
        id: 3312,
        title: "マルシェ・クラフト雑貨イベントが全国で盛況。手作りの温もりが刺さる理由",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "週末ごとに公園や商業施設で開かれるハンドメイドマーケットの集客が回復から拡大フェーズへ。作家との直接交流や「世界に一つだけ」への価値付けが、量産品との差別化を生んでいる。",
        source: "日経デザイン",
        sourceUrl: "#",
        icon: "fa-palette",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 2700
    },
    {
        id: 3313,
        title: "和雑貨・伝統工芸がリバイバル。若いデザイナーが再解釈する「日本の美」",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "南部鉄器や波佐見焼、組子細工などの伝統工芸品を現代的なデザインで再解釈したブランドが注目を集めている。インバウンド需要と国内の「日本回帰」意識が重なり、和雑貨市場が活性化している。",
        source: "モノマガジン",
        sourceUrl: "#",
        icon: "fa-gift",
        gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        viewCount: 2100
    },
    {
        id: 3314,
        title: "バスルームを「第二のリラックス空間」に。タオル・バスグッズ市場が充実",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "今治タオルに代表される高品質タオルや、バスボム・バスソルトなどのバスタイムグッズへの需要が増加。「浴室をホテルのように」という憧れが、日常のバスルーム雑貨の単価を押し上げている。",
        source: "ESSE",
        sourceUrl: "#",
        icon: "fa-sparkles",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 1800
    },
    {
        id: 3315,
        title: "ハンドメイドマーケットがECで拡大。クリーマ・ミンネが新たな雑貨流通を築く",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "ハンドメイド販売プラットフォームの出品数・取引額が過去最高を更新し続けている。副業としてハンドメイド作家になる人が急増し、個人制作の雑貨が大手小売と肩を並べる存在になりつつある。",
        source: "日経デザイン",
        sourceUrl: "#",
        icon: "fa-heart",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 3600
    },
    {
        id: 3316,
        title: "インテリア雑貨のサブスク登場。「飽きたら交換」が部屋のアップデートを加速",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "季節や気分に合わせてインテリア小物をレンタル・交換できるサブスクサービスが続々と登場。購入よりも体験を重視する消費者意識の変化が、所有しない雑貨消費の新形態を生み出している。",
        source: "暮らしの雑貨通信",
        sourceUrl: "#",
        icon: "fa-house",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        viewCount: 2400
    },
    {
        id: 3317,
        title: "DIY雑貨が入門化。ホームセンターが「初心者向け」ワークショップで新客獲得",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "塗装や棚作りなどの入門DIYキットが充実し、工具雑貨市場が拡大。週末の趣味として「自分で作る」喜びを求める層が増え、ホームセンターが新たなコミュニティ拠点として機能し始めている。",
        source: "ハンズ通信",
        sourceUrl: "#",
        icon: "fa-palette",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        viewCount: 2000
    },
    {
        id: 3318,
        title: "観葉植物ブームと鉢へのこだわり。インドアグリーン雑貨市場が爛熟期へ",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "フィカスやモンステラなどの人気植物に合わせ、陶器やセメント製の個性的な鉢やプランタースタンドへの需要が急増。植物そのものよりも「飾り方」への関心が高まり、雑貨市場に新たな成長軸が誕生した。",
        source: "クロワッサン",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        viewCount: 3300
    },
    {
        id: 3319,
        title: "旅行需要回復でポータブル雑貨が再注目。コンパクト&機能的が新基準",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "旅行再開に伴いトラベルポーチや折りたたみ傘、携帯用アロマグッズなどの需要が急回復。荷物を最小限に抑えながら旅の質を高める「スマートトラベル雑貨」が新たな市場を形成している。",
        source: "モノマガジン",
        sourceUrl: "#",
        icon: "fa-star",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 2900
    },
    {
        id: 3320,
        title: "子ども向けクリエイティブ雑貨に熱視線。知育と遊びを融合した「工作系」が人気",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "粘土セットやビーズキット、スクラッチアートなど創造力を伸ばす子ども向け雑貨への投資が増加。スクリーンタイムへの反省から、親世代が「手を動かす遊び」に積極的にお金をかける傾向が強まっている。",
        source: "ESSE",
        sourceUrl: "#",
        icon: "fa-palette",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 1700
    },
    {
        id: 3321,
        title: "ミニマリスト向け機能性グッズが進化。「少ないもので豊かに」の実装が加速",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "多機能を1つに集約したコンパクトグッズへの需要が高まり、ミニマリスト系インフルエンサーがおすすめする「厳選アイテム」が即完売する現象が相次いでいる。シンプルさと機能美の両立が購買の新基準に。",
        source: "暮らしの雑貨通信",
        sourceUrl: "#",
        icon: "fa-sparkles",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        viewCount: 3000
    },
    {
        id: 3322,
        title: "廃材・リサイクル素材を使った雑貨がアート化。サステナブルとデザインの融合",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "廃棄ペットボトルや古布を原料にしたアップサイクル雑貨が「おしゃれなエコ」として定着。環境問題への意識とデザイン性への欲求を同時に満たす商品が、新世代の消費者に強く支持されている。",
        source: "日経デザイン",
        sourceUrl: "#",
        icon: "fa-recycle",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        viewCount: 2200
    },
    {
        id: 3323,
        title: "香りの多様化が止まらない。アロマグッズが「気分転換ツール」として定着",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "ルームスプレーやドライハーブ、精油ブレンドなど香りのバリエーションが爆発的に拡大。「朝はシトラス、夜はラベンダー」のように香りで時間を演出するライフスタイルが一般層に広がっている。",
        source: "クロワッサン",
        sourceUrl: "#",
        icon: "fa-fire",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 3700
    },
    {
        id: 3324,
        title: "季節限定雑貨に消費者が熱狂。ハロウィン・クリスマスグッズの売上が年々拡大",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "ハロウィンやクリスマスの季節限定ディスプレイグッズへの支出が増加の一途。「家を飾る文化」の定着が、小売各社の季節イベント商戦をますます激化させている。",
        source: "ESSE",
        sourceUrl: "#",
        icon: "fa-star",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        viewCount: 4300
    },
    {
        id: 3325,
        title: "カフェ風インテリア小物が定番化。「家カフェ」文化が雑貨消費を底上げ",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "チョークボードや木製トレー、カフェ風ティーポットなど「おうちをカフェのように」するアイテムが安定した人気を維持。SNSでの投稿数も多く、雑貨市場の定番カテゴリーとして確立されている。",
        source: "暮らしの雑貨通信",
        sourceUrl: "#",
        icon: "fa-mug-hot",
        gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        viewCount: 2500
    },
    {
        id: 3326,
        title: "「見えない場所」への雑貨へのこだわりが進化。スポンジや洗濯ネットもデザインの時代",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "キッチンスポンジや洗濯ネット、排水口カバーなど実用消耗品にもデザイン性とカラーコーディネートを求める動きが活発化。生活の細部にまでこだわりが行き渡る「完全整合志向」の消費スタイルが浸透している。",
        source: "ESSE",
        sourceUrl: "#",
        icon: "fa-sparkles",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        viewCount: 1600
    },
    {
        id: 3327,
        title: "推し活グッズ市場が急拡大。ファン心理が「雑貨消費」を新局面へ押し上げる",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "アイドルや漫画キャラクターのグッズだけでなく、推しカラーで統一したオリジナル雑貨を自作・購入するファンが急増。「推し活雑貨」は今やハンドメイド市場と公式グッズ市場の両方を刺激している。",
        source: "モノマガジン",
        sourceUrl: "#",
        icon: "fa-heart",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 4400
    },
    {
        id: 3328,
        title: "フィットネス雑貨が「日常使い」に浸透。運動グッズがおしゃれ化で購買意欲刺激",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "ヨガマットやフォームローラー、パワーボールなどのフィットネス用品がインテリアとして飾れるデザインに進化。「見せる収納」と「日常的な運動習慣」の両立を目指す消費者層が市場を拡大させている。",
        source: "ハンズ通信",
        sourceUrl: "#",
        icon: "fa-star",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 2800
    },
    {
        id: 3329,
        title: "スマート雑貨がリビングに普及。IoTとインテリアの融合が「未来の暮らし」を先取り",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "スマート照明やアプリ連動の空気清浄機、センサー付き植物管理グッズなど、デジタルと雑貨の境界が溶けた製品が一般家庭に浸透。「手間なく快適」を実現するスマートホーム雑貨市場が急拡大している。",
        source: "日経デザイン",
        sourceUrl: "#",
        icon: "fa-sparkles",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3400
    },
    {
        id: 3330,
        title: "地方・ご当地雑貨の人気が急上昇。旅の記憶を持ち帰る「土産以上の一品」",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "各地の工芸作家や地元企業が手がける個性豊かなご当地雑貨への関心が高まっている。観光地での購買だけでなく、ECを通じた全国展開も進み、地域経済の新たな稼ぎ頭として注目を集めている。",
        source: "暮らしの雑貨通信",
        sourceUrl: "#",
        icon: "fa-gift",
        gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        viewCount: 2100
    },
    {
        id: 3331,
        title: "ルームフレグランス市場が1000億円規模へ。香りが生活空間の「基本インフラ」に",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "ディフューザー、スティック型、スプレー型と多様化したルームフレグランス市場が急成長。住空間における香りの演出が特別なものでなく「当たり前」として認識され始め、市場規模が急拡大している。",
        source: "クロワッサン",
        sourceUrl: "#",
        icon: "fa-fire",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        viewCount: 3900
    },
    {
        id: 3332,
        title: "デスク整理グッズが「仕事効率化」グッズとして再定義。在宅ワーク需要が継続",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "書類トレーやケーブルオーガナイザー、モニタースタンドなどデスク周り整理グッズが、在宅ワークの定着で定番商品に昇格。「仕事部屋の快適化投資」として金額を惜しまないビジネスパーソンが増えている。",
        source: "ハンズ通信",
        sourceUrl: "#",
        icon: "fa-pen",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        viewCount: 2600
    },
    {
        id: 3333,
        title: "エコバッグが「ファッションアイテム」に昇格。おしゃれブランドが本気参入",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "レジ袋有料化以降、エコバッグはただの買い物袋からスタイルを表現するファッションアイテムへと変貌。有名ブランドや限定コラボのトートバッグが転売されるほどの人気を集め、市場のステージが変わった。",
        source: "モノマガジン",
        sourceUrl: "#",
        icon: "fa-recycle",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        viewCount: 3200
    },
    {
        id: 3334,
        title: "キッチン清掃グッズが「タスクを楽しくする」デザインへ。機能と美観の新基準",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "食器洗いスポンジや排水口ネット、シンク磨きグッズがカラフルでおしゃれなデザインを採用し始めた。「掃除が好きになるグッズ」というコンセプトが受け入れられ、清掃用品市場に新たな付加価値が生まれている。",
        source: "ESSE",
        sourceUrl: "#",
        icon: "fa-sparkles",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        viewCount: 1500
    },
    {
        id: 3335,
        title: "アウトドア×室内の「ハイブリッド雑貨」急増。境界消滅が新カテゴリーを生む",
        category: "zakka",
        categoryLabel: "雑貨",
        summary: "アウトドア仕様の耐久性と室内インテリアとしての審美性を兼ね備えたハイブリッド商品が登場し、ヒット連発。屋外でも屋内でも使えるという「シーンレス設計」が現代の生活スタイルとマッチしている。",
        source: "日経デザイン",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 2900
    },
    {
        id: 3336,
        title: "アパレル大手が「サステナ転換」を加速。再生素材比率50%超を宣言する企業が続出",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "国内アパレル主要各社が再生ポリエステルやオーガニックコットンの使用比率拡大を相次いで表明。ESG投資家からの圧力と消費者意識の変化が、ファッション産業のサプライチェーン再構築を加速させている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3400
    },
    {
        id: 3337,
        title: "ファストファッション市場が「二極化」。超格安と高品質低価格に消費が分裂",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "シーインなどの超低価格ブランドと、ユニクロやGUのような品質重視型の中間価格帯が市場を二分する構造が鮮明に。中途半端な価格帯ブランドの淘汰が進み、ファストファッション業界の再編が加速している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 4100
    },
    {
        id: 3338,
        title: "百貨店が「体験型」へ大転換。売場面積を削りレストランとイベントホールを拡充",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "大手百貨店各社が衣料品売り場を縮小し、飲食・体験・コンテンツゾーンを拡充するリモデルを推進中。「モノを売る場所」から「時間を過ごす場所」への転換が百貨店の生き残り策として定着しつつある。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3800
    },
    {
        id: 3339,
        title: "ECファッション市場が5兆円に迫る勢い。試着体験の革新が残課題を解消",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "サイズ感や素材感の確認が難しいというECファッションの弱点を、3D試着技術やAIサイズ推奨で補う取り組みが成果を上げている。返品率の低下と購買転換率の向上が、市場拡大の好循環を生み出している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3200
    },
    {
        id: 3340,
        title: "フリマアプリがアパレル流通を再定義。新品販売とリユースが融合する市場構造",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "メルカリやラクマでの衣料品取引が拡大し、「将来的に売れる服を買う」という逆算消費が若者層に定着。一次流通と二次流通の境界が溶け、ブランド側もリセールバリューを意識した商品設計にシフトしている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 4200
    },
    {
        id: 3341,
        title: "コスメ市場が過去最高更新。「成分訴求」が購買決定の第一条件に浮上",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "ナイアシンアミドやレチノール、ビタミンCといった有効成分への消費者理解が深まり、成分表示を吟味して化粧品を選ぶ「成分マニア」が急増。高機能スキンケア市場が全体の成長を牽引している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3900
    },
    {
        id: 3342,
        title: "ドラッグストアがコスメ戦略を強化。調剤薬局の「脱・医薬品依存」が加速",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "マツキヨやツルハなど大手ドラッグストア各社がプライベートブランドコスメを拡充し、百貨店ブランドに対抗する品揃えを実現しつつある。「近くて安い」に「品質もよい」が加わり、化粧品購買の現場が変わっている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2900
    },
    {
        id: 3343,
        title: "Z世代のファッション消費が「価値観投票」に変化。ブランドの姿勢を買う",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "20代前半の消費者は商品の機能やデザイン以上に、ブランドの社会的立場や多様性への取り組みを重視して購買を決める傾向が強まっている。ブランドアクティビズムへの対応が、Z世代獲得の鍵を握っている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3600
    },
    {
        id: 3344,
        title: "40代・50代女性がファッション市場の主役に。高収入シニア世代の購買力に注目",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "可処分所得が高く、品質とデザインにうるさい40〜50代女性向けのファッションライン強化に大手各社が注力。「大人の女性をなめるな」という消費者の声を受け、現実体型に合う高品質商品の開発競争が激化している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2700
    },
    {
        id: 3345,
        title: "メンズビューティー市場が3年で2倍に。男性の美容意識が「当たり前」の時代へ",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "BBクリームや眉マスカラ、スキンケア専用品を日常的に使う男性が急増し、メンズコスメ市場が爆発的成長を遂げている。「清潔感の延長」から「自己表現」へと男性美容の意味合いが変化しつつある。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 4000
    },
    {
        id: 3346,
        title: "ウェルネス市場が8兆円規模に拡大。「予防」に投資する消費者が増加",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "フィットネス、栄養補助食品、メンタルヘルスケアを統合したウェルネス消費が急拡大。病気になってから医療にお金をかけるのではなく、健康を維持するために積極的に支出する「予防経済」が本格化している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3500
    },
    {
        id: 3347,
        title: "インバウンド消費でファッション売上が急回復。訪日客がラグジュアリーを爆買い",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "円安を背景に訪日外国人によるファッション・ラグジュアリー品の購入が急増し、銀座・表参道エリアの免税売上が過去最高を更新している。インバウンド対応を強化するブランドと、国内客向けに特化するブランドの戦略分化が進んでいる。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 4200
    },
    {
        id: 3348,
        title: "服の廃棄問題に企業が本腰。回収・再生プログラムが業界標準になる日",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "年間約51万トンとされる国内の衣料廃棄問題に対応するため、メーカー各社が店頭回収・リサイクルプログラムを拡充。廃棄衣料を原料に戻して新製品化する「クローズドループ」への移行が業界の合言葉になりつつある。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2800
    },
    {
        id: 3349,
        title: "セレクトショップが「キュレーター」に進化。独自世界観で生き残りを図る",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "ECの普及で「品揃えの多さ」では勝負できなくなったセレクトショップが、バイヤーの審美眼と独自世界観で差別化を図る戦略にシフト。国内外の知られざるブランドを発掘・育成する「キュレーター型小売」が新たな勝ち組モデルとして台頭している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2200
    },
    {
        id: 3350,
        title: "SPA業態が「上質化」に舵を切る。ユニクロ・GUが高付加価値ラインを強化",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "製造小売（SPA）の雄・ユニクロがカシミヤやシルクなどの高品質素材ラインを拡充し、単価上昇を図っている。「安くて良いもの」から「少し高くても本当に良いもの」へのブランドイメージ刷新が、SPA業態全体の新戦略として注目される。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3700
    },
    {
        id: 3351,
        title: "ワークウェアのカジュアル化が定着。「スーツ離れ」に企業も対応を迫られる",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "テレワークの浸透とオフィスドレスコードの緩和が進み、スーツ市場が縮小する一方、きれいめカジュアルウェア市場が拡大。「仕事着と私服の境界消滅」という新しい消費行動が服飾業界の商品開発を根底から変えている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3100
    },
    {
        id: 3352,
        title: "スニーカー市場に高額品ブームが再来。投資対象としての「希少スニーカー」",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "ナイキやアディダスの限定モデルが抽選販売後に数十万円で転売される市場が継続的に拡大。スニーカーを資産として捉える「スニーカー投資」が若い世代に浸透し、シューズ市場の高額化・二極化が加速している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3900
    },
    {
        id: 3353,
        title: "アクセサリー市場がゴールド回帰。「本物志向」が高価格帯ジュエリーを押し上げる",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "金価格の高騰にもかかわらず、本物のゴールドやプラチナを使ったファインジュエリーへの需要が旺盛。「安くておしゃれ」なファッションジュエリーとの二分化が進み、アクセサリー市場のプレミアム化が鮮明になっている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2400
    },
    {
        id: 3354,
        title: "子供服市場に高品質・長持ち志向。「コスパより品質」で親世代が変わった",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "「どうせ汚れるから安いもので」という子供服消費の常識が変わり、耐久性と安全性にこだわった高品質子供服が人気を集めている。兄弟間でのお下がりや、良品を長く使うという意識が、子供服市場の価値観を塗り替えている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 1900
    },
    {
        id: 3355,
        title: "高機能アウターの需要が急増。防風・防水・軽量の三拍子がマストに",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "アークテリクスやナンガなどの高機能アウターブランドが都市生活者に浸透し、ダウンジャケット・マウンテンパーカー市場が活況。「見た目のかっこよさ」と「実際の機能性」を両立した製品への需要が、アウター市場の単価を押し上げている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3300
    },
    {
        id: 3356,
        title: "海外ラグジュアリーブランドが日本戦略を再強化。旗艦店の刷新ラッシュが続く",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "ルイ・ヴィトン、シャネルなど欧州高級ブランドが日本の旗艦店を相次ぎリニューアルし、体験型空間として再定義している。円安による外国人客の購買増加と、国内富裕層の消費意欲維持が、日本市場への再投資を加速させている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 4100
    },
    {
        id: 3357,
        title: "国内ブランドの海外進出が本格化。日本品質が世界市場で「プレミアム」に",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "ポーターやコモリ、エンダースキーマなど日本発のファッションブランドが欧米・アジア市場で評価を高めている。「メイド・イン・ジャパン」の精緻な縫製と独自のデザイン哲学が、グローバル市場での差別化要因になっている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2600
    },
    {
        id: 3358,
        title: "ファッション×AIが産業変革を起こす。デザイン・需要予測・在庫管理が一変",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "AIを活用したトレンド予測や需要予測が精度を増し、過剰生産による廃棄ロスを大幅削減する取り組みが広がっている。デザイン生成AIの実用化も進み、ファッション産業全体のデジタルトランスフォーメーションが加速している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3800
    },
    {
        id: 3359,
        title: "ライブコマースがアパレル販売を変革。「見て・聞いて・即買い」が購買体験に",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "インフルエンサーやブランドスタッフがリアルタイム配信で商品を紹介するライブコマースが、アパレル販売の主流チャネルの一つに成長。視聴者とのインタラクションが購買意欲を高め、従来の静的なEC販売を超える転換率を記録している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3500
    },
    {
        id: 3360,
        title: "ファッションサブスクが成熟期へ。会員継続率と顧客単価の両立が課題に",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "月額制で服をレンタルできるサブスクリプション型ファッションサービスが参入・淘汰を経て成熟フェーズに入った。スタイリスト機能との連携やパーソナライズ精度の向上が、サービス継続の鍵を握っている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2300
    },
    {
        id: 3361,
        title: "インフルエンサーとブランド連携が「公式化」。共同開発商品が市場を席巻",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "SNSフォロワー数百万人規模のインフルエンサーがブランドと共同開発した商品が、発売初日に完売する現象が相次いでいる。一時的なPR起用から、製品開発の初期段階から関与する「ブランドパートナー」モデルへの移行が加速している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 4000
    },
    {
        id: 3362,
        title: "デジタルファッションウィークが定着。リアルとバーチャルの複合開催が標準に",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "東京コレクションをはじめ国内主要ファッションウィークがオンライン配信と会場観覧を組み合わせたハイブリッド形式で定着。世界中のバイヤーやメディアが現地に来なくてもコレクションを確認できる体制が、日本ブランドの国際発信力を高めている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 1800
    },
    {
        id: 3363,
        title: "古着・ヴィンテージ市場が過去最高規模に。「一点物」への価値観が世代を超えて浸透",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "古着屋やヴィンテージショップへの来客が年々増加し、市場規模が過去最高を更新している。環境への配慮に加え、大量生産品にはない「個性と物語」を求める消費者が若年層から中高年まで広がり、リユースファッションが市場の本流に躍り出た。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3600
    },
    {
        id: 3364,
        title: "高機能スポーツウェアが「日常服」として完全定着。アスレジャーが次の段階へ",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "ヨガパンツやランニングジャケットを通勤・買い物・外食時に着用する「アスレジャー」スタイルが日本でも完全に定着。機能素材の快適性と現代的なデザインが、スポーツウェアを生活全域をカバーする衣料カテゴリーへと進化させた。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 3200
    },
    {
        id: 3365,
        title: "ジェンダーレスファッションが本流へ。男女の垣根を超えた商品設計が加速",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "性別を問わないジェンダーニュートラルなデザインの服が、百貨店やセレクトショップの定番ラインとして整備されつつある。「自分らしさ」を最優先にする消費者意識の変化が、ファッション業界の商品企画・売り場構成の根本を変えている。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2700
    },
    {
        id: 3366,
        title: "パーソナルスタイリングサービスが普及期へ。AIとプロの融合で「自分に似合う」を科学",
        category: "nikkei_mj",
        categoryLabel: "日経MJ",
        summary: "骨格診断やパーソナルカラー分析をAIで自動化し、プロスタイリストが最終提案するサービスが一般層に普及し始めた。「何を買えばいいかわからない」という消費者の購買不安を解消することで、ファッション支出の増加と顧客満足度の向上を同時に実現している。",
        source: "日経MJ",
        sourceUrl: "https://www.nikkei.com/mj/",
        icon: "fa-newspaper",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        viewCount: 2900
    }
];

// 1日あたりの追加記事数
const ITEMS_PER_DAY = 7;

// ========================================
// [v8] 日付に基づくシード乱数（xorshift）
// ========================================
function xorshiftRand(seed) {
    let s = (seed ^ 0x9e3779b9) >>> 0;
    if (s === 0) s = 1;
    s ^= s << 13;
    s ^= s >> 17;
    s ^= s << 5;
    return (s >>> 0) / 4294967296;
}

// ========================================
// [v8] シードシャッフル（xorshiftベース）
// ========================================
function seededShuffle(array, seed) {
    const shuffled = [...array];
    let s = (seed + 1) >>> 0;
    for (let i = shuffled.length - 1; i > 0; i--) {
        s ^= s << 13; s ^= s >> 17; s ^= s << 5; s = s >>> 0;
        const j = s % (i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ========================================
// [v8] 日付文字列から日数オフセットを取得
// ========================================
function getDayNumber(dateStr) {
    const parts = dateStr.split('.');
    const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    d.setHours(0, 0, 0, 0);
    const epoch = new Date(2026, 0, 1);
    return Math.round((d - epoch) / 86400000);
}

// ========================================
// [v8] 指定日のデイリー記事インデックスを取得
// excludePoolIndices: 前日のインデックスSet（直接除外）
// ========================================
function getDailyArticleIndicesForDate(dateStr, excludePoolIndices = new Set()) {
    const dayNum = getDayNumber(dateStr);

    // ハードコード記事のタイトルセット（プールから除外）
    const hardcodedTitles = new Set(newsData.map(d => d.title.trim()));

    // 候補リスト：前日インデックスとハードコードタイトルの両方を除外
    const preferred = [];  // 前日と被らないもの
    const fallback  = [];  // 前日と被るが必要なら使えるもの

    dailyArticlePool.forEach((article, idx) => {
        if (hardcodedTitles.has(article.title.trim())) return; // ハードコードと被る→除外
        if (excludePoolIndices.has(idx)) {
            fallback.push(idx);  // 前日と被る→フォールバック
        } else {
            preferred.push(idx); // 前日と被らない→優先
        }
    });

    // 日付シードでシャッフル
    const shuffledPreferred = seededShuffle(preferred, dayNum * 1000 + 7);
    const shuffledFallback  = seededShuffle(fallback,  dayNum * 1000 + 13);

    // 優先リストから増やし、足りなければフォールバックを使う
    const result = [...shuffledPreferred.slice(0, ITEMS_PER_DAY)];
    if (result.length < ITEMS_PER_DAY) {
        const need = ITEMS_PER_DAY - result.length;
        result.push(...shuffledFallback.slice(0, need));
    }

    return result;
}

// ========================================
// ユニークIDを日付とインデックスから生成
// ========================================
function getDailyUniqueId(dateStr, indexOffset) {
    const dayNum = getDayNumber(dateStr);
    return 90000 + Math.abs(dayNum) * 10 + indexOffset;
}

// ========================================
// [v8] デイリー記事をnewsDataへ追加
// 「おそってたらやり直す」ではなく、「おそかない方法」で今日分だけを生成
// ========================================
function injectDailyArticle() {
    const STORAGE_KEY    = 'life_trend_daily_history';
    const VERSION_KEY    = 'life_trend_logic_version';
    const CURRENT_VER    = 'v11_backfill';
    const KEEP_DAYS      = 14;

    const todayStr     = getRelativeDate(0);

    // 履歴読み込み
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) { history = []; }

    // バージョン変更時は全履歴をリセット（プールのインデックスがずれるため）
    if (localStorage.getItem(VERSION_KEY) !== CURRENT_VER) {
        history = [];
        localStorage.setItem(VERSION_KEY, CURRENT_VER);
    }

    // 過去14日分＋今日分をバックフィル
    let changed = false;
    for (let d = KEEP_DAYS; d >= 0; d--) {
        const dateStr = getRelativeDate(-d);
        const dayEntries = history.filter(e => e.date === dateStr);
        if (dayEntries.length >= ITEMS_PER_DAY) continue;

        // 直近3日間のインデックスを除外
        const recentIndicesSet = new Set();
        for (let r = 1; r <= 3; r++) {
            const pastStr = getRelativeDate(-d - r);
            history.filter(e => e.date === pastStr).forEach(e => recentIndicesSet.add(e.poolIndex));
        }

        const selectedIndices = getDailyArticleIndicesForDate(dateStr, recentIndicesSet);
        const dayIndexSet = new Set(dayEntries.map(e => e.poolIndex));

        let slot = dayEntries.length;
        for (const poolIndex of selectedIndices) {
            if (slot >= ITEMS_PER_DAY) break;
            if (dayIndexSet.has(poolIndex)) continue;
            const uniqueId = getDailyUniqueId(dateStr, slot);
            if (!history.find(e => e.uniqueId === uniqueId)) {
                history.push({ date: dateStr, uniqueId, poolIndex });
                dayIndexSet.add(poolIndex);
                changed = true;
            }
            slot++;
        }
    }

    // 古い履歴を削除して保存
    const cutoffStr = getRelativeDate(-KEEP_DAYS);
    history = history.filter(e => e.date >= cutoffStr);
    if (changed) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }

    // newsDataへ注入（同タイトルは最新日付のもののみ）
    const sorted = [...history].sort((a, b) => b.date.localeCompare(a.date));
    const existingIds    = new Set(newsData.map(d => d.id));
    const existingTitles = new Set(newsData.map(d => d.title.trim()));

    sorted.forEach(entry => {
        if (existingIds.has(entry.uniqueId)) return;

        const tpl = dailyArticlePool[entry.poolIndex];
        if (!tpl) return;
        if (existingTitles.has(tpl.title.trim())) return;

        const article = { ...tpl, id: entry.uniqueId, date: entry.date };
        newsData.push(article);
        existingIds.add(entry.uniqueId);
        existingTitles.add(tpl.title.trim());
    });

    // 画面にビルド番号を表示
    const badge = document.getElementById('debug-version-badge');
    if (badge) badge.textContent = 'Build: ' + CURRENT_VER;
}



// 朝7時の更新チェック
function checkDailyUpdate() {
    const now = new Date();
    const currentHour = now.getHours();
    const todayStr = getRelativeDate(0);

    // ローカルストレージで最後に更新通知を出した日を記録
    const lastUpdateDate = localStorage.getItem('life_trend_last_daily_update_notified');

    // 7時以降かつ、今日まだ通知を出していない場合
    if (currentHour >= 7 && lastUpdateDate !== todayStr) {
        showUpdateNotification();
        localStorage.setItem('life_trend_last_daily_update_notified', todayStr);
    }
}

// 更新通知の表示
function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.id = 'daily-update-notification';
    notification.innerHTML = `
        <div class="notif-content">
            <i class="fa-solid fa-bell"></i>
            <span>本日のトレンド情報をピックアップしました（07:00更新）</span>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    document.body.appendChild(notification);

    // 10秒後に自動消去
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 10000);
}


// ===== 月間ライフトレンドレポート機能 =====
// ========================================

// カテゴリ名ラベルマップ
const CATEGORY_LABELS = {
    wellness: 'ウェルネス', ladies: 'レディス', shoes: 'シューズ',
    cosme: 'コスメ', color: 'カラー', work: 'ワークスタイル',
    sns: 'SNS', living: 'リビング', mens: 'メンズ', kids: 'キッズ',
    baby: 'ベビー', temperature: '気温予測'
};

/**
 * 指定した「YYYY.MM」形式の月に属する newsData 記事を返す
 */
function getArticlesForMonth(yearMonth) {
    return newsData.filter(item => item.date && item.date.startsWith(yearMonth));
}

/**
 * 前月の "YYYY.MM" 文字列を返す
 */
function getPreviousMonthStr() {
    const now = new Date();
    const y = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
    const m = now.getMonth() === 0 ? 12 : now.getMonth();
    return `${y}.${String(m).padStart(2, '0')}`;
}

/**
 * カテゴリ別件数を集計して降順配列で返す
 */
function aggregateCategories(articles) {
    const map = {};
    articles.forEach(a => {
        if (a.category) map[a.category] = (map[a.category] || 0) + 1;
    });
    return Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .map(([cat, count]) => ({ cat, label: CATEGORY_LABELS[cat] || cat, count }));
}

/**
 * モックAI要約を生成する（実データから定型文を組み合わせ）
 */
function generateMockSummary(articles, yearMonth) {
    if (articles.length === 0) {
        return '<p>この月のデータが見つかりませんでした。</p>';
    }

    const cats = aggregateCategories(articles);
    const top1 = cats[0] || { label: '不明', count: 0 };
    const top2 = cats[1] || { label: '不明', count: 0 };
    const topArticle = [...articles].sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))[0];

    // 平均閲覧数
    const avgView = Math.round(
        articles.reduce((s, a) => s + (a.viewCount || 0), 0) / articles.length
    );

    // 翌月のカテゴリ予測（2位のカテゴリを提案）
    const nextForecast = top2.label;

    const parts = yearMonth.split('.');
    const label = `${parts[0]}年${parseInt(parts[1])}月`;

    const points = [
        `📌 <strong>${label}は「${top1.label}」カテゴリが最多で、全体 ${articles.length}件中 <strong>${top1.count}件</strong> を占め、消費者の関心が集まりました。`,
        `🔍 「${top2.label}」も注目度が高く ${top2.count}件 の記事が掲載されました。価格意識と体験価値が融合した消費動向が見られます。`,
        `🏆 最も反響が大きかったのは「<strong>${topArticle ? topArticle.title : '（データなし）'}</strong>」で、閲覧数 ${topArticle ? topArticle.viewCount.toLocaleString() : '-'} を記録しました。`,
        `📈 平均閲覧数は <strong>${avgView.toLocaleString()}</strong> PV。来月は「${nextForecast}」関連の動向に引き続き注目が集まると予測されます。`
    ];

    return points.map(p => `<p class="report-point">${p}</p>`).join('');
}

/**
 * localStorage にレポートを保存する
 */
function saveMonthlyReport(yearMonth, summary, topArticles, cats, articleCount) {
    const KEY = 'ltm_monthly_reports';
    let reports = {};
    try { reports = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { reports = {}; }
    reports[yearMonth] = {
        summary, topArticles, cats, articleCount,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem(KEY, JSON.stringify(reports));
}

/**
 * localStorage から全レポートを取得する
 */
function loadMonthlyReports() {
    try {
        return JSON.parse(localStorage.getItem('ltm_monthly_reports') || '{}');
    } catch (e) { return {}; }
}

/**
 * モーダルを開き、指定月のレポートを描画する
 */
function showMonthlyReportModal(yearMonth) {
    const modal = document.getElementById('monthly-report-modal');
    if (!modal) return;

    const parts = yearMonth.split('.');
    const label = `${parts[0]}年${parseInt(parts[1])}月`;

    const subtitle = document.getElementById('modal-subtitle');
    if (subtitle) subtitle.textContent = `${label}のライフトレンド総集編`;

    // 対象月の記事取得
    const articles = getArticlesForMonth(yearMonth);

    // トップ3記事（閲覧数順）
    const topArticles = [...articles]
        .sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))
        .slice(0, 3);

    // カテゴリ集計
    const cats = aggregateCategories(articles);

    // モックAI要約
    const summary = generateMockSummary(articles, yearMonth);

    // KPIカード描画
    const kpiRow = document.getElementById('report-kpi-row');
    if (kpiRow) {
        const totalViews = articles.reduce((s, a) => s + (a.viewCount || 0), 0);
        const avgView = articles.length > 0 ? Math.round(totalViews / articles.length) : 0;
        kpiRow.innerHTML = `
            <div class="kpi-card">
                <i class="fa-solid fa-newspaper kpi-icon"></i>
                <div class="kpi-value">${articles.length}<span class="kpi-unit">件</span></div>
                <div class="kpi-label">掲載記事数</div>
            </div>
            <div class="kpi-card">
                <i class="fa-solid fa-eye kpi-icon"></i>
                <div class="kpi-value">${totalViews.toLocaleString()}<span class="kpi-unit">PV</span></div>
                <div class="kpi-label">合計閲覧数</div>
            </div>
            <div class="kpi-card">
                <i class="fa-solid fa-layer-group kpi-icon"></i>
                <div class="kpi-value">${cats.length}<span class="kpi-unit">種</span></div>
                <div class="kpi-label">カテゴリ数</div>
            </div>
            <div class="kpi-card">
                <i class="fa-solid fa-arrow-trend-up kpi-icon"></i>
                <div class="kpi-value">${avgView.toLocaleString()}<span class="kpi-unit">PV</span></div>
                <div class="kpi-label">平均閲覧数</div>
            </div>
        `;
    }

    // AI要約テキスト描画
    const summaryEl = document.getElementById('report-summary-text');
    if (summaryEl) {
        summaryEl.innerHTML = '';
        setTimeout(() => {
            summaryEl.innerHTML = summary;
            summaryEl.classList.add('fade-in');
        }, 150);
    }

    // TOP3記事描画
    const topList = document.getElementById('report-top-articles-list');
    if (topList) {
        if (topArticles.length === 0) {
            topList.innerHTML = '<p style="color:#aaa;">データがありません</p>';
        } else {
            topList.innerHTML = topArticles.map((a, i) => `
                <div class="report-top-item">
                    <div class="report-rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}</div>
                    <div class="report-top-info">
                        <div class="report-top-category" style="background:${getCategoryColor(a.category)}">${a.categoryLabel || ''}</div>
                        <div class="report-top-title">${a.title}</div>
                        <div class="report-top-views"><i class="fa-solid fa-eye"></i> ${(a.viewCount || 0).toLocaleString()} PV</div>
                    </div>
                </div>
            `).join('');
        }
    }

    // カテゴリバー描画
    const catBars = document.getElementById('report-category-bars');
    if (catBars) {
        const max = cats[0] ? cats[0].count : 1;
        catBars.innerHTML = cats.slice(0, 8).map(c => `
            <div class="cat-bar-row">
                <span class="cat-bar-label">${c.label}</span>
                <div class="cat-bar-track">
                    <div class="cat-bar-fill" style="width:${Math.round(c.count / max * 100)}%; background:${getCategoryColor(c.cat)};"></div>
                </div>
                <span class="cat-bar-count">${c.count}件</span>
            </div>
        `).join('');
    }

    // 履歴ボタン描画
    renderHistoryButtons(yearMonth);

    // LocalStorage に保存
    saveMonthlyReport(yearMonth, summary, topArticles.map(a => a.id), cats, articles.length);

    // モーダルを表示
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

/**
 * 過去レポート履歴ボタンを描画する
 */
function renderHistoryButtons(activeMonth) {
    const reports = loadMonthlyReports();
    const historySection = document.getElementById('modal-history-section');
    const historyBtns = document.getElementById('modal-history-btns');
    if (!historyBtns) return;

    const months = Object.keys(reports).sort().reverse();
    if (months.length <= 1) {
        if (historySection) historySection.style.display = 'none';
        return;
    }
    if (historySection) historySection.style.display = 'flex';

    historyBtns.innerHTML = months.map(m => {
        const p = m.split('.');
        const lbl = `${parseInt(p[1])}月`;
        const isActive = m === activeMonth;
        return `<button class="history-btn ${isActive ? 'active' : ''}" data-month="${m}">${lbl}</button>`;
    }).join('');

    historyBtns.querySelectorAll('.history-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showMonthlyReportModal(btn.dataset.month);
        });
    });
}

/**
 * モーダルを閉じる
 */
function closeMonthlyReportModal() {
    const modal = document.getElementById('monthly-report-modal');
    if (!modal) return;
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

/**
 * 月初に前月レポートを自動で表示するチェック（月が変わった最初の起動時のみ）
 */
function checkMonthlyReport() {
    const now = new Date();
    const dayOfMonth = now.getDate();
    // 月初3日以内のみ自動表示
    if (dayOfMonth > 3) return;

    const prevMonth = getPreviousMonthStr();
    const KEY_SHOWN = 'ltm_monthly_report_shown';
    const lastShown = localStorage.getItem(KEY_SHOWN);
    if (lastShown === prevMonth) return; // 今月分はもう表示済み

    // 前月にデータがあれば表示
    const prevArticles = getArticlesForMonth(prevMonth);
    if (prevArticles.length === 0) return;

    setTimeout(() => {
        showMonthlyReportModal(prevMonth);
        localStorage.setItem(KEY_SHOWN, prevMonth);
    }, 2000);
}

/**
 * 月間レポートのナビとモーダルイベントを初期化する
 */
function setupMonthlyReport() {
    // 「月間レポート」ナビリンク
    const navBtn = document.getElementById('nav-monthly-report');
    if (navBtn) {
        navBtn.addEventListener('click', e => {
            e.preventDefault();
            const prevMonth = getPreviousMonthStr();
            const prevArticles = getArticlesForMonth(prevMonth);
            const now = new Date();
            const curYM = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}`;
            showMonthlyReportModal(prevArticles.length > 0 ? prevMonth : curYM);

            // モバイルメニューを閉じる
            const nav = document.querySelector('.main-nav');
            const toggle = document.getElementById('mobile-menu-toggle');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                if (toggle) toggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // モーダルを閉じるボタン
    ['modal-close', 'modal-close-footer'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', closeMonthlyReportModal);
    });

    // オーバーレイクリックで閉じる
    const modal = document.getElementById('monthly-report-modal');
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeMonthlyReportModal();
        });
    }

    // ESCキーで閉じる
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMonthlyReportModal();
    });
}
