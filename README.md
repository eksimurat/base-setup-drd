# SETUP OF / REACT - DJANGO - DOCKER \

Base setup of a dockerized web app using Django REST APIs and ReactJS.
Both Django and React containers support hot reloading. Just save your file and it will reflect the change.

## Soon to be implemented

Nginx is going to be used for the deployment build.

## Good To Know Scripts

### `docker-compose up --build`
Whenever you feel like rebuilding the images, just run this

### `docker-compose up`
You can continue working by running this without rebuilding anything

### `docker-compose down`
You can stop your work enviroment by running this. Everything will be stopped.

## Release History
* 0.0.4
    * First proper connection between the two containers using the Django Rest Framework and axios
    * Standarized stable configuration of the Docker files
* 0.0.3
    * Initial Setup of React and Node.js Development Server
* 0.0.2
    * Initial Setup of Django and Docker files
* 0.0.1
    * Initial Enviroment Setup

## Contributing

1. Fork it (<https://github.com/murikarox/base-setup-drd.git/fork>)
2. Create your feature branch (`git checkout -b feature/something`)
3. Commit your changes (`git commit -am 'Added Something`)
4. Push to the branch (`git push origin feature/something`)
5. Create a new Pull Request

## Maintainers

Murat Eksi – info@murateksi.com

## License
[MIT](https://choosealicense.com/licenses/mit/)
