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

+$  example-action
  $%  [%create contract=@t]
      [%add-contract contract=@t]
      [%remove-contract contract=@t]
      [%delete =ship]
  ==

+$  versioned-state
  $%  state-zero
  ==
+$  state-zero  [%0 ship=@p contract=@t contracts=(set @t)]
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
        (poke-action-name:cc !<(json vase))
::        (poke-json:cc !<(json vase))
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
++  json-to-action
  |=  jon=json
  ^-  example-action
  =,  dejs:format
  =<  (parse-json jon)
  |%
  ++  parse-json
    %-  of
    :~  [%create parse-contract]
        [%add-contract parse-contract]
        [%remove-contract parse-contract]
        [%delete delete]
    ==
::
  ++  parse-contract
    (ot contract+so ~)
::
  ++  delete
    (ot [%ship (su ;~(pfix sig fed:ag))]~)
  --
::
++  poke-action-name
  |=  jon=json
  ^-  (quip card _state)
  (poke-action (json-to-action jon))
::
++  poke-action
  |=  action=example-action
  ^-  (quip card _state)
  ~&  'poke-action'
  ?-  -.action
      %create    (handle-create action)
      %add-contract  (handle-add-contract action)
      %remove-contract  (handle-remove-contract action)
      %delete    (handle-delete action)
  ==
::
++  handle-create
  |=  act=example-action
  ^-  (quip card _state)
  ~&  'handle-create'
  ~&  act
  ?>  ?=(%create -.act)
  =/  new-state  state(contract contract.act)
  ~&  'new state'
  ~&  new-state
  :-  [%give %fact `/state/update %json !>((make-tile-json new-state))]~
  new-state
::
++  handle-add-contract
  |=  act=example-action
  ^-  (quip card _state)
  ~&  'handle-create'
  ~&  act
  ?>  ?=(%add-contract -.act)
  =/  new-state  state(contracts (~(put in contracts.state) contract.act))
  ~&  'new state'
  ~&  new-state
  :-  [%give %fact `/state/update %json !>((make-tile-json new-state))]~
  new-state
::
++  handle-remove-contract
  |=  act=example-action
  ^-  (quip card _state)
  ~&  'handle-remove-contract'
  ~&  act
  ?>  ?=(%remove-contract -.act)
  =/  new-state  state(contracts (~(del in contracts.state) contract.act))
  ~&  'new state'
  ~&  new-state
  :-  [%give %fact `/state/update %json !>((make-tile-json new-state))]~
  new-state
::
++  handle-delete
  |=  act=example-action
  ^-  (quip card _state)
  ~&  'handle-delete'
  ~&  act
  ?>  ?=(%delete -.act)
  =/  new-state
    %=  state
      ship  ship.act
      contract  ''
    ==
  ~&  'new state'
  ~&  new-state
  :-  [%give %fact `/state/update %json !>((make-tile-json new-state))]~
  new-state
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
  :-  [%give %fact `/state/update %json !>((make-tile-json state))]~ 
  %=  state
    ship  ship
    contract  contract-sample
  ==
::  state(ship ship)]
++  make-tile-json
  |=  new-state=_state
  ^-  json
  =,  enjs:format
  =/  contracts-list  ~(tap in contracts.state)
  %-  pairs
  :~  [%contract (tape (trip contract.new-state))]
      [%contracts `json`a+(turn `wain`contracts-list |=(=cord s+cord))]
      [%shipa2 (ship ship.new-state)]
  ==
++  set-to-array
  |*  {a/(set) b/$-(* json)}
  ^-  json
  [%a (turn ~(tap in a) b)]
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
