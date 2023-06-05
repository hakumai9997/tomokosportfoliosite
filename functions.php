<?php
// ファイルの読み込み
function add_files() {
    // リセットCSS
    wp_enqueue_style('reset', 'https://unpkg.com/destyle.css@3.0.2/destyle.min.css');
    // Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');               // main-font
    wp_enqueue_style('abobe-fonts', 'https://use.typekit.net/har4spl.css');                                                // menu-font, title-font
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');   // title-font
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');  // accsent-font
    // メインのCSSファイル
    wp_enqueue_style('main-style', get_template_directory_uri() . '/style.css', array(), filemtime( get_template_directory() . '/style.css'));
    // メインのScriptファイル
    wp_enqueue_script('main-script', get_template_directory_uri() . '/js/script.js', array(), filemtime( get_template_directory() . '/js/script.js'), array(), '1.0');
}
// script.js にdefer属性を付与
add_filter('script_loader_tag', 'add_defer', 10, 2);
function add_defer ($tag, $handle) {
    // 識別名がmain_script以外はそのまま返却
    if ($handle !== 'main-script') {
        return $tag;
    }
    // deferを追加して返却する
    return str_replace(' src=', ' defer src=', $tag);
}
add_action('wp_enqueue_scripts', 'add_files');

// WordPressの機能を有効化する
function theme_setup() {
    // titleタグ
    add_theme_support('title-tag');
    // メニュー
    register_nav_menus(
        array(
            'main-menu' => 'メインメニュー',
            'slide-menu' => 'スライドメニュー'
        )
    );
}
add_action('after_setup_theme', 'theme_setup');