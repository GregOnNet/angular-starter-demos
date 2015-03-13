## $digest-Loop

Der $digest-loop enthält eine $watch-List. Diese arbeitet er Eintrag für Eintrag ab. Wenn eine Änderung festgestellt wird, wird der betreffende Datensatz aktualisiert und der $digest-Cycle beginnt von Neuem, bis keine Änderungen mehr vorhanden sind.

Läuft der $digest-Cycle mehr als 10-mal, wird die app mit einer Exception beendet, um unendliche Schleifen zu vermeiden.
