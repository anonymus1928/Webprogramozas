<?php
$activities = [
    1 => [
        "name" => "alvás",
        "difficulty" => 0.05
    ],
    2 => [
        "name" => "bányászás",
        "difficulty" => 0.6
    ],
    3 => [
        "name" => "család",
        "difficulty" => 0.4
    ],
    4 => [
        "name" => "programozás",
        "difficulty" => 0.95
    ],
    5 => [
        "name" => "zsákmányolás",
        "difficulty" => 0.7
    ],
    6 => [
        "name" => "vadászat",
        "difficulty" => 0.6
    ],
    7 => [
        "name" => "játék",
        "difficulty" => 0.0
    ],
    8 => [
        "name" => "főzés",
        "difficulty" => 0.6
    ]
];
$goblins = [
    "WEB'LIN" => [
        [
            "startHour" => 0,
            "activityKey" => 3
        ],
        [
            "startHour" => 1,
            "activityKey" => 3
        ],
        [
            "startHour" => 3,
            "activityKey" => 5
        ],
        [
            "startHour" => 4,
            "activityKey" => 4
        ],
        [
            "startHour" => 5,
            "activityKey" => 4
        ],
        [
            "startHour" => 7,
            "activityKey" => 1
        ]
    ],
    "HUN'TER" => [
        [
            "startHour" => 0,
            "activityKey" => 1
        ],
        [
            "startHour" => 1,
            "activityKey" => 6
        ],
        [
            "startHour" => 3,
            "activityKey" => 3
        ],
        [
            "startHour" => 4,
            "activityKey" => 3
        ],
        [
            "startHour" => 5,
            "activityKey" => 6
        ],
        [
            "startHour" => 7,
            "activityKey" => 6
        ]
    ],
    "MOT'HER" => [
        [
            "startHour" => 0,
            "activityKey" => 3
        ],
        [
            "startHour" => 1,
            "activityKey" => 3
        ],
        [
            "startHour" => 3,
            "activityKey" => 6
        ],
        [
            "startHour" => 4,
            "activityKey" => 8
        ],
        [
            "startHour" => 5,
            "activityKey" => 8
        ],
        [
            "startHour" => 7,
            "activityKey" => 3
        ]
    ],
    "GOB'KID" => [
        [
            "startHour" => 0,
            "activityKey" => 7
        ],
        [
            "startHour" => 1,
            "activityKey" => 7
        ],
        [
            "startHour" => 3,
            "activityKey" => 7
        ],
        [
            "startHour" => 4,
            "activityKey" => 7
        ],
        [
            "startHour" => 5,
            "activityKey" => 7
        ],
        [
            "startHour" => 7,
            "activityKey" => 7
        ]
    ]
];


// Itt annyi "problémánk" van még, hogy az activities kívül esik a scope-on, így meg kell oldanunk, hogy elérhető legyen a függvényen belül.
// Ez egyszerűen megoldható azzal, hogy átadjuk paraméterként:
//     function getActivity($hour, $todos, $activities) {...}
// Azonban itt egy kicsit komplexebb megoldást használok, hogy erre is legyen példa...
// Closure használata:
$getActivity = function($hour, $todos) use ($activities) {
  foreach($todos as $todo) {
    if($todo['startHour'] == $hour) {
      $background = null;
      if($activities[$todo['activityKey']]['difficulty'] <= 0.5) {
        $background = 'lightgreen';
      } else if($activities[$todo['activityKey']]['difficulty'] > 0.5 && $activities[$todo['activityKey']]['difficulty'] <= 0.8) {
        $background = 'orange';
      } else {
        $background = 'red';
      }
      return '<td style="background-color: ' . $background . '" >' . $activities[$todo['activityKey']]['name'] . '</td>';
    }
  }
  return "<td></td>";
};  // <-- EKKOR FIGYELNI KELL A LEZÁRÓ ;-ra!!!!

// Ugyanez "hagyományosan":
function getActivity2($hour, $todos, $activities) {
  foreach($todos as $todo) {
    if($todo['startHour'] == $hour) {
      $background = null;
      if($activities[$todo['activityKey']]['difficulty'] <= 0.5) {
        $background = 'lightgreen';
      } else if($activities[$todo['activityKey']]['difficulty'] > 0.5 && $activities[$todo['activityKey']]['difficulty'] <= 0.8) {
        $background = 'orange';
      } else {
        $background = 'red';
      }
      return '<td style="background-color: ' . $background . '" >' . $activities[$todo['activityKey']]['name'] . '</td>';
    }
  }
  return "<td></td>";
}

?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1. feladat</title>
    <style>
        table, td, th {
            border: 1px black solid;
            border-collapse: collapse;
        }
        td { text-align: center; }
    </style>
</head>

<body>
    <h1>1. feladat</h1>
    <h2>Időbeosztás</h2>
    <table>
        <tr>
          <th>ÓRA</th>
          <?php foreach($goblins as $name => $tmp): ?>
            <th>
              <?=$name?>
            </th>
          <?php endforeach ?>
        </tr>

        <?php for($i=0;$i<8;$i++): ?>

          <tr>
            <th><?=$i?></th>

            <?php foreach($goblins as $name => $todos): ?>

              <!-- Ne felejtsük le a $ jelet ilyenkor! -->
              <?=$getActivity($i, $todos)?>
              <!-- "Hagyományos" megoldás: getActivity2($i, $todos, $activities) -->

            <?php endforeach ?>

          </tr>

        <?php endfor ?>

    </table>
</body>

</html>