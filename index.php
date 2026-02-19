<?php

    $conn=mysqli_connect('MySQL-8.4', 'root', '', 'shopDB');

    $result = mysqli_query($conn, "SELECT * FROM `categories`");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">

    <title>KHTI-SHOP</title>
</head>
<body>
    
    <header class="header container">
        <a href="/" class="header-logo">KHTI-SHOP</a>
        <div class="header-list">
            <a href="#" class="header-button">Профиль</a>
            <a href="#" class="header-button">Корзина</a>
        </div>
    </header>

    <div class="main">
        <section id="catalog" class="categories container">
            <h2>Каталог товаров</h2>
            <div class="category-grid">

                <?php

                    while ($cat = mysqli_fetch_assoc($result)) {
                        ?>
                        <div class="category-card" data-category="proccessors">
                            <div class="category-icon"><img src="<?php echo $cat['image']; ?>" alt=""></div>
                            <h3><?php echo $cat['name']; ?></h3>
                            <p><?php echo $cat['description']; ?></p>
                        </div>
                        <?php
                    }

                ?>

            </div>
        </section>
    </div>
    
    <footer class="footer container">
        <div class="footer-logo">© KHTI-SHOP</div>
        <div class="footer-list">
            <a href="#">FAQ</a>
            <a href="#">Доставка</a>
        </div>
    </footer>

</body>
</html>