/+  *server, default-agent
/=  index
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/exampleapp/index
  /|  /html/
      /~  ~
  ==
/=  tile-js
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/exampleapp/js/tile
  /|  /js/
      /~  ~
  ==
/=  script
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/exampleapp/js/index
  /|  /js/
      /~  ~
  ==
/=  style
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/exampleapp/css/index
  /|  /css/
      /~  ~
  ==
/=  exampleapp-png
  /^  (map knot @)
  /:  /===/app/exampleapp/img  /_  /png/
=,  format
::
|%
+$  card  card:agent:gall
+$  versioned-state
  $%  state-zero
  ==
+$  state-zero  [%0 data=json ship=@p contract=@t]
--
=|  state-zero
=*  state  -
^-  agent:gall
=<
  |_  bol=bowl:gall
  +*  this       .
      exampleapp-core  +>
      cc         ~(. exampleapp-core bol)
      def        ~(. (default-agent this %|) bol)
  ::
  ++  on-init
    ^-  (quip card _this)
    =/  launcha  [%launch-action !>([%exampleapp / '/~exampleapp/js/tile.js'])]
    :_  this
    :~  [%pass /exampleapp %agent [our.bol %exampleapp] %watch /exampleapp]
        [%pass / %arvo %e %connect [~ /'~exampleapp'] %exampleapp]
        [%pass /exampleapp %agent [our.bol %launch] %poke launcha]
    ==
::
  ++  on-agent  on-agent:def
  ::
  ++  on-arvo
    |=  [=wire =sign-arvo]
    ^-  (quip card _this)
    ?.  ?=(%bound +<.sign-arvo)
      (on-arvo:def wire sign-arvo)
    [~ this]
::  ++  on-save  !>(state)
  ++  on-save  !>(state)
  ++  on-load
    |=  old=vase
   `this(state !<(state-zero old))
::
  ++  on-poke
    |=  [=mark =vase]
    ^-  (quip card _this)
    ?>  (team:title our.bol src.bol)
    =^  cards  state
      ?+    mark  (on-poke:def mark vase)
          %json
        (poke-json:cc !<(json vase))
          %handle-http-request
        =+  !<([eyre-id=@ta =inbound-request:eyre] vase)
        :: construct a cell but inverted => [card state]
        ^-  (quip card _state)
        :_  state
        %+  give-simple-payload:app  eyre-id
        %+  require-authorization:app  inbound-request
        poke-handle-http-request:cc
      ==
    [cards this]
::
  ++  on-watch
    |=  =path
    ^-  (quip card _this)
    ~&  'on-watch'
    ?:  ?=([%http-response *] path)
      `this
    ?:  =(/primary path)
      [[%give %fact ~ %json !>(*json)]~ this]
    ?:  =(/state/update path)
      [[%give %fact ~ %json !>(*json)]~ this]
    (on-watch:def path)
    
  ::
  ++  on-leave  on-leave:def
  ++  on-peek   on-peek:def
  ++  on-fail   on-fail:def
  --
::
|_  bol=bowl:gall
::
++  poke-json
  |=  jon=json
  ^-  (quip card _state)
  ~&  'poke-json called'
  ~&  jon
  =/  json-map    ((om:dejs:format same) jon)
  =/  ship-to-hi  (so:dejs:format (~(got by json-map) %ship))
  =/  ship  (need (slaw %p ship-to-hi))
  ~&  ship
  =/  contract-sample  (so:dejs:format (~(got by json-map) %contract))
::  =/  contract  (need (slaw %t contract-sample))
  ~&  `@ux`(rash contract-sample hex)
  ~&  'previous ship state:'
  ~&  state
::  [~ state(ship ship)]
::  [[%give %fact `/state/update %json !>(jon)]~ state(ship ship)]
  :-  [%give %fact `/state/update %json !>(make-tile-json)]~ 
  %=  state
    ship  ship
    contract  contract-sample
  ==
::  state(ship ship)]
++  make-tile-json
  ^-  json
  =,  enjs:format
  %-  pairs
  :~  [%contract (tape (trip contract.state))]
      [%shipaa (ship ship.state)]
  ==
::
++  poke-handle-http-request
  |=  =inbound-request:eyre
  ^-  simple-payload:http
  =+  url=(parse-request-line url.request.inbound-request)
  ?+  site.url  not-found:gen
      [%'~exampleapp' %css %index ~]  (css-response:gen style)
      [%'~exampleapp' %js %tile ~]    (js-response:gen tile-js)
      [%'~exampleapp' %js %index ~]   (js-response:gen script)
  ::
      [%'~exampleapp' %img @t *]
    =/  name=@t  i.t.t.site.url
    =/  img  (~(get by exampleapp-png) name)
    ?~  img
      not-found:gen
    (png-response:gen (as-octs:mimes:html u.img))
  ::
      [%'~exampleapp' *]  (html-response:gen index)
  ==
::
--
