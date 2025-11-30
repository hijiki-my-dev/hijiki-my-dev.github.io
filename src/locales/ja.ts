export const ja = {
  nav: {
    about: '経歴',
    projects: 'プロジェクト',
    skills: 'スキル',
    contact: 'お問い合わせ',
  },
  hero: {
    greeting: '',
    name: 'Portfolio of Hijiki',
    role: '',
    description: 'ひじきと申します。\n現在は大学院に通いながら、\nコード書いたりブログ運営したりの日々を送っています',
    viewWork: '作品を見る',
    contactMe: '連絡する',
  },
  career: {
    title: '経歴',
    items: [
      {
        date: '2021年4月',
        title: '東京大学理科一類 入学',
        description: ''
      },
      {
        date: '2021年8月',
        title: 'ひじきブログを開設',
        description: '',
        url: 'https://www.hijiki-blog.org/'
      },
      {
        date: '2022年10月',
        title: '工学部へ進学',
        description: ''
      },
      {
        date: '2023年9月〜2025年8月',
        title: 'ITベンチャーでのエンジニアインターン',
        description: ''
      },
      {
        date: '2025年4月',
        title: '東大大学院 工学系研究科に入学',
        description: ''
      },
      {
        date: '2027年4月',
        title: 'Web系企業にSWEとして入社予定',
        description: ''
      }
    ]
  },
  profile: {
    title: 'プロフィール',
    description: '2002年生まれ、東京都出身。\n高校時代からITに興味を持ち始め、長期インターンへの参加をきっかけにソフトウェアエンジニアを目指し始めました！2027年にSWEとして就職予定です。\n一番使ってきた言語はPythonですが、JavaScript(TypeScript)でWebのフロントエンドもできるようになりたいです。\n\n学部1年の頃からラノベの感想とか書くブログをやってます。好きな作品はソードアート・オンライン、青春ブタ野郎シリーズ（画像は聖地の神奈川県、七里ヶ浜から見た江ノ島）です！\n\nこのポートフォリオサイトはAntigravityによって作成しました。AIをうまく使う側に回りたいと日々考えています。',
    links: {
      x: 'ラノベやアニメ、IT関係のこと',
      blog: 'ライトノベルの感想記事など',
      blogTech: 'IT・キャリア・ブログ運営など',
      github: '作ったものや勉強したことなど',
      kaggle: 'テーブルデータのコンペに何回か参加',
      note: '昔使ってました',
      blogMap: 'ブログを見つけられるサービスに登録してます'
    }
  },
  projects: {
    title: 'プロジェクト',
    viewDemo: 'デモを見る',
    viewCode: 'コードを見る',
    items: [
      {
        title: 'ひじきブログ',
        description: '主にライトノベルの感想記事を投稿しているブログです。扱っているシリーズはSAOやよう実、たんもしなど。2021年8月から開始、PV数は約20,000PV/月くらいです。',
        tags: ['WordPress', 'HTML/CSS', 'SEO'],
        url: 'https://www.hijiki-blog.org/'
      },
      {
        title: 'ラノベの新刊情報をスクレイピングするシステム',
        description: 'ラノベの新刊情報をスクレイピングして、Notionのデータベースに保存するシステムです。複数のレーベルから取ってきて、発売日や新刊を追っている作品かどうかを一元管理できます。クラウドによる定期実行にも対応しました。',
        tags: ['Python', 'Notion API', 'Azure/Google Cloud'],
        url: 'https://github.com/hijiki-my-dev/WebScraping'
      }
    ]
  },
  skills: {
    title: 'スキル & ツール',
    categories: {
      languages: '言語',
      frameworks: 'フレームワーク & ライブラリ',
      cloud: 'クラウド & インフラ',
      tools: 'ツール & OS',
    },
    items: {
      languages: [
        { name: 'Python', level: 'high' },
        { name: 'HTML/CSS', level: 'high' },
        { name: 'SQL', level: 'high' },
        { name: 'C', level: 'medium' },
        { name: 'JavaScript', level: 'medium' },
        { name: 'TypeScript', level: 'medium' },
        { name: 'R', level: 'medium' },
        { name: 'MATLAB', level: 'medium' },
        { name: 'Arduino', level: 'medium' },
      ],
      frameworks: [
        { name: 'Unity (C#)', level: 'high' },
        { name: 'WordPress', level: 'high' },
      ],
      cloud: [
        { name: 'AWS', level: 'high' },
        { name: 'Docker', level: 'high' },
        { name: 'Azure', level: 'medium' },
        { name: 'Google Cloud', level: 'medium' },
      ],
      tools: [
        { name: 'Git', level: 'high' },
        { name: 'Mac', level: 'high' },
        { name: 'Linux', level: 'high' },
        { name: 'VSCode', level: 'high' },
      ]
    }
  },
  contact: {
    title: 'お問い合わせ',
    description: '新しい機会やコラボレーションについて、お気軽にご連絡ください。コードやデザインの話、あるいは単なる挨拶でも大歓迎です！',
    footer: '© {year} Hijiki. All rights reserved.',
  }
};
