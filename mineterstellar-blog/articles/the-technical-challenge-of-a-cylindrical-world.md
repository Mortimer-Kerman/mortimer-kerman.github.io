# The technical challenge of a cylindrical world
*December 30, 2024*

Howdy!

Sorry for the long wait.\
During the last two months, I was busy with exams, Christmas, and my collaboration with [Clouser](https://youtube.com/@C1OUS3R) (non-related to Mineterstellar, so you won't get news about it here)

I've also been really busy with the Ranger development, so maybe you'll get a sneak peak in a few weeks!

For the moment, I'd like to talk about something I've been working on for a few weeks.

<img width=500 src="articles/the-technical-challenge-of-a-cylindrical-world/view.jpg"/>

Cooper Station!

Creating this station required a lot of work, and will require a lot more to get a pleasant experience.


## Visual tricks

Firstly, this appearance is only the result of a visual trick.

To ensure compatibility with other shaders, the trick works by modifying the geometry data given to any core shader present, and calling a shader method to rearrange the position based on x coordinates, to get a new position wrapped around a circle.

<img width=500 src="articles/the-technical-challenge-of-a-cylindrical-world/unfolded.jpg"/>\
*a half-folded world*

This behaviour also affects entities, and since their movements are not modified, it looks like arrows don't go straight anymore!

<img width=500 src="articles/the-technical-challenge-of-a-cylindrical-world/bow.gif"/>


## Beyond what the eye can see

Now, there are visual issues.

In fact, to allow the game to run faster, Minecraft applies *culling* to every chunk and entity not visible by the camera. This means that everything outside of the fov is not rendered at all.\
This works well in a flat world, but if stuff that is behind you in the flat world gets in front of you once the shader is applied, it's not displayed.

There are two solutions to this issue:

- ### Disable the culling
This method is really easy to implement. However, it can drastically slow down the game, especially on low end computers.\
It was used for the tests, but I need another method, more robust:

- ### Adapt the culling to a circular world
Once implemented, this method could allow the culling to stay enabled without getting visual glitches.\
However, this method turned out to be very hard to implement, and I'm still working on it.

## Edges

This world looks circular, but it's really not. This creates two issues along the edges.

- ### Horizontal edges

<img width=500 src="articles/the-technical-challenge-of-a-cylindrical-world/limits.jpg"/>

When you go too far in one direction, since there are no longer physical blocks under your feet, you just fall in the void.

The easy solution to this issue is to teleport entities when they go beyond the edge on the other side, but this still poses some problems. Firstly, a player can't interact with the other side without crossing this immaterial barrier. Secondly, pathfinding AIs, leads, interactions, and chunk loading priorities makes that when loading and updating the world, the communication between both sides is not smooth at all.\
All of these problems will have to be treated separately in the future.

- ### Vertical edges

<img width=500 src="articles/the-technical-challenge-of-a-cylindrical-world/near_center.jpg"/>

When getting near the center, the geometry slowly breaks down due to the perspective.
This means that it's impossible to build actual buildings near the center or to get a shot like in the movie where a baseball ball is thrown from one side of the station to the other one, because such a projectile would have its geometry be flipped, and players on the other side would only see a ghost, reversed ball fly straight through the ground.

To the first issue, the solution may be polygons.

Instead of having a perfectly circular station, it could be an option to have an almost regular polygon.\
It could alternate short lines for streets and long lines for buildings, and these flat surfaces would minimize the deformation when getting near the center - as long as two neighbour buildings do not intersect near the center.

<img width=300 src="articles/the-technical-challenge-of-a-cylindrical-world/polygon.jpg"/>\
*This example has only a few faces, but in a big cylinder with more faces, transition between faces could become very smooth.*

To the second issue, the only viable option would be to mess with how entities move to curve their trajectory when they get near the center to put them at the right position, orientation and velocity to make them actually fall back to the ground on the other side.

## What's next?

<img width=500 src="articles/the-technical-challenge-of-a-cylindrical-world/outside.jpg"/>

If done succesfully, this station could then be populated with a lot of buildings and fields to recreate the station from the movie!

<img width=500 src="articles/the-technical-challenge-of-a-cylindrical-world/visit.gif"/>

See ya later!
