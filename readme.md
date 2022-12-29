Kør koden: npm start

Login: 
- mail: fiejn@gmail.com
- kode: gurhug

Fejl:
- Ignorer denne i starten: Require cycle: src\Navigations\BottomNav.js -> src\Navigations\StackNav.js -> src\Screens\HomeScreen.js -> src\Components\Fashion.js -> src\Navigations\BottomNav.js
- i SingleCouponScreen: alert kommer frem når klikker på kuponen udenfor og ikke når man går ind og klikker på Get discount, som ellers er der, alerten er defineret.
- Header.js: her skal billedet alignes/husteres til at være ved siden af Velkommen, oppe i højre hjørne af appen
- Firebase: Får denne fejl i RegisterScreen: 
'Warning: Can’t perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.'
    - Aner ikke hvorfor den lige pludselig er kommet. Man kan ikke lave ny bruger. Men min gamle bruger kan stadig logge ind. (fiejn@gmail.com) 

Forbedringer:
- alt design. skal desuden være ensartet alle vegne (samme font, samme farvesæt osv)
- Mangler admin-sidens dynamiske statiske
- nogle gange vises Header ikke korrekt på Hjem-siden. Den siger Not found, fordi den ikke kan finde brugeren, mens den virker fint på andre sider. Så opdaterer man, og så virker det. Underligt. 
- Mangler tilbage-knapper og Header på mange sider, herunder Register-siden, SingleCoupon-siden osv. 

