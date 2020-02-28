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
::
|%
+$  card  card:agent:gall
--
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
  ++  on-poke
    |=  [=mark =vase]
    ^-  (quip card _this)
    ?>  (team:title our.bol src.bol)
    ?+    mark  (on-poke:def mark vase)
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
    ?.  =(/primary path)
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
