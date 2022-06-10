|%
+$  id  @
+$  pic  @t :: TODO multiple pics per post (list @t)
+$  desc  @t
+$  post  [=id =pic =desc] :: TODO: add ship author to post
+$  feed  (list post)
+$  action
  $%  [%add =post]
      [%edit =post]
      [%del =id]
      [%follow who=@p]
      [%unfollow who=@p]
  ==
+$  book  ((mop id post) gth)
:: +$  feed-map  ((mop @p ))
--
