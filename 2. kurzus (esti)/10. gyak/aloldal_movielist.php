<?php require_once('functions.php'); ?>

<?php function movieList($movies, $bejelentkezve) { ?>
    <table>
        <tr>
            <th>Cím</th>
            <th>Év</th>
            <th>Kategória</th>
            <th>Like/Dislike</th>
        </tr>

        <?php foreach($movies as $movie): ?>

            <tr>
                <td><?=$movie->title?></td>
                <td><?=$movie->year?></td>
                <td><?=listCategories($movie->genre)?></td>
                <td>
                    <?php if($bejelentkezve): ?>
                        <form action="keres_like.php">
                            <input type="hidden" name="id" value="<?=$movie->id?>">
                            <input type="submit" value="👍">
                        </form>
                    <?php endif ?>
                    <?=count($movie->like)?>
                    /
                    <?=count($movie->dislike)?>
                    <?php if($bejelentkezve): ?>
                        <form action="keres_dislike.php">
                            <input type="hidden" name="id" value="<?=$movie->id?>">
                            
                            <input type="submit" value="👎">
                        </form>
                    <?php endif ?>
                </td>
            </tr>

        <?php endforeach ?>

    </table>

<?php } ?>