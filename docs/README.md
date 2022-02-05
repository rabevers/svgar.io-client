# Progress

The initial Game, Map and Player components have been created. There is no interaction or movement just yet.

Rudimentary code was added to have the player follow the mouse. A very important discovery was made... Once the mouse stops moving the player also stops moving. Initially that seemed the idea. However the player will also stop moving if the mouse cursor is nowhere near the player.
So in order to keep moving the player object the mouse also has to move.

This means we need a different way of handling movement. Thinking of all the things we want to add in later stages it comes to mind we actually need something of a [game loop](https://developer.mozilla.org/en-US/docs/Games/Anatomy).

So I will be adding that next.

After looking at some other games it seems like a good idea to keep the game state in a central place. This means the Player component or object no longer has its own movement code. Instead it only has its own attributes like x and y positions and mass.

The game itself will use a store with the relevant information to create the appropriate player element.

For now the player is able to move but the movement is not fluent and the payer will not center on the mouse cursor. I need to do some more math for that. But first I would like the "game" to be a little more workable.