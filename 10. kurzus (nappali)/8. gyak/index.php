<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>8. gyakorlat</title>
</head>
<body>
    <form method="post" action="ellenoriz.php">
        <h1>Név</h1>
        <input name="nev" value="<?=isset($adatok['nev']) ? $adatok['nev'] : '' ?>"><br>

        <h1>Nem</h1>
        <select name="nem">
            <option value="nő" <?=(isset($adatok['nem']) && $adatok['nem'] == 'nő') ? 'selected' : '' ?> >Nő</option>
            <option value="férfi" <?=(isset($adatok['nem']) && $adatok['nem'] == 'férfi') ? 'selected' : '' ?> >Férfi</option>
        </select>

        <h1>Életkor</h1>
        <input name="kor" value="<?=isset($adatok['kor']) ? $adatok['kor'] : '' ?>"><br>

        <h1>Végzettség</h1>
        <input type="radio" name="vegzettseg" value="általános" <?=(isset($adatok['vegzettseg']) && $adatok['vegzettseg'] == 'általános') ? 'checked' : '' ?> > Általános<br>
        <input type="radio" name="vegzettseg" value="érettségi" <?=(isset($adatok['vegzettseg']) && $adatok['vegzettseg'] == 'érettségi') ? 'checked' : '' ?> > Érettségi<br>
        <input type="radio" name="vegzettseg" value="diploma" <?=(isset($adatok['vegzettseg']) && $adatok['vegzettseg'] == 'diploma') ? 'checked' : '' ?> > Diploma<br>
        <input type="radio" name="vegzettseg" value="doktori" <?=(isset($adatok['vegzettseg']) && $adatok['vegzettseg'] == 'doktori') ? 'checked' : '' ?> > Doktori<br>

        <h1>Gyümölcsök</h1>
        <input type="checkbox" name="gyumolcs[]" value="alma" <?=(isset($adatok['gyumolcs']) && in_array('alma', $adatok['gyumolcs'])) ? 'checked' : '' ?> > Alma<br>
        <input type="checkbox" name="gyumolcs[]" value="körte" <?=(isset($adatok['gyumolcs']) && in_array('körte', $adatok['gyumolcs'])) ? 'checked' : '' ?> > Körte<br>
        <input type="checkbox" name="gyumolcs[]" value="szilva" <?=(isset($adatok['gyumolcs']) && in_array('szilva', $adatok['gyumolcs'])) ? 'checked' : '' ?> > Szilva<br>


        <input type="submit">
    </form>

    <?php if(isset($hibak) && count($hibak) > 0): ?>
        <ul>
            <?php foreach($hibak as $hiba): ?>
                <li><?=$hiba?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>