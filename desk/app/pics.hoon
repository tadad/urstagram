/-  *pics
/+  default-agent, dbug, agentio
|%
+$  versioned-state
    $%  state-0
    ==
+$  state-0
  $:  %0
      =book
      :: raw-feed=book
  ==
+$  card  card:agent:gall
++  b-orm  ((on id post) gth)
--
%-  agent:dbug
=|  state-0
=*  state  -
=<
^-  agent:gall
|_  =bowl:gall
+*  this  .
    def   ~(. (default-agent this %|) bowl)
    hc    ~(. +> bowl)
++  on-init  on-init:def
  :: could subscribe you to all your pals automatically...
++  on-save
  ^-  vase
  !>(state)
::
++  on-load
  |=  old-vase=vase
  ^-  (quip card _this)
  `this(state !<(versioned-state old-vase))
::
++  on-poke
  |=  [=mark =vase]
  ^-  (quip card _this)
  ?+    mark  (on-poke:def mark vase)
      :: for testing only
      %noun
    ?+    q.vase  (on-poke:def mark vase)
        %print-state
      ~&  >>  state
      ~&  >>>  bowl  `this
    ==
    ::
      %pics-action
      =^  cards  state
      (handle-action:hc !<(action vase))
      [cards this]
  ==
::
++  on-watch
  |=  =path
  ^-  (quip card _this)
  ?+    path  (on-watch:def path)
      [%posts ~]  ::  do nothing 
    `this
  ==
::
++  on-peek
  |=  =path
  ^-  (unit (unit cage))
  ?+    path  (on-peek:def path)
    ::
      [%x %all ~]
    :^  ~  ~  %pics-feed
    !>  ^-  feed  (turn (tap:b-orm book) |=(l=[key=id val=post] +:l))
    ::
      [%x %post @ ~]
    =/  post-id=@  (rash &3:path dem) :: @ta => @ conversion
    :^  ~  ~  %pics-post
    !>  ^-  post  +:(get:b-orm book post-id)
  ==
++  on-leave  on-leave:def
++  on-agent
  |=    [=wire =sign:agent:gall]
  ^-  (quip card _this)
  ?+    wire  (on-agent:def wire sign)
      [%subs ~]
    ?+    -.sign  (on-agent:def wire sign)
        [%fact]
      ?+    p.cage.sign  (on-agent:def wire sign)
          [%pics-post]
        ~&  q.cage.sign
        =/  new  !<(post q.cage.sign)
        ::  put into raw feed
        ::  =.  raw-feed.state.this  (put:b-orm raw-feed id.new new)
        `this
      ==
    ==
  ==
++  on-arvo   on-arvo:def
++  on-fail   on-fail:def
--
::  start helper core
|_  bowl=bowl:gall
++  handle-action
  |=  =action
  ^-  (quip card _state)
  ?-    -.action
      %add
    ?<  (has:b-orm book id.post.action)
    =.  book.state  (put:b-orm book id.post.action post.action)
    :_  state
    :~  [%give %fact ~[/posts] %pics-post !>(post.action)]
    ==
    ::
      %edit
    ?>  (has:b-orm book id.post.action)
    =/  old-post  (get:b-orm book id.post.action)
    =.  book.state  (put:b-orm book id.post.action [id.post.action +>+:old-post desc.post.action])
    `state
    ::
      %del
    ?>  (has:b-orm book id.action)
    =.  book.state  +:(del:b-orm book id.action)
    `state
    ::
      %follow
    :_  state
    :~  [%pass /subs %agent [who.action %pics] %watch /posts]
    ==
    ::
      %unfollow
    :_  state
    :~  [%pass /subs %agent [who.action %pics] %leave ~]
    ==
  ==
--