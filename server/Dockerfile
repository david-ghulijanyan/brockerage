# Use the official PHP image with Apache
FROM php:8.3-apache

# Set working directory
WORKDIR /var/www/html

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN echo '<IfModule mod_headers.c>\n\
    Header set Access-Control-Allow-Origin "*"\n\
    Header set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"\n\
    Header set Access-Control-Allow-Headers "Content-Type, Accept, Authorization, X-Requested-With"\n\
    </IfModule>' > /etc/apache2/conf-available/cors.conf

# Enable Apache mod_rewrite
RUN a2enmod rewrite
RUN a2enconf cors
# Copy existing application directory contents to the working directory
COPY ./server/ .

# TODO: tmp solution
COPY ./server/.env.example ./.env

# Copy the .env file(s)
# RUN echo "APP_NAME=$APP_NAME" >> .env
# RUN echo "APP_ENV=$APP_ENV" >> .env
# RUN echo "APP_KEY=$APP_KEY" >> .env
# RUN echo "APP_DEBUG=$APP_DEBUG" >> .env
# RUN echo "APP_TIMEZONE=$APP_TIMEZONE" >> .env
# RUN echo "APP_URL=$APP_URL" >> .env
# RUN echo "APP_LOCALE=$APP_LOCALE" >> .env
# RUN echo "APP_FALLBACK_LOCALE=$APP_FALLBACK_LOCALE" >> .env
# RUN echo "APP_FAKER_LOCALE=$APP_FAKER_LOCALE" >> .env
# RUN echo "APP_MAINTENANCE_DRIVER=$APP_MAINTENANCE_DRIVER" >> .env
# RUN echo "APP_MAINTENANCE_STORE=$APP_MAINTENANCE_STORE" >> .env
# RUN echo "BCRYPT_ROUNDS=$BCRYPT_ROUNDS" >> .env
# RUN echo "LOG_CHANNEL=$LOG_CHANNEL" >> .env
# RUN echo "LOG_STACK=$LOG_STACK" >> .env
# RUN echo "LOG_DEPRECATIONS_CHANNEL=$LOG_DEPRECATIONS_CHANNEL" >> .env
# RUN echo "LOG_LEVEL=$LOG_LEVEL" >> .env
# RUN echo "DB_CONNECTION=$DB_CONNECTION" >> .env
# RUN echo "DB_HOST=$DB_HOST" >> .env
# RUN echo "DB_PORT=$DB_PORT" >> .env
# RUN echo "DB_DATABASE=$DB_DATABASE" >> .env
# RUN echo "DB_USERNAME=$DB_USERNAME" >> .env
# RUN echo "DB_PASSWORD=$DB_PASSWORD" >> .env
# RUN echo "SESSION_DRIVER=$SESSION_DRIVER" >> .env
# RUN echo "SESSION_LIFETIME=$SESSION_LIFETIME" >> .env
# RUN echo "SESSION_ENCRYPT=$SESSION_ENCRYPT" >> .env
# RUN echo "SESSION_PATH=$SESSION_PATH" >> .env
# RUN echo "SESSION_DOMAIN=$SESSION_DOMAIN" >> .env
# RUN echo "BROADCAST_CONNECTION=$BROADCAST_CONNECTION" >> .env
# RUN echo "FILESYSTEM_DISK=$FILESYSTEM_DISK" >> .env
# RUN echo "QUEUE_CONNECTION=$QUEUE_CONNECTION" >> .env
# RUN echo "CACHE_STORE=$CACHE_STORE" >> .env
# RUN echo "CACHE_PREFIX=$CACHE_PREFIX" >> .env
# RUN echo "MEMCACHED_HOST=$MEMCACHED_HOST" >> .env
# RUN echo "REDIS_CLIENT=$REDIS_CLIENT" >> .env
# RUN echo "REDIS_HOST=$REDIS_HOST" >> .env
# RUN echo "REDIS_PASSWORD=$REDIS_PASSWORD" >> .env
# RUN echo "REDIS_PORT=$REDIS_PORT" >> .env
# RUN echo "MAIL_MAILER=$MAIL_MAILER" >> .env
# RUN echo "MAIL_HOST=$MAIL_HOST" >> .env
# RUN echo "MAIL_PORT=$MAIL_PORT" >> .env
# RUN echo "MAIL_USERNAME=$MAIL_USERNAME" >> .env
# RUN echo "MAIL_PASSWORD=$MAIL_PASSWORD" >> .env
# RUN echo "MAIL_ENCRYPTION=$MAIL_ENCRYPTION" >> .env
# RUN echo "MAIL_FROM_ADDRESS=$MAIL_FROM_ADDRESS" >> .env
# RUN echo "MAIL_FROM_NAME=$MAIL_FROM_NAME" >> .env
# RUN echo "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" >> .env
# RUN echo "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY" >> .env
# RUN echo "AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION" >> .env
# RUN echo "AWS_BUCKET=$AWS_BUCKET" >> .env
# RUN echo "AWS_USE_PATH_STYLE_ENDPOINT=$AWS_USE_PATH_STYLE_ENDPOINT" >> .env
# RUN echo "VITE_APP_NAME=$VITE_APP_NAME" >> .env

# Install project dependencies
RUN composer install

# Change ownership of our applications
RUN chown -R www-data:www-data /var/www/html

# Expose port 8000 and start apache server
EXPOSE 8000

CMD ["apache2-foreground"]
