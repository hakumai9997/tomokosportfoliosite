<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="<?php echo esc_url(get_theme_file_uri('/images/icon/logo.svg')); ?>" type="image/svg+xml"><!-- faviconを設定 -->
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- loading -->
<div class="loading"><img src="<?php echo esc_url(get_theme_file_uri('/images/icon/img_load.png')); ?>" alt=""></div>

<!-- header -->
    <header>
        <!-- primary-navigation -->
        <nav class="nav-wrapper">
            <div class="primary-navigation">
                <!-- logo -->
                <a class="logo" href="<?php echo esc_url(home_url('/')); ?>">
                    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                        <g id="logo-2" data-name="logo">
                            <path id="path2" d="m6.27,31H.23c-.15,1.31-.23,2.65-.23,4,0,12.19,6.23,22.93,15.69,29.2,3.95,2.62,8.46,4.45,13.31,5.29v-6.11c-13.12-2.77-23-14.44-23-28.38,0-1.36.09-2.69.27-4h0Zm63.5,0h-6.05c.18,1.31.27,2.64.27,4,0,13.93-9.88,25.6-23,28.38v6.11c16.47-2.85,29-17.2,29-34.49,0-1.35-.08-2.69-.23-4h0ZM35,0C21.43,0,9.67,7.72,3.86,19h6.96c5.2-7.83,14.09-13,24.18-13s18.98,5.17,24.18,13h6.96c-2.71-5.27-6.73-9.76-11.61-13.05-5.58-3.75-12.29-5.95-19.52-5.95h0Z"/>
                            <path id="path1" d="m69.3,28h-30.95c-.19,0-.35.16-.35.35v41.52c-.99.09-1.99.13-3,.13s-2.01-.04-3-.13V28.35c0-.19-.16-.35-.35-.35H.7c.42-2.07,1.02-4.08,1.79-6h65.01c.77,1.92,1.38,3.93,1.8,6Z"/>
                        </g>
                    </svg>
                </a>
                <!-- menu -->
                <button id="open" class="btn" type="button">Menu</button>
                <ul class="menu">
                    <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'main-menu',
                            )
                        );
                    ?>
                </ul>
            </div>
        </nav>

        <!-- page-title -->
        <h1 class="title page-title contact-title"><?php the_title(); ?></h1>

        <!-- slide-menu -->
        <div class="slide-menu-area">
            <button id="close" class="btn" type="button">Close</button>
            <ul class="slide-menu">
                <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'slide-menu',
                            'container' => '',
                            'menu_class' => 'menu-item'
                        )
                    );
                ?>
            </ul>
            <div class="slide-sns-tags">
                <a href="https://www.instagram.com/baimi2222/" class="sns-item"><img src="<?php echo esc_url(get_theme_file_uri('/images/icon/sns_instagram.svg')); ?>"></a>
            </div>
        </div>

        <!-- sns-area -->
        <div class="sns-area">
            <a href="https://www.instagram.com/baimi2222/" class="sns-item"><img src="<?php echo esc_url(get_theme_file_uri('/images/icon/sns_instagram.svg')); ?>"></a>
        </div>
    </header>