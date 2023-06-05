'use strict';

/*
Variables
================================================== */
/* Color */
const black = '#000000';
const white = '#ffffff';
const red = '#910017';
const grey = '#cccccc';
const yellow = 'rgba(255, 243, 063, .8)';

/*
送信ボタンに fadeinクラスを追加する
================================================== */
const submit = document.querySelector('.contact-form .wpcf7-submit');

if (document.body.classList.contains('page-template-page-contact') === true) {

    // 送信ボタンに .fadeinクラスを追加する
submit.classList.add('fadein');
}

/*
フォームのレスポンシブ通知要素に fadeinクラスを追加する
================================================== */
const formAlerts = document.querySelectorAll('.wpcf7 form .wpcf7-response-output');

formAlerts.forEach((formAlert) => {
    if (document.body.classList.contains('page-template-page-contact') === true) {

        // 送信ボタンに .fadeinクラスを追加する
        formAlert.classList.add('fadein');
    }    
});

/*
Work プロトタイプ 表示テキストを変更する
================================================== */
const designTexts = document.querySelectorAll('.design-link span');
const siteTexts = document.querySelectorAll('.site-link span');
const textChange = () => {
    designTexts.forEach((designText) => {
        designText.textContent = 'デザインへ';
    });
    siteTexts.forEach((siteText) => {
        siteText.textContent = 'サイトへ';
    });
};
if (document.body.classList.contains('page-template-page-work') === true && window.innerWidth < 600) {
    textChange();
}

/*
ローディング画面
================================================== */
const loading = document.querySelector('.loading img');
const loadingBg = document.querySelector('.loading');
const loadOptions = {
    duration: 2000,
    easing: 'ease-out',
    fill: 'forwards',
};

// 読み込みが完了したら
window.addEventListener('load', () => {
    // ローディング画像を消す
    loading.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
            translate: [0, '20px 0'],
            offset: [.8, 1],
        },
    loadOptions);
    // ローディング背景を消す
    loadingBg.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
            backdropFilter: ['blur(10px)', 'blur(0)'],
        },
        {
            duration: 2000,
            delay: 2000,
            easing: 'ease-out',
            fill: 'forwards',
        }
    );
});

/*
SNSのホバー
================================================== */
const snsBg = document.querySelector('.sns-area');
const snsItems = document.querySelectorAll('.sns-item');
const hoverOptions = {
    duration: 900,
    easing: 'ease',
    fill: 'forwards',
};

// SNSタグの上に
snsItems.forEach((snsItem) => {

    // カーソルが重なったら
    snsItem.addEventListener('mouseover', () => {
        snsBg.animate(
            {
                background: [black, red],
            },
        hoverOptions);
    });

    // カーソルが離れたら
    snsItem.addEventListener('mouseout', () => {
        snsBg.animate(
            {
                background: [red, black],
            },
        hoverOptions);
    });
});

/*
マーカーアニメーション
================================================== */

// 監視対象が範囲内に現れたら実行する関数
const markerAnimation = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    backgroundPosition: ['100% 0', '0 0'],
                },
                {
                    duration: 900,
                    delay: 3500,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            obs.unobserve(entry.target);
        }
    });
};

// 監視ロボットの設定
const markerObserver = new IntersectionObserver(markerAnimation);

// .marker を監視するよう指示
const markerElements = document.querySelectorAll('.marker');
markerElements.forEach((markerElement) => {
    markerObserver.observe(markerElement);
});

/*
フェードインアニメーション
================================================== */

// 監視対象が現れたら実行する関数
const fadeinAnimation = (entries, obs) => {
    entries.forEach((entry, index) => {
        entry.target.animate(
            {
                opacity: [0, 1],
                translate: ['0 2rem', '0 0'],
                filter: ['blur(10px)', 'blur(0)'],
            },
            {
                duration: 2000,
                delay: 2400 + 600 * index,
                easing: 'ease',
                fill: 'forwards',
            }
        );
        obs.unobserve(entry.target);
    });
};

// 監視ロボットの設定
const fadeinObserver = new IntersectionObserver(fadeinAnimation);

// .fadein を監視するよう指示
const fadeinElements = document.querySelectorAll('.fadein');
fadeinElements.forEach((fadeinElement) => {
    fadeinObserver.observe(fadeinElement);
});

/*
スライドショー
================================================== */

/* スライドのショーのキーフレーム設定 */
const slideShowKeyframes = [
    {
        opacity: 0,
        filter: 'blur(3px)',
        offset: 0,
    },
    {
        opacity: 1,
        filter: 'blur(0)',
        offset: .05,
    },
    {
        opacity: 1,
        filter: 'blur(0)',
        offset: .9
    },
    {
        opacity: 0,
        filter: 'blur(3px)',
        offset: 1,
    }
];

// アニメーションセッティング
const slideShowAnimation = () => {
    const items = document.querySelectorAll('.slide-item');
    let i = 0;

    setInterval(() => {
        items[i].classList.add('active');

        items[i].animate(slideShowKeyframes, {
            duration: 10000,
            //delay: ,
            easing: 'ease-in-out',
            fill: 'forwards',
        });

        items[i].classList.remove('active');
        i++;
        if (i === items.length) {
            i = 0;
        }
        items[i].classList.add('active');
    }, 10000);
};

// 最初の画像のアニメーションを設定
const firstImgAnimation = () => {
    const img = document.querySelector('.slide-first-item');
    img.animate(
        [
            {
                opacity: 1,
                filter: 'blur(0)',
                offset: .0,
            },
            {
                opacity: 1,
                filter: 'blur(0)',
                offset: .8
            },
            {
                opacity: 0,
                filter: 'blur(3px)',
                offset: 1,
            }
        ],
        {
            duration: 10000,
            easing: 'ease-in-out',
            fill: 'forwards',
        }
    );
}

if (document.body.classList.contains('home') === true) {
    firstImgAnimation();
    slideShowAnimation();
}

/*
モバイル版 スライドメニュー
================================================== */
const menuOpens = document.querySelectorAll('#open');
const menuClose = document.querySelector('#close');
const menuArea = document.querySelector('.slide-menu-area');
const menuOptions = {
    duration: 600,
    easing: 'ease-in-out',
    fill: 'forwards',
};

// #open ボタンをクリックしたら
menuOpens.forEach((menuOpen) => {
    menuOpen.addEventListener('click', () => {

        // メニューを開く
        menuArea.animate(
            {
                translate: ['100dvw', 0],
                visibility: 'visible',
            },
            menuOptions
        );
    });
});

// #close ボタンをクリックしたら
menuClose.addEventListener('click', () => {

    // メニューを閉じる
    menuArea.animate(
        {
            translate: [0, '100dvw'],
            visibility: 'hidden',
        },
        menuOptions
    );
});

/*
スキルページのレスポンシブサイドバーの設定
================================================== */

// 監視対象が現れたら実行する関数
const sidebarChange = (entries) => {
    const sidebarText = document.querySelector('.responsive-sidebar');

    // レスポンシブサイドバーのテキストを換える
    entries.forEach((entry) => {

        if (entry.intersectionRatio > 0.3 && entry.intersectionRatio < 0.7) {

            if (entry.target.classList.contains('design') === true) {
                sidebarText.textContent = 'Design';
            } else if (entry.target.classList.contains('coding') === true) {
                sidebarText.textContent ='Coding';
            }
        }
    });
    
    // 切り替えをふわっとさせる
    sidebarText.animate(
        {
            opacity: [0, 1],
            filter: ['blur(10px)', 'blur(0)']
        },
        {
            duration: 1000,
            delay: 200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
};

// 監視ロボットの設定
const sidebarOptions = {
    rootMargin: ['0px'], // 追記
    threshold: [.3, .7], // 30% ～ 70% 表示されたときに処理を実行する
};
const sidebarObserver = new IntersectionObserver(sidebarChange, sidebarOptions);

// .skills-section を監視するよう指示
const sectionAreas = document.querySelectorAll('.skills-section');
sectionAreas.forEach((sectionArea) => {
    sidebarObserver.observe(sectionArea);
});

/*
ワークページのレスポンシブサイドバーの設定
================================================== */

// 監視対象が現れたら実行する関数
const sidebarChange2 = (entries) => {
    const sidebarText = document.querySelector('.responsive-sidebar');

    // レスポンシブサイドバーのテキストを換える
    entries.forEach((entry) => {

        if (entry.intersectionRatio > 0.3 && entry.intersectionRatio < 0.7) {

            if (entry.target.classList.contains('web-site') === true) {
                sidebarText.textContent = 'Web site';
            } else if (entry.target.classList.contains('web-design') === true) {
                sidebarText.textContent ='Design';
            }
        }
    });
    
    // 切り替えをふわっとさせる
    sidebarText.animate(
        {
            opacity: [0, 1],
            filter: ['blur(10px)', 'blur(0)']
        },
        {
            duration: 1000,
            delay: 200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
};

// 監視ロボットの設定
const sidebarObserver2 = new IntersectionObserver(sidebarChange2, sidebarOptions);

// .work-section を監視するよう指示
const workAreas = document.querySelectorAll('.work-section');
workAreas.forEach((workArea) => {
    sidebarObserver2.observe(workArea);
});

/*
送信ボタンのホバー
================================================== */

if (document.body.classList.contains('page-template-page-contact') === true) {
    const submit = document.querySelector('.contact-form .wpcf7-submit');

    // 送信ボタンの上にカーソルが重なったら
    submit.addEventListener('mouseover', () => {
        submit.animate(
            {
                background: [black, red],
            },
            hoverOptions);
    });

    // カーソルが離れたら
    submit.addEventListener('mouseout', () => {
        submit.animate(
            {
                background: [red, black],
            },
            hoverOptions);
    });
}

/*
WordPress調整 ページのヘッダーとメインを切り替える
================================================== */

// 下層ページの場合は
if (document.body.classList.contains('page')) {

    // ヘッダーに .lowre-page-headerを追加する
    const header = document.querySelector('header');
    header.classList.add('lower-page-header');

    // メインに .lower-page-mainを追加する
    const main = document.querySelector('main');
    main.classList.add('lower-page-main');
}

/*
WordPress調整 ページのフッターを切り替える
================================================== */

// HOMEページの場合は
if (document.body.classList.contains('home')) {

    // フッターに .just-footerを追加する
    const footer = document.querySelector('footer');
    footer.classList.add('just-footer');
}

/*
WordPress調整 HOMEページのページタイトルを非表示にする
================================================== */

// 表示されているのが HOMEページの場合は
if (document.body.classList.contains('home')) {

    // HOMEのページタイトルに .noneを追加する
    const pageTitle = document.querySelector('.page-title');
    pageTitle.classList.add('none');

}