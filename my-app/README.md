Mongoose/MongoDb table setup sudo code

first table "Users" contains username and password:md5 and pic

second table "Watched" contains connection to "User" at user id and seen movies/shows by omdb id

third table "ToWatch" contains connection to "User" at user id and movies/shows they want to watch by omdb id

forth table "Reviews" contains connection to "User" at user id and movie/show by omdb id and review title and review, and recommendation optional
changed to be mongoose one instead of sql style