Kør koden: expo install
           expo start

Om denne app:
- Versionen skelner ikke mellem bruger type: Admin eller normal user
           Derfor vises admin siden ligegyldig hvilken type bruger der er logget ind

Fejl:
- Ignorer denne i starten / appen virker på trods af fejlen:
  Require cycle: src\Navigations\BottomNav.js -> src\Navigations\StackNav.js -> src\Screens\HomeScreen.js -> src\Components\Fashion.js ->   src\Navigations\BottomNav.js

  Fejlen kommer pga. den måde vi importerer komponenterne i hinanden og skaber en forkert afhængighed.
  Læs mere om fejlen her: https://stackoverflow.com/questions/55664673/require-cycles-are-allowed-but-can-result-in-uninitialized-values-consider-ref 

