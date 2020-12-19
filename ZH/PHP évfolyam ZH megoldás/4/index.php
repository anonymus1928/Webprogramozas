<?php

session_start();
if(!isset($_SESSION['g']) || !isset($_SESSION['s'])) {
    $_SESSION['g'] = 10;
    $_SESSION['s'] = 0;
    $_SESSION['d'] = null;
}



?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4. feladat</title>
</head>
<body>
    <h1>4. feladat</h1>

    <h2>Új tranzakció</h2>
    Arany: <input type="number" id="gold" min="0" max="99" step="1" value="0"><br>
    Ezüst: <input type="number" id="silver" min="0" max="11" step="1" value="0"><br>
    <button id="income">Bevétel</button>
    <button id="spend">Kiadás</button>
    
    <h2>Tranzakciós napló</h2>
    <table>
        <tr>
            <th>Időpont</th>
            <th>Egyenleg</th>
        </tr>
        <?php if(isset($_SESSION['d'])): ?>
            <tr>
                <td><?=$_SESSION['d']?></td>
                <td><?=$_SESSION['g']?>g <?=$_SESSION['s']?>s</td>
            </tr>
        <?php endif ?>
    </table>

    <script>
        const income = document.querySelector('#income');
        const spend  = document.querySelector('#spend');
        const table  = document.querySelector('table');
        const gold   = document.querySelector('#gold');
        const silver = document.querySelector('#silver');

        // income AJAX-el GET paraméterátadással
        function incomeAJAXWithGET() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `transaction.php?action=income&g=${gold.value}&s=${silver.value}`);
            xhr.send();
            xhr.addEventListener('readystatechange', () => {
                if(xhr.readyState == 4) {
                    const json = JSON.parse(xhr.responseText);

                    if(json.status == 'ok') {
                        const newRow = table.insertRow();
                        newRow.innerHTML = `
                            <td>${json.date}</td>
                            <td>${json.g}g ${json.s}s</td>`
                    }
                }
            });
        }

        // income AJAX-el POST paraméterátadással
        function incomeAJAXWithPOST() {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'transaction.php');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                action: "income",
                g: gold,
                s: silver
            }));
            xhr.addEventListener('readystatechange', () => {
                if(xhr.readyState == 4) {
                    const json = JSON.parse(xhr.responseText);

                    if(json.status == 'ok') {
                        const newRow = table.insertRow();
                        newRow.innerHTML = `
                            <td>${json.date}</td>
                            <td>${json.g}g ${json.s}s</td>`
                    }
                }
            });
        }

        // spend FETCH-el GET paraméterátadással
        async function spendFETCHWithGET() {
            const valasz   = await fetch(`transaction.php?action=spend&g=${gold.value}&s=${silver.value}`);
            const eredmeny = await valasz.json();

            if(eredmeny.status == 'ok') {
                const newRow = table.insertRow();
                newRow.innerHTML = `
                    <td>${eredmeny.date}</td>
                    <td>${eredmeny.g}g ${eredmeny.s}s</td>`
            }
        }

        // spend FETCH-el POST paraméterátadással
        async function spendFETCHWithPOST() {
            const valasz   = await fetch('transaction.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    action: "spend",
                    g: gold,
                    s: silver
                }
            });
            const eredmeny = await valasz.json();
            
            if(eredmeny.status == 'ok') {
                const newRow = table.insertRow();
                newRow.innerHTML = `
                    <td>${eredmeny.date}</td>
                    <td>${eredmeny.g}g ${eredmeny.s}s</td>`
            }
        }



        income.addEventListener('click', incomeAJAXWithGET);
        spend.addEventListener('click', spendFETCHWithGET);
    </script>
</body>
</html>