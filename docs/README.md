# Progress

The initial Game, Map and Player components have been created. There is no interaction or movement just yet.

Rudimentary code was added to have the player follow the mouse. A very important discovery was made... Once the mouse stops moving the player also stops moving. Initially that seemed the idea. However the player will also stop moving if the mouse cursor is nowhere near the player.
So in order to keep moving the player object the mouse also has to move.

This means we need a different way of handling movement. Thinking of all the things we want to add in later stages it comes to mind we actually need something of a [https://developer.mozilla.org/en-US/docs/Games/Anatomy](game loop).

So I will be adding that next.