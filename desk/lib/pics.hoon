/-  *pics
|%
++  dejs-action
  =,  dejs:format
  |=  =json
  ^-  action
  %.  json
  %-  of
  :~  [%add (ot ~[id+ni pic+so desc+so])]
      [%edit (ot ~[id+ni pic+so desc+so])]
      [%del (ot ~[id+ni])]
  ==
++  enjs-post
  =,  enjs:format
  |=  pos=post
  ^-  json
  %-  pairs
  :~  ['id' (numb id.pos)]
      ['pic' s+pic.pos]
      ['desc' s+desc.pos]
  ==
++  enjs-feed
  =,  enjs:format
  |=  fee=feed
  ^-  json
  %-  pairs
  :~
    ['feed' a+(turn fee enjs-post)]
  ==
--