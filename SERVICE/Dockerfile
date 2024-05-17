FROM httpd:2.4-alpine

RUN mkdir -p /usr/local/apache2/conf/middleware

COPY ./apache.conf /usr/local/apache2/conf/middleware/apache.conf

COPY ./modules.conf /usr/local/apache2/conf/middleware/modules.conf

# Include the load_modules configuration
RUN echo "IncludeOptional conf/middleware/apache.conf" >> /usr/local/apache2/conf/httpd.conf
RUN echo "IncludeOptional conf/middleware/modules.conf" >> /usr/local/apache2/conf/httpd.conf



CMD [ "httpd-foreground" ]
