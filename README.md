# Global Earthquakes

A react app to visualize global earthquakes on a map in different time periods, using filtering capabilities, and provide metadata for each earthquake.

## Run the app via docker

Without app refreshing on dev changes

1. Build the app using the app name and the current version, f.i

```
docker build . -t "global-earthquakes:v4.2.1"
```

2. Run react using the image using the app name and the current version, f.i

```
docker run -d -p 5173:5173 global-earthquakes:v4.2.1
```

returns the id of the running container

3. Stop the running container

```
docker stop container_id
```

With app refreshing on dev changes

1. Get the app running, on root folder run

```
docker compose up
```

2. Stop the app from running

```
docker compose down

```

if you make any changes to dockerfile

Rebuild

```
docker compose build --no-cache

```

and then again

```
docker compose up -d

```
