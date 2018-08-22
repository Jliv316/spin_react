SPIN App

Summary:
Spin is an web app that leverages the google location api, spotify api, and spotify web playback sdk, to generate 
dynamic playlists based on a user's location.

Upon logging to Spin(HearIt) using through spotify's oath process, the application grabs all user tracks and playlists, along with their geolocation data (much more accurate if accessing mobily). Upon collecting this data, the application searches and notes all users within a 50ft radius of the current user. The app then generates a playlist for all users in that area by cross referencing top tracks for each user.

While currently a web app, spin will be deployed mobiling this september.

Future:
create an application that dynamically changes the mood or feel of a room by the people that are in it. If Joe walks into a restaurant or dinner party, Joe's tracks will be added to the pool of potential tracks to play from. If enough people have similar tracks, these similar tracks are added to the master playlist.

By tracking mood or taste or environment by through music location data, we can get a sense of what the area is like, or music venue, etc.



How to run in development:

clone down the rails api: $ git clone https://github.com/Jliv316/spin.git
clone down this repo (react client): $ git clone https://github.com/Jliv316/spin_react.git

spin up rails api locally: $ rails s -p 3166 
spin up react app: $ npm start

ENJOY GEODYNAMIC MUSIC!!

