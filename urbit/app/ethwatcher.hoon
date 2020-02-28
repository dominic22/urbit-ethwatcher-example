/+  *server, default-agent
/=  index
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/ethwatcher/index
  /|  /html/
      /~  ~
  ==
/=  tile-js
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/ethwatcher/js/tile
  /|  /js/
      /~  ~
  ==
/=  script
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/ethwatcher/js/index
  /|  /js/
      /~  ~
  ==
/=  style
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/ethwatcher/css/index
  /|  /css/
      /~  ~
  ==
/=  ethwatcher-png
  /^  (map knot @)
  /:  /===/app/ethwatcher/img  /_  /png/
::
|%
+$  card  card:agent:gall
--
^-  agent:gall
=<
  |_  bol=bowl:gall
  +*  this       .
      ethwatcher-core  +>
      cc         ~(. ethwatcher-core bol)
      def        ~(. (default-agent this %|) bol)
  ::
  ++  on-init
    ^-  (quip card _this)
    =/  launcha  [%launch-action !>([%ethwatcher / '/~ethwatcher/js/tile.js'])]
    :_  this
    :~  [%pass /ethwatcher %agent [our.bol %ethwatcher] %watch /ethwatcher]
        [%pass / %arvo %e %connect [~ /'~ethwatcher'] %ethwatcher]
        [%pass /ethwatcher %agent [our.bol %launch] %poke launcha]
    ==
  ++  on-poke
    |=  [=mark =vase]
    ^-  (quip card _this)
    ?>  (team:title our.bol src.bol)
    ?+    mark  (on-poke:def mark vase)
        %json
      (poke-json:cc !<(json vase))
        %handle-http-request
      =+  !<([eyre-id=@ta =inbound-request:eyre] vase)
      :_  this
      %+  give-simple-payload:app  eyre-id
      %+  require-authorization:app  inbound-request
      poke-handle-http-request:cc
    ::
    ==
  ::
  ++  on-watch
    |=  =path
    ^-  (quip card:agent:gall _this)
    ?:  ?=([%http-response *] path)
      `this
    ?.  =(/ path)
      (on-watch:def path)
    [[%give %fact ~ %json !>(*json)]~ this]
  ::
  ++  on-agent  on-agent:def
  ::
  ++  on-arvo   
    |=  [=wire =sign-arvo]
    ^-  (quip card _this)
    ?.  ?=(%bound +<.sign-arvo)
      (on-arvo:def wire sign-arvo)
    [~ this]
  ::
  ++  on-save  on-save:def
  ++  on-load  on-load:def
  ++  on-leave  on-leave:def
  ++  on-peek   on-peek:def
  ++  on-fail   on-fail:def
  --
::
::
|_  bol=bowl:gall
::
++  send-status-diff
  |=  msg=tape
  ~&  msg
  %-  pairs:enjs:format  :~
    [%status `json`s+(crip msg)]
::
++  poke-json
  |=  jon=json
  ^-  (quip move _this)
  ~&  'poke-json in testing called'
  ~&  jon
  =/  json-map    ((om:dejs:format same) jon) ::combine a named and/or typed noun with the subject
  =/  ship-to-hi  (so:dejs:format (~(got by json-map) %ship)) ::combine a named and/or typed noun with the subject
  ~&  ship-to-hi
  =/  sthu  (need (slaw %p ship-to-hi)) ::combine a named and/or typed noun with the subject
  :_  this
  %+  weld
    (send-status-diff "looking")
  ^-  (list move) ::typecast by mold
  :~
    :-  ost.bol
    :^  %poke
        /helm/hi/[ship-to-hi]
      [sthu %hood]
    [%helm-hi '']
  ==
::
++  poke-handle-http-request
  |=  =inbound-request:eyre
  ^-  simple-payload:http
  =+  url=(parse-request-line url.request.inbound-request)
  ?+  site.url  not-found:gen
      [%'~ethwatcher' %css %index ~]  (css-response:gen style)
      [%'~ethwatcher' %js %tile ~]    (js-response:gen tile-js)
      [%'~ethwatcher' %js %index ~]   (js-response:gen script)
  ::
      [%'~ethwatcher' %img @t *]
    =/  name=@t  i.t.t.site.url
    =/  img  (~(get by ethwatcher-png) name)
    ?~  img
      not-found:gen
    (png-response:gen (as-octs:mimes:html u.img))
  ::
      [%'~ethwatcher' *]  (html-response:gen index)
  ==
::
--