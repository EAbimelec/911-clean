FROM nginx:stable-alpine

#Copy the build page to the container
COPY  dist /usr/share/nginx/html

