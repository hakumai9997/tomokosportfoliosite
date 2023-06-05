<?php get_header(); ?>

<!-- main -->
    <main>
        <!-- 調整用 -->
        <div class="slide-screen"></div>
        
        <!-- slide-show -->
        <div class="slide-show">
            <h1 class="title">Design<br><span>&</span><br>Coding</h1>
            <img src="<?php echo esc_url(get_theme_file_uri('/images/slide_img/cat_1.jpg')); ?>" class="slide-first-item" alt="My family">
            <img src="<?php echo esc_url(get_theme_file_uri('/images/slide_img/nature_1.jpg')); ?>" class="slide-item" alt="Beautiful flower">
            <img src="<?php echo esc_url(get_theme_file_uri('/images/slide_img/nature_2.jpg')); ?>" class="slide-item" alt="Sky">
            <img src="<?php echo esc_url(get_theme_file_uri('/images/slide_img/nature_3.jpg')); ?>" class="slide-item" alt="Cute flower">
            <img src="<?php echo esc_url(get_theme_file_uri('/images/slide_img/cat_1.jpg')); ?>" class="slide-item" alt="My family">
        </div>
   
        <!-- about-me -->
        <div class="parent">
            <div class="about-me fadein">
                <h3 class="title">Tomoko</h3>
                <p>
                    わたしを一言で表すと<span class="marker">“広島出身の猫好き”</span>です！<br>
                    見る人の視線の動きを意識したシンプルなデザインとイラストが得意です。<br>
                    依頼者の目的に寄り添い、分かりやすいサイトづくりを目指しています。
                </p>
            </div>
        </div>
    </main>

<?php  get_footer(); ?>