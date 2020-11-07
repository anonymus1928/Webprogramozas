<?php
    $adatok = [];
    $hibak = [];
    if(count($_POST) > 0) {
    
        if(isset($_POST['nev']) && trim($_POST['nev']) != '') {
            $adatok['nev'] = $_POST['nev'];
        } else {
            $hibak[] = "Név megadása kötelező!";
        }
    
        $nemek = ['nő', 'férfi'];
        if(isset($_POST['nem']) && trim($_POST['nem']) != '') {
            if(in_array($_POST['nem'], $nemek)) {
                $adatok['nem'] = $_POST['nem'];
            } else {
                $hibak[] = "Csak nő és férfi adható meg.";
            }
        } else {
            $hibak[] = "Nem megadása kötelező!";
        }
    
    
        if(isset($_POST['kor']) && trim($_POST['kor']) != '') {
            if(is_numeric($_POST['kor']) && intval($_POST['kor']) > 0 ) {
                $adatok['kor'] = intval($_POST['kor']);
            } else {
                $hibak[] = "Életkornak pozitív számnak kell lennie!";
            }
        } else {
            $hibak[] = "Életkor megadása kötelező!";
        }
    
    
    
        $vegzettseg = ['általános', 'érettségi', 'diploma', 'doktori'];
        if(isset($_POST['vegzettseg']) && trim($_POST['vegzettseg']) != '') {
            if(in_array($_POST['vegzettseg'], $vegzettseg)) {
                $adatok['vegzettseg'] = $_POST['vegzettseg'];
            } else {
                $hibak[] = "Végzettség: rossz input.";
            }
        } else {
            $hibak[] = "Végzettség megadása kötelező!";
        }
    
    
    
        if(isset($_POST['gyumolcs'])) {
            $adatok['gyumolcs'] = $_POST['gyumolcs'];
        } else {
            $adatok['gyumolcs'] = [];
        }
    }

    var_dump($_SERVER['HTTP_REFERER']);
    header('Location: http://webprogramozas.inf.elte.hu/hallgatok/lx12ag/2/gyak8/index.php');
?>